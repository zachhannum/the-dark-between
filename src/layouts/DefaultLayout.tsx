// src/components/layout.js
import React from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { Header } from "../components";
import { Image, Map, Center, Audio } from "../components";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.fg[1]};
`;

const ArticleContent = styled.div`
  max-width: 800px;
  width: 95%;
  margin: 25px auto;
`;

const shortcodes = { Image, Map, Center, Audio };

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <StyledContent>
      <Header />
      <ArticleContent>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </ArticleContent>
    </StyledContent>
  );
};

export default DefaultLayout;
