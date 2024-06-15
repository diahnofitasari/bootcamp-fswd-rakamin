import React, { createContext, useReducer, useContext } from 'react';

const GameContext = createContext();

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

function gameReducer(state, action) {
  switch (action.type) {
    case 'SELECT_SQUARE':
      if (state.squares[action.payload] || calculateWinner(state.squares)) {
        return state;
      }
      const squaresCopy = [...state.squares];
      squaresCopy[action.payload] = calculateNextValue(state.squares);
      return {
        ...state,
        squares: squaresCopy,
      };
    case 'RESTART':
      return {
        ...state,
        squares: Array(9).fill(null),
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
