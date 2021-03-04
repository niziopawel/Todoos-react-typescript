import React from 'react'
import { Router, Redirect } from '@reach/router'
import ProjectTasks from '../screens/tasks/ProjectTasks'
import TodayTasks from '../screens/tasks/TodayTasks'

const Main: React.FC = () => {
  return (
    <main>
      <Router>
        <Redirect from="/signin" to="/app/today" noThrow />
        <Redirect from="/" to="/app/today" noThrow />
        <ProjectTasks path="app/project/:projectId" />
        <TodayTasks path="app/today" />
      </Router>
    </main>
  )
}

export default Main
