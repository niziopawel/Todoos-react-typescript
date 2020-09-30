/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Spinner from '../components/spinner'
import { FcTodoList } from 'react-icons/fc'

const LandingPage: React.FC = () => {
  return (
    <div
      css={css`
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > * {
          margin: 5px;
        }
      `}
    >
      <FcTodoList fontSize={100} />
      <Spinner spinnerSize={30} color="#3F51B5" />
    </div>
  )
}

export default LandingPage
