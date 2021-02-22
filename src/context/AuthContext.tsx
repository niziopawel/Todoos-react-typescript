import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { firebase, auth } from '../config/firebaseConfig'
import useAsync from '../hooks/useAsync'

type AuthContextType = {
  user: firebase.User | null
  serverError: string | null
  isLoading: boolean
  initializing: boolean
  loginWithEmailAndPassword: (email: string, password: string) => void
  loginWithGmail: () => void
  logout: () => void
  registerWithEmailAndPassword: (email: string, password: string) => void
}

const initialState = {
  user: null,
  serverError: '',
  isLoading: false,
  initializing: true,
  loginWithEmailAndPassword: () => {},
  loginWithGmail: () => {},
  logout: () => {},
  registerWithEmailAndPassword: () => {},
}

const AuthContext = createContext<AuthContextType>(initialState)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    isLoading,
    data: user,
    error: serverError,
    setData: setUser,
    setError,
    // run
  } = useAsync<firebase.User | null, string | null>()
  
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
        setUser(authUser) 
      } else {
        setUser(null)
      }
      setInitializing(false)
    })
    return subscriber
  }, [setUser])
  
  function loginWithEmailAndPassword(email: string, password: string) {
    auth.signInWithEmailAndPassword(email, password)
      .then(({user}) => setUser(user))
      .catch((err: firebase.auth.Error) => setError(err.message))
  }
  
  function registerWithEmailAndPassword(email: string, password: string) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(({user}) => setUser(user))
      .catch((err: firebase.auth.Error) => setError(err.message))
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

  return (
    <AuthContext.Provider
      value={{
        user,
        serverError,
        isLoading,
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

  return {
    ...state,
  }
}

export default AuthProvider
