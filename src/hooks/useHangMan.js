import { useState } from 'react';

// Move generateAlphabet outside the hook or define it before using it
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




    const handleLetterClick = (letter) =>{

        setLetters(prev => prev.map(item => {
            if(item.letter === letter){
                return{
                    ...item,
                    isClicked:true,
                    isCorrect: word.toUpperCase().includes(letter)
                }
            }

            return item;
        }))
    }

    return {
        word,
        letters,
        setWord,
        setLetters,
        handleLetterClick,
    };
};