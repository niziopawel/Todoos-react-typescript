import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Tasks from '../../components/tasks'

type ProjectTasksProps = {} & RouteComponentProps

const ProjectTasks: React.FC<ProjectTasksProps> = () => {
  return <Tasks />
}

export default ProjectTasks
