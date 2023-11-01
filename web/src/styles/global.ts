import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: 'Roboto Slab', serif;
  }
}
`
