import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Blog from './Blog'
import About from './About'

const App = () => (
  <div>
    <Header />
    <Route exact path="/" component={Blog} />
    <Route path="/about" component={About} />
  </div>
)

export default App
