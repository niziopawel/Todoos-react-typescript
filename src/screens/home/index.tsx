/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Button from '../../components/button'
import { mq } from '../../lib/mediaQueries'
import { useHistory } from 'react-router-dom'
import { ReactComponent as TodoSVG } from '../../svg/todo.svg'
import { HomeContainer, HeadingBox } from './styles'

const Home: React.FC = () => {
  const history = useHistory()
  return (
    <HomeContainer>
      <HeadingBox>
        <h1 className="text-4xl">Todoos</h1>
        <h5>With Todoos you can organise everything</h5>
        <Button
          variant="primary"
          type="button"
          onClick={() => history.push('/signin')}
        >
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
    </HomeContainer>
  )
}

export default Home
