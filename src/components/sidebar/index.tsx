import React from 'react'
import { SidebarContainer } from './style'
import { useTheme } from '../../context/ThemeContext'
type SidebarProps = {
  isOpen: boolean
  onItemClick?: () => void
}

const SideBar: React.FC<SidebarProps> = ({ children, isOpen }) => {
  const { activeTheme } = useTheme()
  return (
    <SidebarContainer isOpen={isOpen} theme={activeTheme}>
      {children}
    </SidebarContainer>
  )
}

export default SideBar
