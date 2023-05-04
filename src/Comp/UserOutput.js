import React from "react";
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="Output">
            <p>The name of this user is {props.userName}</p>
            <p>Bla bla bla</p>
        </div>
    )
};

export default UserOutput;
