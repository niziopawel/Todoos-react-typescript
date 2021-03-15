/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'
import {
  SubMenuContainer,
  SubMenuToggleBtn,
  DropdownIconContainer,
} from './styles'
import { useTheme } from '../../context/ThemeContext'
import { FaChevronRight } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'

type SubMenuProps = {
  children: React.ReactNode
  label: string
}

function SubMenu(props: SubMenuProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { activeTheme } = useTheme()

  return (
    <SubMenuContainer>
      <SubMenuToggleBtn
        onClick={() => setIsExpanded(!isExpanded)}
        theme={activeTheme}
      >
        <DropdownIconContainer>
          <FaChevronRight
            height={16}
            width={16}
            css={css`
              ${isExpanded ? `transform: rotate(90deg)` : ''};
              transition: transform 0.15s ease-out;
              color: ${activeTheme.onSurfaceColor};
            `}
          />
        </DropdownIconContainer>
        {props.label}
      </SubMenuToggleBtn>
      <AnimatePresence>
        {isExpanded && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            exit={{ opacity: 0, y: -15 }}
          >
            <ul>{props.children}</ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </SubMenuContainer>
  )
}

export default SubMenu
