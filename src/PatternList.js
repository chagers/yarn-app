import React, { Component } from 'react'
import { Link } from 'react-router'
import './PatternList.css'

class PatternList extends Component {
  render() {
    const { title, source, creator } = this.props.fields
    const { url, fileName } = this.props.fields.coverImage.fields.file
    const { id } = this.props.sys
    return (
      <section className='pattern-card'>
        <h3>{'<>' + title + '<>'}</h3>
        <p>
          <img src={url} alt={fileName}></img>
        </p>
        <Link to={'/pattern-detail/' + id}>go to pattern</Link>
        <h5>By: <a href={`${source}`} target="_blank">{creator}</a></h5>
      </section>
    )
  }
}

const { string } = React.PropTypes
PatternList.propTypes = {
  title: string,
  id: string,
  source: string,
  creator: string,
  url: string,
  fileName: string
}

export default PatternList
