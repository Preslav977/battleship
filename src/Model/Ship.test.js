/* eslint-disable no-undef */
import { battleShipLogic } from "./Ship";

test("Carrier ship, should be 5 length, not hit once and no being sunk", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  expect(carrier).toHaveProperty("name", "carrier");
  expect(carrier).toHaveProperty("length", 5);
  expect(carrier.getShipHits()).toBe(0);
  expect(carrier).toHaveProperty("isShipSunk", false);
  expect(carrier.getIsPlaced()).toBe(false);
});

test("Battleship ship, should be 4 length, not hit once and not being sunk", () => {
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  expect(battleShip).toHaveProperty("name", "battleShip");
  expect(battleShip).toHaveProperty("length", 4);
  expect(battleShip.getShipHits()).toBe(0);
  expect(battleShip).toHaveProperty("isShipSunk", false);
  expect(battleShip.getIsPlaced()).toBe(false);
});

test("Destroyer ship, should be 3 length, not hit once and not being sunk", () => {
  const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false, false);
  expect(destroyer).toHaveProperty("name", "destroyer");
  expect(destroyer).toHaveProperty("length", 3);
  expect(destroyer.getShipHits()).toBe(0);
  expect(destroyer).toHaveProperty("isShipSunk", false);
  expect(destroyer.getIsPlaced()).toBe(false);
});

test("Submarine ship, should be 3 length, not hit once and not being sunk", () => {
  const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false, false);
  expect(subMarine).toHaveProperty("name", "subMarine");
  expect(subMarine).toHaveProperty("length", 3);
  expect(subMarine.getShipHits()).toBe(0);
  expect(subMarine).toHaveProperty("isShipSunk", false);
  expect(subMarine.getIsPlaced()).toBe(false);
});

test("Patrol boat, ship should be 2 length, not hit once and not being sunk", () => {
  const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false, false);
  expect(patrolBoat).toHaveProperty("name", "patrolBoat");
  expect(patrolBoat).toHaveProperty("length", 2);
  expect(patrolBoat.getShipHits()).toBe(0);
  expect(patrolBoat).toHaveProperty("isShipSunk", false);
  expect(patrolBoat.getIsPlaced()).toBe(false);
});

test("Carrier ship got hit, increase numberOfHits", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  carrier.hit();
  expect(carrier).toHaveProperty("name", "carrier");
  expect(carrier).toHaveProperty("length", 5);
  expect(carrier.getShipHits()).toBe(1);
  expect(carrier).toHaveProperty("isShipSunk", false);
  expect(carrier.getIsPlaced()).toBe(false);
});

test("Battleship ship got hit, increase numberOfHits", () => {
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  battleShip.hit();
  expect(battleShip).toHaveProperty("name", "battleShip");
  expect(battleShip).toHaveProperty("length", 4);
  expect(battleShip.getShipHits()).toBe(1);
  expect(battleShip).toHaveProperty("isShipSunk", false);
  expect(battleShip.getIsPlaced()).toBe(false);
});

test("Destroyer ship got hit, increase numberOfHits", () => {
  const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false, false);
  destroyer.hit();
  expect(destroyer).toHaveProperty("name", "destroyer");
  expect(destroyer).toHaveProperty("length", 3);
  expect(destroyer.getShipHits()).toBe(1);
  expect(destroyer).toHaveProperty("isShipSunk", false);
  expect(destroyer.getIsPlaced()).toBe(false);
});

test("Submarine ship got hit, increase numberOfHits", () => {
  const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false, false);
  subMarine.hit();
  expect(subMarine).toHaveProperty("name", "subMarine");
  expect(subMarine).toHaveProperty("length", 3);
  expect(subMarine.getShipHits()).toBe(1);
  expect(subMarine).toHaveProperty("isShipSunk", false);
  expect(subMarine.getIsPlaced()).toBe(false);
});

test("Patrol boat ship got hit, increase numberOfHits", () => {
  const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false, false);
  patrolBoat.hit();
  expect(patrolBoat).toHaveProperty("name", "patrolBoat");
  expect(patrolBoat).toHaveProperty("length", 2);
  expect(patrolBoat.getShipHits()).toBe(1);
  expect(patrolBoat).toHaveProperty("isShipSunk", false);
  expect(patrolBoat.getIsPlaced()).toBe(false);
});

test("Carrier shouldn't be hit more than 5 times", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.hit()).toBe("The ship, cannot be hit anymore!");
});

test("Battleship should't be hit more than 4 times", () => {
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  battleShip.hit();
  battleShip.hit();
  battleShip.hit();
  battleShip.hit();
  expect(battleShip.hit()).toBe("The ship, cannot be hit anymore!");
});

test("Destroyer shouldn't be hit more than 3 times", () => {
  const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false, false);
  destroyer.hit();
  destroyer.hit();
  destroyer.hit();
  expect(destroyer.hit()).toBe("The ship, cannot be hit anymore!");
});

test("Submarine shouldn't be hit more than 3 times", () => {
  const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false, false);
  subMarine.hit();
  subMarine.hit();
  subMarine.hit();
  expect(subMarine.hit()).toBe("The ship, cannot be hit anymore!");
});

test("Patrol boat shouldn't be hit more than 2 times", () => {
  const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false, false);
  patrolBoat.hit();
  patrolBoat.hit();
  expect(patrolBoat.hit()).toBe("The ship, cannot be hit anymore!");
});

test("Expecting Carrier if thats been hit 5 times to be sunk", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).toBe(true);
});

test("Expecting Carrier if has been hit once, not to be sunk", () => {
  const carrier = battleShipLogic.Ship("carrier", 5, 0, false, false);
  carrier.hit();
  expect(carrier.isSunk()).toBe(false);
});

test("Expecting Battleship if thats been hit 4 times to be sunk", () => {
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  battleShip.hit();
  battleShip.hit();
  battleShip.hit();
  battleShip.hit();
  expect(battleShip.isSunk()).toBe(true);
});

test("Expecting Battleship if has been hit once, to not be sunk", () => {
  const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false, false);
  battleShip.hit();
  expect(battleShip.isSunk()).toBe(false);
});

test("Expecting Submarine if thats been hit 3 times to be sunk", () => {
  const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false, false);
  subMarine.hit();
  subMarine.hit();
  subMarine.hit();
  expect(subMarine.isSunk()).toBe(true);
});

test("Expecting Submarine if has been hit once, to not be sunk", () => {
  const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false);
  subMarine.hit();
  expect(subMarine.isSunk()).toBe(false);
});

test("Expecting Destroyer if thats been hit 3 times to be sunk", () => {
  const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false);
  destroyer.hit();
  destroyer.hit();
  destroyer.hit();
  expect(destroyer.isSunk()).toBe(true);
});

test("Expecting Destroyer if has been hit once, to not be sunk", () => {
  const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false);
  destroyer.hit();
  expect(destroyer.isSunk()).toBe(false);
});

test("Expecting PatrolBoat if thats been hit 2 times to be sunk", () => {
  const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false);
  patrolBoat.hit();
  patrolBoat.hit();
  expect(patrolBoat.isSunk()).toBe(true);
});

test("Expecting PatrolBoat if has been hit once, to not be sunk", () => {
  const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false);
  patrolBoat.hit();
  expect(patrolBoat.isSunk()).toBe(false);
});
