import styled from 'styled-components'
import backgroundHome from '../../assets/bgHome.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  position: relative;
  height: 100vh;

  .text {
    position: relative;
    z-index: 10;
    margin: 0 auto;
    display: grid;
    text-align: center;
    gap: 1rem;

    p {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    a {
      color: ${({ theme }) => theme.COLORS.CARROT_100};
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
`
export const Background = styled.div`
  background: url(${backgroundHome}) no-repeat;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  opacity: 0.4;
  position: absolute;
  z-index: 0;
`
