import Square from "./Square";
import {Fragment, useState} from "react";

const Board = () => {
    const status = 'Next player: X';
    const [squares, setSquares] = useState(Array(9).fill(null));
    const makeMove = (index) => {
        const squaresCopy = squares.slice();
        squaresCopy[index] = 'X';
        setSquares(squaresCopy);
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} handler={ () => makeMove(0)}/>
                <Square value={squares[1]} handler={ () => makeMove(1)}/>
                <Square value={squares[2]} handler={ () => makeMove(2)}/>

            </div>
            <div className="board-row">
                <Square value={squares[3]} handler={ () => makeMove(3)}/>
                <Square value={squares[4]} handler={ () => makeMove(4)}/>
                <Square value={squares[5]} handler={ () => makeMove(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} handler={ () => makeMove(6)}/>
                <Square value={squares[7]} handler={ () => makeMove(7)}/>
                <Square value={squares[8]} handler={ () => makeMove(8)}/>
            </div>
        </>
    );
};

export default Board;