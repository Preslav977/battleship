/* eslint-disable no-param-reassign */

const battleShipBoard = (() => {
  const gameBoard = () => {
    const cols = 10;
    const rows = 10;
    const board = [];

    let saveShips = [];

    for (let i = 0; i < cols; i += 1) {
      board[i] = [];
      for (let j = 0; j < rows; j += 1) {
        board[i][j] = "";
      }
    }

    const isCellAvailable = (col, row, ship, direction) => {
      const shipArray = [];
      if (direction === "vertical") {
        for (let i = 0; i < ship.length; i += 1) {
          shipArray.push(board[col + i][row]);
        }
      } else if (direction === "horizontal") {
        for (let i = 0; i < ship.length; i += 1) {
          shipArray.push(board[col][row + i]);
        }
      }
      return shipArray.every((cell) => cell === "");
    };

    // TODO: figure out drag and drop or hovering with placing the ships
    // in the future !!!

    const placeShip = (col, row, ship, direction) => {
      if (
        isCellAvailable(col, row, ship, direction) === true &&
        direction === "vertical"
      ) {
        for (let i = 0; i < ship.length; i += 1) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
        }
      } else if (
        isCellAvailable(col, row, ship, direction) === true &&
        direction === "horizontal"
      ) {
        for (let i = 0; i < ship.length; i += 1) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
        }
      } else if (!isCellAvailable(col, row, ship, direction) === true) {
        throw new Error("Invalid ship placement");
      }
      saveShips.push(ship);
      return board[col][row];
    };

    const placeShipRandomly = (ship) => {
      const col = Math.floor(Math.floor(Math.random() * 10));
      const row = Math.floor(Math.floor(Math.random() * 10));
      const shipDirection = ["vertical", "horizontal"];
      const randomDirection = Math.floor(Math.random() * shipDirection.length);
      const direction = shipDirection[randomDirection];

      if (
        isCellAvailable(col, row, ship, direction) === true &&
        direction === "vertical"
      ) {
        for (let i = 0; i < ship.length; i += 1) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
        }
      } else if (
        isCellAvailable(col, row, ship, direction) === true &&
        direction === "horizontal"
      ) {
        for (let i = 0; i < ship.length; i += 1) {
          board[col][row + i] = ship;
          ship.isPlaced = true;
        }
      } else if (!isCellAvailable(col, row, ship, direction) === true) {
        throw new Error("Invalid ship placement");
      }
      saveShips.push(ship);
      return ship;
    };

    const printBoard = () => {
      board.forEach((cell) => {
        console.log(cell);
      });
    };

    const receiveAttack = (col, row) => {
      const boardSpot = board[col][row];

      if (board[col][row] === "") {
        board[col][row] = "M";
        return "Miss";
      }

      if (board[col][row] !== "H" && board[col][row] !== "M") {
        board[col][row] = "H";
        return boardSpot.hit();
      }
      return "You cant hit the same spot";
    };

    // TODO: Figure out a way to render only the misses from these
    // method and the attacks separately

    const missedAttacksPlayer = (computerBoard) => {
      const getBoardCopy = computerBoard.board;

      const filteredMissedAttacks = [];

      for (let i = 0; i < getBoardCopy.length; i += 1) {
        const retrieveMissedAttacks = getBoardCopy[i].filter(
          (attack) => attack === "M"
        );
        if (retrieveMissedAttacks.length !== 0) {
          filteredMissedAttacks.push(retrieveMissedAttacks);
        }
      }
      return filteredMissedAttacks;
    };

    const missedAttacksComputer = (playerBoard) => {
      const getBoardCopy = playerBoard.board;

      const filteredMissedAttacks = [];

      for (let i = 0; i < getBoardCopy.length; i += 1) {
        const retrieveMissedAttacks = getBoardCopy[i].filter(
          (attack) => attack === "M"
        );
        if (retrieveMissedAttacks.length !== 0) {
          filteredMissedAttacks.push(retrieveMissedAttacks);
        }
      }
      return filteredMissedAttacks;
    };

    // TODO: Figure a better way to know which ship has been sunk
    // without checking for the object name and looping the saveShips array
    // and variable that increments to five

    const areAllShipsSunk = () => {
      let sunkShips = 0;

      for (let i = 0; i < saveShips.length; i += 1) {
        if (saveShips[i].name === "carrier" && saveShips[i].isSunk()) {
          sunkShips += 1;
        } else if (
          saveShips[i].name === "battleShip" &&
          saveShips[i].isSunk()
        ) {
          sunkShips += 1;
        } else if (saveShips[i].name === "destroyer" && saveShips[i].isSunk()) {
          sunkShips += 1;
        } else if (saveShips[i].name === "subMarine" && saveShips[i].isSunk()) {
          sunkShips += 1;
        } else if (
          saveShips[i].name === "patrolBoat" &&
          saveShips[i].isSunk()
        ) {
          sunkShips += 1;
        }
      }
      if (sunkShips === 5) {
        return true;
      }
      return false;
    };

    // TODO: Figure out better way to organize the code to avoid creating
    // two methods one for the computerBoard and one for the playerBoard
    // since the single responsibility rule is broken

    const checkForWin = (computerBoard) => {
      if (computerBoard.areAllShipsSunk()) {
        return true;
      }
    };

    const checkForWinAI = (playerBoard) => {
      if (playerBoard.areAllShipsSunk()) {
        return true;
      }
    };

    const clearBoard = () => {
      for (let i = 0; i < cols; i += 1) {
        board[i] = [];
        for (let j = 0; j < rows; j += 1) {
          if (board[i][j] !== "") {
            board[i][j] = "";
          }
        }
      }
    };

    const clearSaveShipsArray = () => {
      for (let i = 0; i < saveShips.length; i += 1) {
        if (saveShips[i].length !== 0) {
          saveShips = [];
        }
      }
    };

    // TODO: Figure out better way to expose the board
    // or some other way for each object

    return {
      get board() {
        return [...board];
      },
      isCellAvailable,
      placeShip,
      placeShipRandomly,
      printBoard,
      receiveAttack,
      missedAttacksPlayer,
      missedAttacksComputer,
      areAllShipsSunk,
      checkForWin,
      checkForWinAI,
      clearBoard,
      clearSaveShipsArray,
    };
  };

  return {
    gameBoard,
  };
})();

export { battleShipBoard };
