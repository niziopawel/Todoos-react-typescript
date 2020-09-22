/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from '../context/ThemeContext'
import React, { ReactNode } from 'react'

type ButtonProps = {
  onClick?: (event: React.MouseEvent) => void
  type?: 'button' | 'submit'
  children: ReactNode
  primary?: boolean
  cancel?: boolean
  outlined?: boolean
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  children,
  primary,
  cancel,
  disabled,
}) => {
  const { activeTheme } = useTheme()
  const {
    primaryColor,
    onPrimaryColor,
    onPrimaryHover,
    onPrimaryFocus,
    bgColor,
    onBackgroundColor,
  } = activeTheme

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.currentTarget.blur()
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
        transition: all 0.1s ease-out;

        ${primary &&
        `
          background: ${primaryColor};
          color: ${onPrimaryColor};

          &:hover {
            background: ${onPrimaryHover} ;
          }
          &:focus {
            background: ${onPrimaryFocus};
            outline: none;
          }
        `}
        ${cancel &&
        `
          box-shadow: none;
          font-weight: 400;
          padding: 0;
          padding-bottom: 2px;
          border-radius: 0;
          color: ${onBackgroundColor};
          background: ${bgColor};
          
          &:hover {
            border-bottom: 2px solid ${onBackgroundColor};
          }
        `};
      `}
      onClick={type === 'button' ? e => handleClick(e) : undefined}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
