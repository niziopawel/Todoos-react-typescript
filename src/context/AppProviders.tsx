import React from 'react'
import SidebarProvider from './SidebarContex'
import ThemeProvider from './ThemeContext'

const MainAppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  )
}

export default MainAppProviders
