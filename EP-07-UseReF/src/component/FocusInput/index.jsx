import React, { useState, useRef, useEffect } from 'react';

const FocuseTextInput = () => {
    // useState 
    const [inputText, setInputText] = useState('');

    // useRef
    const inputName = useRef();

    console.log("Get Be Render");


    // use if have user Click The Input Focus Button Thaat time focuse th input the field
    const focusInput = () => {
        inputName.current.focus();
    }

    return ( 
        <div>
            <h1> FocuseInput </h1>

            <label> UserName: </label>
            <input 
              ref = {inputName}
              type="text" 
              value = {inputText}
              onChange = {(e) => setInputText(e.target.value)} 
            />

            <p> Sk Type Input: {inputText} </p> 

            <p> Sk Type Input: {inputName.current} </p>

                   {/* optional chaining (?.)  */}
            {/* <p> Sk Type Input: {inputRef.current?.value} </p> */}

            <button onClick={() => focusInput()}> Click-Me </button>  

        </div>
    );
};

export default FocuseTextInput;
