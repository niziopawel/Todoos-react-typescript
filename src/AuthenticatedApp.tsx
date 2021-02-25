import React from 'react'
import { Router, Redirect } from '@reach/router'
import AppHeader from './layouts/AppHeader'
import Tasks from './components/tasks'
import AppContainer from './layouts/AppContainer'
import AppOverlay from './layouts/AppOverlay'
import AppSidebar from './layouts/AppSidebar'
import { useMedia } from './hooks/useMedia'
import { useSidebar } from './context/SidebarContex'

function AuthenticatedApp() {
  const { isSidebarOpen } = useSidebar()
  const isMobile = useMedia('(max-width: 576px)')
  return (
    <>
      <AppHeader />
      <AppContainer>
        <AppOverlay visible={isSidebarOpen && isMobile} />
        <AppSidebar isOpen={isSidebarOpen} />
        <Router>
          <Redirect from="/signin" to="/app" noThrow />
          <Tasks path="app/*" />
        </Router>
      </AppContainer>
    </>
  )
}

export default AuthenticatedApp
