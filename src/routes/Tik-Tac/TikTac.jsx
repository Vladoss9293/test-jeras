import React, { useState } from 'react'
import Header from '../header/Header'
import style from './TikTac.module.css';

export default function TikTac() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function Square({value, onSquareClick}) {
      return (
        <button onClick={onSquareClick} className={style.square}>{value}</button>
      )
    }

    function handleClick(i) {
        if (squares[i]) {
            return;
        }

        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        setXIsNext(!xIsNext);
        setSquares(nextSquares);
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
            [2, 4, 6]
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
        
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <div className={style.otstup}>
                <div className={style.status}>{status}</div>
                <div className={style.boardRow}>
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className={style.boardRow}>
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className={style.boardRow}>
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
        </div>
    </div>
  )
}
