/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import Button from '../components/Button'
import { FormGroup, Input } from '../components/lib'
import Spinner from '../components/Spinner'
import Form from '../components/Form'
import { ErrorMessage } from '../components/lib'
import { validateEmail, validatePassword } from './utils/validation'

const Login: React.FC = () => {
  const { activeTheme } = useTheme()
  const { login, resError, isLoading } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const isFormValid = validateForm()

    if (isFormValid) {
      login(email, password)
    }
  }

  function validateForm() {
    const emailErr = validateEmail(email)
    const passwordErr = validatePassword(password)

    setEmailError(emailErr)
    setPasswordError(passwordErr)

    if (emailErr === '' && passwordErr === '') {
      return true
    } else return false
  }

  return (
    <React.Fragment>
      <div
        css={css`
          max-width: 400px;
          margin: 0 auto;
        `}
      >
        <Form onSubmit={handleSubmit}>
          <h3>Log in</h3>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onBlur={() => setEmailError(validateEmail(email))}
            />
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onBlur={() => setPasswordError(validatePassword(password))}
            />
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          </FormGroup>

          <Button type="submit" primary>
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
      </div>
    </React.Fragment>
  )
}

export default Login
