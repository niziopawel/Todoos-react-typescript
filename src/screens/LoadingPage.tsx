/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { Logo, Spinner } from '../components/lib'

const LandingPage: React.FC = () => {
  return (
    <div
      css={css`
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div:first-of-type {
          margin-bottom: 20px;
        }
      `}
    >
      <Logo logoSize={90} />
      <Spinner spinnerSize={30} />
    </div>
  )
}

export default LandingPage
