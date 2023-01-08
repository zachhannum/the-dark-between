import React from "react";
import type { GatsbyBrowser } from "gatsby";
import { graphql } from "gatsby";
import { App } from "./src/App";
import "./global.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <App>{element}</App>;
};
