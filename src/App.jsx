
import { Header } from "./components/Header.jsx";
import { Notice } from "./components/Notice.jsx";
import { Lives } from "./components/Lives.jsx";
import {Letters} from "./components/Letters.jsx";
import "./css/App.css";

function App() {
  return (
    <>
        <div className="app-container">
            <Header />
            <Notice />
            <Lives />
            <Letters/>
        </div>

    </>
  );
}

export default App;
