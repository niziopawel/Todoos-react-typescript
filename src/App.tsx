import React from 'react'
import { useAuth } from './context/AuthContext'
import UnAuthenticatedApp from './UnAuthenticatedApp'
import LoadingPage from './screens/loading-page'
import AppProviders from './context/AppProviders'

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'))

const App: React.FC = () => {
  const { user } = useAuth()
  return (
    <React.Suspense fallback={<LoadingPage />}>
      {user ? (
        <AppProviders>
          <AuthenticatedApp />
        </AppProviders>
      ) : (
        <UnAuthenticatedApp />
      )}
    </React.Suspense>
  )
}

export default App
