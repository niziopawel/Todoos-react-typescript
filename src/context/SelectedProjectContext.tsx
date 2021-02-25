import React from 'react'

type SelectedProjectContextType = {
  selectedProject: string
  setSelectedProject: (projectId: string) => void
}

const initialState = {
  selectedProject: 'INBOX',
  setSelectedProject: () => {},
}

const SelectedProjectContext = React.createContext<SelectedProjectContextType>(
  initialState,
)

const SelectedProjectsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [selectedProject, setSelectedProject] = React.useState('INBOX')

  return (
    <SelectedProjectContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </SelectedProjectContext.Provider>
  )
}

export function useSelectedProject() {
  const context = React.useContext(SelectedProjectContext)

  if (context === undefined) {
    throw new Error(
      'useSelectedProject must be used within a SelectedProjectProvider',
    )
  }
  return context
}

export default SelectedProjectsProvider
