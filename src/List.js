import React from 'react';
import './List.css';

export let List = (props) => {
    let filteredList = props.list.filter(listItem => {
        if (props.listType === "all") {
            return !listItem.deleted;
        }
        else if (props.listType === "active") {
            return !listItem.deleted && !listItem.completed
        }
        else if (props.listType === "completed") {
            return !listItem.deleted && listItem.completed
        }
        else if (props.listType === "deleted") {
            return listItem.deleted;
        }
        else {
            return false;

        }

    })
    let filteredJSX = filteredList.map(item => (
        <tr key={item.key}>
            <td><input type="checkbox" checked={item.completed} onChange={(event) => props.checkHandler(item.key, event.target.checked)}
                disabled={item.deleted ? true : false} /></td>
            <td className="taskName">{item.task}</td>
            <td><button onClick={() => props.deleteHandler(item.key)}>{item.deleted ? "restore" : "delete"}</button></td>
        </tr >
    ))

    return (
        <table>
            <tbody>
                {filteredJSX}
            </tbody>

        </table>

    )

}