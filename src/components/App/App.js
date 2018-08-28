import React, { Component } from 'react';
import Main from '../Main/Main'
import Header from '../Header/Header'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Choose Your destiny</h1>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
