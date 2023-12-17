import './App.css';
import { WordProvider } from './components/WordProvider';
import WordSelector from './components/WordSelector';
import WordDisplay from './components/WordDisplay';
import HangmanGame from './components/HangmanGame';

function App() {

  return (
    <div className='appContainer'>
      <h1 className='heading_text'>Classic Hangman</h1>
      <WordProvider>
        <HangmanGame />
        <WordSelector />
        <WordDisplay />        
      </WordProvider>
    </div>
  );
}

export default App;
