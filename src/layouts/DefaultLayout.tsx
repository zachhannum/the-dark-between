// src/components/layout.js
import React from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  color: ${(p) => p.theme.fg[1]};
`;

const ArticleContent = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 25px 10%;
`;

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <StyledContent>
      <ArticleContent>
        <MDXProvider components={{}}>{children}</MDXProvider>
      </ArticleContent>
    </StyledContent>
  );
};

export default DefaultLayout;
