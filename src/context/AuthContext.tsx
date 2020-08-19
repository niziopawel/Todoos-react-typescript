import React, { createContext, ReactNode, useState } from 'react'
import { loginUserWithEmailAndPassword } from '../services/auth'
import { firebase } from '../config/firebaseConfig'

type AuthContextType = {
  status: string
  user: firebase.User | null
  error: string
  login: (email: string, password: string) => void
  logout: () => void
  register: (email: string, password: string) => void
}

const AuthContext = createContext<AuthContextType>({
  status: 'idle',
  user: null,
  error: '',
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
    error: '',
  })

  function login(email: string, password: string) {
    setAuthState(prevState => ({ ...prevState, status: 'pending' }))

    loginUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        localStorage.setItem('User', JSON.stringify(user))
        setAuthState({
          status: 'success',
          user: user,
          error: '',
        })
      })
      .catch((err: firebase.auth.Error) => {
        setAuthState({
          status: 'rejected',
          user: null,
          error: err.message,
        })
      })
  }

  function logout() {}
  function register() {}

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const state = React.useContext(AuthContext)
  const isPending = state.status === 'pending'
  const isError = state.status === 'error'
  const isSuccess = state.status === 'success'

  return {
    ...state,
    isPending,
    isError,
    isSuccess,
  }
}

export default AuthProvider
