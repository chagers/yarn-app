import React from 'react'
import { Router, Route } from 'react-router'
import App from './App'
import PatternDetail from './PatternDetail'
import data from '../public/data.json'

const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App} />
    <Route
      path='pattern-detail/:id'
      component={(props) => {
        const patterns = data.patterns.filter((pattern) => props.params.id === pattern.id)
        return <PatternDetail pattern={patterns[0]} {...props} key={patterns[0].id} />
      }}
    />
  </Router>
)

export default Routes
