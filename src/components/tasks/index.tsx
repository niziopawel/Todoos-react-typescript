/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { useSidebar } from '../../context/SidebarContex'
import { useMedia } from '../../hooks/useMedia'
import { TaskContainer } from './styles'
import Button from '../button'

type TasksProps = {
  path?: RouteComponentProps
}

const Tasks: React.FC<TasksProps> = () => {
  const { logout } = useAuth()
  const { switchTheme } = useTheme()
  const { isSidebarOpen } = useSidebar()
  const isMobile = useMedia('(max-width: 576px)')

  function handleClick() {
    logout()
  }

  return (
    <TaskContainer
      css={css`
        margin-left: ${isSidebarOpen && !isMobile ? '300px' : '0px'};
      `}
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
