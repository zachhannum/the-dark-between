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
    letter-spacing: .02rem;
    line-height: 1.2em;
  }

  * {
    box-sizing: border-box;
  }

  a {
    all: unset;
    font-weight: 700;
    position: relative;
    cursor: pointer;
    color: ${(p) => p.theme.blue["fg"]};
    display: inline-block;
    transition: color 100ms ease-in-out;
    margin: 0 1px;
    padding: 0 2px;
    &:after {
      z-index: -1;
      border-radius: 4px;
      position: absolute;
      background-color: ${(p) => p.theme.blue["bg"]};
      content: '';
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      transition: width 100ms ease-in-out;
    }
    &:hover:after {
      width: 100%;
    }
    &:hover {
      color: ${(p) => p.theme.fg[0]};
    }
  }

  h1 {
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; */
    letter-spacing: .1rem;
    font-weight: 500;
  }

  h2 {
    line-height: 1.2em;
  }

  .caption {
    font-size: 0.9em;
    color: ${(p) => p.theme.fg[2]};
  }
`;

export default GlobalStyle;
