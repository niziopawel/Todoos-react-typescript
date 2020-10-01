import { css } from '@emotion/core'
import typography, { fonts } from './typography'

const reset = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html,
  body {
    font-family: ${fonts.regular}, sans-serif;
    font-style: normal;
    padding: 0;
    margin: 0;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    padding: 0;
  }

  form {
    margin: 0;
  }
  button {
    border: none;
    text-decoration: none;
    background: transparent;
  }

  ${typography}
`
export default reset
