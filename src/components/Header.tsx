import React, { useEffect } from "react";
import { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.div`
  display: flex;
  padding: 20px;
`;

const Header = () => {
  const { localSearchPages } = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `);
  const [query, setQuery] = useState<string | null>(null);
  const results = useFlexSearch(
    query,
    localSearchPages.index,
    localSearchPages.store
  );

  useEffect(() => {
    console.log(results);
  }, [results]);

  const onSearch = () => {
    // console.log(data);
    if (localSearchPages) {
      setQuery("arlo");
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
