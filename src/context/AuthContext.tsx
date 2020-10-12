import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { firebase, auth } from '../config/firebaseConfig'

type AuthStateType = {
  status: 'idle' | 'pending' | 'success' | 'error'
  user: firebase.User | null
  serverError: string
}

type AuthContextType = {
  initializing: boolean
  loginWithEmailAndPassword: (email: string, password: string) => void
  loginWithGmail: () => void
  logout: () => void
  registerWithEmailAndPassword: (email: string, password: string) => void
} & AuthStateType

const AuthContext = createContext<AuthContextType>({
  status: 'idle',
  user: null,
  serverError: '',
  initializing: true,
  loginWithEmailAndPassword: () => {},
  loginWithGmail: () => {},
  logout: () => {},
  registerWithEmailAndPassword: () => {},
})

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthStateType>({
    status: 'idle',
    user: null,
    serverError: '',
  })
  const [initializing, setInitializing] = useState(true)
  const [gettingRedirectResult, setGettingRedirectResult] = useState(false)

  useEffect(() => {
    if (gettingRedirectResult) {
      firebase
        .auth()
        .getRedirectResult()
        .then(() => setGettingRedirectResult(false))
    }
    setGettingRedirectResult(false)
  }, [gettingRedirectResult])

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        setAuthState(prevState => ({ ...prevState, user: authUser }))
      } else {
        setAuthState(prevState => ({ ...prevState, user: null }))
      }
      setInitializing(false)
    })
    return subscriber
  }, [])

  function loginWithEmailAndPassword(email: string, password: string) {
    setAuthState(prevState => ({
      ...prevState,
      status: 'pending',
    }))

    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        setAuthState({
          status: 'success',
          user: user,
          serverError: '',
        })
      })
      .catch((err: firebase.auth.Error) => {
        setAuthState({
          status: 'error',
          user: null,
          serverError: err.message,
        })
      })
  }

  function loginWithGmail() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().useDeviceLanguage()

    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(() => setGettingRedirectResult(true))
  }

  function logout() {
    auth.signOut()
    localStorage.clear()
  }

  function registerWithEmailAndPassword(email: string, password: string) {
    setAuthState(prevState => ({
      ...prevState,
      status: 'pending',
    }))

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        setAuthState(prevState => ({
          ...prevState,
          status: 'success',
        }))
      })

      .catch((err: firebase.auth.Error) => {
        setAuthState({
          status: 'error',
          user: null,
          serverError: err.message,
        })
      })
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        initializing,
        loginWithEmailAndPassword,
        loginWithGmail,
        logout,
        registerWithEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const state = React.useContext(AuthContext)
  const isLoading = state.status === 'pending'
  const isError = state.status === 'error'
  const isSuccess = state.status === 'success'

  return {
    ...state,
    isLoading,
    isError,
    isSuccess,
  }
}

export default AuthProvider
