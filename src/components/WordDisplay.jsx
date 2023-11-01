// This component would display the word or phrase that the user is trying to guess. 
// It would receive the word from the WordSelector component and the guessed letters from the HangmanGame component, 
// and update its display accordingly. 

/* 
UI Presentational component

props:
 takes a word from WordSelector

 state: none

*/


import { useWord } from './WordProvider';
import './WordDisplay.css';

export default function WordDisplay({ word }) {

    //importing correct guesses from Wordprovider component
    const {goodGuesses} = useWord();
    
    if(word) {

        const chosenWord = word.split(''); // receiving selected word from WordSelector here;
        
        if(goodGuesses.length < 1) {
            return (
                <div className="wordDisplay">
                    {chosenWord.map((el, idx) => {
                        return <span className="displayLetter" key={idx}> - </span>
                    })}
                </div>
            )
        }
        // if goodGuesses is not empty then we need iterate through chosenWord and then show letters from word that match ones from the goodGuesses array
        else if(goodGuesses.length > 0) {
            return (
                <div className="wordDisplay">
                    {chosenWord.map((el, idx) => {
                        // Check letter is in goodGuesses
                        if (goodGuesses.includes(el)) {
                            // If it is, display the letter
                            return <span className="displayLetter" key={idx}>{el}</span>
                        } else {
                            // If not, display a -
                            return <span className="displayLetter" key={idx}> - </span>
                        }
                    })}
                </div>
            )
        }
    }
}

