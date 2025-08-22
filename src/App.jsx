
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
            <Notice />
            <Lives />
            <Letters/>
            <Board alphabet = {gameState.letters} onClick={gameState.handleLetterClick}/>
        </div>

    </>
  );
}

export default App;
