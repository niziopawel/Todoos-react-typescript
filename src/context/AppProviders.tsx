import React from 'react'
import OpenSidebarProvider from './OpenSidebarContext'
import ThemeProvider from './ThemeContext'
const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <OpenSidebarProvider>{children}</OpenSidebarProvider>
    </ThemeProvider>
  )
}

export default AppProviders
