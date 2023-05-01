const board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const changeBoard = (payload, board) => {
  const { x, y, color, figure } = payload;
  const FIGURE_MAP = {
    ["small_square"]: { x, y, color },
  };
  board[x][y] = color;
};
const payload = { color: 1, x: 1, y: 1, figure: "small_square" };
changeBoard(payload, board);
console.log(board);
