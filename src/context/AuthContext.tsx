import React, { createContext, ReactNode, useState, useEffect } from 'react'
import { firebase } from '../config/firebaseConfig'

interface IUser {
  email: string
}

interface IAuth {
  user: firebase.User | null
  login: () => void
  logout: () => void
  register: () => void
}

export const AuthContext = createContext<Partial<IAuth>>({})
AuthContext.displayName = 'AuthContext'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null as firebase.User | null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [])

  function login() {}
  function logout() {}
  function register() {}

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
