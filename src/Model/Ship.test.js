const battleShipBoard = require("./Ship");

test("Carrier ship, should be 5 length, not hit once and no being sunk", () => {
  const carrier = battleShipBoard.Ship(5, 0, false);
  expect(carrier).toHaveProperty("length", 5);
  expect(carrier.getShipHits()).toBe(0);
  expect(carrier).toHaveProperty("isShipSunk", false);
});

test("Battleship ship, should be 4 length, not hit once and not being sunk", () => {
  const battleShip = battleShipBoard.Ship(4, 0, false);
  expect(battleShip).toHaveProperty("length", 4);
  expect(battleShip.getShipHits()).toBe(0);
  expect(battleShip).toHaveProperty("isShipSunk", false);
});

test("Destroyer ship, should be 3 length, not hit once and not being sunk", () => {
  const destroyer = battleShipBoard.Ship(3, 0, false);
  expect(destroyer).toHaveProperty("length", 3);
  expect(destroyer.getShipHits()).toBe(0);
  expect(destroyer).toHaveProperty("isShipSunk", false);
});

test("Submarine ship, should be 3 length, not hit once and not being sunk", () => {
  const subMarine = battleShipBoard.Ship(3, 0, false);
  expect(subMarine).toHaveProperty("length", 3);
  expect(subMarine.getShipHits()).toBe(0);
  expect(subMarine).toHaveProperty("isShipSunk", false);
});

test("Patrol boat, ship should be 2 length, not hit once and not being sunk ", () => {
  const patrolBoat = battleShipBoard.Ship(2, 0, false);
  expect(patrolBoat).toHaveProperty("length", 2);
  expect(patrolBoat.getShipHits()).toBe(0);
  expect(patrolBoat).toHaveProperty("isShipSunk", false);
});

test("Carrier ship got hit, increase numberOfHits", () => {
  const carrier = battleShipBoard.Ship(5, 0, false);
  carrier.hit();
  expect(carrier).toHaveProperty("length", 5);
  expect(carrier.getShipHits()).toBe(1);
  expect(carrier).toHaveProperty("isShipSunk", false);
});

test("Battleship ship got hit, increase numberOfHits", () => {
  const battleShip = battleShipBoard.Ship(4, 0, false);
  battleShip.hit();
  expect(battleShip).toHaveProperty("length", 4);
  expect(battleShip.getShipHits()).toBe(1);
  expect(battleShip).toHaveProperty("isShipSunk", false);
});

test("Destroyer ship got hit, increase numberOfHits", () => {
  const destroyer = battleShipBoard.Ship(3, 0, false);
  destroyer.hit();
  expect(destroyer).toHaveProperty("length", 3);
  expect(destroyer.getShipHits()).toBe(1);
  expect(destroyer).toHaveProperty("isShipSunk", false);
});

test("Submarine ship got hit, increase numberOfHits", () => {
  const subMarine = battleShipBoard.Ship(3, 0, false);
  subMarine.hit();
  expect(subMarine).toHaveProperty("length", 3);
  expect(subMarine.getShipHits()).toBe(1);
  expect(subMarine).toHaveProperty("isShipSunk", false);
});

test("Patrol boat ship got hit, increase numberOfHits", () => {
  const patrolBoat = battleShipBoard.Ship(2, 0, false);
  patrolBoat.hit();
  expect(patrolBoat).toHaveProperty("length", 2);
  expect(patrolBoat.getShipHits()).toBe(1);
  expect(patrolBoat).toHaveProperty("isShipSunk", false);
});

test("Carrier shouldn't be hit more than 5 times", () => {
  const carrier = battleShipBoard.Ship(5, 0, false);
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.hit()).toBe("The ship, cannot be hit anymore!");
});

test("Battleship should't be hit more than 4 times", () => {
  const battleShip = battleShipBoard.Ship(4, 0, false);
  battleShip.hit();
  battleShip.hit();
  battleShip.hit();
  battleShip.hit();
  expect(battleShip.hit()).toBe("The ship, cannot be hit anymore!");
});

test("Destroyer shouldn't be hit more than 3 times", () => {
  const destroyer = battleShipBoard.Ship(3, 0, false);
  destroyer.hit();
  destroyer.hit();
  destroyer.hit();
  expect(destroyer.hit()).toBe("The ship, cannot be hit anymore!");
});

test("Submarine shouldn't be hit more than 3 times", () => {
  const subMarine = battleShipBoard.Ship(3, 0, false);
  subMarine.hit();
  subMarine.hit();
  subMarine.hit();
  expect(subMarine.hit()).toBe("The ship, cannot be hit anymore!");
});

test("Patrol boat shouldn't be hit more than 2 times", () => {
  const patrolBoat = battleShipBoard.Ship(2, 0, false);
  patrolBoat.hit();
  patrolBoat.hit();
  expect(patrolBoat.hit()).toBe("The ship, cannot be hit anymore!");
});

test("Expecting Carrier if thats been hit 5 times to be sunk", () => {
  const carrier = battleShipBoard.Ship(5, 0, false);
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).toBe(true);
});

test("Expecting Carrier if has been hit once, not to be sunk", () => {
  const carrier = battleShipBoard.Ship(5, 0, false);
  carrier.hit();
  expect(carrier.isSunk()).toBe(false);
});

test("Expecting Battleship if thats been hit 4 times to be sunk", () => {
  const battleShip = battleShipBoard.Ship(4, 0, false);
  battleShip.hit();
  battleShip.hit();
  battleShip.hit();
  battleShip.hit();
  expect(battleShip.isSunk()).toBe(true);
});

test("Expecting Battleship if has been hit once, to be sunk", () => {
  const battleShip = battleShipBoard.Ship(4, 0, false);
  battleShip.hit();
  expect(battleShip.isSunk()).toBe(false);
});

test("Expecting Submarine if thats been hit 3 times to be sunk", () => {
  const subMarine = battleShipBoard.Ship(3, 0, false);
  subMarine.hit();
  subMarine.hit();
  subMarine.hit();
  expect(subMarine.isSunk()).toBe(true);
});

test("Expecting Submarine if has been hit once, to be sunk", () => {
  const subMarine = battleShipBoard.Ship(3, 0, false);
  subMarine.hit();
  expect(subMarine.isSunk()).toBe(false);
});

test("Expecting Destroyer if thats been hit 3 times to be sunk", () => {
  const destroyer = battleShipBoard.Ship(3, 0, false);
  destroyer.hit();
  destroyer.hit();
  destroyer.hit();
  expect(destroyer.isSunk()).toBe(true);
});

test("Expecting Destroyer if has been hit once, to be sunk", () => {
  const destroyer = battleShipBoard.Ship(3, 0, false);
  destroyer.hit();
  expect(destroyer.isSunk()).toBe(false);
});

test("Expecting PatrolBoat if thats been hit 2 times to be sunk", () => {
  const patrolBoat = battleShipBoard.Ship(2, 0, false);
  patrolBoat.hit();
  patrolBoat.hit();
  expect(patrolBoat.isSunk()).toBe(true);
});

test("Expecting PatrolBoat if has been hit once, to be sunk", () => {
  const patrolBoat = battleShipBoard.Ship(2, 0, false);
  patrolBoat.hit();
  expect(patrolBoat.isSunk()).toBe(false);
});
