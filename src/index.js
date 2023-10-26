import { battleShipCreation } from "./Model/Ship";
import { battleShipBoard } from "./Controller/Gameboard";

const carrier = battleShipCreation.Ship("carrier", 5, 0, false);

const battleShip = battleShipCreation.Ship("battleShip", 4, 0, false);

const playersBoard = battleShipBoard.gameBoard();

console.log(playersBoard.placeShip(0, 0, carrier));

console.log(playersBoard.placeShip(1, 0, battleShip));

playersBoard.printBoard();
