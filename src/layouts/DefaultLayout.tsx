// src/components/layout.js
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
`;

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <StyledContent>
      <div>
        <MDXProvider components={{}}>{children}</MDXProvider>
      </div>
    </StyledContent>
  );
};

export default DefaultLayout;
