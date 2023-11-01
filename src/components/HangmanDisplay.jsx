/* 
props:
state:

where:

Presentational Component

Task: to 
*/

import React from "react";
import HangmanGame from "./HangmanGame";
import './HangmanDisplay.css';

import state1 from '../assets/hangman_GIF_states/state1.jpg';
import state2 from '../assets/hangman_GIF_states/state2.jpg';
import state3 from '../assets/hangman_GIF_states/state3.jpg';
import state4 from '../assets/hangman_GIF_states/state4.jpg';
import state5 from '../assets/hangman_GIF_states/state5.jpg';
import state6 from '../assets/hangman_GIF_states/state6.jpg';
import state7 from '../assets/hangman_GIF_states/state7.jpg';
import state8 from '../assets/hangman_GIF_states/state8.jpg';
import state9 from '../assets/hangman_GIF_states/state9.jpg';
import state10 from '../assets/hangman_GIF_states/state10.jpg';
import state11 from '../assets/hangman_GIF_states/state11.jpg';


const stateImages = [
    {
        id: 101,
        src: state1,
        alt: "State 1"
    },
    {
        id: 102,
        src: state2,
        alt: "State 2"
    },
    {
        id: 103,
        src: state3,
        alt: "State 3"
    },
    {
        id: 104,
        src: state4,
        alt: "State 4"
    },
    {
        id: 105,
        src: state5,
        alt: "State 5"
    },
    {
        id: 106,
        src: state6,
        alt: "State 6"
    },
    {
        id: 107,
        src: state7,
        alt: "State 7"
    },
    {
        id: 108,
        src: state8,
        alt: "State 8"
    },
    {
        id: 109,
        src: state9,
        alt: "State 9"
    },
    {
        id: 110,
        src: state10,
        alt: "State 10"
    },
    {
        id: 111,
        src: state11,
        alt: "State 11"
    },
];


export default function HangmanDisplay({ currentState }) {
    console.log(currentState);

    return (
        <div className="stateImageContainer">
            <img className="hangmanImage" src={ stateImages[currentState].src }></img>
        </div>
    )

}