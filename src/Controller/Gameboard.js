const battleShipBoard = (() => {
  const gameBoard = () => {
    const cols = 8;
    const rows = 8;
    const board = [];

    for (let i = 0; i < cols; i += 1) {
      board[i] = [];
      for (let j = 0; j < rows; j += 1) {
        board[i][j] = "";
      }
    }

    const placeShip = (col, row, ship, direction) => {
      for (let i = 0; i < ship.length; i++) {
        if (
          board[col + i][row] === "" &&
          board[col + i][row] < ship.length &&
          direction === "vertical"
        ) {
          board[col + i][row] = ship;
        } else if (
          board[col][row + i] === "" &&
          board[col][row + i] < ship.length &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
        } else {
          return "Invalid ship placement";
        }
      }
      return board[col][row];
    };

    const printBoard = () => {
      board.forEach((cell) => {
        console.log(cell);
      });
    };

    return { placeShip, printBoard };
  };

  return {
    gameBoard,
  };
})();

export { battleShipBoard };
