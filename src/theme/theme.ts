import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  bg: ["#282828", "#3c3836", "#504945", "#665c54", "#7c6f64"],
  fg: ["#fbf1c7", "#ebdbb2", "#d5c4a1", "#bdae93", "#32302f"],
  red: {
    fg: "#fb4934",
    bg: "#cc241d",
  },
  green: {
    fg: "#b8bb26",
    bg: "#98971a",
  },
  yellow: {
    fg: "#fabd2f",
    bg: "#d79921",
  },
  blue: {
    fg: "#83a598",
    bg: "#458588",
  },
  purple: {
    fg: "#d3869b",
    bg: "#b16286",
  },
  aqua: {
    fg: "#8ec07c",
    bg: "#689d6a",
  },
  orange: {
    fg: "#fe8019",
    bg: "#d65d0e",
  },
};

const lightTheme: DefaultTheme = {
  fg: ["#282828", "#3c3836", "#504945", "#665c54", "#7c6f64"],
  bg: ["#fbf1c7", "#ebdbb2", "#d5c4a1", "#bdae93", "#32302f"],
  red: {
    fg: "#cc242d",
    bg: "#cc241d",
  },
  green: {
    fg: "#79740e",
    bg: "#98971a",
  },
  yellow: {
    fg: "#b57614",
    bg: "#d79921",
  },
  blue: {
    fg: "#076678",
    bg: "#458588",
  },
  purple: {
    fg: "#8f3f71",
    bg: "#b16286",
  },
  aqua: {
    fg: "#427b58",
    bg: "#689d6a",
  },
  orange: {
    fg: "#af3a03",
    bg: "#d65d0e",
  },
};

export { darkTheme, lightTheme };
