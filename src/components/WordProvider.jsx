import { createContext, useContext, useState } from "react";


// context object
const WordContext = createContext();

// provider for components to consume and subscribe to changes
export const WordProvider = ({ children }) => {
    const [word, setWord] = useState([]);
    const [goodGuesses, setGoodGuesses] = useState([]);

    return (
        <WordContext.Provider value={{ word, setWord, goodGuesses, setGoodGuesses }}>
            { children }
        </WordContext.Provider>
    );
};


// create a hook to use the context
export const useWord = () => {
    const context = useContext(WordContext);

    if(context === undefined) {
        throw new Error('useWord must be used within a WordProvider');
    }

    return context;
}
