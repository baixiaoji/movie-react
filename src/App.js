import React, { Component } from 'react';
import Header from "./components/Header.js"
import Main from "./components/Main.js"

import "bulma/css/bulma.css"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Main />
      </div>
    );
  }
}

export default App;
