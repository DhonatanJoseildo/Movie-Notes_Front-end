import { Container, Content, Cards, Search} from "./styles";
import { FiPlus, FiSearch } from 'react-icons/fi';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Movie } from '../../components/Movie';
import { Link } from 'react-router-dom';
import { api } from "../../services/api";


export function Home() {
  const [search, setSearch] = useState([]);
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();


  function handleDetails(id) {
    navigate(`/details/${id}`)
  }


  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes?title=${search}`);
      setMovies(response.data);
    }

    fetchMovie();
  }, [search]);

  return(
    <Container>
      <Header>
        <Search>
          <Input 
          placeholder="Pesquisar pelo título" 
          icon={FiSearch} 
          onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
      </Header>

      
      <Content>
        <Section title="Meus filmes">
          
          <Link to="/new">
            <FiPlus />
            Adicionar filme
          </Link>
          <Cards>
            {
              movies.map(movie => (
                <Movie 
                  key={String(movie.id)}
                  data={movie}
                  onClick={() => handleDetails(movie.id)}
                />
              ))
            }

          </Cards>
        </Section>
      </Content>

    </Container>
  )
}