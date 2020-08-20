import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { ColorTheme, ThemeType, theme } from '../lib/theme'

type ThemeContextType = {
  theme: ThemeType
  activeTheme: ColorTheme
  changeColorTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: theme,
  activeTheme: theme.defaultTheme,
  changeColorTheme: () => {},
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [activeTheme, setActiveTheme] = useState(theme.defaultTheme)

  // useEffect(() => {
  //   fetch theme from user
  //   const storedTHeme = window.localStorage.getItem('theme')
  // })

  const changeColorTheme = () => {
    activeTheme === theme.defaultTheme
      ? setActiveTheme(theme.darkTheme)
      : setActiveTheme(theme.defaultTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, activeTheme, changeColorTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)

  return context
}

export { ThemeProvider, useTheme }
