import React from "react";
import styled, { useTheme } from "styled-components";
import { DarkModeSwitch as DarkModeToggle } from "react-toggle-dark-mode";

const DarkModeSwitchContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

type DarkModeSwitchProps = {
  isDark: boolean;
  onChange: () => void;
};

const DarkModeSwitch = ({ isDark, onChange }: DarkModeSwitchProps) => {
  const theme = useTheme();
  return (
    <DarkModeSwitchContainer
    >
      <DarkModeToggle
        checked={isDark}
        onChange={onChange}
        size={20}
        moonColor={theme.fg[0]}
        sunColor={theme.fg[0]}
      />
    </DarkModeSwitchContainer>
  );
};

export default DarkModeSwitch;
