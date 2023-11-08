import { battleShipLogic } from "./Model/Ship";

import { battleShipBoard } from "./Controller/Gameboard";

const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);

const playersBoard = battleShipBoard.gameBoard();

console.log(playersBoard.placeShip(0, 0, carrier, "vertical"));

playersBoard.printBoard();
