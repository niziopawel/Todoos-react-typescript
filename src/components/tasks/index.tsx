import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { TaskContainer } from './styles'
import Button from '../button'

type TasksProps = {}

const Tasks: React.FC<TasksProps> = () => {
  const history = useHistory()
  const { logout } = useAuth()
  const { switchTheme } = useTheme()

  function handleClick() {
    logout(() => {
      history.push('/')
    })
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
