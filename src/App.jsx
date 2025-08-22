import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Notice } from "./components/Notice.jsx";
import { Lives } from "./components/Lives.jsx";

function App() {
  return (
    <>
      <Header />
      <Notice />
      <Lives />
    </>
  );
}

export default App;
