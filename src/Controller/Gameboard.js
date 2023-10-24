import { battleShipCreation } from "../Model/Ship";

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

    const placeShip = (col, row, ship) => {
      const shipLength = ship.length;
      for (let i = 0; i < board.length; i++) {
        if (
          board[col + shipLength][row] >= 0 &&
          board[col + shipLength][row] < 8
        ) {
          board[col + shipLength][row] = ship;
          return true;
        }
        if (
          board[col][row + shipLength] >= 0 &&
          board[col][row + shipLength] < 8
        ) {
          board[col][row + shipLength] = ship;
          return true;
        }
      }
      return false;
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
