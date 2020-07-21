import React from "react";

const userInput = (props) => {
    const style= {
        border: '1px solid red'
    }
    return (
        <div>
            <input
                type="text"
                style={style}
                name="input"
                onChange={props.changed}
                value={props.currentName}
            />
        </div>
    )
}
export default userInput
