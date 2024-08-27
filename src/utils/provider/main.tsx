"use client";

import { PropsWithChildren } from "react";
import EmotionProvider from "./emotion";

const MainProvider = ({ children }: PropsWithChildren) => {
  return <EmotionProvider>{children}</EmotionProvider>;
};

export default MainProvider;
