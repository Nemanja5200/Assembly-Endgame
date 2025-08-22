import React from "react";
import "../css/Notice.css";

export const Notice = (props) => {
  return (
    <>

        {props.gameOver?(
            <div className="gameover-container">
                <h3>Game over!</h3>
                <p>You lose! Better start learning Assembly 😭</p>
            </div>
        ):null}
        {}

    </>
  );
};
