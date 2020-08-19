import React from 'react'
import { RouteComponentProps } from '@reach/router'

type Props = { component: React.ComponentType } & RouteComponentProps

const Route: React.FC<Props> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
)

export default Route
