// High Level Logical Component
// Needs to manage much of the game state and pass necessary data down to child components as props

 

import HangmanDisplay from "./HangmanDisplay";
import { useWord } from "./WordProvider";
import InputField from "./InputField";
import GameOver from "./GameOver"
import './HangmanGame.css';
import { useEffect, useState } from "react";
import GuessesDisplay from "./GuessesDisplay";


export default function HangmanGame() {

    // manage state of which hangman image is shown depending on number of wrong guesses
    // and pass state down to HangmanDisplay
    const [hangmanDisplayState, setHangmanDisplayState] = useState(0);

    //state for GuessesDisplay - which will update the provided array with incorrect user guesses
    const [incorrectGuesses, setIncorrectGuesses] = useState([]);

    // state to determine when user has ultimately won the game 
    const [gameComplete, setGameComplete] = useState(false);

    // receive the chosen word from WordSelector component, the current state of correct guesses from context provider, and allow access to correctGuesses
    // "userWinState" is an array which mirrors the word user is trying to guess - all initial values will be "-" but will update along with rendered version in the UI
    const{ word, setGoodGuesses, userWinState } = useWord();
    

    // useEffect to check whether game has been won
    useEffect(() => {

        // if - "userWinState" matches "lowerWord"
        if(userWinState.join('') === word) { 
            setGameComplete(true);
        }
    }, [userWinState]);

    console.log(Object.values(userWinState));


    // function to handle user inputted value, this function is passed to 
    // and called in the InputField component 
    function userSubmit(input) {

        // Convert both input and word to lower case for checking - as some words in dictionary.txt begin with a CAPITAL 
        const lowerInput = input.toLowerCase();
        const lowerWord = word.toLowerCase();

    
        // update state of incorrect guesses if user input is not found in "word" variable 
        if(!lowerWord.includes(lowerInput)) {
            setIncorrectGuesses((oldGuesses) => {
                return [...oldGuesses, lowerInput + ","];
            });

            return setHangmanDisplayState(prevState => prevState +1);
        } 

        else if(lowerWord.includes(lowerInput)) {
            
            // call setGoodGuesses and update state
            setGoodGuesses(oldValues => [...oldValues, lowerInput]);
        }
    }

    return (
        <div className="HangmanGame_Container">
            <HangmanDisplay currentState={ hangmanDisplayState } />
            <InputField userSubmit = { userSubmit }/>
            <GuessesDisplay characters={ incorrectGuesses }/>
            { hangmanDisplayState == 10 || gameComplete ? <GameOver gameStatus={ gameComplete }/> : null }
        </div>
    );
}

