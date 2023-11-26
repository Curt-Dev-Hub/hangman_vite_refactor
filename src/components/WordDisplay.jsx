// This component would display the word or phrase that the user is trying to guess. 
// It would receive the word from the WordSelector component and the guessed letters from the HangmanGame component, 
// and update its display accordingly. 

/* 
UI Presentational component

props:
takes a chosen "word" from WordSelector component in form of a string

state: none

*/

import { useEffect } from 'react';
import { useWord } from './WordProvider';
import './WordDisplay.css';

export default function WordDisplay({ word }) {

    //importing correct guesses and setUserWinState array from Wordprovider component
    const {goodGuesses, setUserWinState} = useWord();

    
    useEffect(() => {
        setUserWinState(Array.from(document.querySelectorAll('.displayLetter')).map(el => el.textContent));
    }, [goodGuesses]);
    

    // begin rendering UI elements once a word has been received from WordProvider via the WordSelector component

    if(word) {

        const chosenWord = word.split(''); // receiving selected word from WordSelector here

        // display "-" characters on UI if goodGuesses array is empty
        if(goodGuesses.length < 1) {
            return (
                <div className="wordDisplay">
                    {chosenWord.map((el, idx) => {
                        return <span className="displayLetter" key={idx}> - </span>
                    })}
                </div>
            );
        }


        // if goodGuesses is not empty then we need iterate through chosenWord and then show letters from word that match ones from the goodGuesses array
        else if(goodGuesses.length > 0) {
            return (
                <div className="wordDisplay">
                    {chosenWord.map((el, idx) => {
                        // Check letter is in goodGuesses
                        if (goodGuesses.includes(el.toLowerCase())) {
                            // If it is, display the letter
                            return <span className="displayLetter" key={idx}>{el}</span>
                        } else {
                            // If not, display a "-"
                            return <span className="displayLetter" key={idx}> - </span>
                        }
                    })}
                </div>
            );
        }
    }
}

