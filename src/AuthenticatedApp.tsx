import React from 'react'
import { Router, Redirect } from '@reach/router'
import Route from './components/Route'
import Tasks from './components/Tasks'

function AuthenticatedApp() {
  return (
    <Router>
      <Redirect from="/" to="/tasks" noThrow />
      <Route component={Tasks} path="/tasks" />
    </Router>
  )
}

export default AuthenticatedApp
