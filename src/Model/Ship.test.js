const battleShip = require("./Ship");

test("Carrier object, should have 5 length, 0 hits and not be sunk", () => {
  const carrier = battleShip.Ship(5, 0, false);
  expect(carrier.length).toBe(5);
  expect(carrier.hits).toBe(0);
  expect(carrier).toHaveProperty("sunk", false);
});
