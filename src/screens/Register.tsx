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

const Register: React.FC = () => {
  const { activeTheme } = useTheme()
  const { register, resError, isLoading } = useAuth()

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
        margin: 0 auto;
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
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
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
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
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
            <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
          )}
        </FormGroup>
        <Button type="submit" primary>
          Log in
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
  )
}

export default Register
