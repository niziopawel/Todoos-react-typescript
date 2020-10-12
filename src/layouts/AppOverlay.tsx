import styled from '@emotion/styled'

const AppOverlay = styled('div')`
  height: 100vh;
  width: 100vw;
  display: block;
  z-index: 200;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  ${({ visible }: { visible: boolean }) =>
    visible
      ? 'opacity: 1; visibility: visible'
      : 'opacity: 0; visibility: hidden;'};

  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`

export default AppOverlay
