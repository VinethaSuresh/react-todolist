import './App.css';
import React, { Component } from 'react';
import { TitleBar } from './Titlebar'
class App extends Component {
  state =
    {
      userInput: ''

    }

  render() {
    return (
      < TitleBar />
    )

  }

}

export default App;
