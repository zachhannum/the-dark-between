import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.div`
  display: flex;
  padding: 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

export default Header;
