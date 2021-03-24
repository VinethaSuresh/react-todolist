import React, { useState } from 'react';
import './Taskcontainer.css';
import uuid from 'react-uuid';
export let TaskContainer = (props) => {
    let [newItem, setNewItem] = useState("");
    let [list, setList] = useState([]);

    //let emptyAdded = false;
    let addHandler = () => {
        console.log("inside addHandler")
        console.log("newItem", newItem);
        if (newItem !== "") {
            //emptyAdded = false;
            setList([...list, { key: uuid(), task: newItem, deleted: false, completed: false }]);
            setNewItem("");
        }
        else {
            alert("plz enter input")
        }
    }
    //function binding to the object(class)
    addHandler = addHandler.bind(this);
    let inputChangeHandler = function (event) {
        setNewItem(event.target.value);

    }
    //converting array of objects in to array of jsx
    let listJSX = list.map(item => (<div>{item.task}</div>));

    //cancelHandler function
    let cancelHandler = () => setNewItem("");



    return (
        <div className="taskContainer">
            <p>Things TO DO</p>
            <div className="task">
                <input type="text"
                    placeholder="add a new todo"
                    maxLength="30"
                    value={newItem}
                    onChange={inputChangeHandler}>
                </input>
                <button onClick={addHandler}>Add</button>
                <button onClick={cancelHandler}>Clear</button>
                <div>
                    {listJSX}
                </div>

            </div >
        </div>
    )

}