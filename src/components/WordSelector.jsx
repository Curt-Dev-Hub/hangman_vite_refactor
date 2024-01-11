// This component would read a list of words from a .txt file and select a random word for the game. 
// It would then pass this word to the WordDisplay and HangmanDisplay components.

import { useState, useEffect } from "react";
import { useWord } from "./WordProvider";
import WordDisplay from "./WordDisplay";
import dictionary from '../assets/dictionary/dictionary.txt';

const WordSelector = () => {
  
  // create state for currently selected word
  const [selectedWord, setSelectedWord] = useState('');
  // create state for error checking 
  const [error, setError] = useState(null);
  
  // *call setWord with new array containing chosenWord when it changes 
  // import "reset" state variable to trigger a reset  
  const { setWord, reset } = useWord();



  useEffect(() => {
    fetch(dictionary)
      .then(response => { 
        if (!response.ok) { 
            throw Error(response.statusText); 
        } return response.text();
      })

      .then(text => {
        const wordsArray = text.split('\n');

        // Select a random word from the array
        const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]; 
        // set random word as current state
        setSelectedWord(randomWord);
        
        // update word in context
        setWord(randomWord);
        
      })
      .catch(error => setError(error));
    }, [reset]);


    if (error) {
        return <div>
            Error: { error.message }
        </div>;
    }
    // TESTING 29/12/2023
    return selectedWord ? <WordDisplay word = { selectedWord }/> : null;
}

export default WordSelector;