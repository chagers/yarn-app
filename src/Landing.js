import React, { Component } from 'react'
import PatternList from './PatternList'
import data from '../public/data.json'
import './Landing.css'


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
    const knitList = this.state.knitList
    const crochetList = this.state.crochetList
    let list = null
    if (knitList) {
      list = data.patterns.filter((pattern) => {
        return (pattern.type).indexOf('knit') >= 0
        })
        .map((pattern) => {
          return (
          <PatternList key={pattern.id} {...pattern} />
        )
      })
    } else if(crochetList) {
      list = data.patterns.filter((pattern) => {
        return (pattern.type).indexOf('crochet') >= 0
        })
        .map((pattern) => {
          return (
          <PatternList key={pattern.id} {...pattern} />
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
        <section className='navigation'>
          <h3>What kind of patterns are you looking for?</h3>
          <button onClick={this.knitListClick}>Knit</button>
          <button onClick={this.crochetListClick}>Crochet</button>
          {list}
        </section>
      </div>
    )
  }
}

export default Landing
