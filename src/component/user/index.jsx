import React from "react";

const User = (props) => {

    // const {
    //     name,
    //     age,
    //     email,
    // } = props.userDetails;

    // Sprit time use this line of code .....
    const {
        name,
        age,
        email,
    } = props

    return (
        <div>
            <h1>Hello !!!</h1>
            <h2>UserData</h2>
             <p>Name: {name}</p>
             <p>Age: {age}</p>
             <p>Email: {email}</p>
        </div>
    )
}

export default User;