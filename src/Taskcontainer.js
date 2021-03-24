import React, { useState } from 'react';
import './Taskcontainer.css';
import uuid from 'react-uuid';
import { List } from './List'
export let TaskContainer = (props) => {
    let [newItem, setNewItem] = useState("");
    let [list, setList] = useState([]);
    let addHandler = () => {
        console.log("inside addHandler")
        console.log("newItem", newItem);
        if (newItem !== "") {
            let newList = [...list, { key: uuid(), task: newItem, deleted: false, completed: false }]
            setList(newList);
            setNewItem("");
        }

    }
    //function binding to the object(class)
    let inputChangeHandler = function (event) {
        setNewItem(event.target.value);

    }

    function checkHandler(key, completed) {
        for (let item of list) {
            if (item.key == key) {
                item.completed = completed;

            }
        }
        setList([...list]);
    }

    function deleteHandler(key) {
        for (let item of list) {
            if (item.key == key) {
                item.deleted = !item.deleted;
            }
        }

        setList([...list]);

    }


    //cancelHandler event handler
    let cancelHandler = () => setNewItem("");

    //keyUpHanler event handler
    let handlerKeyUP = (event) => {

        if (event.keyCode === 13) {

            event.preventDefault();
            addHandler();
        }


    }

    return (
        <div className="taskContainer">
            <p>Things TO DO</p>
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