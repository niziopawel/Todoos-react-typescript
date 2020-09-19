/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { theme } from '../lib/theme'
import styled from '@emotion/styled'
import { FcTodoList } from 'react-icons/fc'

const ErrorMessage = styled('p')`
  color: ${({ color }: { color: string }) => color};
`

const Logo = ({ logoSize = 50 }) => {
  return (
    <div
      css={css`
        font-size: ${logoSize}px;
        color: ${theme.defaultTheme.primaryColor};
      `}
    >
      <FcTodoList />
    </div>
  )
}

const FormGroup = styled('div')`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 5px;
  }
`

const Input = styled('input')`
  border: 1px solid #ddd;
  font-size: 1rem;
  border-radius: 5px;
  width: 100%;
  padding: 0.5rem 1rem;
`

export { Logo, FormGroup, Input, ErrorMessage }
