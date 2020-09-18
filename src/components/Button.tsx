/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from '../context/ThemeContext'
import React, { ReactNode } from 'react'

type ButtonProps = {
  onClick?: (event: React.MouseEvent) => void
  type?: 'button' | 'submit'
  children: ReactNode
  primary?: boolean
  outlined?: boolean
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  children,
  primary,
  outlined,
  disabled,
}) => {
  const { activeTheme } = useTheme()
  const { primaryColor, onPrimaryColor } = activeTheme

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      css={css`
        padding: 0.6rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
          0px 2px 4px -0.7px rgba(0, 0, 0, 0.25);

        ${primary &&
        `
          background: ${primaryColor};
          color: ${onPrimaryColor};

          &:hover {
            background: #710EFF;
          }
          &:focus {
            background: #5D00E2;
            outline: none;
          }
        `}
        ${outlined &&
        `
          background: ${onPrimaryColor};
          color: ${primaryColor};
          border: 1.5px solid ${primaryColor}; 

          &:focus {
            outline: none;
          }
        `};
      `}
      onClick={type === 'button' ? handleClick : undefined}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
