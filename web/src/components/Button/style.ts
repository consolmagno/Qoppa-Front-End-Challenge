import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 3.5rem;
  border: 0;
  padding: 0 1rem;
  border-radius: 0.625rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    transition: 2ms;
    transform: scale(1.02);
  }

  &:disabled {
    opacity: 0.5;
  }
`
