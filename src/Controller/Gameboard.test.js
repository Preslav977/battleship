import { battleShipCreation } from "../Model/Ship";
import { battleShipBoard } from "./Gameboard";

test("Check if ship has been placed on coordinates", () => {
  const carrier = battleShipCreation.Ship(5, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 0, carrier)).toBe(true);
});

test("Check if ship is out of bound", () => {
  const carrier = battleShipCreation.Ship(5, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 8, carrier)).toBe(false);
});

test("Check if ship has already been placed at coordinate", () => {
  const carrier = battleShipCreation.Ship(5, 0, false);
  const battleShip = battleShipCreation.Ship(4, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 1, carrier)).toBe(true);
  expect(playerBoard.placeShip(1, 1, battleShip)).toBe(false);
});

test("Check if ships are not overlapping", () => {
  const carrier = battleShipCreation.Ship(5, 0, false);
  const battleShip = battleShipCreation.Ship(4, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(0, 0, carrier)).toBe(true);
  expect(playerBoard.placeShip(0, 0, battleShip)).toBe(false);
  expect(playerBoard.placeShip(2, 1, carrier)).toBe(true);
  expect(playerBoard.placeShip(2, 1, battleShip)).toBe(false);
});
