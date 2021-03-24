import './App.css';
import React, { Component } from 'react';
import { TitleBar } from './Titlebar';
import { Navbar } from './Navbar';
import { TaskContainer } from './Taskcontainer';
class App extends Component {
  state =
    {
      userInput: ''

    }

  clickHandler = function (e) {
    //let listtype = "all";
    //listtype = e.target.id;

  };

  render() {

    return (
      <div>
        < TitleBar />
        <Navbar click={() => this.clickHandler()} />
        <TaskContainer />
      </div >

    )

  }

}

export default App;
