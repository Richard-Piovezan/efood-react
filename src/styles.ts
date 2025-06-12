import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  red: '#E66767',
  off_white: '#FFF8F2',
  pastel_tone: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    border: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    color: ${colors.red};
  }

  body {
    background-color: ${colors.off_white};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
