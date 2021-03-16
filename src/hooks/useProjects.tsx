import { useQuery } from 'react-query'
import { db, firebase } from '../config/firebaseConfig'

export type Project = {
  name: string
  userId: string
  archived?: boolean
  projectId: string
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
      projectId: snapshot.id,
      name: data.name,
      userId: data.userId,
      archived: data.archived,
    }
  },
}

async function fetchProjects(userId: string | undefined) {
  const projectSnapshot = await db
    .collection('projects')
    .where('userId', '==', userId)
    .withConverter(projectConverter)
    .get()

  return projectSnapshot.docs.map(project => project.data())
}

export function useProjects(userId: string | undefined) {
  if (userId) {
    return useQuery<Project[], firebase.FirebaseError>(
      ['projects', userId],
      () => fetchProjects(userId),
      {
        staleTime: 10000,
      },
    )
  } else {
    throw new Error('User uid is undefined')
  }
}
