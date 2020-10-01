import React from 'react'
import { useAuth } from './context/AuthContext'
import AuthenticatedApp from './AuthenticatedApp'
import UnAuthenticatedApp from './UnAuthenticatedApp'
import LoadingPage from './screens/loading-page'

const App: React.FC = () => {
  const { user, initializing } = useAuth()

  return (
    <React.Fragment>
      {initializing ? (
        <LoadingPage />
      ) : user ? (
        <AuthenticatedApp />
      ) : (
        <UnAuthenticatedApp />
      )}
    </React.Fragment>
  )
}

export default App
