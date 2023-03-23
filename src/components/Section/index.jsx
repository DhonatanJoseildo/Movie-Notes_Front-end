import { Container, Content} from "./styles";

export function Section({ title, children }) {
  return (
    <Container>
      <Content>
        <h2>{ title }</h2>
      </Content>
      { children }
    </Container>
  )
}