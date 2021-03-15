import React from 'react'
import { MenuContainer } from './styles'

type MenuProps = {
  children: React.ReactNode
}

function Menu(props: MenuProps) {
  return (
    <MenuContainer>
      <ul>{props.children}</ul>
    </MenuContainer>
  )
}

export default Menu
