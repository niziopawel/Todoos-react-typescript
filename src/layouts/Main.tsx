import React from 'react'
import { Router, Redirect } from '@reach/router'
import ProjectTasks from '../screens/tasks/ProjectTasks'
import TodayTasks from '../screens/tasks/TodayTasks'

const Main: React.FC = () => {
  return (
    <main>
      <Router>
        <Redirect from="/signin" to="/today" noThrow />
        <Redirect from="/" to="/today" noThrow />
        <ProjectTasks path="project/:projectId" />
        <TodayTasks path="today" />
      </Router>
    </main>
  )
}

export default Main
