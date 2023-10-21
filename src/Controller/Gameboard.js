import { battleShipCreation } from "../Model/Ship";

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

    const placeShip = (
      col,
      row,
      length,
      numberOfHits,
      isShipSunk,
      direction
    ) => {
      if (board[col][row] === "") {
        board[col][row] = battleShipCreation.Ship(
          length,
          numberOfHits,
          isShipSunk
        );
        return true;
      }
      return false;
      // check if coordinates are empty
      // call the method that creates new object from Ship
      // pass the arguments for the ship either directly in function
      // or in placeShip argument hmm
      // prevent ships from overlapping
      // figure out the direction on how to place the ships on X or Y axis
      // figure out how to do this 5 times for each ship either using a loop
      // or maybe using recursion for recursion base case could be if all 5 ships
      // has been placed return else keep going but don't place on top of each other
    };

    return { placeShip };
  };

  return {
    gameBoard,
  };
})();

// module.exports = battleShipBoard;

export { battleShipBoard };
