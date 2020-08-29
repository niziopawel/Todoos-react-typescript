/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { Logo } from '../components/lib'
import Spinner from '../components/Spinner'

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
      <Spinner spinnerSize={50} color="black" />
    </div>
  )
}

export default LandingPage
