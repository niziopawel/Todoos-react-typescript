import '../fonts/fonts.css'
import { css } from '@emotion/core'
import { mq } from './mediaQueries'

export const fonts = {
  thin: 'Lato Thin',
  light: 'Lato Light',
  regular: 'Lato Regular',
  bold: 'Lato Bold',
}

const typography = css`
  :root {
    --base-size: 14px;
    --type-scale: 1.2;
    --text-4xl: calc(var(--text-xxxl) * var(--type-scale));
    --text-xxxl: calc(var(--text-xxl) * var(--type-scale));
    --text-xxl: calc(var(--text-xl) * var(--type-scale));
    --text-xl: calc(var(--text-lg) * var(--type-scale));
    --text-lg: calc(var(--text-md) * var(--type-scale));
    --text-md: calc(var(--text-sm) * var(--type-scale));
    --text-sm: calc(var(--text-xs) * var(--type-scale));
    --text-xs: calc(var(--base-size) / var(--type-scale));
  }

  html,
  body {
    font-size: var(--base-size);
    letter-spacing: 0.5;
    font-weight: 100;
  }

  .text-4xl {
    font-size: var(--text-4xl);
    font-weight: 100;
  }

  h1,
  .text-xxxl {
    font-size: var(--text-xxxl);
    font-weight: 300;
    letter-spacing: -1px;
  }

  h2,
  .text-xxl {
    font-size: var(--text-xxl);
    font-weight: 300;
    letter-spacing: -0.5px;
  }

  h3,
  .text-xl {
    font-weight: 400;
    font-size: var(--text-xl);
    letter-spacing: 0;
  }

  h4,
  .text-lg {
    font-weight: 400;
    font-size: var(--text-lg);
    letter-spacing: 0.5px;
  }

  h5,
  .text-md {
    font-weight: 500;
    font-size: var(--text-md);
    letter-spacing: 0;
  }

  h6,
  .text-sm {
    font-size: var(--text-sm);
    font-weight: 500;
    letter-spacing: 0.15px;
  }

  p {
    font-size: var(--base-size);
  }

  button {
    font-size: var(--base-size);
    font-weight: 600;
    letter-spacing: 1.15px;
  }

  label {
    font-size: var(--base-size);
    font-weight: 500;
  }

  small,
  .text-xs {
    font-size: var(--text-xs);
  }

  ${mq['phone']} {
    :root {
      --base-size: 16px;
    }
  }

  ${mq['tablet']} {
    :root {
      --type-scale: 1.25;
    }
  }

  ${mq['desktop']} {
    :root {
      --type-scale: 1.33;
    }
  }
`

export default typography
