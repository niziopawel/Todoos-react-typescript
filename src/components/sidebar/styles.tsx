import styled from '@emotion/styled'
import { ThemeType } from '../../lib/theme'
import { mq } from '../../lib/mediaQueries'
import { Link } from '@reach/router'

const SidebarContainer = styled.div<{ theme: ThemeType; isOpen: boolean }>`
  height: calc(100vh - 40px);
  top: 40px;
  position: fixed;
  padding: 0 0 0 20px;
  z-index: 300;
  overflow-x: hidden;
  overflow-y: hidden;
  user-select: none !important;
  width: 300px;

  ${({ isOpen }) => (isOpen ? 'left: 0;' : 'left: -400px;')}

  ${({ theme }) => `
    background-color: ${theme.surfaceBgColor};
    color: ${theme.onSurfaceColor};
  `}

  transition: left .25s cubic-bezier(.4, 0, .2, 1);

  ${mq['phone']} {
    height: calc(100vh - 44px);
    top: 44px;
    padding: 0 0 0 35px;
  }
`
const SidebarInner = styled.div`
  margin: 20px 5px 0 0px;
`

const MenuContainer = styled.nav``

const MenuItemContainer = styled.li<{ theme: ThemeType; isActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  padding: 7px 15px 7px 7px;
  font-size: var(--text-sm);
  position: relative;

  ${({ theme, isActive }) => `
    background-color: ${isActive ? theme.onSurfaceHover : theme.surfaceBgColor};

    &:hover {
      background-color: ${theme.onSurfaceHover};
      transition: all 0.1s ease-out;
    }
  `}
`
const MenuLink = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  text-decoration: none;
  font-size: inherit;
  width: 100%;
  color: inherit;
`

const MenuItemIconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
  justify-content: center;
  font-size: var(--text-sm);
`

const MenuItemContent = styled.span`
  ${({ isActive }: { isActive: boolean }) =>
    isActive ? 'font-weight: 700' : 'font-weight: 400'}
`

const SubMenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`

const SubMenuToggleBtn = styled.button<{ theme: ThemeType }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: none;
  background: transparent !important;
  flex: 1;
  font-weight: 700;
  padding: 10px 0px;

  outline: none;

  ${({ theme }) => `
    color: ${theme.onSurfaceColor};
  `}
`

const DropdownIconContainer = styled.div`
  color: white;
  width: 30px;
  display: flex;
  align-self: center;
`

export {
  SidebarContainer,
  MenuItemContainer,
  MenuContainer,
  SidebarInner,
  SubMenuContainer,
  MenuItemContent,
  MenuItemIconContainer,
  SubMenuToggleBtn,
  DropdownIconContainer,
  MenuLink,
}
