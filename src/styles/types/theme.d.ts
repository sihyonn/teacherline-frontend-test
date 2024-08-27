import "@emotion/react";

type color = "main" | "gray" | "red" | "black" | "white" | "background";

type typography = "title" | "body" | "placeholder" | "error";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      [key in color]: string;
    };
    typography: {
      [key in typography]: {
        fontSize: string;
        fontWeight: number;
        color?: string;
      };
    };
    border: string;
  }
}
