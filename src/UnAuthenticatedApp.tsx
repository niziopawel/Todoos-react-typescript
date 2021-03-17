import React from 'react'
import SignIn from './screens/auth/SignIn'
import SignUp from './screens/auth/SignUp'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './screens/home'

const UnAuthenticatedApp: React.FC = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect from="/app" to="/" />
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </Router>
  )
}

export default UnAuthenticatedApp
