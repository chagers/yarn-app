import React, { Component } from 'react'
import './PatternDetail.css'

class PatternDetail extends Component {
  render() {
    return (
      <div className='pattern-detail'>
        <h1>{this.props.title}</h1>
        <p>By: {this.props.creator}</p>
        <h2>Materials:</h2>
        <ul>
          <li>{this.props.materials}</li>
          <li>{this.props.materials}</li>
        </ul>
      </div>
    )
  }
}

const { string, shape, arrayOf, object } = React.PropTypes
PatternDetail.propTypes = {
  pattern: shape({
    id: string,
    title: string,
    creator: string,
    materials: arrayOf(object)
  })
}

export default PatternDetail

