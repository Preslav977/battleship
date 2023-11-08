/* eslint-disable no-param-reassign */
import { battleShipLogic } from "../Model/Ship";

let carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);

let battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);

let destroyer = battleShipLogic.Ship("destroyer", 3, 0, false, false);

let subMarine = battleShipLogic.Ship("subMarine", 3, 0, false, false);

let patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false, false);

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
          ship.name === "carrier" &&
          board[col + i][row] === "" &&
          direction === "vertical"
        ) {
          ship.isPlaced = true;
          board[col + i][row] = ship;
          carrier = ship;
        } else if (
          ship.name === "battleShip" &&
          board[col + i][row] === "" &&
          direction === "vertical"
        ) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
          battleShip = ship;
        } else if (
          ship.name === "destroyer" &&
          board[col + i][row] === "" &&
          direction === "vertical"
        ) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
          destroyer = ship;
        } else if (
          ship.name === "subMarine" &&
          board[col + i][row] === "" &&
          direction === "vertical"
        ) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
          subMarine = ship;
        } else if (
          ship.name === "patrolBoat" &&
          board[col + i][row] === "" &&
          direction === "vertical"
        ) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
          patrolBoat = ship;
        } else if (
          ship.name === "carrier" &&
          board[col][row + i] === "" &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
          carrier = ship;
        } else if (
          ship.name === "battleShip" &&
          board[col][row + i] === "" &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
          battleShip = ship;
        } else if (
          ship.name === "destroyer" &&
          board[col][row + i] === "" &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
          destroyer = ship;
        } else if (
          ship.name === "subMarine" &&
          board[col][row + i] === "" &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
          subMarine = ship;
        } else if (
          ship.name === "patrolBoat" &&
          board[col][row + i] === "" &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
          patrolBoat = ship;
        } else {
          return "Invalid ship placement";
        }
      }
      return board[col][row];
    };

    const placeShipComputer = (ship) => {
      const col = Math.floor(Math.random() * 8);
      const row = Math.floor(Math.random() * 8);
      const shipDirections = ["vertical", "horizontal"];
      const getRandomDirections = Math.floor(
        Math.random() * shipDirections.length
      );
      const direction = shipDirections[getRandomDirections];

      for (let i = 0; i < ship.length; i += 1) {
        if (
          ship.name === "carrier" &&
          board[col + i][row] === "" &&
          direction === "vertical"
        ) {
          ship.isPlaced = true;
          board[col + i][row] = ship;
          carrier = ship;
        } else if (
          ship.name === "battleShip" &&
          board[col + i][row] === "" &&
          direction === "vertical"
        ) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
          battleShip = ship;
        } else if (
          ship.name === "destroyer" &&
          board[col + i][row] === "" &&
          direction === "vertical"
        ) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
          destroyer = ship;
        } else if (
          ship.name === "subMarine" &&
          board[col + i][row] === "" &&
          direction === "vertical"
        ) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
          subMarine = ship;
        } else if (
          ship.name === "patrolBoat" &&
          board[col + i][row] === "" &&
          direction === "vertical"
        ) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
          patrolBoat = ship;
        } else if (
          ship.name === "carrier" &&
          board[col][row + i] === "" &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
          carrier = ship;
        } else if (
          ship.name === "battleShip" &&
          board[col][row + i] === "" &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
          battleShip = ship;
        } else if (
          ship.name === "destroyer" &&
          board[col][row + i] === "" &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
          destroyer = ship;
        } else if (
          ship.name === "subMarine" &&
          board[col][row + i] === "" &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
          subMarine = ship;
        } else if (
          ship.name === "patrolBoat" &&
          board[col][row + i] === "" &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
          patrolBoat = ship;
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
      printBoard,
      placeShip,
      placeShipComputer,
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
