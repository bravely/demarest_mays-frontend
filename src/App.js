import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Blog from './Blog'
import About from './About'
import NotFound from './NotFound'

const App = () => (
  <div>
    <Header />
    <div className="pa3 pa5-ns center mw7 avenir">
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
