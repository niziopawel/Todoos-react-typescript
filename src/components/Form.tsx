import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { mq } from '../lib/mediaQueries'

const FormContainer = styled('div')`
  display: flex;
  justify-content: center;
`

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 40px 0;
  border: 0;
  flex-basis: 100%;
  max-width: 400px;

  & > * {
    margin-bottom: 15px;
  }

  ${mq['phone']} {
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 20px;

    & > * {
      margin-bottom: 20px;
    }
  }
`

const StyledFormTitle = styled('h2')`
  align-self: center;
`

type FormTypes = {
  title: string
  children: ReactNode
  onSubmit: (event: React.FormEvent) => void
}

const Form: React.FC<FormTypes> = ({ title, children, onSubmit }) => {
  return (
    <FormContainer>
      <StyledForm onSubmit={onSubmit}>
        <StyledFormTitle>{title}</StyledFormTitle>
        {children}
      </StyledForm>
    </FormContainer>
  )
}

export default Form
