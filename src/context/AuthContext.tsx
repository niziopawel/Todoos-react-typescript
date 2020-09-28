import React, { createContext, ReactNode, useState } from 'react'
import { loginUserWithEmailAndPassword, signOut } from '../services/auth'
import { firebase } from '../config/firebaseConfig'
import { useAsync, asyncStatusType } from '../hooks/useAsync'

type AuthStateType = {
  status: asyncStatusType
  user: firebase.User | null
  serverError: string
}

type AuthContextType = {
  login: (email: string, password: string) => void
  logout: () => void
  register: (email: string, password: string) => void
} & AuthStateType

const AuthContext = createContext<AuthContextType>({
  status: 'idle',
  user: null,
  serverError: '',
  login: () => {},
  logout: () => {},
  register: () => {},
})

function getUserFromLocalStorage(): firebase.User | null {
  let storedUserJson: string | null
  let userObj: firebase.User | null = null as firebase.User | null

  try {
    storedUserJson = localStorage.getItem('User')
    if (storedUserJson) {
      userObj = JSON.parse(storedUserJson)
    }
  } catch (err) {
    console.log('Error fetching data from local storage', err)
  }

  return userObj
}

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthStateType>({
    status: 'idle',
    user: getUserFromLocalStorage(),
    serverError: '',
  })

  function login(email: string, password: string) {
    setAuthState(prevState => ({
      ...prevState,
      status: 'pending',
      serverError: '',
    }))

    loginUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        localStorage.setItem('User', JSON.stringify(user))
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

  function logout() {
    setAuthState((prevState: AuthStateType) => ({
      ...prevState,
      status: 'pending',
    }))

    signOut().then(() => {
      setAuthState({ status: 'idle', user: null, serverError: '' })
      localStorage.clear()
    })
  }

  function register() {}

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, register }}>
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
