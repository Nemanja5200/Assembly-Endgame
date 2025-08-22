import React from 'react';
import "../css/NewGame.css";

export const NewGame = (props) => {
    return (
        <>

            {props.gameWon || props.gameOver? (
                <div className="newGameBTN-container">
                    <button
                    onClick={props.onClick}
                    >New Game</button>
                </div>
            ):null}

        </>
    );
};