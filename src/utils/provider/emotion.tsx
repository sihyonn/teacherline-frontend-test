"use client";

import { PropsWithChildren } from "react";
import { Global, ThemeProvider } from "@emotion/react";
import globals from "../../styles/global";
import theme from "@/src/styles/theme";

const EmotionProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />
      {children}
    </ThemeProvider>
  );
};

export default EmotionProvider;
