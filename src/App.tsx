import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./theme";
import { DarkModeSwitch } from "./components";

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
    const isDarkStorage = localStorage.getItem("isDark");
    if (isDarkStorage && JSON.parse(isDarkStorage)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

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
      {children}
      <DarkModeSwitch isDark={isDarkMode} onChange={toggleDarkMode} />
    </ThemeProvider>
  );
};
