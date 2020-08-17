import React, { createContext, ReactNode, useState, useEffect } from 'react'
import { firebase } from '../config/firebaseConfig'
import LandingPage from '../screens/LandingPage'
type AuthContextType = {
  status: string
  user: firebase.User | null
  error: firebase.auth.Error | null
  login: () => void
  logout: () => void
  register: () => void
}

export const AuthContext = createContext<Partial<AuthContextType>>({})
AuthContext.displayName = 'AuthContext'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({
    status: 'pending',
    user: null as firebase.User | null,
    error: null as firebase.auth.Error | null,
  })

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          setState({ status: 'success', error: null, user: user })
        } else {
          setState({ status: 'success', error: null, user: null })
        }
      },
      err => setState({ status: 'error', error: err, user: null }),
    )
  }, [])

  function login() {}
  function logout() {}
  function register() {}

  return (
    <AuthContext.Provider value={{ ...state, login, logout, register }}>
      {state.status === 'pending' ? (
        <LandingPage />
      ) : state.status === 'error' ? (
        <div>{state.error?.message}</div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}

export function useAuthState() {
  const state = React.useContext(AuthContext)
  const isPending = state.status === 'pending'
  const isSuccess = state.status === 'success'
  const isError = state.status === 'error'

  return {
    ...state,
    isPending,
    isSuccess,
    isError,
  }
}

export default AuthProvider
