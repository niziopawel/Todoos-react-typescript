import React, { createContext, useContext, ReactNode, useState } from 'react'
import { ThemeType, theme } from '../lib/theme'

type ThemeContextType = {
  activeTheme: ThemeType
  switchTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  activeTheme: theme.defaultTheme,
  switchTheme: () => {},
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [activeTheme, setActiveTheme] = useState<ThemeType>(() => {
    const isVal = window.localStorage.getItem('theme')

    if (isVal) {
      return isVal === 'darkTheme' ? theme.darkTheme : theme.defaultTheme
    } else {
      return theme.defaultTheme
    }
  })

  function switchTheme() {
    if (activeTheme === theme.defaultTheme) {
      setActiveTheme(theme.darkTheme)
      window.localStorage.setItem('theme', 'darkTheme')
    } else {
      setActiveTheme(theme.defaultTheme)
      window.localStorage.setItem('theme', 'defaultTheme')
    }
  }
  return (
    <ThemeContext.Provider value={{ activeTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)

  return context
}

export default ThemeProvider
