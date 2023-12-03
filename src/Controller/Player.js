/* eslint-disable no-continue */
/* eslint-disable no-unused-expressions */

import { battleShipLogic } from "../Model/Ship";

import { battleShipBoard } from "../Model/Gameboard";

// TODO: Figure out better way to store the objects, instead of hanging
// in the global scope of this module

const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);

const carrierAI = battleShipLogic.Ship("carrier", 5, 0, false, false);

const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);

const battleShipAI = battleShipLogic.Ship("battleShip", 4, 0, false, false);

const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false, false);

const destroyerAI = battleShipLogic.Ship("destroyer", 3, 0, false, false);

const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false, false);

const subMarineAI = battleShipLogic.Ship("subMarine", 3, 0, false, false);

const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false, false);

const patrolBoatAI = battleShipLogic.Ship("patrolBoat", 2, 0, false, false);

const playerBoard = battleShipBoard.gameBoard();

const computerBoard = battleShipBoard.gameBoard();

const battleShipGame = (() => {
  const Player = (name) => name;

  let player;

  const computer = { name: "Computer" };

  const setPlayer = (name) => {
    player = Player(name);
  };

  let firstPlayer;

  const setFirstPlayer = () => {
    firstPlayer = player;
  };

  const getPlayer = () => player;

  const getComputer = () => computer;

  const switchPlayersTurns = () => {
    firstPlayer = firstPlayer === player ? computer : player;
  };

  const getFirstPlayer = () => firstPlayer;

  const attackComputerBoard = (col, row, computerBoard) => {
    console.log(computerBoard.receiveAttack(col, row));
  };

  // TODO: Figure out how to make the AI smarter

  const attackPlayerBoard = (playerBoard) => {
    let col = Math.floor(Math.floor(Math.random() * 10));
    let row = Math.floor(Math.floor(Math.random() * 10));

    while (
      playerBoard.receiveAttack(col, row) === "You cant attack the same spot"
    ) {
      col = Math.floor(Math.floor(Math.random() * 10));
      row = Math.floor(Math.floor(Math.random() * 10));
    }
  };

  // TODO: Implement player placing system and after that either remove the
  // random placing of the ships or make it so it can be used both

  const placeAllShipsRandomly = () => {
    playerBoard.isCellAvailable(1, 0, carrier, "vertical");

    while (!carrier.isPlaced) {
      try {
        playerBoard.placeShipRandomly(carrier);
        break;
      } catch {
        ("Invalid ship placement");
        continue;
      }
    }

    computerBoard.isCellAvailable(1, 0, carrierAI, "vertical");

    while (!carrierAI.isPlaced) {
      try {
        computerBoard.placeShipRandomly(carrierAI);
        break;
      } catch {
        ("Invalid ship placement");
        continue;
      }
    }

    playerBoard.isCellAvailable(1, 3, battleShip, "horizontal");

    while (!battleShip.isPlaced) {
      try {
        playerBoard.placeShipRandomly(battleShip);
        break;
      } catch {
        ("Invalid ship placement");
        continue;
      }
    }

    computerBoard.isCellAvailable(1, 3, battleShip, "horizontal");

    while (!battleShipAI.isPlaced) {
      try {
        computerBoard.placeShipRandomly(battleShipAI);
        break;
      } catch {
        ("Invalid ship placement");
        continue;
      }
    }

    playerBoard.isCellAvailable(3, 5, destroyer, "horizontal");

    while (!destroyer.isPlaced) {
      try {
        playerBoard.placeShipRandomly(destroyer);
        break;
      } catch {
        ("Invalid ship placement");
        continue;
      }
    }

    computerBoard.isCellAvailable(3, 5, destroyerAI, "horizontal");

    while (!destroyerAI.isPlaced) {
      try {
        computerBoard.placeShipRandomly(destroyerAI);
        break;
      } catch {
        ("Invalid ship placement");
        continue;
      }
    }

    playerBoard.isCellAvailable(2, 4, subMarine, "vertical");

    while (!subMarine.isPlaced) {
      try {
        playerBoard.placeShipRandomly(subMarine);
        break;
      } catch {
        ("Invalid ship placement");
        continue;
      }
    }

    computerBoard.isCellAvailable(2, 4, subMarineAI, "vertical");

    while (!subMarineAI.isPlaced) {
      try {
        computerBoard.placeShipRandomly(subMarineAI);
        break;
      } catch {
        ("Invalid ship placement");
        continue;
      }
    }

    playerBoard.isCellAvailable(8, 2, patrolBoat, "horizontal");

    while (!patrolBoat.isPlaced) {
      try {
        playerBoard.placeShipRandomly(patrolBoat);
        break;
      } catch {
        ("Invalid ship placement");
        continue;
      }
    }

    computerBoard.isCellAvailable(8, 2, patrolBoatAI, "horizontal");

    while (!patrolBoatAI.isPlaced) {
      try {
        computerBoard.placeShipRandomly(patrolBoatAI);
        break;
      } catch {
        ("Invalid ship placement");
        continue;
      }
    }

    if (
      carrier.isPlaced &&
      carrierAI.isPlaced &&
      battleShip.isPlaced &&
      battleShipAI.isPlaced &&
      destroyer.isPlaced &&
      destroyerAI.isPlaced &&
      subMarine.isPlaced &&
      subMarineAI.isPlaced &&
      patrolBoat.isPlaced &&
      patrolBoatAI.isPlaced
    ) {
      return true;
    }
    return false;
  };

  const gameLoop = (col, row) => {
    attackComputerBoard(col, row, computerBoard, getFirstPlayer());

    computerBoard.printBoard();

    playerBoard.missedAttacksPlayer(computerBoard);

    if (playerBoard.checkForWin(computerBoard)) {
      // console.log(getPlayer(), "won!");
      return;
    }

    switchPlayersTurns();

    attackPlayerBoard(playerBoard);

    // playerBoard.printBoard();

    computerBoard.missedAttacksComputer(playerBoard);

    if (computerBoard.checkForWin(playerBoard)) {
      // console.log(getComputer().name, "won!");
    }
  };

  return {
    Player,
    placeAllShipsRandomly,
    setPlayer,
    setFirstPlayer,
    getPlayer,
    getComputer,
    switchPlayersTurns,
    attackComputerBoard,
    attackPlayerBoard,
    getFirstPlayer,
    gameLoop,
  };
})();

export {
  battleShipGame,
  playerBoard,
  computerBoard,
  carrier,
  carrierAI,
  battleShip,
  battleShipAI,
  destroyer,
  destroyerAI,
  subMarine,
  subMarineAI,
  patrolBoat,
  patrolBoatAI,
};
