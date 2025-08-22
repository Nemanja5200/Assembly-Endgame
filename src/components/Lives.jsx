import React from "react";
import "../css/Lives.css";

export const Lives = (props) => {
    return (
        <div className="lives-container">
            {props.languages.map((lang, index) => (
                <button
                    key={index}
                    className={lang.isUsed ? 'language-used' : 'language-active'}
                    style={{
                        backgroundColor: lang.backgroundColor,
                        color: lang.textColor,
                    }}
                >
                    <span className="language-name">{lang.name}</span>
                    {lang.isUsed && (
                        <span className="skull">💀</span>
                    )}
                </button>
            ))}
        </div>
    );
};