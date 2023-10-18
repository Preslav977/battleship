const battleShipModel = require("./Ship");

test("Carrier object, should have 5 length, 0 hits and not be sunk", () => {
  const carrier = battleShipModel.Ship(5, 0, false);
  expect(carrier.getShipLength()).toBe(5);
  expect(carrier.getShipHits()).toBe(0);
  expect(carrier.getShipSunk()).toBe(false);
});

test("Batteship object, should have 4 length, 0 hits, and not be sunk", () => {
  const battleShip = battleShipModel.Ship(4, 0, false);
  expect(battleShip.getShipLength()).toBe(4);
  expect(battleShip.getShipHits()).toBe(0);
  expect(battleShip.getShipSunk()).toBe(false);
});

test("Destroyer object, should have length of 3, 0 hits and not be sunk", () => {
  const destroyer = battleShipModel.Ship(3, 0, false);
  expect(destroyer.getShipLength()).toBe(3);
  expect(destroyer.getShipHits()).toBe(0);
  expect(destroyer.getShipSunk()).toBe(false);
});

test("Submarine object, should have length of 3, 0 hits and to be sunk", () => {
  const subMarine = battleShipModel.Ship(3, 0, false);
  expect(subMarine.getShipLength()).toBe(3);
  expect(subMarine.getShipHits()).toBe(0);
  expect(subMarine.getShipSunk()).toBe(false);
});

test("Patrolboat object, should have length of 2, 0 hits, and to be sunk", () => {
  const patrolBoat = battleShipModel.Ship(2, 0, false);
  expect(patrolBoat.getShipLength()).toBe(2);
  expect(patrolBoat.getShipHits()).toBe(0);
  expect(patrolBoat.getShipSunk()).toBe(false);
});

test("Carrier got hip, decrease length and increase hits", () => {
  const carrier = battleShipModel.Ship(5, 0, false);
  carrier.hit();
  expect(carrier.getShipLength()).toBe(4);
  expect(carrier.getShipHits()).toBe(1);
  expect(carrier.getShipSunk()).toBe(false);
});

test("Expect carrier to not be attack more than 5 times", () => {
  const carrier = battleShipModel.Ship(5, 0, false);
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.hit()).toBe("The ship, cannot be hit anymore!");
});
