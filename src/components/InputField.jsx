//This component would allow the user to input their guesses. 
//It would pass these guesses up to the HangmanGame component.
//which would update the game state accordingly.

// Is rendered via the HangmanGame comoponent

/* props:
    userSubmit - which is a function passed in from HangmanGame component which deals with logic after submission of input
*/

import React, { useState, useRef, useEffect } from 'react';
import './InputField.css';

export default function InputField({ userSubmit }) {

    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null); // create a ref

    // useEffect to bring focus back to input on re-render
    useEffect(() => {
        inputRef.current.focus();
    });

    // handle correct behavior of user input 
    const handleInputChange = (e) => {
        const char = e.target.value;
        if(/[a-zA-Z]/.test(char) || char === "") {
            setInputValue(char);
        }
    }

    //send value of textInput to userSubmit function in HangmanGame component 
    const handleButtonClick = (evt) => {
        userSubmit(inputValue);
         // clear the input field
         setInputValue("");
    }

    return (
        <div className="Input_Wrapper">
            <label htmlFor="textInput">Take Your Guess Here:</label>
            {/* have set value of "inputField" to "inputValue" to reflect the current state  */}
            <input ref={inputRef} type="text" id="textInput" value={inputValue} onChange={handleInputChange} maxLength={1}></input>
            <button type="button" onClick={handleButtonClick}>Submit Character</button>
        </div>
    )
}
