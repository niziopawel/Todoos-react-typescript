import styled from '@emotion/styled'
import { mq } from '../../lib/mediaQueries'

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const HeadingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  & > * {
    margin-bottom: 20px;
    ${mq['tablet']} {
      margin-bottom: 20px;
    }
  }
`
export { HeadingBox, HomeContainer }
