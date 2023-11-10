/* eslint-disable no-param-reassign */
import { battleShipLogic } from "../Model/Ship";

const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);

const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);

const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false, false);

const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false, false);

const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false, false);

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

    const isCellAvailable = (col, row, ship, direction) => {
      const shipArray = [];
      if (direction === "vertical") {
        for (let i = 0; i < ship.length; i += 1) {
          shipArray.push(board[col + i][row]);
        }
      } else if (direction === "horizontal") {
        for (let i = 0; i < ship.length; i += 1) {
          shipArray.push(board[col][row + i]);
        }
      }
      return shipArray.every((cell) => cell === "");
    };

    const placeShip = (col, row, ship, direction) => {
      if (
        isCellAvailable(col, row, ship, direction) === true &&
        direction === "vertical"
      ) {
        for (let i = 0; i < ship.length; i += 1) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
        }
      } else if (
        isCellAvailable(col, row, ship, direction) === true &&
        direction === "horizontal"
      ) {
        for (let i = 0; i < ship.length; i += 1) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
        }
      } else if (!isCellAvailable(col, row, ship, direction) === true) {
        throw new Error("Invalid ship placement");
      }
      return board[col][row];
    };

    // const placeShipComputer = (ship) => {
    //   const col = Math.floor(Math.random() * 8);
    //   const row = Math.floor(Math.random() * 8);
    //   const shipDirections = ["vertical", "horizontal"];
    //   const getRandomDirections = Math.floor(
    //     Math.random() * shipDirections.length
    //   );
    //   const direction = shipDirections[getRandomDirections];
    // };

    const printBoard = () => {
      board.forEach((cell) => {
        console.log(cell);
      });
    };

    const receiveAttack = (col, row) => {
      const getAllShips = board[col][row];

      if (board[col][row] === "") {
        board[col][row] = "M";
        return "Miss";
      }

      if (
        board[col][row] === getAllShips &&
        board[col][row] !== "H" &&
        board[col][row] === getAllShips &&
        board[col][row] !== "M"
      ) {
        board[col][row] = "H";
        return getAllShips.hit();
      }
      return "You cant hit the same spot";
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
      isCellAvailable,
      placeShip,
      printBoard,
      // placeShipComputer,
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
