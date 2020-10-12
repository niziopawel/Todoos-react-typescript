import styled from '@emotion/styled'
import { ThemeType } from '../../lib/theme'
import { mq } from '../../lib/mediaQueries'

const SidebarContainer = styled('div')`
  height: calc(100vh - 40px);
  top: 40px;
  position: fixed;
  padding: 0 0 0 35px;
  z-index: 300;
  overflow-x: hidden;
  overflow-y: hidden;
  user-select: none !important;
  width: 300px;

  ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? 'left: 0;' : 'left: -400px;'}

  ${({ theme }: { theme: ThemeType }) => `
    background-color: ${theme.surfaceBgColor};
    color: ${theme.onSurfaceColor};
  `}

  transition: left .25s cubic-bezier(.4, 0, .2, 1);

  ${mq['phone']} {
    height: calc(100vh - 44px);
    top: 44px;
  }
`

export { SidebarContainer }
