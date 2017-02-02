import React, { Component } from 'react'
import { Link } from 'react-router'
import './PatternList.css'

class PatternList extends Component {
  render() {
    return (
      <section className='pattern-card'>
        <h3>{'<>' + this.props.title + '<>'}</h3>
        <Link to={'/pattern-detail/' + this.props.id}>go to pattern</Link>
        <h5>By: <a href={`${this.props.sourceURL}`} target="_blank">{this.props.creator}</a></h5>
      </section>
    )
  }
}

const { string } = React.PropTypes
PatternList.propTypes = {
  title: string,
  id: string,
  sourceURL: string,
  creator: string
}

export default PatternList
