import React from 'react'
import SignIn from './screens/auth/SignIn'
import SignUp from './screens/auth/SignUp'
import { Router, Redirect } from '@reach/router'
import Route from './components/Route'
import Home from './screens/home'

const UnAuthenticatedApp: React.FC = () => {
  return (
    <Router>
      <Route component={Home} path="/" />
      <Redirect from="/app" to="/" noThrow />
      <Route component={SignIn} path="/signin" default />
      <Route component={SignUp} path="/signup" />
    </Router>
  )
}

export default UnAuthenticatedApp
