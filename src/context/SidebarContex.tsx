import React from 'react'
import { useMedia } from '../hooks/useMedia'

type SidebarContextType = {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}
const initialState = {
  isSidebarOpen: true,
  toggleSidebar: () => {},
}
const SidebarContext = React.createContext<SidebarContextType>(initialState)

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMedia('(max-width: 576px)')

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(() => {
    return isMobile ? false : true
  })

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen)
  }, [isSidebarOpen, setIsSidebarOpen])

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)

  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export default SidebarProvider
