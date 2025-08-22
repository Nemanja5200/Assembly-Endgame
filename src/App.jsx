
import { Header } from "./components/Header.jsx";
import { Notice } from "./components/Notice.jsx";
import { Lives } from "./components/Lives.jsx";
import {Letters} from "./components/Letters.jsx";
import "./css/App.css";
import {Board} from "./components/Board.jsx";
import {useHangMan} from "./hooks/useHangMan.js";


function App() {
    const gameState = useHangMan();
  return (
    <>
        <div className="app-container">
            <Header />
            <Notice gameOver = {gameState.gameOver} />
            <Lives languages={gameState.languageStates} />
            <Letters word = {gameState.word} alphabet = {gameState.letters} gameOver={gameState.gameOver}/>
            <Board alphabet = {gameState.letters} onClick={gameState.handleLetterClick} gameOver={gameState.gameOver}/>
        </div>

    </>
  );
}

export default App;
