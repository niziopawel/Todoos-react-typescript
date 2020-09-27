/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState, useRef, useEffect } from 'react'
import Form from '../components/form'
import Spinner from '../components/Spinner'
import { validateEmail, validatePassword } from './utils/validation'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'
import Button from '../components/Button'

const SignUp: React.FC = () => {
  const { activeTheme } = useTheme()
  const { register, serverError, isLoading } = useAuth()
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const isFormValid = validateForm()

    if (isFormValid) {
      console.log('register')
      register(formValues.email, formValues.password)
    }
  }
  function validateForm() {
    const { email, password, confirmPassword } = formValues

    const emailErr = validateEmail(email)
    const passwordErr = validatePassword(password)
    const confirmPasswordErr =
      password === confirmPassword
        ? ''
        : 'Please make sure your passwords match.'

    setErrors({
      email: emailErr,
      password: passwordErr,
      confirmPassword: confirmPasswordErr,
    })

    if (!emailErr && !passwordErr && !confirmPasswordErr) {
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
        <Form.Title>Sign Up</Form.Title>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Input
            ref={inputRef}
            id="email"
            type="text"
            name="email"
            value={formValues.email}
            onChange={e =>
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
            id="password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={e =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          {errors.password && (
            <Form.ErrorMessage color={activeTheme.errColor}>
              {errors.password}
            </Form.ErrorMessage>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
          <Form.Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={e =>
              setFormValues({ ...formValues, confirmPassword: e.target.value })
            }
          />
          {errors.confirmPassword && (
            <Form.ErrorMessage color={activeTheme.errColor}>
              {errors.confirmPassword}
            </Form.ErrorMessage>
          )}
        </Form.Group>
        <Button type="submit" variant="primary">
          Log in
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

export default SignUp
