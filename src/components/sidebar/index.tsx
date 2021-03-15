import React, { useState } from 'react'
import { SidebarContainer, SidebarInner } from './styles'
import { useTheme } from '../../context/ThemeContext'
import SidebarContext from './SidebarContext'
import SubMenu from './SubMenu'
import Menu from './Menu'
import MenuItem from './MenuItem'

type SidebarProps = {
  isOpen: boolean
  onSelect?: () => void
  initialActiveItemId?: string
  children: React.ReactNode
}

function Sidebar(props: SidebarProps) {
  const { activeTheme } = useTheme()
  const { initialActiveItemId, children, isOpen } = props
  const [activeItemId, setActiveItem] = useState(initialActiveItemId)

  function changeActiveItem(id: string) {
    setActiveItem(id)
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
