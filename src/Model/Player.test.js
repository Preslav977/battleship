// import { Player } from "./Player";

// import { battleShipBoard } from "../Controller/Gameboard";

// const computerBoard = battleShipBoard.gameBoard();

// const playerBoard = battleShipBoard.gameBoard();

// test("Expecting player attacking enemy board and receiving the attack", () => {
//   const createPlayer = Player("Buci");

//   const spyOnAttack = jest.spyOn(computerBoard, "receiveAttack");

//   createPlayer.attackComputerBoard(1, 0, computerBoard);

//   expect(spyOnAttack).toHaveBeenCalled();
// });

// test("Expecting computer to make random move", () => {
//   const computer = Player("Computer");

//   jest.spyOn(playerBoard, "receiveAttack").mockReturnValue(1, 0);

//   computer.attackPlayerBoard(playerBoard);
// });

// test("Expecting computer attack on players board to receive the attack", () => {
//   const computer = Player("Computer");

//   jest.spyOn(playerBoard, "receiveAttack").mockReturnValue(1, 0);

//   const attack = jest.spyOn(playerBoard, "receiveAttack");

//   computer.attackPlayerBoard(playerBoard);

//   expect(attack).toHaveBeenCalled();
// });
