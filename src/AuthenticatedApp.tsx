import React, { useState } from 'react'
import Header from './layouts/Header'
import Tasks from './components/tasks'
import AppContainer from './layouts/AppContainer'
import SideBar from './components/sidebar'
import Content from './layouts/Content'

function AuthenticatedApp() {
  const [isSideBarOpen, toggleSideBar] = useState(true)

  return (
    <AppContainer>
      <Header
        isSideBarOpen={isSideBarOpen}
        onSideBarToggle={() => toggleSideBar(!isSideBarOpen)}
      />
      <Content>
        <SideBar />
        <Tasks />
      </Content>
    </AppContainer>
  )
}

export default AuthenticatedApp
