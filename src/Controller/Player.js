import { battleShipLogic } from "../Model/Ship";

import { battleShipBoard } from "../Model/Gameboard";

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

  // after the the game is started
  // upon creating the player
  // create the player object
  // and the board objects

  let player;

  const computer = { name: "Computer" };

  const setPlayer = (name) => {
    player = Player(name);
  };

  let firstPlayer = player;

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

  const placeAllShipsWithHardcodedCoordinates = () => {
    playerBoard.isCellAvailable(1, 0, carrier, "vertical");

    playerBoard.placeShip(1, 0, carrier, "vertical");

    playerBoard.isCellAvailable(1, 3, battleShip, "horizontal");

    playerBoard.placeShip(1, 3, battleShip, "horizontal");

    playerBoard.isCellAvailable(3, 5, destroyer, "horizontal");

    playerBoard.placeShip(3, 5, destroyer, "horizontal");

    playerBoard.isCellAvailable(2, 4, subMarine, "vertical");

    playerBoard.placeShip(2, 4, subMarine, "vertical");

    playerBoard.isCellAvailable(6, 6, patrolBoat, "horizontal");

    playerBoard.placeShip(6, 6, patrolBoat, "horizontal");

    computerBoard.isCellAvailable(1, 0, carrierAI, "vertical");

    computerBoard.placeShip(1, 0, carrierAI, "vertical");

    computerBoard.isCellAvailable(1, 3, battleShipAI, "horizontal");

    computerBoard.placeShip(1, 3, battleShipAI, "horizontal");

    computerBoard.isCellAvailable(3, 5, destroyerAI, "horizontal");

    computerBoard.placeShip(3, 5, destroyerAI, "horizontal");

    computerBoard.isCellAvailable(2, 4, subMarineAI, "vertical");

    computerBoard.placeShip(2, 4, subMarineAI, "vertical");

    computerBoard.isCellAvailable(8, 2, patrolBoatAI, "horizontal");

    computerBoard.placeShip(8, 2, patrolBoatAI, "horizontal");
  };

  const gameLoop = (col, row) => {
    attackComputerBoard(col, row, computerBoard, getFirstPlayer());

    computerBoard.printBoard();

    console.log("Player missed attacks", playerBoard.missedAttacksPlayer());

    console.log("Are computer ships sunk", computerBoard.areAllShipsSunk());

    switchPlayersTurns();

    attackPlayerBoard(playerBoard);

    playerBoard.printBoard();

    console.log(
      "Computer missed attacks",
      computerBoard.missedAttacksComputer()
    );

    console.log("Are player ships sunk", playerBoard.areAllShipsSunk());
  };

  return {
    Player,
    setPlayer,
    setFirstPlayer,
    getPlayer,
    getComputer,
    switchPlayersTurns,
    attackComputerBoard,
    attackPlayerBoard,
    getFirstPlayer,
    placeAllShipsWithHardcodedCoordinates,
    gameLoop,
  };
})();

export { battleShipGame, playerBoard, computerBoard };
