import { css } from "@emotion/react";
import theme from "./theme";

const globals = css`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  textarea,
  input,
  progress,
  button {
    margin: 0;
    padding: 0;
    border: 0;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  progress,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    background: none;
    cursor: pointer;
    font-family: "Nanum", "Pretendard";
  }
  textarea {
    max-width: 100%;
    height: auto;
    resize: none;
  }
  input[type="range"] {
    -webkit-appearance: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    box-shadow: none;
  }
  .inner {
    width: 1480px;
    padding: 165px 20px 100px;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
  }
  body {
    font-family: "Nanum", "Pretendard";
  }

  .my-message-notice-wrapper {
    .my-message-notice-content {
      color: ${theme.colors.neutral["white"]};
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      background: rgba(0, 0, 0, 0.7) !important;
      direction: ltr;
      .my-message-custom-content {
        display: flex;

        gap: 8px;
        > span {
          direction: ltr;
        }
      }
    }
  }
`;

export default globals;
