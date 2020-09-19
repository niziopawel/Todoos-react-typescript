import React from 'react'
import { Router, Redirect } from '@reach/router'
import Route from './components/Route'
import Tasks from './screens/Tasks'
import { AppContainer } from './components/layouts'

function AuthenticatedApp() {
  return (
    <AppContainer>
      <Router>
        <Redirect from="/" to="/tasks" noThrow />
        <Redirect from="/signin" to="/tasks" noThrow />
        <Route component={Tasks} path="/tasks" />
      </Router>
    </AppContainer>
  )
}

export default AuthenticatedApp
