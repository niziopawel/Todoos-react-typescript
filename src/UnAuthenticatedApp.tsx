import React from 'react'
import SignIn from './screens/auth/SignIn'
import SignUp from './screens/auth/SignUp'
import { Router, Redirect } from '@reach/router'
import Route from './components/Route'
import Home from './screens/home'
import NotFound from './screens/404-page'

const UnAuthenticatedApp: React.FC = () => {
  return (
    <Router>
      <Route component={Home} path="/" />
      <Redirect from="/tasks" to="/" noThrow />
      <Route component={SignIn} path="/signin" />
      <Route component={SignUp} path="/signup" />
      <Route component={NotFound} default />
    </Router>
  )
}

export default UnAuthenticatedApp
