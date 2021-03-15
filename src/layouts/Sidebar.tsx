import React from 'react'
import Sidebar from '../components/sidebar'
import { useOpenSidebar } from '../context/OpenSidebarContext'
import { FaInbox, FaCalendarWeek, FaCalendarDay } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
const AppSidebar: React.FC = () => {
  const { isSidebarOpen } = useOpenSidebar()
  const { Menu, MenuItem, SubMenu } = Sidebar

  return (
    <Sidebar isOpen={isSidebarOpen} initialActiveItemId="today">
      <Menu>
        <MenuItem id="1" icon={<FaInbox size={18} />} path="app/inbox">
          Inbox
        </MenuItem>
        <MenuItem
          id="today"
          icon={<FaCalendarDay size={18} />}
          path="/app/today"
        >
          Today
        </MenuItem>
        <MenuItem
          id="upcoming"
          icon={<FaCalendarWeek size={18} />}
          path="app/upcoming"
        >
          Upcoming
        </MenuItem>
      </Menu>
      <SubMenu label="Projects">
        <MenuItem
          id="projects/12312"
          icon={<GoPrimitiveDot />}
          path="app/project/11231231"
        >
          Work
        </MenuItem>
        <MenuItem
          id="projects/12112"
          icon={<GoPrimitiveDot />}
          path="app/project/1231212"
        >
          School
        </MenuItem>
      </SubMenu>
    </Sidebar>
  )
}

export default AppSidebar
