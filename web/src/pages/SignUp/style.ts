import styled from 'styled-components'
import BackgroundSignUp from '../../assets/bgSignUp.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  position: relative;
  height: 100vh;

  @media screen and (min-width: 1023px) {
    flex-direction: row;
    position: static;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 0 1.5rem;
  position: relative;

  img {
    width: 14rem;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.5rem;
    font-weight: 500;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .input-errors {
      font-size: 0.75rem;
      text-align: center;
      padding-bottom: 0.5rem;
      color: ${({ theme }) => theme.COLORS.TOMATO_300};
    }
  }

  @media screen and (min-width: 750px) {
    width: 600px;
    margin: 0 auto;

    img {
      width: 16rem;
    }
  }

  @media screen and (min-width: 1023px) {
    position: static;
    width: 400px;
  }
`
export const Background = styled.div`
  background: url(${BackgroundSignUp}) no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  filter: brightness(0.25);
  position: absolute;

  @media screen and (min-width: 1023px) {
    width: 360px;
    position: static;
    filter: brightness(0.5);
  }
`
export const InputWrapper = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0.625rem;

  input {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border: 0;

    height: 3.5rem;
    width: 100%;
    padding: 0.75rem;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  > span {
    margin-left: 1rem;
  }
`
