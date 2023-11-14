/* eslint-disable no-undef */
import { battleShipGame } from "./Player";

import { battleShipBoard } from "../Model/Gameboard";

const computerBoard = battleShipBoard.gameBoard();

const playerBoard = battleShipBoard.gameBoard();

test("Expecting player attacking enemy board and receiving the attack", () => {
  const spyOnAttack = jest.spyOn(computerBoard, "receiveAttack");

  battleShipGame.attackComputerBoard(1, 0, computerBoard);

  expect(spyOnAttack).toHaveBeenCalled();
});

test("Expecting computer to make random move", () => {
  jest.spyOn(playerBoard, "receiveAttack").mockReturnValue(1, 0);

  battleShipGame.attackPlayerBoard(playerBoard);
});

test("Expecting computer attack on players board to receive the attack", () => {
  jest.spyOn(playerBoard, "receiveAttack").mockReturnValue(1, 0);

  const attack = jest.spyOn(playerBoard, "receiveAttack");

  battleShipGame.attackPlayerBoard(playerBoard);

  expect(attack).toHaveBeenCalled();
});
