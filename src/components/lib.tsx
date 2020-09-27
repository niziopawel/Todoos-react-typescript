/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { theme } from '../lib/theme'
import styled from '@emotion/styled'
import { FcTodoList } from 'react-icons/fc'

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

export { Logo }
