import React from 'react';
import './Navbar.css';
export let Navbar = (props) => {

    let navBarItems = [
        { id: "all", href: "#all", innertxt: "All" },
        { id: "active", href: "#active", innertxt: "Active" },
        { id: "completed", href: "#completed", innertxt: "Completed" },
        { id: "deleted", href: "#deleted", innertxt: "Deleted" }
    ]

    let activeStyle = {
        backgroundColor: "#333333",
        color: "white",
    };

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