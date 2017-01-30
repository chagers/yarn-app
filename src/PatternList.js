import React, { Component } from 'react'
import './PatternList.css'

class PatternList extends Component {
  render() {
    return (
      <div className="pattern-card">
        <section>
          <h4>{this.props.title}</h4>
          <h5>By: <a href={`${this.props.sourceURL}`} target="_blank">{this.props.creator}</a></h5>
        </section>
      </div>
    )
  }
}

const { string, shape } = React.PropTypes
PatternList.propTypes = {
  pattern: shape({
    id: string,
    title: string,
    sourceURL: string,
    creator: string
  })
}

export default PatternList
