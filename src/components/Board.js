import React, { useState } from 'react';
import Square from './Square';
import '../index.css';


const Board = () => {

    const [ticTacToeBoard, setTicTacToeBoard] = useState(Array(9).fill(null));
    const [signX, setSignX] = useState(true);
    const data = [0, 1, 2];
    const boardDimension = 3;
   
    const winner = calculateWinner();
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

    function calculateWinner() {
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
           
            
            {
                data.map((row) => (
                    <div className="board-row">{
                        data.map((col) =>
                            renderSquare(row * boardDimension + col)
                        )}
                    </div>
                )
                )
            }

            <h3>{status}</h3>

            <button className="reset-btn" onClick={resetButtonClick}>Reset Game</button>
            
        </div>
    )
}

export default Board