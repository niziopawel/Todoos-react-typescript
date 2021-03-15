import React from 'react'
import Header from '../components/header'
import {
  AiOutlineHome,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineSetting,
} from 'react-icons/ai'
import { BiPlus } from 'react-icons/bi'
import { useOpenSidebar } from '../context/OpenSidebarContext'

const AppHeader: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useOpenSidebar()
  return (
    <Header>
      <Header.Group>
        <Header.Button onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <AiOutlineMenuFold fontSize="20" />
          ) : (
            <AiOutlineMenuUnfold fontSize="20" />
          )}
        </Header.Button>
        <Header.Button>
          <AiOutlineHome fontSize="20" />
        </Header.Button>
      </Header.Group>
      <Header.Group>
        <Header.Button>
          <BiPlus fontSize="27" />
        </Header.Button>
        <Header.Button>
          <AiOutlineSetting fontSize="20" />
        </Header.Button>
      </Header.Group>
    </Header>
  )
}

export default AppHeader
