import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './layouts/Header'
import Wrapper from './layouts/Wrapper'
import Overlay from './layouts/Overlay'
import AppSidebar from './layouts/Sidebar'
import Main from './layouts/Main'
import LoadingPage from './screens/loading-page'
import { useProjects } from './hooks/useProjects'
import { useAuth } from './context/AuthContext'

function AuthenticatedApp() {
  const { user } = useAuth()
  const { data: projects, isLoading, isError, error, isSuccess } = useProjects(
    user?.uid,
  )

  if (isLoading) {
    return <LoadingPage />
  }

  if (isError) {
    return <span> Error: {error?.message} </span>
  }

  if (isSuccess && projects) {
    return (
      <Router>
        <Wrapper>
          <Header />
          <AppSidebar projectsData={projects} />
          <Main />
          <Overlay />
        </Wrapper>
      </Router>
    )
  }
  return null
}

export default AuthenticatedApp
