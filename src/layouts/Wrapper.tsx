/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { useTheme } from '../context/ThemeContext'

const Wrapper: React.FC = ({ children }) => {
  const { activeTheme } = useTheme()
  return (
    <div
      css={css`
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: ${activeTheme.bgColor};
        color: ${activeTheme.onBackgroundColor};
      `}
    >
      {children}
    </div>
  )
}

export default Wrapper
