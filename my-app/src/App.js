import React, { Component } from 'react';

import HelloWorld from "./basicComponent"
import Test from "./test"
import Toggle from "./toggle"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Test />
        <header className="App-header">
          <Toggle/>
          {/* <Logo /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            Learn React
            <HelloWorld />
        </header>
      </div>
    );
  }
}

export default App;
