
import "../css/Board.css";
export const Board = (props) => {


    return (
        <>
            <div className="board-container">
                {props.alphabet.map(item => (
                    <button
                    key={item.letter}
                    onClick={() => props.onClick(item.letter)}
                    disabled={item.isClicked || props.gameOver}
                    style={{
                        backgroundColor:
                        item.isClicked && item.isCorrect? "#10A95B":
                        item.isClicked && !item.isCorrect? "#EC5D49":
                        "#FCBA29",
                        opacity: props.gameOver? 0.4: 1,
                        cursor: props.gameOver ? 'not-allowed' : 'pointer',
                        transition: "background-color 0.3s ease",
                    }}
                    >
                        {item.letter}
                    </button>
                ))}
            </div>
        </>
    );
};