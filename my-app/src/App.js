import React, { Component } from 'react';

import HelloWorld from "./basicComponent"
import Test from "./test"
import Toggle from "./toggle"
import './App.css';
import Names from "./addNames"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Names />
      <Test />
        <header className="App-header">
          <Toggle />
            Learn React
            <HelloWorld />
        </header>
      </div>
    );
  }
}

export default App;
