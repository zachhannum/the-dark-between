import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

type ImageProps = {
  src: string;
  alt: string;
  width: string;
  source: string;
  sourceLink: string;
  align: "left" | "center" | "right";
};

type StyledImageContainerProps = {
  align: "left" | "center" | "right";
  width: string;
};

const StyledImageContainer = styled.div<StyledImageContainerProps>`
  margin: auto;
  display: block;
  max-width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: ${(p) => p.width};
  ${(p) =>
    p.align === "right" &&
    css`
      @media (min-width: 750px) {
        margin: 10px 20px;
        float: right;
      }
    `}
  ${(p) =>
    p.align === "left" &&
    css`
      @media (min-width: 750px) {
        margin: 10px 20px;
        float: left;
      }
    `}
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const StyledCaption = styled(Link)`
  all: unset;
  &:after {
    all: unset;
  }
  padding: 5px;
  font-size: 0.75em;
  cursor: pointer;
  color: ${(p) => p.theme.blue["bg"]};
  &:hover {
    color: ${(p) => p.theme.blue["fg"]};
  }
  font-style: italic;
`;

const Image = ({
  src,
  alt,
  width = "400px",
  align = "center",
  source,
  sourceLink,
}: ImageProps) => {
  return (
    <StyledImageContainer width={width} align={align}>
      <StyledImage src={src} alt={alt} loading="lazy" />
      <StyledCaption to={sourceLink} target="_blank">
        {source}
      </StyledCaption>
    </StyledImageContainer>
  );
};

export default Image;
