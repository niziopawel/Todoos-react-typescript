import React from 'react'
import { signOut } from '../services/auth'
import { navigate } from '@reach/router'

const Tasks: React.FC = () => {
  async function handleLogoutBtnClick() {
    try {
      await signOut()
      localStorage.removeItem('User')
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  console.log('aut')
  return (
    <>
      <h1>ToDo App</h1>
      <button onClick={handleLogoutBtnClick}>Logout</button>
    </>
  )
}

export default Tasks
