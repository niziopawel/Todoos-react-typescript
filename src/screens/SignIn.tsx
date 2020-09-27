/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import Button from '../components/Button'
import Form from '../components/form'
import Spinner from '../components/Spinner'
import { validateEmail, validatePassword } from './utils/validation'

const SignIn: React.FC = () => {
  const { activeTheme } = useTheme()
  const { login, serverError, isLoading } = useAuth()
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const isFormValid = validateForm()

    if (isFormValid) {
      login(formValues.email, formValues.password)
    }
  }

  function validateForm() {
    const emailErr = validateEmail(formValues.email)
    const passwordErr = validatePassword(formValues.password)

    setErrors({ email: emailErr, password: passwordErr })

    if (emailErr === '' && passwordErr === '') {
      return true
    } else return false
  }

  return (
    <div
      css={css`
        max-width: 400px;
        margin: 40px auto;
      `}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Title>Sign In</Form.Title>
        <Form.Group>
          <Form.Label htmlFor="email">E-mail</Form.Label>
          <Form.Input
            ref={inputRef}
            name="email"
            id="email"
            value={formValues.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
          {errors.email && (
            <Form.ErrorMessage color={activeTheme.errColor}>
              {errors.email}
            </Form.ErrorMessage>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          {errors.password && (
            <Form.ErrorMessage color={activeTheme.errColor}>
              {errors.password}
            </Form.ErrorMessage>
          )}
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign in
        </Button>
        {serverError && (
          <Form.ErrorMessage color={activeTheme.errColor}>
            {serverError}
          </Form.ErrorMessage>
        )}

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
  )
}

export default SignIn
