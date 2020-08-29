/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'
import { FormGroup, Input } from './lib'
import Spinner from './Spinner'
import Form from './Form'
import styled from '@emotion/styled'

const Login: React.FC = () => {
  const { activeTheme } = useTheme()
  const { login, resError, isLoading } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error] = useState('')

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    validateForm(email, password)

    if (!error) {
      login(email, password)
    }
  }

  function validateForm(email: string, password: string) {
    //validate email/password
    //if incorrect set error state
    return true
  }

  const ErrorMessage = styled('div')`
    color: ${activeTheme.errColor};
  `
  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit} title="Log In">
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <FormGroup>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit" primary disabled={!validateForm(email, password)}>
          Log In
        </Button>

        {resError && <ErrorMessage>{resError}</ErrorMessage>}

        {isLoading && (
          <div
            css={css`
              align-self: center;
            `}
          >
            <Spinner spinnerSize={25} color={activeTheme.primaryColor} />
          </div>
        )}
      </Form>
    </React.Fragment>
  )
}

export default Login
