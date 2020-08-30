/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAccusoft } from '@fortawesome/free-brands-svg-icons'
import { theme } from '../lib/theme'
import styled from '@emotion/styled'
import { useTheme } from '../context/ThemeContext'

const ErrorMessage = ({ children }: { children: ReactNode }) => {
  const { activeTheme } = useTheme()

  return (
    <div
      css={css`
        color: ${activeTheme.errColor};
        padding-top: 5px;
      `}
    >
      {children}
    </div>
  )
}

const Logo = ({ logoSize = 50 }) => {
  return (
    <div
      css={css`
        font-size: ${logoSize}px;
        color: ${theme.defaultTheme.primaryColor};
      `}
    >
      <FontAwesomeIcon icon={faAccusoft} />
    </div>
  )
}

const FormGroup = styled('div')`
  display: flex;
  flex-direction: column;
`

const Input = styled('input')`
  border: 1px solid #ddd;
  font-size: 1rem;
  border-radius: 5px;
  width: 100%;
  padding: 0.5rem 1rem;
`

export { Logo, FormGroup, Input, ErrorMessage }
