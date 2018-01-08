import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'

import '../node_modules/tachyons/css/tachyons.css'

import apolloClient from './apolloClient'
import registerServiceWorker from './registerServiceWorker'
import App from './App'

render(
  <ApolloProvider client={apolloClient}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker()
