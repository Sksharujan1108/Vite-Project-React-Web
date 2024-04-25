import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
    const [num1, setNum1] = useState(100);
    const [num2, setNum2] = useState(2000);

    // UseEffect 
    useEffect(() => {
        console.log('Inside useEffect');
        setNum1(150);

        return () => {
            console.log('Cleanup in useEffect');
            setNum1(''); // Reverting num1 back to its default value
        };
    }, [num1, num2]);

    console.log('num1', num1); // 150

    return ( 
        <div>
            <h1> ProfilePage </h1>
            <p> num1: {num1} </p>
            <button onClick={() => setNum1(num1 + 1)}> Click me </button>

            <p> num2: {num2} </p>
            <button onClick={() => setNum2(num2 + 1)}> Add me </button>
        </div>
    );
};

export default ProfilePage;
