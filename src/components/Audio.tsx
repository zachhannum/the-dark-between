import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const StyledAudio = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

type AudioProps = {
  src: string;
};

const Audio = ({ src }: AudioProps) => {
  return (
    <StyledAudio>
      <audio controls>
        <source src={src} type="audio/mpeg" />
      </audio>
    </StyledAudio>
  );
};

export default Audio;
