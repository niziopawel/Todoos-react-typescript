import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Tasks from '../../components/tasks'
import { useParams } from '@reach/router'
import { useTasks } from '../../hooks/useTasks'

type ProjectTasksProps = {} & RouteComponentProps

const ProjectTasks: React.FC<ProjectTasksProps> = () => {
  const { projectId }: { projectId: string } = useParams()
  const { data } = useTasks(projectId)

  return <Tasks />
}

export default ProjectTasks
