import styled from '@emotion/styled'
import { ThemeType } from '../lib/theme'

const AppContainer = styled('div')`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }: { theme: ThemeType }) => `
    background: ${theme.bgColor};
    color: ${theme.onBackgroundColor};
  `}
`

export default AppContainer
