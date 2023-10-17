const battleShipModel = require("./Ship");

test("Carrier object, should have 5 length, 0 hits and not be sunk", () => {
  const carrier = battleShipModel.Ship(5, 0, false);
  expect(carrier.length).toBe(5);
  expect(carrier.hits).toBe(0);
  expect(carrier).toHaveProperty("sunk", false);
});

test("Batteship object, should have 4 length, 0 hits, and not be sunk", () => {
  const battleShip = battleShipModel.Ship(4, 0, false);
  expect(battleShip.length).toBe(4);
  expect(battleShip.hits).toBe(0);
  expect(battleShip).toHaveProperty("sunk", false);
});

test("Destroyer object, should have length of 3, 0 hits and not be sunk", () => {
  const destroyer = battleShipModel.Ship(3, 0, false);
  expect(destroyer.length).toBe(3);
  expect(destroyer.hits).toBe(0);
  expect(destroyer).toHaveProperty("sunk", false);
});
