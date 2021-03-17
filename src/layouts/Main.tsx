/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { Redirect, Route, Switch } from 'react-router-dom'
import ProjectTasks from '../screens/tasks/ProjectTasks'
import TodayTasks from '../screens/tasks/TodayTasks'
import UpcomingTasks from '../screens/tasks/UpcomingTasks'

const Main: React.FC = () => {
  return (
    <main
      css={css`
        height: 100%;
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
