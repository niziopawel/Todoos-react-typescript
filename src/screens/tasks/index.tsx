import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { TaskContainer, Content } from './styles'
import TaskHeader from '../../containers/TaskHeader'
import Button from '../../components/button'

type TasksProps = {}

const Tasks: React.FC<TasksProps> = () => {
  const { logout } = useAuth()
  const { switchTheme, resetThemeToDefault } = useTheme()
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  function handleClick() {
    logout()
    resetThemeToDefault()
  }

  return (
    <TaskContainer>
      <TaskHeader
        isSideBarOpen={isSideBarOpen}
        onSideBarToggle={() => setIsSideBarOpen(!isSideBarOpen)}
      />
      <Content>
        <Button variant="primary" type="button" onClick={() => switchTheme()}>
          Switch theme
        </Button>
        <Button variant="primary" type="button" onClick={handleClick}>
          Logout
        </Button>
      </Content>
    </TaskContainer>
  )
}

export default Tasks
