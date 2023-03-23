import { Container, Profile, Brand, Logout, Content} from "./styles";
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


export function Header({children}) {
  const { signOut, user } = useAuth();

  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Content>
        <Brand href="/">
          <h1>RocketMovies</h1>
        </Brand>

        { children }

        <Profile>
          <div>
            <Link to="/profile" >{user.name}</Link>

            <Logout onClick={handleSignOut}>
              Sair
            </Logout>
          </div>
          <Link to="/profile">
            <img src={avatarUrl} alt={`Foto de ${user.name}`} />
          </Link>
        </Profile>
      </Content>
    </Container>
  )
};
