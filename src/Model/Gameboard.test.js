/* eslint-disable no-undef */

import { battleShipLogic } from "./Ship";
import { battleShipBoard } from "./Gameboard";

test("Check if ship has been placed on coordinates", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.isCellAvailable(1, 0, carrier, "vertical")).toBe(true);
  expect(playerBoard.placeShip(1, 0, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
  expect(carrier.isPlaced).toBe(true);
});

test("Check if ship is out of bound", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.isCellAvailable(1, 8, carrier, "horizontal")).toBe(false);
  expect(() => {
    playerBoard.placeShip(1, 8, carrier, "horizontal");
  }).toThrow("Invalid ship placement");
  expect(carrier.isPlaced).toBe(false);
});

test("Check if ship has already been placed at coordinate", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false);
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.isCellAvailable(1, 0, carrier, "vertical")).toBe(true);
  expect(playerBoard.placeShip(1, 0, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
  expect(carrier.isPlaced).toBe(true);
  expect(playerBoard.isCellAvailable(1, 0, battleShip, "vertical")).toBe(false);
  expect(() => {
    playerBoard.placeShip(1, 0, battleShip, "vertical");
  }).toThrow("Invalid ship placement");
  expect(battleShip.isPlaced).toBe(false);
});

test("Check if ships are overlapping", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false);
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.isCellAvailable(1, 0, carrier, "vertical")).toBe(true);
  expect(playerBoard.placeShip(1, 0, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
  expect(carrier.isPlaced).toBe(true);
  expect(playerBoard.isCellAvailable(2, 0, battleShip, "horizontal")).toBe(
    false
  );
  expect(() => {
    playerBoard.placeShip(2, 0, battleShip, "horizontal");
  }).toThrow("Invalid ship placement");
  expect(battleShip.isPlaced).toBe(false);
});

test("Check if ships are not overlapping", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false);
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.isCellAvailable(2, 1, carrier, "vertical"));
  expect(playerBoard.placeShip(2, 1, carrier, "vertical")).not.toBe(
    "Invalid ship placement"
  );
  expect(carrier.isPlaced).toBe(true);
  expect(playerBoard.areAllShipsSunk(4, 1, battleShip, "horizontal"));
  expect(() => {
    playerBoard.placeShip(4, 1, battleShip, "horizontal");
  }).toThrow("Invalid ship placement");
  expect(battleShip.isPlaced).toBe(false);
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
  expect(computerBoard.isCellAvailable(1, 0, carrier, "vertical")).toBe(true);
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
  expect(computerBoard.isCellAvailable(1, 0, carrier, "vertical")).toBe(true);
  computerBoard.placeShip(1, 0, carrier, "vertical");
  expect(computerBoard.isCellAvailable(3, 1, battleShip, "vertical")).toBe(
    true
  );
  computerBoard.placeShip(3, 1, battleShip, "vertical");
  expect(computerBoard.isCellAvailable(4, 2, destroyer, "horizontal")).toBe(
    true
  );
  computerBoard.placeShip(4, 2, destroyer, "horizontal");
  expect(computerBoard.isCellAvailable(5, 4, subMarine, "horizontal")).toBe(
    true
  );
  computerBoard.placeShip(5, 4, subMarine, "horizontal");
  expect(computerBoard.isCellAvailable(6, 4, patrolBoat, "horizontal")).toBe(
    true
  );
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

test("Checking if computer ships are sunk, player wins", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false, false);
  const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false, false);
  const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false, false);
  const computerBoard = battleShipBoard.gameBoard();
  const playerBoard = battleShipBoard.gameBoard();
  expect(computerBoard.isCellAvailable(1, 0, carrier, "vertical")).toBe(true);
  computerBoard.placeShip(1, 0, carrier, "vertical");
  expect(computerBoard.isCellAvailable(3, 1, battleShip, "vertical")).toBe(
    true
  );
  computerBoard.placeShip(3, 1, battleShip, "vertical");
  expect(computerBoard.isCellAvailable(4, 2, destroyer, "horizontal")).toBe(
    true
  );
  computerBoard.placeShip(4, 2, destroyer, "horizontal");
  expect(computerBoard.isCellAvailable(5, 4, subMarine, "horizontal")).toBe(
    true
  );
  computerBoard.placeShip(5, 4, subMarine, "horizontal");
  expect(computerBoard.isCellAvailable(6, 4, patrolBoat, "horizontal")).toBe(
    true
  );
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
  expect(playerBoard.checkForWin(computerBoard)).toBe(true);
});

test("Checking if player ships are sunk, computer wins", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false, false);
  const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false, false);
  const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false, false);
  const computerBoard = battleShipBoard.gameBoard();
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.isCellAvailable(1, 0, carrier, "vertical")).toBe(true);
  playerBoard.placeShip(1, 0, carrier, "vertical");
  expect(playerBoard.isCellAvailable(3, 1, battleShip, "vertical")).toBe(true);
  playerBoard.placeShip(3, 1, battleShip, "vertical");
  expect(playerBoard.isCellAvailable(4, 2, destroyer, "horizontal")).toBe(true);
  playerBoard.placeShip(4, 2, destroyer, "horizontal");
  expect(playerBoard.isCellAvailable(5, 4, subMarine, "horizontal")).toBe(true);
  playerBoard.placeShip(5, 4, subMarine, "horizontal");
  expect(playerBoard.isCellAvailable(6, 4, patrolBoat, "horizontal")).toBe(
    true
  );
  playerBoard.placeShip(6, 4, patrolBoat, "horizontal");

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
  playerBoard.receiveAttack(1, 0);
  playerBoard.receiveAttack(2, 0);
  playerBoard.receiveAttack(3, 0);
  playerBoard.receiveAttack(4, 0);
  playerBoard.receiveAttack(5, 0);
  playerBoard.receiveAttack(3, 1);
  playerBoard.receiveAttack(4, 1);
  playerBoard.receiveAttack(5, 1);
  playerBoard.receiveAttack(6, 1);
  playerBoard.receiveAttack(4, 2);
  playerBoard.receiveAttack(4, 3);
  playerBoard.receiveAttack(4, 4);
  playerBoard.receiveAttack(5, 4);
  playerBoard.receiveAttack(5, 5);
  playerBoard.receiveAttack(5, 6);
  playerBoard.receiveAttack(6, 4);
  playerBoard.receiveAttack(6, 5);
  expect(attackCarrier).toHaveBeenCalledTimes(5);
  expect(attackBattleShip).toHaveBeenCalledTimes(4);
  expect(attackDestroyer).toHaveBeenCalledTimes(3);
  expect(attackSubMarine).toHaveBeenCalledTimes(3);
  expect(attackPatrolBoat).toHaveBeenCalledTimes(2);
  playerBoard.areAllShipsSunk();
  expect(spyOnSunkCarrier).toHaveBeenCalled();
  expect(spyOnSunkBattleship).toHaveBeenCalled();
  expect(spyOnSunkDestroyer).toHaveBeenCalled();
  expect(spyOnSunkSubmarine).toHaveBeenCalled();
  expect(spyOnSunkPatrolBoat).toHaveBeenCalled();
  expect(playerBoard.areAllShipsSunk()).toBe(true);
  expect(computerBoard.checkForWinAI(playerBoard)).toBe(true);
});
