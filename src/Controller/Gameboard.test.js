// const battleShipBoard = require("./Gameboard");

import { battleShipBoard } from "./Gameboard";

test("Check if board coordinates are empty, before placing ship", () => {
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 0, 5, 0, false)).toBe(true);
});

test("Check if ship is not overlapping with another ship", () => {
  const playerBoard = battleShipBoard.gameBoard();
  expect(playerBoard.placeShip(1, 0, 5, 0, false)).toBe(true);
  expect(playerBoard.placeShip(1, 0, 5, 0, false)).toBe(false);
});

// test("Check if ship is placed in X axis on the board", () => {});

// test("Check if ship is placed in Y axis on the board", () => {});
