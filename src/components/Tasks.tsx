import React from 'react'
import { useAuth } from '../context/AuthContext'
import { navigate } from '@reach/router'

const Tasks: React.FC = () => {
  const { logout } = useAuth()

  function handleClick() {
    logout()
    navigate('/')
  }

  return (
    <>
      <h1>ToDo App</h1>
      <button onClick={handleClick}>Logout</button>
    </>
  )
}

export default Tasks
