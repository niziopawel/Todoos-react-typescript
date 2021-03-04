import { useQuery } from 'react-query'
import { db, firebase } from '../config/firebaseConfig'

type Project = {
  name: string
  userId: string
  archived?: boolean
}

const projectConverter = {
  toFirestore(project: Project): firebase.firestore.DocumentData {
    return project
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions,
  ): Project {
    const data = snapshot.data(options)
    return {
      name: data.name,
      userId: data.userId,
      archived: data.archived,
    }
  },
}
async function fetchProjects(userId: string) {
  const projectSnapshot = await db
    .collection('projects')
    .where('userId', '==', userId)
    .withConverter(projectConverter)
    .get()

  return projectSnapshot.docs.map(project => project.data())
}

export function useProjects(userId: string) {
  return useQuery<Project[], firebase.FirebaseError>('projects', () =>
    fetchProjects(userId),
  )
}
