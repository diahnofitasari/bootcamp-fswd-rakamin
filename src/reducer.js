import { SELECT_SQUARE, RESTART } from './actions';

const initialState = {
  squares: Array(9).fill(null),
};

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

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
      ? `Scratch: Cat's game`
      : `Next player: ${nextValue}`;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SQUARE:
      if (state.squares[action.payload] || calculateWinner(state.squares)) {
        return state;
      }
      const squaresCopy = [...state.squares];
      squaresCopy[action.payload] = calculateNextValue(state.squares);
      return {
        ...state,
        squares: squaresCopy,
      };
    case RESTART:
      return {
        ...state,
        squares: Array(9).fill(null),
      };
    default:
      return state;
  }
};

export default reducer;
