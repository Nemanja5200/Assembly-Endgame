import { useState } from 'react'
import {Header} from "./components/Header.jsx";
import {Notice} from "./components/Notice.jsx";



function App() {


  return (
    <>
      <div className="main">

          <Header/>
          <Notice/>

      </div>
    </>
  )
}

export default App
