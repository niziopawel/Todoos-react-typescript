/**@jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { useTheme } from '../context/ThemeContext'

const AppContainer: React.FC = props => {
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
      {props.children}
    </div>
  )
}

export default AppContainer
