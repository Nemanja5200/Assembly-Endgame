import React from "react";
import "../css/Header.css";

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-title">
          <h1>Assembly: Endgame</h1>
        </div>
        <div className="heder-description">
          <p>
            Guess the word in under 8 attempts to keep the programming world
            safe from Assembly!
          </p>
        </div>
      </div>
    </>
  );
};
