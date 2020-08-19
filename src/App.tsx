import React from 'react'
import { useAuth } from './context/AuthContext'
import AuthenticatedApp from './AuthenticatedApp'
import UnAuthenticatedApp from './UnAuthenticatedApp'

const App: React.FC = () => {
  const { user } = useAuth()
  return (
    <React.Fragment>
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </React.Fragment>
  )
}

export default App
