/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/form'
import Spinner from '../../components/spinner'
import { validateEmail, validatePassword } from './utils/validation'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'
import Button from '../../components/button'
import SocialMediaBtn from '../../components/social-btns'
import { Container, RedirectContainer, SocialBtnsContainer } from './styles'

const SignUp: React.FC = () => {
  const { activeTheme } = useTheme()
  const {
    registerWithEmailAndPassword,
    error: serverError,
    isLoading,
    loginWithGmail,
  } = useAuth()

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
      registerWithEmailAndPassword(formValues.email, formValues.password)
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

    return !emailErr && !passwordErr && !confirmPasswordErr
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Title>Sign Up</Form.Title>
        <Form.Group flexDir="column">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Input
            ref={inputRef}
            id="email"
            type="text"
            name="email"
            value={formValues.email}
            onChange={e =>
              setFormValues({ ...formValues, email: e.currentTarget.value })
            }
          />
          {errors.email && (
            <Form.ErrorMessage color={activeTheme.errColor}>
              {errors.email}
            </Form.ErrorMessage>
          )}
        </Form.Group>
        <Form.Group flexDir="column">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Input
            id="password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={e =>
              setFormValues({ ...formValues, password: e.currentTarget.value })
            }
          />
          {errors.password && (
            <Form.ErrorMessage color={activeTheme.errColor}>
              {errors.password}
            </Form.ErrorMessage>
          )}
        </Form.Group>
        <Form.Group flexDir="column">
          <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
          <Form.Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={e =>
              setFormValues({
                ...formValues,
                confirmPassword: e.currentTarget.value,
              })
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
        <Form.Separator>or sign in with</Form.Separator>
      </Form>
      <SocialBtnsContainer>
        <SocialMediaBtn media="google" onClick={() => loginWithGmail()} />
        <SocialMediaBtn
          media="facebook"
          onClick={() => console.log('facebook click')}
        />
      </SocialBtnsContainer>
      <RedirectContainer>
        <h6>
          Have an account? <Link to="/signin">Sign In</Link>
        </h6>
      </RedirectContainer>
    </Container>
  )
}

export default SignUp
