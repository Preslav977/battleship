import { battleShipCreation } from "../Model/Ship";
import { battleShipBoard } from "./Gameboard";

test("Check if ship has been placed on coordinates", () => {
  const carrier = battleShipCreation.Ship("carrier", 5, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 0, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
});

test("Check if ship is out of bound", () => {
  const carrier = battleShipCreation.Ship("carrier", 5, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 8, carrier, "horizontal")).toBe(
    "Invalid ship placement"
  );
});

test("Check if ship has already been placed at coordinate", () => {
  const carrier = battleShipCreation.Ship("carrier", 5, 0, false);
  const battleShip = battleShipCreation.Ship("battleShip", 4, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(0, 0, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
  expect(playerBoard.placeShip(1, 0, battleShip, "vertical")).toBe(
    "Invalid ship placement"
  );
});

test("Check if ships are overlapping", () => {
  const carrier = battleShipCreation.Ship("carrier", 5, 0, false);
  const battleShip = battleShipCreation.Ship("battleShip", 4, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 1, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
  expect(playerBoard.placeShip(1, 0, battleShip, "horizontal")).toBe(
    "Invalid ship placement"
  );
});

test("Check if ships are not overlapping", () => {
  const carrier = battleShipCreation.Ship("carrier", 5, 0, false);
  const battleShip = battleShipCreation.Ship("battleShip", 4, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(3, 1, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
  expect(playerBoard.placeShip(1, 0, battleShip, "horizontal")).not.toBe(
    "Invalid ship placement"
  );
});
