import React from 'react'
import Tasks from '../../components/tasks'
import { useTasks } from '../../hooks/useTasks'

type ProjectTasksProps = {}

const ProjectTasks: React.FC<ProjectTasksProps> = () => {
  return <Tasks />
}

export default ProjectTasks
