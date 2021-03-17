import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SidebarContainer, SidebarInner } from './styles'
import { useTheme } from '../../context/ThemeContext'
import SidebarContext from './SidebarContext'
import SubMenu from './SubMenu'
import Menu from './Menu'
import MenuItem from './MenuItem'

type SidebarProps = {
  isOpen: boolean
  onSelect?: () => void
  children: React.ReactNode
}

function Sidebar(props: SidebarProps) {
  const location = useLocation()
  const { activeTheme } = useTheme()
  const { children, isOpen } = props
  const initialActiveItemId = getActiveItemFromUrlParams()
  const [activeItemId, setActiveItem] = useState(initialActiveItemId)

  function changeActiveItem(id: string) {
    setActiveItem(id)
  }

  function getActiveItemFromUrlParams() {
    const pathNameParts = location.pathname.split('/')
    return pathNameParts[pathNameParts.length - 1]
  }

  return (
    <SidebarContext.Provider value={{ activeItemId, changeActiveItem }}>
      <SidebarContainer isOpen={isOpen} theme={activeTheme}>
        <SidebarInner>{children}</SidebarInner>
      </SidebarContainer>
    </SidebarContext.Provider>
  )
}

Sidebar.Menu = Menu
Sidebar.MenuItem = MenuItem
Sidebar.SubMenu = SubMenu

export default Sidebar
