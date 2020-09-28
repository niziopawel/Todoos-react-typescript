/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import Button from '../components/button'

const Tasks: React.FC = () => {
  const { logout } = useAuth()
  const { switchTheme, resetThemeToDefault } = useTheme()

  function handleClick() {
    logout()
    resetThemeToDefault()
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        & > * {
          margin: 20px;
        }
      `}
    >
      <h1>ToDo App</h1>
      <Button variant="primary" type="button" onClick={() => switchTheme()}>
        Switch theme
      </Button>
      <Button variant="primary" type="button" onClick={handleClick}>
        Logout
      </Button>
    </div>
  )
}

export default Tasks
