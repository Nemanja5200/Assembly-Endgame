import React from 'react';
import "../css/Letters.css";

export const Letters = (props) => {
    return (
        <div className="letters-container">
            {props.word.split('').map((letter, index) => {
                const letterObj = props.alphabet.find(item => item.letter === letter);
                const isCorrect = letterObj && letterObj.isCorrect;
                const shouldShowRed = props.gameOver && !isCorrect;

                return (
                    <button
                        key={index}
                        style={{
                            color: shouldShowRed ? '#EC5D49' : 'inherit'
                        }}
                    >
                        {isCorrect ? letter : (shouldShowRed ? letter : "")}
                    </button>
                );
            })}
        </div>
    );
};