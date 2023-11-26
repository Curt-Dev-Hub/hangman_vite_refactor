/*
props: "characters" an array of wrongly guessed characters inputted by user from HangmanGame component

This component needs to display the letters that the user has already guessed.
Should expect an array which it will then map through in order to display in the UI

*/

import './GuessesDisplay.css';
import { v4 as uuidv4 } from 'uuid';
import { useWord } from './WordProvider';


export default function GuessesDisplay( { characters } ) {

    // display incorrect user guesses in the UI 
    return (
        <div className='guessesDisplay'>
            <h4>Your Incorrect Guesses:</h4>
            {characters.map(char => {
                return <span className='wrongGuesses' key={ uuidv4() }> { char } </span>
            })}
        </div>
    )
}