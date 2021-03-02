/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { useSidebar } from '../context/SidebarContex'
import { useMedia } from '../hooks/useMedia'

const AppOverlay: React.FC = () => {
  const isMobile = useMedia('(max-width: 576px)')
  const { isSidebarOpen } = useSidebar()
  const isVisible = isMobile && isSidebarOpen
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        display: block;
        z-index: 200;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        ${isVisible
          ? 'opacity: 1; visibility: visible'
          : 'opacity: 0; visibility: hidden;'};

        transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      `}
    ></div>
  )
}

export default AppOverlay
