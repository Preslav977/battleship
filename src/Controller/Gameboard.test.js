/* eslint-disable no-undef */
import { battleShipLogic } from "../Model/Ship";
import { battleShipBoard } from "./Gameboard";

test("Check if ship has been placed on coordinates", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 0, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
});

test("Check if ship is out of bound", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 8, carrier, "horizontal")).toBe(
    "Invalid ship placement"
  );
});

test("Check if ship has already been placed at coordinate", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false);
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
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
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
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
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(2, 1, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
  expect(playerBoard.placeShip(4, 3, battleShip, "horizontal")).not.toBe(
    "Invalid ship placement"
  );
});

test("Check if there is a miss on enemy board", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  const computerBoard = battleShipBoard.gameBoard();
  computerBoard.placeShip(1, 0, carrier, "vertical");
  expect(computerBoard.receiveAttack(2, 1)).toBe("Miss");
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("Check if there is a hit on enemy board", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  const computerBoard = battleShipBoard.gameBoard();
  computerBoard.placeShip(1, 0, carrier, "vertical");
  const spy = jest.spyOn(carrier, "hit");
  computerBoard.receiveAttack(1, 0);
  expect(spy).toHaveBeenCalled();
});

test("Check if the same spot has been hit", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  const computerBoard = battleShipBoard.gameBoard();
  computerBoard.placeShip(1, 0, carrier, "vertical");
  const spy = jest.spyOn(carrier, "hit");
  computerBoard.receiveAttack(1, 0);
  expect(spy).toHaveBeenCalled();
  expect(computerBoard.receiveAttack(1, 0)).toBe("You cant hit the same spot");
});

test("Check if hit has been called to the correct ship", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false, false);
  const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false, false);
  const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false, false);
  const computerBoard = battleShipBoard.gameBoard();
  computerBoard.placeShip(1, 0, carrier, "vertical");
  computerBoard.placeShip(3, 1, battleShip, "vertical");
  computerBoard.placeShip(4, 2, destroyer, "horizontal");
  computerBoard.placeShip(5, 4, subMarine, "horizontal");
  computerBoard.placeShip(6, 4, patrolBoat, "horizontal");
  const attackCarrier = jest.spyOn(carrier, "hit");
  const attackBattleShip = jest.spyOn(battleShip, "hit");
  const attackDestroyer = jest.spyOn(destroyer, "hit");
  const attackSubMarine = jest.spyOn(subMarine, "hit");
  const attackPatrolBoat = jest.spyOn(patrolBoat, "hit");
  computerBoard.receiveAttack(1, 0);
  computerBoard.receiveAttack(2, 0);
  computerBoard.receiveAttack(3, 0);
  computerBoard.receiveAttack(3, 1);
  computerBoard.receiveAttack(4, 1);
  computerBoard.receiveAttack(4, 2);
  computerBoard.receiveAttack(5, 4);
  computerBoard.receiveAttack(5, 5);
  computerBoard.receiveAttack(6, 4);
  expect(attackCarrier).toHaveBeenCalledTimes(3);
  expect(attackBattleShip).toHaveBeenCalledTimes(2);
  expect(attackDestroyer).toHaveBeenCalledTimes(1);
  expect(attackSubMarine).toHaveBeenCalledTimes(2);
  expect(attackPatrolBoat).toHaveBeenCalledTimes(1);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("Check if one ship has been sunk, and not all of them", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  const computerBoard = battleShipBoard.gameBoard();
  computerBoard.placeShip(1, 0, carrier, "vertical");
  const spyOnCarrierHit = jest.spyOn(carrier, "hit");
  const spyOnCarrierSunk = jest.spyOn(carrier, "isSunk");
  computerBoard.receiveAttack(1, 0);
  computerBoard.receiveAttack(2, 0);
  computerBoard.receiveAttack(3, 0);
  computerBoard.receiveAttack(4, 0);
  computerBoard.receiveAttack(5, 0);
  expect(spyOnCarrierHit).toHaveBeenCalledTimes(5);
  computerBoard.areAllShipsSunk();
  expect(spyOnCarrierSunk).toHaveBeenCalled();
  expect(computerBoard.areAllShipsSunk()).toBe(false);
});

test("Check if all ships has been sunk", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false, false);
  const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false, false);
  const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false, false);
  const computerBoard = battleShipBoard.gameBoard();
  computerBoard.placeShip(1, 0, carrier, "vertical");
  computerBoard.placeShip(3, 1, battleShip, "vertical");
  computerBoard.placeShip(4, 2, destroyer, "horizontal");
  computerBoard.placeShip(5, 4, subMarine, "horizontal");
  computerBoard.placeShip(6, 4, patrolBoat, "horizontal");
  const attackCarrier = jest.spyOn(carrier, "hit");
  const attackBattleShip = jest.spyOn(battleShip, "hit");
  const attackDestroyer = jest.spyOn(destroyer, "hit");
  const attackSubMarine = jest.spyOn(subMarine, "hit");
  const attackPatrolBoat = jest.spyOn(patrolBoat, "hit");
  const spyOnSunkCarrier = jest.spyOn(carrier, "isSunk");
  const spyOnSunkBattleship = jest.spyOn(battleShip, "isSunk");
  const spyOnSunkDestroyer = jest.spyOn(destroyer, "isSunk");
  const spyOnSunkSubmarine = jest.spyOn(subMarine, "isSunk");
  const spyOnSunkPatrolBoat = jest.spyOn(patrolBoat, "isSunk");
  computerBoard.receiveAttack(1, 0);
  computerBoard.receiveAttack(2, 0);
  computerBoard.receiveAttack(3, 0);
  computerBoard.receiveAttack(4, 0);
  computerBoard.receiveAttack(5, 0);
  computerBoard.receiveAttack(3, 1);
  computerBoard.receiveAttack(4, 1);
  computerBoard.receiveAttack(5, 1);
  computerBoard.receiveAttack(6, 1);
  computerBoard.receiveAttack(4, 2);
  computerBoard.receiveAttack(4, 3);
  computerBoard.receiveAttack(4, 4);
  computerBoard.receiveAttack(5, 4);
  computerBoard.receiveAttack(5, 5);
  computerBoard.receiveAttack(5, 6);
  computerBoard.receiveAttack(6, 4);
  computerBoard.receiveAttack(6, 5);
  expect(attackCarrier).toHaveBeenCalledTimes(5);
  expect(attackBattleShip).toHaveBeenCalledTimes(4);
  expect(attackDestroyer).toHaveBeenCalledTimes(3);
  expect(attackSubMarine).toHaveBeenCalledTimes(3);
  expect(attackPatrolBoat).toHaveBeenCalledTimes(2);
  computerBoard.areAllShipsSunk();
  expect(spyOnSunkCarrier).toHaveBeenCalled();
  expect(spyOnSunkBattleship).toHaveBeenCalled();
  expect(spyOnSunkDestroyer).toHaveBeenCalled();
  expect(spyOnSunkSubmarine).toHaveBeenCalled();
  expect(spyOnSunkPatrolBoat).toHaveBeenCalled();
  expect(computerBoard.areAllShipsSunk()).toBe(true);
});
