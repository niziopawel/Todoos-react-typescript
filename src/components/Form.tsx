import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { mq } from '../lib/mediaQueries'

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 40px 0;
  border: 0;
  flex-basis: 100%;

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

type FormTypes = {
  children: ReactNode
  onSubmit: (event: React.FormEvent) => void
}

const Form: React.FC<FormTypes> = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
}

export default Form
