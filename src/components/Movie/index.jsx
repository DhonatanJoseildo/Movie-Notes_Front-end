import { Container, Rating } from './styles';
import { Tag } from '../Tag';

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

        <Rating>
          <img src=".\src\assets\Liked.svg" alt="Liked percentage" />
          {data.rating.toFixed(1)}
        </Rating>

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