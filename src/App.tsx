import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import AuthenticatedApp from './AuthenticatedApp'
import UnAuthenticatedApp from './UnAuthenticatedApp'

// const AuthenticatedApp = React.lazy(() =>
//   import(/* webpackPrefetch: true*/ './AuthenticatedApp'),
// )
// const UnAuthenticatedApp = React.lazy(() => import('./UnAthenticatedApp'))

const App: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <React.Fragment>
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </React.Fragment>
  )
}

export default App
