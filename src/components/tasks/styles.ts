import styled from '@emotion/styled'

const TaskContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  position: sticky;
  transition: margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`

const Content = styled('div')``

export { TaskContainer, Content }
