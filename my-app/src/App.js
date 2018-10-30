import React, { Component } from 'react';
// import SimpleStorage from "react-simple-storage"

import HelloWorld from "./basicComponent"
import Test from "./test"
import Toggle from "./toggle"
import './App.css';
import Names from "./addNames"
import Hobby from "./hobbies"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Hobby />
      {/* <Names /> */}
      {/* <Test /> */}
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
