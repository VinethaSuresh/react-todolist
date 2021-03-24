import React from 'react';
import './Navbar.css';
export let Navbar = (props) => {
    let navBarItems = [
        { id: "all", href: "#all" },
        { id: "active", href: "#active" },
        { id: "completed", href: "#completed" },
        { id: "deleted", href: "#deleted" }
    ]

    let listItems = [];
    for (let item of navBarItems) {
        listItems.push(<li key={item.id}>
            <a href={item.href}
                id={item.id}
                className={item.id === props.listType ? "active" : ""}
                onClick={props.clickHandler}>
                {item.id}
            </a>
        </li>)
    }

    return (
        <ul>
            {listItems}
        </ul >)
        ;
};