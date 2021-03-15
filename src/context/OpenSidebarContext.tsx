import React from 'react'
import { useMedia } from '../hooks/useMedia'

type OpenSidebarContextType = {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}
const initialState = {
  isSidebarOpen: true,
  toggleSidebar: () => {},
}
const OpenSidebarContext = React.createContext<OpenSidebarContextType>(
  initialState,
)

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMedia('(max-width: 576px)')

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(() => {
    return isMobile ? false : true
  })

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen)
  }, [isSidebarOpen, setIsSidebarOpen])

  return (
    <OpenSidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </OpenSidebarContext.Provider>
  )
}

export function useOpenSidebar() {
  const context = React.useContext(OpenSidebarContext)

  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export default SidebarProvider
