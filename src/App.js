import * as React from 'react';
import './App.css';

function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [winner, setWinner] = React.useState(null);

  function selectSquare(square) {
    if (squares[square] || calculateWinner(squares)) return;
    const squaresCopy = [...squares];
    squaresCopy[square] = calculateNextValue(squares);
    setSquares(squaresCopy);
    const winner = calculateWinner(squaresCopy);
    if (winner) {
      setWinner(winner);
    }
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setWinner(null);
  }

  const nextValue = calculateNextValue(squares);
  const status = calculateStatus(winner, squares, nextValue);

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    );
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        {Array(9).fill(null).map((_, i) => (
          <div key={i}>{renderSquare(i)}</div>
        ))}
      </div>
      <button className="reset-btn" onClick={restart}>
        Restart
      </button>
      <div className="players">
        <div className="player">
          <div>Player 1</div>
          <div>X</div>
        </div>
        <div className="player">
          <div>Player 2</div>
          <div>O</div>
        </div>
      </div>
      {winner && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{winner} Wins!</h2>
            <button className="reset-btn" onClick={restart}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Game() {
  return (
    <div>
      <h1 className="title">Playing Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
      ? `Scratch: Cat's game`
      : `Next player: ${nextValue}`;
}

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
