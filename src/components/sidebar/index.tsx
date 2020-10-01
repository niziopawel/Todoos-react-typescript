import React from 'react'
import { SideBarContainer } from './style'

const SideBar: React.FC = ({ children }) => {
  return <SideBarContainer>{children}</SideBarContainer>
}

export default SideBar
