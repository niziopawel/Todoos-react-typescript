/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Button from '../components/Button'
import { Container } from '../components/layouts'
import { Logo } from '../components/lib'
import { mq } from '../lib/mediaQueries'
import { navigate } from '@reach/router'

// const HomeNav: React.FC = () => {

// }

const Home: React.FC = () => {
  return (
    <Container>
      <div
        css={css`
          height: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;

          & > div,
          h1,
          h5 {
            margin-bottom: 20px;

            ${mq['tablet']} {
              margin-bottom: 30px;
            }
          }
        `}
      >
        <Logo logoSize={80} />
        <h1 className="text-4xl">Todoos</h1>
        <h5>With Todoos you can organise everything</h5>
        <Button primary type="button" onClick={() => navigate('/login')}>
          Get started
        </Button>
      </div>
    </Container>
  )
}

export default Home
