import React from 'react'
import { loginUserWithEmailAndPassword } from '../services/auth'

const Login: React.FC = () => {
  async function handleLoginBtnClick() {
    const email = 'niziopawel1@gmail.com'
    const password = 'password'

    try {
      await loginUserWithEmailAndPassword(email, password)
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
