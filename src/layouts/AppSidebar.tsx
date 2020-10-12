import React from 'react'
import Sidebar from '../components/sidebar'

type AppSidebarProps = {
  isOpen: boolean
}

const AppSidebar: React.FC<AppSidebarProps> = ({ isOpen }) => {
  return <Sidebar isOpen={isOpen}></Sidebar>
}

export default AppSidebar
