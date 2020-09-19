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
        <h3>Log in</h3>
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
            type="password"
            name="password"
            id="password"
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

        <Button type="submit" primary>
          Log In
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

export default SignIn
