import React from 'react'
import { signOut } from './services/auth'

function App() {
  async function handleLogoutBtnClick() {
    try {
      await signOut()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1>ToDo App</h1>
      <button onClick={handleLogoutBtnClick}>Logout</button>
    </>
  )
}

export default App
