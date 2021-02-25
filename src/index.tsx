import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AuthProvider from './context/AuthContext'
import * as serviceWorker from './serviceWorker'
import { Global } from '@emotion/core'
import reset from './lib/reset'

ReactDOM.render(
  <React.Fragment>
    <Global styles={reset} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.Fragment>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
