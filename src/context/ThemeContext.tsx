import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { ColorTheme, theme } from '../lib/theme'

type ThemeContextType = {
  activeTheme: ColorTheme
  switchTheme: () => void
  resetThemeToDefault: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  activeTheme: theme.defaultTheme,
  switchTheme: () => {},
  resetThemeToDefault: () => {},
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [activeTheme, setActiveTheme] = useState(theme.defaultTheme)

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme')
    if (
      (storedTheme !== null && storedTheme === 'darkTheme') ||
      storedTheme === 'defaultTheme'
    ) {
      setActiveTheme(theme[storedTheme])
    } else {
      setActiveTheme(theme.defaultTheme)
    }
  }, [])

  function switchTheme() {
    if (activeTheme === theme.defaultTheme) {
      setActiveTheme(theme.darkTheme)
      window.localStorage.setItem('theme', 'darkTheme')
    } else {
      setActiveTheme(theme.defaultTheme)
      window.localStorage.setItem('theme', 'defaultTheme')
    }
  }
  function resetThemeToDefault() {
    setActiveTheme(theme.defaultTheme)
  }

  return (
    <ThemeContext.Provider
      value={{ activeTheme, switchTheme, resetThemeToDefault }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)

  return context
}

export { ThemeProvider, useTheme }
