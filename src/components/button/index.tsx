import styled from '@emotion/styled'
import { useTheme } from '../../context/ThemeContext'
import { ThemeType } from '../../lib/theme'
import React, { ReactNode } from 'react'

type ButtonSize = 'big' | 'medium' | 'small'
type ButtonVariants = 'primary' | 'secondary'
type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit'
  children: ReactNode
  variant: ButtonVariants
  disabled?: boolean
  size?: ButtonSize
  theme?: ThemeType
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.5em 1em;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 2px 4px -0.7px rgba(0, 0, 0, 0.25);
  transition: all 0.1s ease-out;

  ${({ size }) => {
    switch (size) {
      case 'big':
        return `font-size: 1.3rem; border-radius: 8px;`
      case 'medium':
        return `font-size: 1rem;`
      case 'small':
        return 'font-size: 0.8rem; letter-spacing: 1px;'
    }
  }}

  ${({ disabled, variant, theme }) => {
    if (!disabled) {
      switch (variant) {
        case 'primary':
          return `
            background: ${theme.primaryColor};
            color: ${theme.onPrimaryColor};

            &:hover {
              background: ${theme.onPrimaryHover};
            }
            &:focus {
              background: ${theme.onPrimaryFocus};    
            }
        `
        case 'secondary':
          return `
            box-shadow: none;
            font-weight: 400;
            padding: 0;
            padding-bottom: 2px;
            border-radius: 0;
            color: ${theme.onBackgroundColor};
            background: ${theme.bgColor};

            &:hover {            
              border-bottom: 2px solid ${theme.onBackgroundColor};
            }
          `
      }
    } else return `background: #ccc; color: #fff`
  }}
`

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = 'medium',
  variant,
  type = 'submit',
  disabled,
}) => {
  const { activeTheme } = useTheme()

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.currentTarget.blur()
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <StyledButton
      theme={activeTheme}
      onClick={type === 'button' ? handleClick : undefined}
      size={size}
      variant={variant}
      type={type}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

export default Button
