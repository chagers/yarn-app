import React, { Component } from 'react'
import PatternList from './PatternList'

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Yarn</h1>
          <h2>Oh, just some patterns for knitting and crocheting.</h2>
          <p>
            (If you're looking for dependency management... Try <a href="https://yarnpkg.com/" target="_blank">here</a>.)
          </p>
        </header>
        <section className="navigation">
          <h3>What kind of patterns are you looking for?</h3>
          <a href="">Knit</a>
          <a href="">Crochet</a>
        </section>
        <PatternList />
      </div>
    )
  }
}

export default Landing
