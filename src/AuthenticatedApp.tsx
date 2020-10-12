import React, { useState } from 'react'
import AppHeader from './layouts/AppHeader'
import Tasks from './components/tasks'
import AppContainer from './layouts/AppContainer'
import AppOverlay from './layouts/AppOverlay'
import Content from './layouts/Content'
import { useMedia } from './hooks/useMedia'
import AppSidebar from './layouts/AppSidebar'

function AuthenticatedApp() {
  const [isSidebarOpen, toggleSidebar] = useState(true)
  const smallScreen = useMedia('(max-width: 576px)')

  return (
    <AppContainer>
      <AppHeader
        isSideBarOpen={isSidebarOpen}
        onSideBarToggle={() => toggleSidebar(!isSidebarOpen)}
      />
      <Content>
        <AppOverlay visible={isSidebarOpen && smallScreen} />
        <AppSidebar isOpen={isSidebarOpen} />
        <Tasks isSidebarOpen={isSidebarOpen} isSmallScreen={smallScreen} />
      </Content>
    </AppContainer>
  )
}

export default AuthenticatedApp
