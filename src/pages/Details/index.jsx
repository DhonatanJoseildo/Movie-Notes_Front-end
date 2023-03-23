import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Container, Content, TopHeader, Author } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { FiClock } from 'react-icons/fi';
import { ButtonReturn } from '../../components/ButtonReturn';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Details() {

  const [data, setData] = useState(null);
  const { user } = useAuth();

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return(
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <ButtonReturn 
              title="Voltar"
              onClick={handleBack}
            />

            <TopHeader>
              <h1>{data.title}</h1>

              <span>
                <img src="/src/assets/Liked.svg" alt="Percentage" />
                {data.rating.toFixed(1)}
              </span>
            </TopHeader>

            <Author>
              <span>
              <img 
              src={avatarUrl} 
              alt={`Foto de ${user.name}`} />
                {user.name}
              </span>

              <span>
                <FiClock />
                {data.created_at}
              </span>
            </Author>

            {
              data.movie_tags &&
              <Section title="Marcadores">
                {
                  data.movie_tags.map(tag => (
                    <Tag 
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }
            <p>
              {data.description}
            </p>
          </Content>
        </main>
      }
    </Container>
  )
}