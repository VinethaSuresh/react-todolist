import React from 'react';
export let TaskContainer = (props) => {
    let list = [{ id: 1, task: "task1" }, { id: 2, task: "task2" },
    { id: 3, task: "task3" },
    { id: 4, task: "task4" }];
    let listitem = [];
    for (let i = 0; i < list.length; i++) {
        listitem.push(<li>id={list[i].id} task={list[i].task}</li>)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <input type="text" placeholder="type here" maxLength="30">
            </input>
            <button>Add</button>
            <button>Clear</button>
            <ul>
                {listitem}
            </ul>

        </div>
    )

}