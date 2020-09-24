/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState } from 'react'
import Form from '../components/Form'
import { ErrorMessage, Input } from '../components/lib'
import { FormGroup } from '../components/lib'
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
        <h3>Register</h3>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="text"
            name="email"
            value={formValues.email}
            onChange={e =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
          {errors.email && (
            <ErrorMessage color={activeTheme.errColor}>
              {errors.email}
            </ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={e =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          {errors.password && (
            <ErrorMessage color={activeTheme.errColor}>
              {errors.password}
            </ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={e =>
              setFormValues({ ...formValues, confirmPassword: e.target.value })
            }
          />
          {errors.confirmPassword && (
            <ErrorMessage color={activeTheme.errColor}>
              {errors.confirmPassword}
            </ErrorMessage>
          )}
        </FormGroup>
        <Button type="submit" variant="primary">
          Log in
        </Button>
        {serverError && (
          <ErrorMessage color={activeTheme.errColor}>
            {serverError}
          </ErrorMessage>
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
