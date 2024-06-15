export const SELECT_SQUARE = 'SELECT_SQUARE';
export const RESTART = 'RESTART';

export const selectSquare = (index) => ({
  type: SELECT_SQUARE,
  payload: index,
});

export const restart = () => ({
  type: RESTART,
});
