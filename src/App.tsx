import React from 'react'
import { useAuth } from './context/AuthContext'
import UnAuthenticatedApp from './UnAuthenticatedApp'
import LoadingPage from './screens/loading-page'
import MainAppProviders from './context/MainAppProviders'

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'))

const App: React.FC = () => {
  const { user, initializing } = useAuth()
  return (
    <React.Suspense fallback={<LoadingPage />}>
      {initializing ? (
        <LoadingPage />
      ) : user ? (
        <MainAppProviders>
          <AuthenticatedApp />
        </MainAppProviders>
      ) : (
        <UnAuthenticatedApp />
      )}
    </React.Suspense>
  )
}

export default App
