import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Container, Background, Content, InputWrapper } from './style'

import { Button } from '../../components/Button'

import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import logoSvg from '../../assets/logo.svg'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'

const userSignUpFormSchema = z.object({
  username: z
    .string()
    .nonempty('O campo de nome é obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  email: z
    .string()
    .nonempty('O campo de e-mail é obrigatório')
    .email('E-mail inválido')
    .toLowerCase(),
  password: z
    .string()
    .nonempty('O campo de senha é obrigatório')
    .min(6, 'A senha necessita conter no mínimo 6 caracteres'),
})

type userSignUpFormData = z.infer<typeof userSignUpFormSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userSignUpFormData>({
    resolver: zodResolver(userSignUpFormSchema),
  })

  const navigate = useNavigate()

  function userSignUp(data: userSignUpFormData) {
    api
      .post(
        '/singUp',
        {
          username: data.username,
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/home')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar')
        }
      })
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoSvg} alt="" />
        <h2>Faça seu Cadastro</h2>
        <form onSubmit={handleSubmit(userSignUp)}>
          <InputWrapper>
            <span>
              <FiUser />
            </span>
            <input placeholder="Nome" type="text" {...register('username')} />
          </InputWrapper>
          {errors.username && (
            <span className="input-errors">{errors.username.message}</span>
          )}
          <InputWrapper>
            <span>
              <FiMail />
            </span>
            <input placeholder="E-mail" type="email" {...register('email')} />
          </InputWrapper>
          {errors.email && (
            <span className="input-errors">{errors.email.message}</span>
          )}
          <InputWrapper>
            <span>
              <FiLock />
            </span>
            <input
              placeholder="Senha"
              type="password"
              {...register('password')}
            />
          </InputWrapper>
          {errors.password && (
            <span className="input-errors">{errors.password.message}</span>
          )}
          <Button title="Cadastrar" loading={false} />
        </form>
      </Content>
    </Container>
  )
}
