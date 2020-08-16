import React from 'react'
import { loginUserWithEmailAndPassword } from '../services/auth'

const Login: React.FC = () => {
  async function handleLoginBtnClick() {
    const email = 'niziopawel1@gmail.com'
    const password = 'password'

    try {
      const response = await loginUserWithEmailAndPassword(email, password)
      console.log(response.user?.email)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <button onClick={handleLoginBtnClick}>Login</button>
    </div>
  )
}

export default Login
