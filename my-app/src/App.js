import React, { Component } from 'react';

import HelloWorld from "./basicComponent"
import Test from "./test"

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Test />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <HelloWorld />

          </a>
        </header>
      </div>
    );
  }
}

export default App;
