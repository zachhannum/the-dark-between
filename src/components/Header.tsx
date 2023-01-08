import { graphql, useStaticQuery } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.div`
  display: flex;
  padding: 20px;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `);
  const onSearch = () => {
    // console.log(data);
    if (data) {
      const { index, store } = data.localSearchPages;
      const results = useFlexSearch("primal spirits", index, store);
      console.log(results);
    }
  };
  return (
    <StyledHeader>
      <button onClick={onSearch}>Search</button>

      <Logo />
    </StyledHeader>
  );
};

export default Header;
