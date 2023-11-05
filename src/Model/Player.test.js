import { Player } from "./Player";

import { battleShipBoard } from "../Controller/Gameboard";

const computerBoard = battleShipBoard.gameBoard();

test("Expecting player attack enemy board and receiving the attack", () => {
  const createPlayer = Player("Buci");

  const spyOnAttack = jest.spyOn(computerBoard, "receiveAttack");

  createPlayer.attackComputerBoard(1, 0, computerBoard);

  expect(spyOnAttack).toHaveBeenCalled();
});
