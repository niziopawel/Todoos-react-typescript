import React from 'react'
import styled from '@emotion/styled'
import Spinner from '../../components/spinner'
import { FcTodoList } from 'react-icons/fc'

const Container = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 5px;
  }
`

const LandingPage: React.FC = () => {
  return (
    <Container>
      <FcTodoList fontSize={100} />
      <Spinner spinnerSize={30} color="#3F51B5" />
    </Container>
  )
}

export default LandingPage
