import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const StyledCenter = styled.div`
  text-align: center;
  margin: auto;
  width: 500px;
  max-width: 90%;
`;

const Center = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return <StyledCenter {...props}>{children}</StyledCenter>;
};

export default Center;
