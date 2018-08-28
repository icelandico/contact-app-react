import React, { Component } from 'react';
import './App.css';
import Main from '../Main/Main'
import Header from '../Header/Header'


class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>Contact App</h1>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
