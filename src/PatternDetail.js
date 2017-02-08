import React, { Component } from 'react'
import { Link } from 'react-router'
import client from './config'
import './PatternDetail.css'

class PatternDetail extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      key: props.params.id,
      pattern: {}
    }
  }
  componentDidMount () {
    client.getEntry(this.state.key)
      .then((response) => {
        console.log(response)
        this.setState({pattern: response.fields})
      })
      .catch((error) => {
        console.log("Didn't get Contentful entries", error)
      })
  }
  render() {
    const { title, creator, materials, gauge, size, pattern } = this.state.pattern
    if (title) {
      console.log(pattern)
    } else {
      console.log('blah')
      return null
    }
    let yarn = materials[0].yarn
    let tools = materials[1].tools
    let notes = this.props.pattern
    if (tools) {
      tools = tools.map((tool) => {
        return <li key={tool.toString()}>{tool}</li>
      })
    } else {
      return null
    }
    if (notes.description) {
      notes = (
        <div>
          <h2>Notes:</h2>
            <ul>
              <li>{notes.description}</li>
            </ul>
        </div>
      )
    } else {
      notes = null
    }
    return (
      <div className='pattern-detail'>
        <header className='detail-header'>
          <Link to='/'>...back to pattern list</Link>
          <h1>{title}</h1>
          <p>By: {creator}</p>
        </header>
        <div className='instructions'>
          <h2>Materials:</h2>
            <ul>
              <li>
                <h3>Recommended Yarn:</h3>
              </li>
                <ul className='materials-list'>
                  <li>Name: {yarn.name}</li>
                  <li>Content: {yarn.content}</li>
                  <li>Weight: {yarn.weight}</li>
                  <li>Length: {yarn.length}</li>
                  <li>Gauge: {yarn.gauge}</li>
                  <li>Suggested Needle: {yarn.suggestedNeedle}</li>
                  <li>Suggested Crochet Hook: {yarn.suggestedCrochetHook}</li>
                  <li>Recommended Care: {yarn.recommendedCare}</li>
                  <li><a href={yarn.link} target='_blank'>Purchase Here</a></li>
                  <li>Skein Count: {yarn.skeinCount}</li>
                  {yarn.notes ? 'Notes: ' + yarn.notes : null}
                </ul>
              <li>
                <h3>Tools:</h3>
              </li>
                <ul className='materials-list'>
                  {tools}
                </ul>
            </ul>
          <h2>Gauge:</h2>
            <ul>
              <li>{gauge.description}</li>
            </ul>
          <h2>Size:</h2>
            <ul>
              <li>{size.description}</li>
            </ul>
          {notes}
          <h2>Pattern:</h2>
            <ul>
              <li>{pattern.description}</li>
            </ul>
        </div>
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

