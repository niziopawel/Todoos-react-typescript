import { useState } from 'react'
import { useMedia } from './useMedia'

export function useSidebar() {
  const isMobile = useMedia('(max-width: 576px)')

  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    return isMobile ? false : true
  })

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return { isSidebarOpen, toggleSidebar }
}
