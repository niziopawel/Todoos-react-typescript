import React from 'react'
// import Login from './components/Login'
// import Register from './components/Register'
import { Router } from '@reach/router'
import Route from './components/Route'
import Home from './components/Home'

const UnAuthenticatedApp: React.FC = () => {
  return (
    <Router>
      <Route component={Home} path="/" />
      {/* <Route component={Login} path="/login" />
      <Route component={Register} path="/register" /> */}
    </Router>
  )
}

export default UnAuthenticatedApp
