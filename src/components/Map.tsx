import React, { useCallback, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import styled, { css } from "styled-components";

type Align = "left" | "right" | "center";

type ImageContainerProps = {
  width: string;
  align: Align;
};

const ImageContainer = styled.span<ImageContainerProps>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  ${(p) =>
    p.align === "right" &&
    css`
      @media (min-width: 750px) {
        display: inline-block;
        margin: 10px 20px;
        float: right;
        width: ${p.width};
      }
    `}
  ${(p) =>
    p.align === "left" &&
    css`
      @media (min-width: 750px) {
        display: inline-block;
        margin: 10px 20px;
        float: left;
        width: ${p.width};
      }
    `}
`;

const Loading = styled.div`
  height: 100%;
  width: 100%;
  max-width: 70vw;
  background-color: gray;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 70vw;
  height: auto;
`;

type MapProps = {
  width: string;
  src: string;
  align: Align;
};

const Map = ({ width = "400px", src, align = "center" }: MapProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const onUpdate = useCallback(({ x, y, scale }) => {
    
    const { current: img } = imgRef;
    if (img) {
      const value = make3dTransformValue({ x, y, scale });
      img.style.setProperty("transform", value);
    }
  }, []);

  return (
    <ImageContainer width={width} align={align}>
      <QuickPinchZoom onUpdate={onUpdate} maxZoom={8}>
        <StyledImage
          src={src}
          alt="map of aljieudum"
          loading="lazy"
          ref={imgRef}
        />
      </QuickPinchZoom>
      <Loading />
    </ImageContainer>
  );
};

export default Map;
