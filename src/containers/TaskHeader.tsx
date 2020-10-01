import React from 'react'
import Header from '../components/header'
import {
  AiOutlineHome,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineSetting,
} from 'react-icons/ai'
import { BiPlus } from 'react-icons/bi'

type TaskHeaderProps = {
  isSideBarOpen: boolean
  onSideBarToggle: () => void
}

const TaskHeader: React.FC<TaskHeaderProps> = ({
  isSideBarOpen,
  onSideBarToggle,
}) => {
  return (
    <Header>
      <Header.Group>
        <Header.Button onClick={onSideBarToggle}>
          {isSideBarOpen ? (
            <AiOutlineMenuUnfold fontSize="20" />
          ) : (
            <AiOutlineMenuFold fontSize="20" />
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

export default TaskHeader
