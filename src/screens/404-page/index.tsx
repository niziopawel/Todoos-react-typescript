/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

const NotFound: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <h2>404 Page Not Found</h2>
    </div>
  )
}

export default NotFound
