import React from 'react';
let titleBar = {
    height: "70px",
    backgroundColor: "black",
    color: "white",
    fontSize: "30px",
    fontWeight: "50px",
    lineHeight: "60px",
    paddingLeft: "70px",
    width: "100%",
    top: "0px",
    left: "0px"
};
export function TitleBar() {
    return (<div style={titleBar}> Todo List</div >);
}

