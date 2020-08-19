import React from 'react'
import { useAuth } from '../context/AuthContext'

const Login: React.FC = () => {
  const { login, error } = useAuth()

  console.log(error)

  function handleSubmit() {
    const email = 'niziopawel1@mail.com'
    const password = 'password'

    login(email, password)
  }

  return (
    <div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
