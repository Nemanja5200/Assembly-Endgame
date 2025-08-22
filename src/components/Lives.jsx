import React from "react";
import { languages } from "../languages.js";
import "../css/Lives.css";

export const Lives = () => {
  return (
    <>
      <div className="lives-container">
        {languages.map((lang, index) => (
          <button
            key={index}
            style={{
              backgroundColor: lang.backgroundColor,
              color: lang.textColor,
            }}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </>
  );
};
