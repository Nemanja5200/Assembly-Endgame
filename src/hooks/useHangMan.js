import { useState } from "react";
import { languages as initialLanguages } from "../languages.js";
import { generate } from "random-words";

const generateAlphabet = () => {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => ({
    letter,
    isClicked: false,
    isCorrect: null,
  }));
};

export const useHangMan = () => {
  const [word, setWord] = useState(generate().toUpperCase());
  const [letters, setLetters] = useState(generateAlphabet());
  const [languageStates, setLanguageStates] = useState(initialLanguages);
  const [gameOver, setGameover] = useState(false);
  const [lastGuessWrong, setLastGuessWrong] = useState(false);

  const loseLife = () => {
    const firstUnusedIndex = languageStates.findIndex((lang) => !lang.isUsed);

    if (firstUnusedIndex !== -1) {
      setLanguageStates((prev) =>
        prev.map((lang, index) => {
          if (index === firstUnusedIndex) {
            return {
              ...lang,
              isUsed: true,
            };
          }
          return lang;
        }),
      );

      if (languageStates[firstUnusedIndex].name.toUpperCase() === "RUBY") {
        setGameover(true);
      }
    }
  };

  const checkWin = () => {
    const wordLetters = word.toUpperCase().split("");
    return wordLetters.every((letter) => {
      const letterObj = letters.find((item) => item.letter === letter);
      return letterObj && letterObj.isCorrect;
    });
  };

  const handleLetterClick = (letter) => {
    const isCorrect = word.toUpperCase().includes(letter);

    setLetters((prev) =>
      prev.map((item) => {
        if (item.letter === letter) {
          return {
            ...item,
            isClicked: true,
            isCorrect: isCorrect,
          };
        }
        return item;
      }),
    );
    if (!isCorrect) {
      loseLife();
      setLastGuessWrong(true);
    } else {
      setLastGuessWrong(false);
    }
  };

  const handleNewGameClick = () => {
    setLetters(generateAlphabet());

    setLanguageStates(initialLanguages);

    setGameover(false);

    setWord(generate().toUpperCase());
  };

  return {
    //States
    word,
    letters,
    setWord,
    setLetters,
    gameOver,
    languageStates,
    lastGuessWrong,
    gameWon: checkWin(),

    //Functions
    handleLetterClick,
    handleNewGameClick,
  };
};
