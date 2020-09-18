/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import Button from '../components/Button'
import { Container } from '../components/layouts'
import { mq } from '../lib/mediaQueries'
import { navigate } from '@reach/router'
import { ReactComponent as TodoSVG } from '../svg/todo.svg'

const HomeContent = styled.div`
  height: 100%;
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

const Home: React.FC = () => {
  return (
    <Container>
      <HomeContent>
        <HeadingBox>
          <h1 className="text-4xl">Todoos</h1>
          <h5>With Todoos you can organise everything</h5>
          <Button primary type="button" onClick={() => navigate('/login')}>
            Get started
          </Button>
        </HeadingBox>
        <TodoSVG
          css={css`
            max-width: 300px;
            height: auto;

            ${mq['phone']} {
              max-width: 600px;
            }

            ${mq['tablet']} {
              max-width: 900px;
            }
          `}
        />
      </HomeContent>
    </Container>
  )
}

export default Home
