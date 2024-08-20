"use client";

import { Global } from "@emotion/react";
import { PropsWithChildren } from "react";
import globals from "../styles/global";

const EmotionProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Global styles={globals} />
      {children}
    </>
  );
};

export default EmotionProvider;
