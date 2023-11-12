/* eslint-disable no-param-reassign */

import { battleShipLogic } from "../Model/Ship";

const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);

const battleShipBoard = (() => {
  const gameBoard = () => {
    const cols = 8;
    const rows = 8;
    const board = [];
    const saveShips = [];

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
      saveShips.push(ship);
      return ship;
    };

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
      let sunkShips = 0;

      for (let i = 0; i < saveShips.length; i += 1) {
        if (saveShips[i].name === "carrier" && saveShips[i].isSunk()) {
          sunkShips += 1;
        }
        // else if (
        //   saveShips[i].name === "battleShip" &&
        //   saveShips[i].isSunk()
        // ) {
        //   sunkShips += 1;
        // } else if (saveShips[i].name === "destroyer" && saveShips[i].isSunk()) {
        //   sunkShips += 1;
        // } else if (saveShips[i].name === "subMarine" && saveShips[i].isSunk()) {
        //   sunkShips += 1;
        // } else if (
        //   saveShips[i].name === "patrolBoat" &&
        //   saveShips[i].isSunk()
        // ) {
        //   sunkShips += 1;
        // }
      }

      if (sunkShips === 1) {
        return true;
      }
      return false;
    };

    return {
      isCellAvailable,
      placeShip,
      printBoard,
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
