/* eslint-disable no-undef */
import { battleShipLogic } from "../Model/Ship";
import { battleShipBoard } from "./Gameboard";

test("Check if ship has been placed on coordinates", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 0, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
});

test("Check if ship is out of bound", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 8, carrier, "horizontal")).toBe(
    "Invalid ship placement"
  );
});

test("Check if ship has already been placed at coordinate", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false);
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 0, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
  expect(playerBoard.placeShip(1, 0, battleShip, "vertical")).toBe(
    "Invalid ship placement"
  );
});

test("Check if ships are overlapping", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false);
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 0, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
  expect(playerBoard.placeShip(2, 0, battleShip, "horizontal")).toBe(
    "Invalid ship placement"
  );
});

test("Check if ships are not overlapping", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false);
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(2, 1, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
  expect(playerBoard.placeShip(4, 3, battleShip, "horizontal")).not.toBe(
    "Invalid ship placement"
  );
});

test("Check if there is a miss on enemy board", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false);
  const computerBoard = battleShipBoard.gameBoard();
  computerBoard.placeShip(1, 0, carrier, "vertical");
  expect(computerBoard.receiveAttack(2, 1)).toBe("Miss");
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("Check if there is a hit on enemy board", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false);
  const computerBoard = battleShipBoard.gameBoard();
  computerBoard.placeShip(1, 0, carrier, "vertical");
  computerBoard.receiveAttack(1, 0);
  const spy = jest.spyOn(carrier, "hit");
  const attack = carrier.hit();
  expect(spy).toHaveBeenCalled();
  expect(attack).toHaveProperty("numberOfHits", 1);
});
