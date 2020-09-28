import React, { ReactNode } from 'react'
import {
  StyledForm,
  FormTitle,
  FormInput,
  FormGroup,
  ErrorMessage,
  FormLabel,
  TextSmall,
  FormSeparator,
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

type FormGroupProps = {
  children: ReactNode
  flexDir: 'column' | 'row'
}

Form.Group = function (props: FormGroupProps) {
  return <FormGroup flexDir={props.flexDir}>{props.children}</FormGroup>
}

Form.Title = function ({ children }: { children: ReactNode }) {
  return <FormTitle>{children}</FormTitle>
}

Form.Label = function (props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <FormLabel {...props}>{props.children}</FormLabel>
}

Form.TextSmall = function ({ children }: { children: ReactNode }) {
  return <TextSmall>{children}</TextSmall>
}

Form.Separator = function ({ children }: { children: ReactNode }) {
  return (
    <FormSeparator>
      <span></span>
      <span>{children}</span>
      <span></span>
    </FormSeparator>
  )
}

type ErrorProps = {
  children: ReactNode
  color: string
}

Form.ErrorMessage = function ({ children, color }: ErrorProps) {
  return <ErrorMessage color={color}>{children}</ErrorMessage>
}

export default Form
