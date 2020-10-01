import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import Button from '../button'
import { TaskContainer } from './styles'

type TasksProps = {}

const Tasks: React.FC<TasksProps> = () => {
  const { logout } = useAuth()
  const { switchTheme, resetThemeToDefault } = useTheme()

  function handleClick() {
    logout()
    resetThemeToDefault()
  }

  return (
    <TaskContainer>
      <Button variant="primary" type="button" onClick={() => switchTheme()}>
        Switch theme
      </Button>
      <Button variant="primary" type="button" onClick={handleClick}>
        Logout
      </Button>
    </TaskContainer>
  )
}

export default Tasks
