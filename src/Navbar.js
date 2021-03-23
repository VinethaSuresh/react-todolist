import React from 'react';
import './Navbar.css';
export let Navbar = (props) => {
    console.log("props", props);
    let navBarValues = {
        id: ["All", "Active", "Completed", "Deleted"],
        href: ["#all", "#active", "#completed", "#deleted"],
    }
    let listItems = [];
    for (let i = 0; i < navBarValues.id.length; i++) {
        listItems.push(<li>
            <a href={navBarValues.id[i]}
                id={navBarValues.href[i]}
                className={navBarValues.id[i] == "all" ? "active" : ""}
                onClick={props.click}>
                {navBarValues.id[i]}
            </a>
        </li>)
    }

    return (
        <ul>
            {listItems}
        </ul >)
        ;
};