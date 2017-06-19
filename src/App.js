import React, { Component } from 'react';
import Header from "./components/Header.js"
import Main from "./components/Main.js"

import {connect} from "react-redux"

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

// 映射 state -> props 
function mapStateToProps(state){
    return {
        film:state.film[0]
    }
}

export default connect(mapStateToProps)(App);
