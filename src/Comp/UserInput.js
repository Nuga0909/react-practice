import React from "react";

const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };

    return <input type="text" 
    onChange={props.onChange}
    value={props.binder}
    style={inputStyle}/>
};

export default UserInput;