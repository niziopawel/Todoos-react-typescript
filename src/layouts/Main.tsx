/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { Redirect, Route, Switch } from 'react-router-dom'
import ProjectTasks from '../screens/tasks/ProjectTasks'
import TodayTasks from '../screens/tasks/TodayTasks'
import UpcomingTasks from '../screens/tasks/UpcomingTasks'
import { useOpenSidebar } from '../context/OpenSidebarContext'
import { useMedia } from '../hooks/useMedia'

const Main: React.FC = () => {
  const { isSidebarOpen } = useOpenSidebar()
  const isMobile = useMedia('(max-width: 576px)')

  return (
    <main
      css={css`
        height: 100%;
        margin-left: ${isSidebarOpen && !isMobile ? '300px' : '0px'};
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        padding-top: 80px;
        overflow: auto;
      `}
    >
      <Switch>
        <Route path="/project/:projectId">
          <ProjectTasks />
        </Route>
        <Route path="/today">
          <TodayTasks />
        </Route>
        <Route path="/upcoming">
          <UpcomingTasks />
        </Route>
        <Redirect from="/signin" to="/today" />
        <Redirect from="/" to="/today" />
      </Switch>
    </main>
  )
}

export default Main
