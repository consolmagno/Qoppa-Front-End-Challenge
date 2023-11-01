import { Container, Background } from './style'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <Container>
      <div className="text">
        <h1>Seja Bem-Vindo</h1>
        <p>Desafio Realizado dia 31/10/2023</p>
        <Link to="/">Sair</Link>
      </div>
      <Background />
    </Container>
  )
}
