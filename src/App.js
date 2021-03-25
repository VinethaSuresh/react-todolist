import './App.css';
import React, { useState } from 'react';
import { TitleBar } from './Titlebar';
import { Navbar } from './Navbar';
import { TaskContainer } from './Taskcontainer';
let App = () => {
  let [listType, setListType] = useState("all")

  //Changes listtype on clicking items from sidebar
  let clickHandler = function (e) {
    setListType(e.currentTarget.id);

  };

  return (
    <div className="app">
      < TitleBar />
      <div className="mainArea">
        <Navbar clickHandler={clickHandler} listType={listType} />
        <TaskContainer listType={listType} />
      </div>
    </div >

  )

}
export default App;
