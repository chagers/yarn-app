import React, { Component } from 'react'
import client from './config.js'
import PatternList from './PatternList'
import './App.css'


class App extends Component {
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
        return (pattern.fields.type.toLowerCase() === 'knit')
        })
        .map((pattern) => {
          return (
          <PatternList key={pattern.sys.id} {...pattern} />
        )
      })
    } else if (patterns && crochetList) {
      list = patterns.filter((pattern) => {
        return (pattern.fields.type.toLowerCase() === 'crochet')
        })
        .map((pattern) => {
          return (
          <PatternList key={pattern.sys.id} {...pattern} />
        )
      })
    } else {
      list = null
    }
    return (
      <div className='app'>
        <main className='landing'>
          <header className='app-header'>
            <h1>Welcome to Yarning</h1>
            <h2>Oh, just some patterns for knitting and crocheting.</h2>
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
        </main>
      </div>
    )
  }
}

export default App
