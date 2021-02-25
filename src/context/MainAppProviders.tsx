import React from 'react'
import SidebarProvider from './SidebarContex'
import ProjectsProvider from './ProjectsContext'
import ThemeProvider from './ThemeContext'

const MainAppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <ProjectsProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </ProjectsProvider>
    </ThemeProvider>
  )
}

export default MainAppProviders
