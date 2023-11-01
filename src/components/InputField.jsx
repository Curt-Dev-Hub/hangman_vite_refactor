
// import { useState } from 'react';
// import React from "react";
// import './InputField.css';

//     // restrict entry of numbers or special characters into the below input element
//     // document.getElementById('textInput').addEventListener('keypress', function (e) {
//     // var char = e.key;
//     // if (!(/[a-zA-Z]/.test(char))) {
//     //     e.preventDefault();
//     // }
//     // }); 

// export default function InputField({ userSubmit }) {

//     const [inputValue, setInputValue] = useState("");
    
//     const handleInputChange = (e) => {
//     const char = e.target.value;
//         if(/[a-zA-Z]/.test(char) || char === "") {
//             setInputValue(char);
//         }
//     }

//     //send value of textInput to userSubmit function in HangmanGame component 
//     const handleButtonClick = () => {
//         let inputValue = document.querySelector('#textInput').value;
//         userSubmit(inputValue);
//         inputValue = '';
//     }

//     return (
//         <div className="Input_Wrapper">
//             <label htmlFor="textInput">Take Your Guess Here:</label>
//             {/* have set value of "inputField" to "inputValue" to reflect the current state  */}
//             <input type="text" id="textInput" value={inputValue} onChange={handleInputChange} maxLength={1}></input>
//             <button type="button" onClick={handleButtonClick}>Submit Character</button>
//         </div>
//     )
// }





import React, { useState, useRef } from 'react';
import './InputField.css';

export default function InputField({ userSubmit }) {

    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null); // create a ref

    const handleInputChange = (e) => {
        const char = e.target.value;
        if(/[a-zA-Z]/.test(char) || char === "") {
            setInputValue(char);
        }
    }

    //send value of textInput to userSubmit function in HangmanGame component 
    const handleButtonClick = () => {
        userSubmit(inputValue);
        inputRef.current.value = ""; // clear the input field
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
