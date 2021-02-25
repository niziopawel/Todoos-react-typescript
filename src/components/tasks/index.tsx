import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import Button from '../button'
import { TaskContainer } from './styles'

type TasksProps = {
  isSidebarOpen: boolean
  isMobile: boolean
}

const Tasks: React.FC<TasksProps> = ({ isSidebarOpen, isMobile }) => {
  const { logout } = useAuth()
  const { switchTheme } = useTheme()

  function handleClick() {
    logout()
  }

  return (
    <TaskContainer
      style={{ marginLeft: isSidebarOpen && !isMobile ? '300px' : '0px' }}
    >
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
