import React from 'react'
import LoadingPage from './LoadingPage'
import Button from '../components/Button'

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl">With todoos you can organise everything</h1>
      <Button primary onClick={() => console.log('asdf')}>
        Get started
      </Button>
      <LoadingPage />
    </div>
  )
}

export default Home
