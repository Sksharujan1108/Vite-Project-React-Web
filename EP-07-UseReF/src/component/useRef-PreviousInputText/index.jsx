import React, { useState, useRef, useEffect } from 'react';

const PreviousText = () => {
    // useState 
    const [inputText, setInputText] = useState('');

    // useRef
    const inputRef = useRef();

    console.log("Get Be Render");


    useEffect(() => {
        console.log('Inside useEffect');
        inputRef.current = inputText;
    }, [inputText])

    const display = () => {
        console.log(inputRef.current);
    };

    return ( 
        <div>
            <h1> PreviousText </h1>

            <label> Input The Text: </label>
            <input 
              ref = {inputRef}
              type="text" 
              value = {inputText}
              onChange = {(e) => setInputText(e.target.value)} 
            />

            <p> Sk Type Input: {inputText} </p> 

            <p> Sk Type Input: {inputRef.current} </p>

                   {/* optional chaining (?.)  */}
            {/* <p> Sk Type Input: {inputRef.current?.value} </p> */}

            <button onClick={() => display()}> Input Focus </button> 

        </div>
    );
};

export default PreviousText;
