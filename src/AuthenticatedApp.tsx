import React from 'react'
import { Router, Redirect } from '@reach/router'
import AppHeader from './layouts/AppHeader'
import Tasks from './components/tasks'
import AppContainer from './layouts/AppContainer'
import AppOverlay from './layouts/AppOverlay'
import AppSidebar from './layouts/AppSidebar'

function AuthenticatedApp() {
  return (
    <>
      <AppHeader />
      <AppContainer>
        <AppOverlay />
        <AppSidebar />
        <Router>
          <Redirect from="/signin" to="/app" noThrow />
          <Redirect from="/" to="/app" noThrow />
          <Tasks path="app/*" />
        </Router>
      </AppContainer>
    </>
  )
}

export default AuthenticatedApp
