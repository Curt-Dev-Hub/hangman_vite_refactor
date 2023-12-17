import { createContext, useContext, useState } from "react";
import WordSelector from "./WordSelector";


// create context object
const WordContext = createContext();

// provider for components to consume and subscribe to changes
export const WordProvider = ({ children }) => {
    const [word, setWord] = useState([]); // WordSelector Component
    const [reset, setReset] = useState(false); // WordSelector reset variable
    const [goodGuesses, setGoodGuesses] = useState([]); //HangmanGame & WordDisplay components 
    // set state for HangmanGame component to decide if user has completed the game
    const [userWinState, setUserWinState] = useState([]); // an array which mirrors the word user is trying to guess - initial values will be "-" but will update along with rendered version in the UI


    return (
        <WordContext.Provider value={{ word, setWord, goodGuesses, setGoodGuesses, userWinState, setUserWinState, reset, setReset }}>
            { children }
        </WordContext.Provider>
    );
};


// create hook to use the context
export const useWord = () => {
    const context = useContext(WordContext);

    if(context === undefined) {
        throw new Error('useWord must be used within a WordProvider');
    }

    return context;
}
