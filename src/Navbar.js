import React from 'react';
import './Navbar.css';
export let Navbar = (props) => {

    //state for storing navbarItems
    let navBarItems = [
        { id: "all", href: "#all", innertxt: "All" },
        { id: "active", href: "#active", innertxt: "Active" },
        { id: "completed", href: "#completed", innertxt: "Completed" },
        { id: "deleted", href: "#deleted", innertxt: "Deleted" }
    ]
    //Style object for highlighting the current selected navbarItem
    let activeStyle = {
        backgroundColor: "#333333",
        color: "white",
    };

    //converting each json object in navbarItems array into JSX
    let listItems = [];
    for (let item of navBarItems) {
        listItems.push(<div key={item.id}
            className={"navItem"}
            onClick={props.clickHandler}
            style={(item.id === props.listType) ? activeStyle : {}}
            id={item.id}>
            <span>{item.innertxt}</span>
        </div >)
    }

    return (
        <div className="navBar">
            {listItems}

        </div >
    );

};