import styled from '@emotion/styled'
import { mq } from '../../lib/mediaQueries'

const Container = styled('div')`
  display: flex;
  flex-flow: nowrap column;
  max-width: 400px;
  margin: 40px auto;
  border: 0;

  ${mq['phone']} {
    border: 1px solid #dbdbdb;
    border-radius: 4px;
  }
`
const SocialBtnsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
  margin-bottom: 10px;

  & > * {
    margin: 0 20px;
  }
`

const RedirectContainer = styled('div')`
  align-self: center;
  margin: 20px 0;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export { Container, SocialBtnsContainer, RedirectContainer }
