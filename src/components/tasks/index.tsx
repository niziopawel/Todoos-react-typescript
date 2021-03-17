/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { useOpenSidebar } from '../../context/OpenSidebarContext'
import { useMedia } from '../../hooks/useMedia'
import { TaskContainer } from './styles'
import Button from '../button'

type TasksProps = {}

const Tasks: React.FC<TasksProps> = () => {
  const history = useHistory()
  const { logout } = useAuth()
  const { switchTheme } = useTheme()
  const { isSidebarOpen } = useOpenSidebar()
  const isMobile = useMedia('(max-width: 576px)')

  function handleClick() {
    logout(() => {
      history.push('/')
    })
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
