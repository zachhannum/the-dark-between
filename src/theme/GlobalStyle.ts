import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    overflow-x: hidden;
    min-height: 100vh;
    background: ${(p) => p.theme.bg[0]};
    font-family: 'IM Fell Double Pica', serif;
    font-size: 1.3em;
  }

  * {
    box-sizing: border-box;
  }

  a {
    all: unset;
    cursor: pointer;
    color: ${(p) => p.theme.blue["fg"]}
  }

  h1 {
    font-family: 'IM Fell Double Pica SC', serif;
    letter-spacing: .1rem;

  }
`;

export default GlobalStyle;
