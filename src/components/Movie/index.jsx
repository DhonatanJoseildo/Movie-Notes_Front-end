import { Container } from './styles';
import { Tag } from '../Tag';

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
        <img src=".\src\assets\Liked.svg" alt="Liked percentage" />
        <p>{data.description}</p>
        
        {
          data.tags &&
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
            }
          </footer>
        }
    </Container>
  );
}