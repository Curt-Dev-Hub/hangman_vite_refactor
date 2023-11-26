/* 

Presentational Component

Props: Needs to receive game status information from the HangmanGame component
Needs to know when user has reached a certain amount of guesses and when all 
characters of the hidden word have been correctly guessed

Component Responsibility

This component would display a message when the game is over, 
either congratulating the user for winning or informing them that they have lost.

*/


function GameOver({ gameStatus }) {
    const msg = ["Congratulations! You Found the Word!",
    "Oh No! The noose found Hangman's Neck! Try Again "];
        // needs to know if win or loss


    return (
        <div className="GameOver">
            <h3>{ gameStatus ? msg[0] : msg[1] }</h3>
        </div>
    );
}

export default GameOver;