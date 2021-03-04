import React from 'react'
import Header from './layouts/Header'
import Wrapper from './layouts/Wrapper'
import Overlay from './layouts/Overlay'
import Sidebar from './layouts/Sidebar'
import Main from './layouts/Main'

function AuthenticatedApp() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Main />
      <Overlay />
    </Wrapper>
  )
}

export default AuthenticatedApp
