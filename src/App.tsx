import React from 'react'
import { useAuthState } from './context/AuthContext'
import LandingPage from './components/LandingPage'
const AuthenticatedApp = React.lazy(() =>
  import(/* webpackPrefetch: true*/ './AuthenticatedApp'),
)
const UnAuthenticatedApp = React.lazy(() => import('./UnAuthenticatedApp'))

const App: React.FC = () => {
  const { user } = useAuthState()
  return (
    <React.Suspense fallback={<LandingPage />}>
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </React.Suspense>
  )
}

export default App
