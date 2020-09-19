/**@jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import { useTheme } from '../context/ThemeContext'

const AppContainer: React.FC = props => {
  const { activeTheme } = useTheme()
  return (
    <div
      css={css`
        height: 100vh;
        width: 100%;

        background: ${activeTheme.bgColor};
        color: ${activeTheme.onBackgroundColor};
      `}
    >
      {props.children}
    </div>
  )
}
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export { FlexContainer, AppContainer }
