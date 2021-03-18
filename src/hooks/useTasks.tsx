import { useQuery } from 'react-query'
import { firebase, db } from '../config/firebaseConfig'

type Task = {
  taskId: string
  title: string
  projectId: string
  description: string
  archived: boolean
  schedule: Date
  created_at: Date
}

const taskConverter = {
  toFirestore(task: Task): firebase.firestore.DocumentData {
    return task
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions,
  ): Task {
    const data = snapshot.data(options)

    return {
      taskId: snapshot.id,
      title: data.title,
      description: data.description,
      projectId: data.projectId,
      archived: data.archived,
      schedule: new Date(data.schedule.seconds * 1000),
      created_at: new Date(data.created_at.seconds * 1000),
    }
  },
}

async function fetchTasks(projectId: string) {
  const projectSnapshot = await db
    .collection('tasks')
    .where('projectId', '==', projectId)
    .withConverter(taskConverter)
    .get()

  return projectSnapshot.docs.map(project => project.data())
}

export function useTasks(projectId: string) {
  return useQuery<Task[], firebase.FirebaseError>(
    ['tasks', projectId],
    () => fetchTasks(projectId),
    {
      staleTime: 10000,
    },
  )
}
