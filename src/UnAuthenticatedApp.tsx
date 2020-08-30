import React from 'react'
import Login from './screens/Login'
// import Register from './components/Register'
import { Router, Redirect } from '@reach/router'
import Route from './components/Route'
import Home from './screens/Home'
import NotFound from './screens/NotFound'

const UnAuthenticatedApp: React.FC = () => {
  return (
    <Router>
      <Route component={Home} path="/" />
      <Redirect from="tasks" to="/" noThrow />
      <Route component={Login} path="/login" />
      <Route component={NotFound} default />
    </Router>
  )
}

export default UnAuthenticatedApp
