import React from 'react'
import AppHeader from './layouts/AppHeader'
import Tasks from './components/tasks'
import AppContainer from './layouts/AppContainer'
import AppOverlay from './layouts/AppOverlay'
import Content from './layouts/Content'
import AppSidebar from './layouts/AppSidebar'
import { useMedia } from './hooks/useMedia'
import { useTheme } from './context/ThemeContext'
import { useSidebar } from './context/SidebarContex'

function AuthenticatedApp() {
  const { activeTheme } = useTheme()
  const { isSidebarOpen } = useSidebar()
  const isMobile = useMedia('(max-width: 576px)')
  return (
    <>
      <AppHeader />
      <AppContainer theme={activeTheme}>
        <Content>
          <AppOverlay visible={isSidebarOpen && isMobile} />
          <AppSidebar isOpen={isSidebarOpen} />
          <Tasks isSidebarOpen={isSidebarOpen} isMobile={isMobile} />
        </Content>
      </AppContainer>
    </>
  )
}

export default AuthenticatedApp
