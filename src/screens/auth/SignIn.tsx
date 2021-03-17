/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import Button from '../../components/button'
import Form from '../../components/form'
import Spinner from '../../components/spinner'
import { validateEmail, validatePassword } from './utils/validation'
import SocialMediaBtn from '../../components/social-btns'
import { Container, RedirectContainer, SocialBtnsContainer } from './styles'

const SignIn: React.FC = () => {
  const { activeTheme } = useTheme()
  const {
    loginWithEmailAndPassword,
    loginWithGmail,
    error: serverError,
    isLoading,
  } = useAuth()

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
      loginWithEmailAndPassword(formValues.email, formValues.password)
    }
  }

  function validateForm() {
    const emailErr = validateEmail(formValues.email)
    const passwordErr = validatePassword(formValues.password)

    setErrors({ email: emailErr, password: passwordErr })

    return emailErr === '' && passwordErr === ''
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Title>Sign In</Form.Title>
        <Form.Group flexDir="column">
          <Form.Label htmlFor="email">E-mail</Form.Label>
          <Form.Input
            ref={inputRef}
            name="email"
            id="email"
            value={formValues.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({ ...formValues, password: e.currentTarget.value })
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
        <Form.Separator>or login with</Form.Separator>
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
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </h6>
      </RedirectContainer>
    </Container>
  )
}

export default SignIn
