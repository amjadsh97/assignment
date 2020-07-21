import React from "react";
import './useroutput.css';
const userOutput = (props) => {
    return (
        <div className="useroutput">
            <p>username is: {props.username}</p>
            <p>lorem ipsum lorem ipsumlorem ipsum</p>
        </div>
    )
}

export default userOutput
