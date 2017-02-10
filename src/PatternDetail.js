import React, { Component } from 'react'
import { Link } from 'react-router'
import client from './config'
import marked from 'marked'
import './PatternDetail.css'

class PatternDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      key: props.params.id,
      pattern: {},
      yarn: {}
    }
  }
  componentWillMount () {
    client.getEntry(this.state.key)
      .then((response) => {
        this.setState({pattern: response.fields})
        this.getYarn()
      })
      .catch((error) => {
        console.log("Didn't get pattern", error)
      })
  }
  getYarn () {
    if (this.state.pattern) {
      client.getEntry(this.state.pattern.yarn[0].sys.id)
        .then((response) => {
          this.setState({yarn: response.fields})
        })
        .catch((error) => {
          console.log("Didn't get yarn", error)
        })
    }
  }
  // getImages () {
  //   if (this.state.pattern) {
  //     client.getEntry(this.state.pattern.pictures)
  //   }
  // }
  renderMarkdown (text) {
    if (text) {
      return marked(text)
    } else {
      return null
    }
  }
  render() {
    const { 
      title,
      creator,
      skeinCount,
      tools,
      size,
      notes,
      pattern 
    } = this.state.pattern
    const { 
      name,
      content,
      weight,
      length,
      suggestedNeedle,
      suggestedCrochetHook,
      recommendedCare,
      sourceLink 
    } = this.state.yarn
    return (
      <div className='pattern-detail'>
        <header className='detail-header'>
          <Link to='/'>...back to pattern list</Link>
          <h1>{title}</h1>
          <p>By: {creator}</p>
        </header>
        <main className='instructions'>
          <h2>Materials:</h2>
            <ul>
              <li>
                <h3>Recommended Yarn:</h3>
                  <ul className='materials-list'>
                    <li>Name: {name}</li>
                    <li>Content: {content}</li>
                    <li>Weight: {weight}</li>
                    <li>Length: {length}</li>
                    <li>Gauge: {this.state.yarn.gauge}</li>
                    <li>Suggested Needle: {suggestedNeedle}</li>
                    <li>Suggested Crochet Hook: {suggestedCrochetHook}</li>
                    <li>Recommended Care: {recommendedCare}</li>
                    <li><a href={sourceLink} target='_blank'>Purchase Here</a></li>
                    <li>Skein Count: {skeinCount}</li>
                  </ul>
              </li>
              <li>
                <h3>Tools:</h3>
                  <ul className='materials-list'>
                    <li>{tools}</li>
                  </ul>
              </li>
            </ul>
          <h2>Gauge:</h2>
            <ul>
              <li>{this.state.pattern.gauge}</li>
            </ul>
          <h2>Size:</h2>
            <ul>
              <li>{size}</li>
            </ul>
          <h2>Notes:</h2>
            <p className='md-style' dangerouslySetInnerHTML={ { __html: this.renderMarkdown(notes) } }></p>
          <h2>Pattern:</h2>
            <p className='md-style pattern-instruct' dangerouslySetInnerHTML={ { __html: this.renderMarkdown(pattern) } }></p>
        </main>
      </div>
    )
  }
}

const { string, shape, number, array } = React.PropTypes
PatternDetail.propTypes = {
  pattern: shape({
    id: string,
    title: string,
    creator: string,
    tools: array,
    gauge: string,
    size: string,
    notes: string,
    pattern: string,
    skeinCount: number,
    yarn: shape({
      name: string,
      content: string,
      weight: string,
      length: string,
      gauge: string,
      suggestedNeedle: string,
      suggestedCrochetHook: string,
      recommendedCare: string,
      sourceLink: string
    })
  })
}

export default PatternDetail

