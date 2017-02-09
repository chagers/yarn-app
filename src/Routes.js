import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import PatternDetail from './PatternDetail'

class Routes extends Component {
  render(props) {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/pattern-detail/:id' component={PatternDetail} />
      </Router>
    )
  }
}

export default Routes
