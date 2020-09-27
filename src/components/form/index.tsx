import React, { ReactNode } from 'react'
import {
  StyledForm,
  FormTitle,
  FormInput,
  FormGroup,
  ErrorMessage,
  FormLabel,
} from './style'

type FormProps = {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent) => void
}

function Form({ children, onSubmit }: FormProps) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
}

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>

Form.Input = React.forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return <FormInput ref={ref} {...props} />
  },
)

Form.Group = function ({ children }: { children: ReactNode }) {
  return <FormGroup>{children}</FormGroup>
}

Form.Title = function ({ children }: { children: ReactNode }) {
  return <FormTitle>{children}</FormTitle>
}

Form.Label = function (props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <FormLabel {...props}>{props.children}</FormLabel>
}

type ErrorProps = {
  children: ReactNode
  color: string
}

Form.ErrorMessage = function FormErrorMessage({ children, color }: ErrorProps) {
  return <ErrorMessage color={color}>{children}</ErrorMessage>
}

export default Form
