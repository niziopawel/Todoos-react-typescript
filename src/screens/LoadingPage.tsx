/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Spinner from '../components/spinner'

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
      <Spinner spinnerSize={50} color="black" />
    </div>
  )
}

export default LandingPage
