import React, { useState } from "react";
import type { GatsbyBrowser } from "gatsby";
import { App } from "./src/App";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <App>{element}</App>;
};
