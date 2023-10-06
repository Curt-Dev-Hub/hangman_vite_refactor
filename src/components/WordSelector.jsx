// This component would read a list of words from a .txt file and select a random word for the game. 
// It would pass this word to the WordDisplay and HangmanDisplay components.


import { useState, useEffect } from "react";
import dictionary from '../assets/dictionary/dictionary.txt';



const WordSelector = () => {
    const [words, setWords] = useState([]);
    const [selectedWord, setSelectedWord] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(dictionary)
          .then(response => { 
            if (!response.ok) { 
                throw Error(response.statusText); 
            } return response.text();
            })
          .then(text => {
            const wordsArray = text.split('\n');
            setWords(wordsArray);
            console.log(wordsArray);

            // Select a random word from the array
            const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
            // set random word as current state
            setSelectedWord(randomWord);
          })
          .catch(error => setError(error));
      }, []);

    if (error) {
        return <div>
            Error: { error.message }
        </div>;
    }

    // Pass the selected word to other components here
}

export default WordSelector;