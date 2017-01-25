import React, { Component } from 'react'
import preload from '../public/data.json'

class PatternList extends Component {
  render() {
    return (
      <div>
        {preload.patterns.map((pattern) => {
          return (
            <div className="pattern-card" key={pattern.id}>
              <h4>{pattern.title}</h4>
              <h5>By: <a href={`${pattern.sourceURL}`} target="_blank">{pattern.creator}</a></h5>
            </div>
          )
        })}
      </div>
    )
  }
}

export default PatternList
