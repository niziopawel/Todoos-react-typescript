import React, { useEffect } from 'react'
import { db, firebase } from '../config/firebaseConfig'
import { useAuth } from './AuthContext'
import useAsync from '../hooks/useAsync'

type Project = {
  name: string
  userId: string
  archived: boolean
  created_at: Date
}

const projectConverter = {
  toFirestore(project: Project): firebase.firestore.DocumentData {
    return {
      name: project.name,
      userId: project.userId,
      archived: project.archived,
      created_at: project.created_at,
    }
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
      created_at: new Date(data.created_at.seconds * 1000),
    }
  },
}

type ProjectsContextType = {
  projects: Project[] | [] | null
  error: string | null
  isLoading: boolean
}

const initialState = {
  projects: [],
  error: '',
  isLoading: false,
}

const ProjectsContext = React.createContext<ProjectsContextType>(initialState)

const ProjectsProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()
  const {
    data: projects,
    setData: setProjects,
    error,
    setError,
    isLoading,
  } = useAsync<Project[], string>()

  const fetchProjects = React.useCallback(async () => {
    try {
      const projectSnapshot = await db
        .collection('projects')
        .where('userId', '==', user?.uid)
        .withConverter(projectConverter)
        .get()

      const allProjects = projectSnapshot.docs.map(project => project.data())
      allProjects !== undefined ? setProjects(allProjects) : setProjects([])
    } catch (error) {
      setError(error.message)
    }
  }, [user, setProjects, setError])

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      fetchProjects()
    }

    return () => {
      isMounted = false
    }
  }, [fetchProjects])

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        error,
        isLoading,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}

export function useProjects() {
  const context = React.useContext(ProjectsContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export default ProjectsProvider
