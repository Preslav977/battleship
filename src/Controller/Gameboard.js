import { battleShipLogic } from "../Model/Ship";

const carrier = battleShipLogic.Ship("carrier", 5, 0, false);

const battleShip = battleShipLogic.Ship("battleShip", 4, 0, false);

const destroyer = battleShipLogic.Ship("destroyer", 3, 0, false);

const subMarine = battleShipLogic.Ship("subMarine", 3, 0, false);

const patrolBoat = battleShipLogic.Ship("patrolBoat", 2, 0, false);

const battleShipBoard = (() => {
  const gameBoard = () => {
    const cols = 8;
    const rows = 8;
    const board = [];

    for (let i = 0; i < cols; i += 1) {
      board[i] = [];
      for (let j = 0; j < rows; j += 1) {
        board[i][j] = "";
      }
    }

    const placeShip = (col, row, ship, direction) => {
      for (let i = 0; i < ship.length; i += 1) {
        if (
          board[col + i][row] === "" &&
          board[col + i][row] < ship.length &&
          direction === "vertical"
        ) {
          board[col + i][row] = ship;
          board[col + i + 1][row + 1] = "X";
          board[col + i - 1][row + 1] = "X";
        } else if (
          board[col][row + i] === "" &&
          board[col][row + i] < ship.length &&
          direction === "horizontal"
        ) {
          board[col][row + i] = ship;
          board[col - 1][row + i - 0] = "X";
          board[col + 1][row + i - 0] = "X";
        } else {
          return "Invalid ship placement";
        }
      }
      return board[col][row];
    };

    const printBoard = () => {
      board.forEach((cell) => {
        console.log(cell);
      });
    };

    const receiveAttack = (col, row) => {
      if (board[col][row] === "" || board[col][row] === "X") {
        board[col][row] = "M";
        return "Miss";
      }
      if (board[col][row] === carrier && board[col][row] !== "H") {
        board[col][row] = "H";
        console.log("Carrier got hit");
        return carrier.hit();
      }
      if (board[col][row] === carrier && board[col][row] !== "H") {
        board[col][row] = "H";
        console.log("Battleship got hit");
        return battleShip.hit();
      }
      if (board[col][row] === carrier && board[col][row] !== "H") {
        board[col][row] = "H";
        console.log("Destroyer got hit");
        return destroyer.hit();
      }
      if (board[col][row] === carrier && board[col][row] !== "H") {
        board[col][row] = "H";
        console.log("Submarine got hit");
        return subMarine.hit();
      }
      if (board[col][row] === carrier && board[col][row] !== "H") {
        board[col][row] = "H";
        console.log("PatrolBoat got hit");
        return patrolBoat.hit();
      }
      return "You cant attack the same spot";
    };

    const missedShipAttacks = () => {
      const getBoardCopy = [...board];

      const filteredMissedAttacks = [];

      for (let i = 0; i < getBoardCopy.length; i++) {
        const retrieveMissedAttacks = getBoardCopy.filter(
          (attack) => attack === "M"
        );
        filteredMissedAttacks.push(retrieveMissedAttacks);
      }
      return filteredMissedAttacks;
    };

    return { printBoard, placeShip, receiveAttack, missedShipAttacks };
  };

  return {
    gameBoard,
  };
})();

export { battleShipBoard };
