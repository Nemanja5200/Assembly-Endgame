import { useState } from 'react';
import { languages as initialLanguages } from '../languages.js';


const generateAlphabet = () => {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => ({
        letter,
        isClicked: false,
        isCorrect: null
    }));
};



export const useHangMan = () => {
    const [word, setWord] = useState("REACT");
    const [letters, setLetters] = useState(generateAlphabet());
    const [languageStates, setLanguageStates] = useState(initialLanguages);
    const [gameOver, setGameover] = useState(false);



    const loseLife = () =>{
        const firstUnusedIndex = languageStates.findIndex(lang => !lang.isUsed);


        if(languageStates[firstUnusedIndex].name.toUpperCase() !== "ASSEMBLY"){
            setLanguageStates(prev => prev.map((lang, index) => {
                if (index === firstUnusedIndex) {
                    return {
                        ...lang,
                        isUsed: true
                    };
                }
                return lang;
            }));
        } else {
            setGameover(true);
        }
    }
    const handleLetterClick = (letter) =>{

        setLetters(prev => prev.map(item => {
            if(item.letter === letter){
                return{
                    ...item,
                    isClicked:true,
                    isCorrect: word.toUpperCase().includes(letter)
                }
            } else{
                loseLife();
            }

            return item;
        }))
    }

    return {
        //States
        word,
        letters,
        setWord,
        setLetters,
        gameOver,
        languageStates,


        //Functions
        handleLetterClick,
    };
};