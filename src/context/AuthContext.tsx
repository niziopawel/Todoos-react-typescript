import React, { createContext, ReactNode, useState } from 'react'
import { loginUserWithEmailAndPassword, signOut } from '../services/auth'
import { firebase } from '../config/firebaseConfig'

type AuthContextType = {
  status: string
  user: firebase.User | null
  resError: string
  login: (email: string, password: string) => void
  logout: () => void
  register: (email: string, password: string) => void
}

const AuthContext = createContext<AuthContextType>({
  status: 'idle',
  user: null,
  resError: '',
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
  const [authState, setAuthState] = useState({
    status: 'idle',
    user: getUserFromLocalStorage(),
    resError: '',
  })

  function login(email: string, password: string) {
    setAuthState(prevState => ({
      ...prevState,
      status: 'pending',
      resError: '',
    }))

    loginUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        localStorage.setItem('User', JSON.stringify(user))
        setAuthState({
          status: 'success',
          user: user,
          resError: '',
        })
      })
      .catch((err: firebase.auth.Error) => {
        setAuthState({
          status: 'rejected',
          user: null,
          resError: err.message,
        })
      })
  }

  function logout() {
    setAuthState(prevState => ({ ...prevState, status: 'pending' }))

    signOut().then(() => {
      setAuthState({ status: 'idle', user: null, resError: '' })
      localStorage.removeItem('User')
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
