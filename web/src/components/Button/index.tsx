import { Container } from './style'

interface ButtonProps {
  title: string
  loading: boolean
}

export function Button({ title, loading = false, ...rest }: ButtonProps) {
  return (
    <Container type="submit" disabled={loading} {...rest}>
      {loading ? 'carregando...' : title}
    </Container>
  )
}
