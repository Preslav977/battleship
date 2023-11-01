import { battleShipLogic } from "../Model/Ship";

const carrier = battleShipLogic.Ship("carrier", 5, 0, false);

const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false);

const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false);

const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false);

const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false);

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

    const receiveAttack = (col, row) => {
      if (board[col][row] === "") {
        board[col][row] = "M";
        return "Miss";
      }
      if (board[col][row] === carrier && board[col][row] !== "H") {
        board[col][row] = "H";
        return carrier.hit();
      }
      if (board[col][row] === battleShip && board[col][row] !== "H") {
        board[col][row] = "H";
        return battleShip.hit();
      }
      if (board[col][row] === destroyer && board[col][row] !== "H") {
        board[col][row] = "H";
        return destroyer.hit();
      }
      if (board[col][row] === subMarine && board[col][row] !== "H") {
        board[col][row] = "H";
        return subMarine.hit();
      }
      if (board[col][row] === patrolBoat && board[col][row] !== "H") {
        board[col][row] = "H";
        return patrolBoat.hit();
      }
      return "You cant attack the same spot";
    };

    const missedShipAttacks = () => {
      const getBoardCopy = [...board];

      const filteredMissedAttacks = [];

      for (let i = 0; i < getBoardCopy.length; i += 1) {
        const retrieveMissedAttacks = getBoardCopy[i].filter(
          (attack) => attack === "M"
        );
        if (retrieveMissedAttacks.length !== 0) {
          filteredMissedAttacks.push(retrieveMissedAttacks);
        }
      }
      return filteredMissedAttacks;
    };

    const areAllShipsSunk = () => {
      if (
        carrier.isSunk() === true &&
        battleShip.isSunk() === true &&
        destroyer.isSunk() === true &&
        subMarine.isSunk() === true &&
        patrolBoat.isSunk() === true
      ) {
        return true;
      }
      return false;
    };

    return {
      printBoard,
      placeShip,
      receiveAttack,
      missedShipAttacks,
      areAllShipsSunk,
    };
  };

  return {
    gameBoard,
  };
})();

export { battleShipBoard };
