import React from 'react'
import Sidebar from '../components/sidebar'
import { useSidebar } from '../context/SidebarContex'

const AppSidebar: React.FC = () => {
  const { isSidebarOpen } = useSidebar()

  return <Sidebar isOpen={isSidebarOpen}></Sidebar>
}

export default AppSidebar
