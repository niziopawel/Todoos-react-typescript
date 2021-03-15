import React, { useContext } from 'react'
import {
  MenuItemContainer,
  MenuItemContent,
  MenuItemIconContainer,
  MenuLink,
} from './styles'
import SidebarContext from './SidebarContext'
import { useTheme } from '../../context/ThemeContext'

type MenuItemProps = {
  id: string
  icon?: React.ReactNode
  children?: React.ReactNode
  path: string
}

const MenuItem = ({ id, icon, children, path }: MenuItemProps) => {
  const { activeItemId, changeActiveItem } = useContext(SidebarContext)
  const { activeTheme } = useTheme()
  const isItemActive = id === activeItemId

  return (
    <MenuItemContainer
      theme={activeTheme}
      isActive={isItemActive}
      onClick={() => changeActiveItem(id)}
    >
      <MenuLink to={path}>
        {icon ? <MenuItemIconContainer>{icon}</MenuItemIconContainer> : null}
        <MenuItemContent isActive={isItemActive}>{children}</MenuItemContent>
      </MenuLink>
    </MenuItemContainer>
  )
}

export default MenuItem
