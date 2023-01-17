import React, { useState } from 'react';
import Square from './Square';
import '../index.css';

const Board = () => {

    const [ticTacToeBoard, setTicTacToeBoard] = useState(Array(9).fill(null));
    const [signX, setSignX] = useState(true);

    const winner = calculateWinner(ticTacToeBoard);
    let status;

    if (winner === 'Draw') {
        status = 'Game Draw';
    } else if (winner) {
        status = 'Winner: ' + winner;
    } else {

        status = 'Player Turn: ' + (signX ? 'X' : 'O');
    }


    const handleClick = (i) => {
        const squares = ticTacToeBoard.slice();
        if (squares[i] === null && !winner) {
            squares[i] = signX ? 'X' : 'O';
            setTicTacToeBoard(squares);
            setSignX(!signX);
        } else {
            alert("Can't do that")
        }

    }

    const renderSquare = (i) => {
        return (
            <Square value={ticTacToeBoard[i]} onClick={() => handleClick(i)} />
        )
    }

    function calculateWinner(squares) {

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (ticTacToeBoard[a] && ticTacToeBoard[a] === ticTacToeBoard[b] && ticTacToeBoard[a] === ticTacToeBoard[c]) {
                return ticTacToeBoard[a];
            }
        }
        for (let i = 0; i < ticTacToeBoard.length; i++) {
            if (!ticTacToeBoard[i]) {
                return null;
            }
        }
        return 'Draw';
    }

    const resetButtonClick = () => {
        setTicTacToeBoard(Array(9).fill(null));
        setSignX(true);
    }

    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

            <h3>{status}</h3>

            <button className="reset-btn" onClick={resetButtonClick}>Reset Game</button>
        </div>
    )
}

export default Board