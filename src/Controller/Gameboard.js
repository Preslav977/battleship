import { battleShipLogic } from "../Model/Ship";

const carrier = battleShipLogic.Ship("carrier", 5, 0, false);

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
      for (let i = 0; i < ship.length; i += 1) {
        if (
          board[col + i][row] === "" &&
          board[col + i][row] < ship.length &&
          direction === "vertical"
        ) {
          board[col + i][row] = ship;
          board[col + i + 1][row + 1] = "X";
          board[col + i - 1][row + 1] = "X";
        } else if (
          board[col][row + i] === "" &&
          board[col][row + i] < ship.length &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
          board[col - 1][row + i - 0] = "X";
          board[col + 1][row + i - 0] = "X";
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

    const receiveAttack = (col, row) => {
      if (board[col][row] === "" || board[col][row] === "X") {
        board[col][row] = "M";
        return "Miss";
      }
    };

    return { placeShip, receiveAttack, printBoard };
  };

  return {
    gameBoard,
  };
})();

export { battleShipBoard };
