import React, { Component } from 'react'
import contentful from 'contentful'
import PatternList from './PatternList'
import './Landing.css'

const client = contentful.createClient({
  space: 'bmxo0hx3k9kh',
  accessToken: 'b483b718a34b980fe631e3f15ab7d1ee5004393c385709e306b75177f8d32a30'
})

class Landing extends Component {
  constructor(props) {
    super(props)
    this.knitListClick = this.knitListClick.bind(this)
    this.crochetListClick = this.crochetListClick.bind(this)
    this.state = {
      knitList: false,
      crochetList: false
    }
  }
  getInitialState () {
    return {
      patterns: []
    }
  }
  componentDidMount () {
    client.getEntries()
      .then((response) => {
        this.setState({patterns: response.items})
        console.log('response is in', response.items)
      })
      .catch((error) => {
        console.log("Didn't get Contentful entries", error)
      })
  }
  knitListClick () {
    this.setState({
      knitList: true,
      crochetList: false,
    })
  }
  crochetListClick () {
    this.setState({
      crochetList: true,
      knitList: false,
    })
  }
  render() {
    let { patterns } = this.state
    let knitList = this.state.knitList
    let crochetList = this.state.crochetList
    let list = null

    if (patterns && knitList) {
      list = patterns.filter((pattern) => {
        console.log(pattern)
        console.log(typeof pattern.fields.type)
        // TODO: ensure only looking for pattern detail, not yarn objects. yarn objects make toLowerCase fail
        return (pattern.fields.type.toLowerCase() === 'knit')
        })
        .map((pattern) => {
          return (
          <PatternList key={pattern.sys.id} {...pattern.fields} />
        )
      })
    } else if (patterns && crochetList) {
      list = patterns.filter((pattern) => {
        return (pattern.fields.type.toLowerCase() === 'crochet')
        })
        .map((pattern) => {
          return (
          <PatternList key={pattern.sys.id} {...pattern.fields} />
        )
      })
    } else {
      list = null
    }
    return (
      <div className='landing'>
        <header className='app-header'>
          <h1>Welcome to Yarn</h1>
          <h2>Oh, just some patterns for knitting and crocheting.</h2>
          <p>
            (If you're looking for dependency management... Try <a href="https://yarnpkg.com/" target="_blank">here</a>.)
          </p>
        </header>
        <section className='pattern-list'>
          <h3>What kind of patterns are you looking for?</h3>
          <button onClick={this.knitListClick}>Knit</button>
          <button onClick={this.crochetListClick}>Crochet</button>
          {list && 
            <div className='list-container'>
              {list}
            </div>
          }
        </section>
      </div>
    )
  }
}

export default Landing
