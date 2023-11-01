// Main Logical Component
// Needs to manage the game state and pass necessary data down to child components as props

// Needs to keep track of user guesses, and pass these down to the GuessesDisplay component in the form of an array

 
/*
props:

state: 
user - no. of correct answers
user - no. of incorrect answers

Component needs to know whether the user has inputted a correct or incorrect character -
as state will be dependant on this

*/

import HangmanDisplay from "./HangmanDisplay";
import { useWord } from "./WordProvider";
import InputField from "./InputField";
import './HangmanGame.css';
import { useState } from "react";
import GuessesDisplay from "./GuessesDisplay";


export default function HangmanGame() {
    const [state, setState] = useState(0);

    //state for GuessDisplay - which will update array with incorrect user guesses
    const [incorrectGuesses, setIncorrectGuesses] = useState([]);

    // receive word from context provider and allow access to correctGuesses
    const{ word, setGoodGuesses } = useWord();
    console.log(typeof word); {/* currently receiving string of chosenWord here */}

    // onclick function to handle user character input from InputField component
    function userSubmit(input) {
        // ** Check if the input matches any letter in the word
        if(!word.includes(input)) {
            console.log(word);
            setIncorrectGuesses((oldGuesses) => {
                return [...oldGuesses, input + ","];
            });
            return setState(prevState => prevState +1);
        } else {
            // if all is good, then update state of display "input" in wordDisplay
            setGoodGuesses((oldValues) => {
                return [...oldValues, input];
            });
        }
    }
    
    return (
        <div className="HangmanGame_Container">
            <HangmanDisplay currentState={ state } />
            <InputField userSubmit = { userSubmit }/>
            <GuessesDisplay characters={ incorrectGuesses }/>
        </div>
    )
}

