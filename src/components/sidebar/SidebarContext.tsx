import { createContext } from 'react'

type SidebarContextType = {
  activeItemId: string | undefined
  changeActiveItem: (id: string) => void
}

const initialState = {
  activeItemId: '',
  changeActiveItem: () => {},
}
const SidebarContext = createContext<SidebarContextType>(initialState)

export default SidebarContext
