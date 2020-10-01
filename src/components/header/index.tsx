import React, { ReactNode } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { HeaderButton, HeaderContainer, HeaderInner, ItemGroup } from './styles'

type HeaderProps = {
  children: ReactNode
}

function Header({ children }: HeaderProps) {
  const { activeTheme } = useTheme()

  return <HeaderContainer theme={activeTheme}>{children}</HeaderContainer>
}

Header.Inner = function ({ children }: { children: ReactNode }) {
  return <HeaderInner>{children}</HeaderInner>
}

type HeaderButtonProps = {
  children: ReactNode
  onClick?: () => void
}

Header.Button = function ({ children, onClick }: HeaderButtonProps) {
  return <HeaderButton onClick={onClick}>{children}</HeaderButton>
}

Header.Group = function ({ children }: { children: ReactNode }) {
  return <ItemGroup>{children}</ItemGroup>
}

export default Header
