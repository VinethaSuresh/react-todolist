import './App.css';
import React, { useState } from 'react';
import { TitleBar } from './Titlebar';
import { Navbar } from './Navbar';
import { TaskContainer } from './Taskcontainer';
let App = () => {
  let [listType, setListType] = useState("all")
  let clickHandler = function (e) {
    setListType(e.target.id);

  };
  return (
    <div>
      < TitleBar />
      <Navbar clickHandler={clickHandler} listType={listType} />
      <TaskContainer listType={listType} />
    </div >

  )

}
export default App;
