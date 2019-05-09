import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../images/background.webp';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: ${theme.font.family.montserrat};
    font-size: 1.6rem;
    margin: 0;
    color: ${theme.white};
    background: ${theme.darkblue};
    background-image: url(${backgroundImage}), linear-gradient(${theme.darkblue},${theme.darkblue});
    background-blend-mode: luminosity;
  }
`;

export default GlobalStyle;