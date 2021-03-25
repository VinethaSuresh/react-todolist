import React, { useState } from 'react';
import './Taskcontainer.css';
import uuid from 'react-uuid';
import { List } from './List'
export let TaskContainer = (props) => {
    //newItem is a string which is two-way bound to the input box
    let [newItem, setNewItem] = useState("");
    //list stores json objects each represnting a task.
    let [list, setList] = useState([]);

    //addhHandler adds a new task to the list on pressing enter in input box or clicking add button
    let addHandler = () => {
        console.log("inside addHandler")
        console.log("newItem", newItem);
        if (newItem !== "") {
            let newList = [...list, { key: uuid(), task: newItem, deleted: false, completed: false }]
            setList(newList);
            setNewItem("");
        }

    }
    //updates the newItem state whenever input field value gets changed
    let inputChangeHandler = function (event) {
        setNewItem(event.target.value);

    }

    //sent as props to List
    //takes a key and a 'completed' boolean as arguments
    //finds the json object whose key matches, in list. And updates the completed state
    function checkHandler(key, completed) {
        for (let item of list) {
            if (item.key === key) {
                item.completed = completed;

            }
        }
        setList([...list]);
    }

    //passed as props to List
    //takes a key as argument. when delete button is pressed, it finds the matched json
    //and updates the deleted state
    function deleteHandler(key) {
        for (let item of list) {
            if (item.key === key) {
                item.deleted = !item.deleted;
            }
        }

        setList([...list]);

    }


    //clears the value in the input box
    let cancelHandler = () => setNewItem("");

    //adding a new task when user clicks enter button
    let handlerKeyUP = (event) => {

        if (event.keyCode === 13) {

            event.preventDefault();
            addHandler();
        }


    }

    return (
        <div className="taskContainer">
            <div className="titleText">Things TODO</div>
            <div className="task">
                <input type="text"
                    placeholder="add a new todo"
                    maxLength="30"
                    value={newItem}
                    onChange={inputChangeHandler}
                    onKeyUp={handlerKeyUP}>
                </input>
                <button onClick={addHandler}>Add</button>
                <button onClick={cancelHandler}>Clear</button>
            </div>
            <List list={list} listType={props.listType} checkHandler={checkHandler} deleteHandler={deleteHandler} />
        </div>
    )

}