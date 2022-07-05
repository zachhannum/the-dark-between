import React, { useEffect, useState } from "react";
import type { GatsbyBrowser } from "gatsby";
import { Helmet } from "react-helmet";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./theme";

const DarkModeSwitchContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

type AppProps = {
  children: React.ReactNode;
};

export const App = ({ children }: AppProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IM+Fell+Double+Pica:ital@0;1&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IM+Fell+Double+Pica:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IM+Fell+Double+Pica+SC&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IM+Fell+Double+Pica+SC&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <DarkModeSwitchContainer>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}
        />
      </DarkModeSwitchContainer>
      {children}
    </ThemeProvider>
  );
};
