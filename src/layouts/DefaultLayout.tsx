// src/components/layout.js
import React, { useEffect } from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { Header } from "../components";
import { Image, Map, Center, Audio } from "../components";

type DefaultLayoutProps = {
  pageContext: any;
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

const Title = styled.div`
  font-size: 2em;
  font-weight: 600;
  padding-bottom: 10px;
`;

const shortcodes = { Image, Map, Center, Audio };

const DefaultLayout = ({ pageContext, children }: DefaultLayoutProps) => {
  useEffect(() => {
    console.log(pageContext);
  }, []);

  return (
    <StyledContent>
      <Header />
      <ArticleContent>
        {pageContext.frontmatter.hide ? (
          <Title>This page is not public!</Title>
        ) : (
          <>
            <Title>{pageContext.frontmatter.title}</Title>
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </>
        )}
      </ArticleContent>
    </StyledContent>
  );
};

export default DefaultLayout;
