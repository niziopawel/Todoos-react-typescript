import React from 'react'
import Sidebar from '../components/sidebar'
import { useOpenSidebar } from '../context/OpenSidebarContext'
import { FaInbox, FaCalendarWeek, FaCalendarDay } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import type { Project } from '../hooks/useProjects'

type AppSidebarProps = {
  projectsData: Project[]
}

const AppSidebar: React.FC<AppSidebarProps> = ({ projectsData }) => {
  const { isSidebarOpen } = useOpenSidebar()
  const { Menu, MenuItem, SubMenu } = Sidebar

  const inboxProjectId = getInboxProjectId()
  const restProjects = projectsData.filter(
    project => project.projectId !== inboxProjectId,
  )

  function getInboxProjectId() {
    const inboxProject = projectsData.find(
      project => project.name.toLowerCase() === 'inbox',
    )

    return inboxProject?.projectId
  }

  return (
    <Sidebar isOpen={isSidebarOpen} initialActiveItemId="today">
      <Menu>
        <MenuItem
          id="1"
          icon={<FaInbox size={18} />}
          path={`project/${getInboxProjectId()}`}
        >
          Inbox
        </MenuItem>
        <MenuItem id="today" icon={<FaCalendarDay size={18} />} path="/today">
          Today
        </MenuItem>
        <MenuItem
          id="upcoming"
          icon={<FaCalendarWeek size={18} />}
          path="/upcoming"
        >
          Upcoming
        </MenuItem>
      </Menu>
      <SubMenu label="Projects">
        <>
          {!restProjects.length && (
            <span className="text-sm">You have no projects.</span>
          )}
          {restProjects.map(({ projectId, name }) => (
            <MenuItem
              id={projectId}
              path={`project/${projectId}`}
              icon={<GoPrimitiveDot />}
              key={projectId}
            >
              {name}
            </MenuItem>
          ))}
        </>
      </SubMenu>
    </Sidebar>
  )
}

export default AppSidebar
