"use client";

import { PropsWithChildren, Suspense } from "react";
import EmotionProvider from "./emotion";

const MainProvider = ({ children }: PropsWithChildren) => {
  return <EmotionProvider>{children}</EmotionProvider>;
};

export default MainProvider;
