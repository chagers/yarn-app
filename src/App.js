import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome to Yarn</h2>
        </header>
        <section className="App-intro">
          <h1>
            So far just some patterns for knitting and crocheting.
          </h1>
          <h2>
            If you're looking for dependency management... Try <a href="https://yarnpkg.com/" target="_blank">here</a>.
          </h2>
        </section>
        <hr />
        <section className="">
          <h3>What kind of patterns are you looking for?</h3>
          <button>Knit</button>
          <button>Crochet</button>
        </section>
      </div>
    );
  }
}

export default App;
