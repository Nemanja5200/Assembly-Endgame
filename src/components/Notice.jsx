import React from "react";
import "../css/Notice.css";

export const Notice = (props) => {
    const getLanguageMessage = (languageName) => {
        const messages = {
            "HTML": "💀 HTML is gone! No more structure for you!",
            "CSS": "💀 CSS lost! Your sites will look terrible!",
            "Javascript": "💀 JavaScript vanished! No more interactivity!",
            "React": "💀 React disappeared! Components are useless now!",
            "TypeScript": "💀 TypeScript lost! Back to runtime errors!",
            "Node.js": "💀 Node.js gone! Server-side development ended!",
            "Python": "💀 Python lost! Machine learning dreams crushed!",
            "Ruby": "💀 Ruby lost! You're down to Assembly - LAST CHANCE!"
        };
        return messages[languageName] || `💀 ${languageName} lost!`;
    };

    const usedLanguages = props.languageStates?.filter(lang => lang.isUsed) || [];
    const lastLostLanguage = usedLanguages[usedLanguages.length - 1];
 

    return (
        <>
            {props.gameOver ? (
                <div className="gameover-container">
                    <h3>Game over!</h3>
                    <p>You lose! Better start learning Assembly 😭</p>
                </div>
            ) : props.gameWon ? (
                <div className="gamewon-container">
                    <h3>You win!</h3>
                    <p>Well done! 🎉</p>
                </div>
            ) : props.lastGuess && lastLostLanguage ? (
                <div className="notice-container">
                    <p>{getLanguageMessage(lastLostLanguage.name)}</p>
                </div>
            ) : null}
        </>
    );
};