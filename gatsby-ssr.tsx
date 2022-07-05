import React, { useState } from "react";
import type { GatsbySSR } from "gatsby";
import { App } from "./src/App";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
  element,
}) => {
  return <App>{element}</App>;
};
