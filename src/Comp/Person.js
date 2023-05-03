import React from "react"

const Person = (props) => {
    return (
    <>
        <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </>
    )
}

export default Person;
