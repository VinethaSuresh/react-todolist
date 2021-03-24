import React from 'react';
import './Navbar.css';
export let Navbar = (props) => {
    console.log("props", props);
    let navBarItems = [
        { id: "All", href: "#all" },
        { id: "Active", href: "#active" },
        { id: "Completed", href: "#completed" },
        { id: "Deleted", href: "#deleted" }
    ]
    console.log("navBarItems", navBarItems);

    let listItems = [];
    for (let item of navBarItems) {
        console.log("listItems", listItems);
        listItems.push(<li key={item.id}>
            <a href={item.href}
                id={item.id}
                className={item.id === "All" ? "active" : ""}
                onClick={props.click}>
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