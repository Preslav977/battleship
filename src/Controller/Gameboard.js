const battleShipBoard = (() => {
  const gameBoard = () => {
    const createBoard = () => {
      const cols = 8;
      const rows = 8;
      const board = [];

      for (let i = 0; i < cols; i += 1) {
        board[i] = [];
        for (let j = 0; j < rows; j += 1) {
          board[i][j] = "";
        }
      }
      return board;
    };

    const placeShip = (row, col, ship, direction) => {};

    return { createBoard };
  };

  return {
    gameBoard,
  };
})();

module.exports = battleShipBoard;
