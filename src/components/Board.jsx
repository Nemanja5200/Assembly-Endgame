import React, {useState} from 'react';
import "../css/Board.css";

export const Board = () => {
    const generateAlphabet = () => {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => ({
            letter,
            isClicked: false,
            isCorrect: null 
        }));
    };

    const [letters, setLetters] = useState(generateAlphabet());

    return (
        <>
            <div className="board-container">
                {letters.map((item,index) => (

                    <button
                    key={item.letter}>
                        {item.letter}
                    </button>
                ))}
            </div>
        </>
    );
};