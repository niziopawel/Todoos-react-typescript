import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Tasks from '../../components/tasks'

type TodayTasksProps = {} & RouteComponentProps

const TodayTasks: React.FC<TodayTasksProps> = () => {
  return <Tasks />
}

export default TodayTasks
