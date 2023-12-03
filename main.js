/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Controller/Player.js":
/*!**********************************!*\
  !*** ./src/Controller/Player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   battleShip: () => (/* binding */ battleShip),
/* harmony export */   battleShipAI: () => (/* binding */ battleShipAI),
/* harmony export */   battleShipGame: () => (/* binding */ battleShipGame),
/* harmony export */   carrier: () => (/* binding */ carrier),
/* harmony export */   carrierAI: () => (/* binding */ carrierAI),
/* harmony export */   computerBoard: () => (/* binding */ computerBoard),
/* harmony export */   destroyer: () => (/* binding */ destroyer),
/* harmony export */   destroyerAI: () => (/* binding */ destroyerAI),
/* harmony export */   patrolBoat: () => (/* binding */ patrolBoat),
/* harmony export */   patrolBoatAI: () => (/* binding */ patrolBoatAI),
/* harmony export */   playerBoard: () => (/* binding */ playerBoard),
/* harmony export */   subMarine: () => (/* binding */ subMarine),
/* harmony export */   subMarineAI: () => (/* binding */ subMarineAI)
/* harmony export */ });
/* harmony import */ var _Model_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Ship */ "./src/Model/Ship.js");
/* harmony import */ var _Model_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Gameboard */ "./src/Model/Gameboard.js");
/* eslint-disable no-continue */
/* eslint-disable no-unused-expressions */




// TODO: Figure out better way to store the objects, instead of hanging
// in the global scope of this module

const carrier = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("carrier", 5, 0, false, false);
const carrierAI = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("carrier", 5, 0, false, false);
const battleShip = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("battleShip", 4, 0, false, false);
const battleShipAI = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("battleShip", 4, 0, false, false);
const destroyer = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("destroyer", 3, 0, false, false);
const destroyerAI = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("destroyer", 3, 0, false, false);
const subMarine = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("subMarine", 3, 0, false, false);
const subMarineAI = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("subMarine", 3, 0, false, false);
const patrolBoat = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("patrolBoat", 2, 0, false, false);
const patrolBoatAI = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("patrolBoat", 2, 0, false, false);
const playerBoard = _Model_Gameboard__WEBPACK_IMPORTED_MODULE_1__.battleShipBoard.gameBoard();
const computerBoard = _Model_Gameboard__WEBPACK_IMPORTED_MODULE_1__.battleShipBoard.gameBoard();
const battleShipGame = (() => {
  const Player = name => name;
  let player;
  const computer = {
    name: "Computer"
  };
  const setPlayer = name => {
    player = Player(name);
  };
  let firstPlayer;
  const setFirstPlayer = () => {
    firstPlayer = player;
  };
  const getPlayer = () => player;
  const getComputer = () => computer;
  const switchPlayersTurns = () => {
    firstPlayer = firstPlayer === player ? computer : player;
  };
  const getFirstPlayer = () => firstPlayer;
  const attackComputerBoard = (col, row, computerBoard) => {
    console.log(computerBoard.receiveAttack(col, row));
  };

  // TODO: Figure out how to make the AI smarter

  const attackPlayerBoard = playerBoard => {
    let col = Math.floor(Math.floor(Math.random() * 10));
    let row = Math.floor(Math.floor(Math.random() * 10));
    while (playerBoard.receiveAttack(col, row) === "You cant attack the same spot") {
      col = Math.floor(Math.floor(Math.random() * 10));
      row = Math.floor(Math.floor(Math.random() * 10));
    }
  };

  // TODO: Implement player placing system and after that either remove the
  // random placing of the ships or make it so it can be used both

  const placeAllShipsRandomly = () => {
    playerBoard.isCellAvailable(1, 0, carrier, "vertical");
    while (!carrier.isPlaced) {
      try {
        playerBoard.placeShipRandomly(carrier);
        break;
      } catch {
        "Invalid ship placement";
        continue;
      }
    }
    computerBoard.isCellAvailable(1, 0, carrierAI, "vertical");
    while (!carrierAI.isPlaced) {
      try {
        computerBoard.placeShipRandomly(carrierAI);
        break;
      } catch {
        "Invalid ship placement";
        continue;
      }
    }
    playerBoard.isCellAvailable(1, 3, battleShip, "horizontal");
    while (!battleShip.isPlaced) {
      try {
        playerBoard.placeShipRandomly(battleShip);
        break;
      } catch {
        "Invalid ship placement";
        continue;
      }
    }
    computerBoard.isCellAvailable(1, 3, battleShip, "horizontal");
    while (!battleShipAI.isPlaced) {
      try {
        computerBoard.placeShipRandomly(battleShipAI);
        break;
      } catch {
        "Invalid ship placement";
        continue;
      }
    }
    playerBoard.isCellAvailable(3, 5, destroyer, "horizontal");
    while (!destroyer.isPlaced) {
      try {
        playerBoard.placeShipRandomly(destroyer);
        break;
      } catch {
        "Invalid ship placement";
        continue;
      }
    }
    computerBoard.isCellAvailable(3, 5, destroyerAI, "horizontal");
    while (!destroyerAI.isPlaced) {
      try {
        computerBoard.placeShipRandomly(destroyerAI);
        break;
      } catch {
        "Invalid ship placement";
        continue;
      }
    }
    playerBoard.isCellAvailable(2, 4, subMarine, "vertical");
    while (!subMarine.isPlaced) {
      try {
        playerBoard.placeShipRandomly(subMarine);
        break;
      } catch {
        "Invalid ship placement";
        continue;
      }
    }
    computerBoard.isCellAvailable(2, 4, subMarineAI, "vertical");
    while (!subMarineAI.isPlaced) {
      try {
        computerBoard.placeShipRandomly(subMarineAI);
        break;
      } catch {
        "Invalid ship placement";
        continue;
      }
    }
    playerBoard.isCellAvailable(8, 2, patrolBoat, "horizontal");
    while (!patrolBoat.isPlaced) {
      try {
        playerBoard.placeShipRandomly(patrolBoat);
        break;
      } catch {
        "Invalid ship placement";
        continue;
      }
    }
    computerBoard.isCellAvailable(8, 2, patrolBoatAI, "horizontal");
    while (!patrolBoatAI.isPlaced) {
      try {
        computerBoard.placeShipRandomly(patrolBoatAI);
        break;
      } catch {
        "Invalid ship placement";
        continue;
      }
    }
    if (carrier.isPlaced && carrierAI.isPlaced && battleShip.isPlaced && battleShipAI.isPlaced && destroyer.isPlaced && destroyerAI.isPlaced && subMarine.isPlaced && subMarineAI.isPlaced && patrolBoat.isPlaced && patrolBoatAI.isPlaced) {
      return true;
    }
    return false;
  };
  const gameLoop = (col, row) => {
    attackComputerBoard(col, row, computerBoard, getFirstPlayer());
    computerBoard.printBoard();
    playerBoard.missedAttacksPlayer(computerBoard);
    if (playerBoard.checkForWin(computerBoard)) {
      // console.log(getPlayer(), "won!");
      return;
    }
    switchPlayersTurns();
    attackPlayerBoard(playerBoard);

    // playerBoard.printBoard();

    computerBoard.missedAttacksComputer(playerBoard);
    if (computerBoard.checkForWin(playerBoard)) {
      // console.log(getComputer().name, "won!");
    }
  };
  return {
    Player,
    placeAllShipsRandomly,
    setPlayer,
    setFirstPlayer,
    getPlayer,
    getComputer,
    switchPlayersTurns,
    attackComputerBoard,
    attackPlayerBoard,
    getFirstPlayer,
    gameLoop
  };
})();


/***/ }),

/***/ "./src/Model/Gameboard.js":
/*!********************************!*\
  !*** ./src/Model/Gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   battleShipBoard: () => (/* binding */ battleShipBoard)
/* harmony export */ });
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
      return shipArray.every(cell => cell === "");
    };

    // TODO: figure out drag and drop or hovering with placing the ships
    // in the future !!!

    const placeShip = (col, row, ship, direction) => {
      if (isCellAvailable(col, row, ship, direction) === true && direction === "vertical") {
        for (let i = 0; i < ship.length; i += 1) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
        }
      } else if (isCellAvailable(col, row, ship, direction) === true && direction === "horizontal") {
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
    const placeShipRandomly = ship => {
      const col = Math.floor(Math.floor(Math.random() * 10));
      const row = Math.floor(Math.floor(Math.random() * 10));
      const shipDirection = ["vertical", "horizontal"];
      const randomDirection = Math.floor(Math.random() * shipDirection.length);
      const direction = shipDirection[randomDirection];
      if (isCellAvailable(col, row, ship, direction) === true && direction === "vertical") {
        for (let i = 0; i < ship.length; i += 1) {
          board[col + i][row] = ship;
          ship.isPlaced = true;
        }
      } else if (isCellAvailable(col, row, ship, direction) === true && direction === "horizontal") {
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
      board.forEach(cell => {
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

    const missedAttacksPlayer = computerBoard => {
      const getBoardCopy = computerBoard.board;
      const filteredMissedAttacks = [];
      for (let i = 0; i < getBoardCopy.length; i += 1) {
        const retrieveMissedAttacks = getBoardCopy[i].filter(attack => attack === "M");
        if (retrieveMissedAttacks.length !== 0) {
          filteredMissedAttacks.push(retrieveMissedAttacks);
        }
      }
      return filteredMissedAttacks;
    };
    const missedAttacksComputer = playerBoard => {
      const getBoardCopy = playerBoard.board;
      const filteredMissedAttacks = [];
      for (let i = 0; i < getBoardCopy.length; i += 1) {
        const retrieveMissedAttacks = getBoardCopy[i].filter(attack => attack === "M");
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
        } else if (saveShips[i].name === "battleShip" && saveShips[i].isSunk()) {
          sunkShips += 1;
        } else if (saveShips[i].name === "destroyer" && saveShips[i].isSunk()) {
          sunkShips += 1;
        } else if (saveShips[i].name === "subMarine" && saveShips[i].isSunk()) {
          sunkShips += 1;
        } else if (saveShips[i].name === "patrolBoat" && saveShips[i].isSunk()) {
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

    const checkForWin = computerBoard => {
      if (computerBoard.areAllShipsSunk()) {
        return true;
      }
    };
    const checkForWinAI = playerBoard => {
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
      clearSaveShipsArray
    };
  };
  return {
    gameBoard
  };
})();


/***/ }),

/***/ "./src/Model/Ship.js":
/*!***************************!*\
  !*** ./src/Model/Ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   battleShipLogic: () => (/* binding */ battleShipLogic)
/* harmony export */ });
/* eslint-disable no-param-reassign */
const randomUUID = function b(a) {
  return a ?
  // eslint-disable-next-line no-bitwise
  (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};
const battleShipLogic = (() => {
  const Ship = function (name, length, numberOfHits, isShipSunk, isPlaced) {
    let id = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : randomUUID();
    const hit = () => {
      const shipTakingHit = numberOfHits++;
      if (shipTakingHit >= length) {
        return "The ship, cannot be hit anymore!";
      }
      console.log(`Ship ${name} got hit`);
      return {
        numberOfHits
      };
    };
    const isSunk = () => {
      if (name === "carrier" && length === 5 && numberOfHits === 5) {
        console.log("Carrier got sunk");
        return true;
      }
      if (name === "battleShip" && length === 4 && numberOfHits === 4) {
        console.log("Battleship got sunk");
        return true;
      }
      if (name === "destroyer" && length === 3 && numberOfHits === 3) {
        console.log("Destroyer got sunk");
        return true;
      }
      if (name === "subMarine" && length === 3 && numberOfHits === 3) {
        console.log("Submarine got sunk");
        return true;
      }
      if (name === "patrolBoat" && length === 2 && numberOfHits === 2) {
        console.log("PatrolBoat got sunk");
        return true;
      }
      return false;
    };
    const resetNumberOfHits = () => {
      if (name === "carrier" && numberOfHits === 5 && length === 5 || name === "carrier" && numberOfHits > 0 && length === 5) {
        numberOfHits = 0;
      }
      if (name === "battleShip" && numberOfHits === 4 || name === "battleShip" && numberOfHits > 0) {
        numberOfHits = 0;
      }
      if (name === "destroyer" && numberOfHits === 3 || name === "destroyer" && numberOfHits > 0) {
        numberOfHits = 0;
      }
      if (name === "subMarine" && numberOfHits === 3 || name === "subMarine" && numberOfHits > 0) {
        numberOfHits = 0;
      }
      if (name === "patrolBoat" && numberOfHits === 2 || name === "patrolBoat" && numberOfHits > 0) {
        numberOfHits = 0;
      }
    };
    return {
      get name() {
        return name;
      },
      get length() {
        return length;
      },
      get numberOfHits() {
        return numberOfHits;
      },
      set numberOfHits(value) {
        numberOfHits = value;
      },
      get isShipSunk() {
        return isShipSunk;
      },
      set isShipSunk(value) {
        isShipSunk = value;
      },
      get isPlaced() {
        return isPlaced;
      },
      set isPlaced(value) {
        isPlaced = value;
      },
      get id() {
        return id;
      },
      hit,
      isSunk,
      resetNumberOfHits
    };
  };
  return {
    Ship
  };
})();


/***/ }),

/***/ "./src/View/Interface.js":
/*!*******************************!*\
  !*** ./src/View/Interface.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   battleShipInterface: () => (/* binding */ battleShipInterface)
/* harmony export */ });
/* harmony import */ var _Controller_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controller/Player */ "./src/Controller/Player.js");

const battleShipInterface = (() => {
  const getPlayerBoard = document.querySelector(".player-board");
  const getComputerBoard = document.querySelector(".computer-board");
  const playerNameInformation = document.querySelector(".player-information");
  const mainDialog = document.querySelector(".dialog");
  const displayWinner = document.querySelector(".display-winner");
  const showWinnerDialog = document.querySelector(".winner-dialog");
  const playAgainButton = document.querySelector(".play-again");
  const playerCarrierStatus = document.querySelector(".player-carrier-status");
  const playerBattleshipStatus = document.querySelector(".player-battleship-status");
  const playerDestroyerStatus = document.querySelector(".player-destroyer-status");
  const playerSubmarineStatus = document.querySelector(".player-submarine-status");
  const playerPatrolBoatStatus = document.querySelector(".player-patrolboat-status");
  const computerCarrierStatus = document.querySelector(".computer-carrier-status");
  const computerBattleshipStatus = document.querySelector(".computer-battleship-status");
  const computerDestroyerStatus = document.querySelector(".computer-destroyer-status");
  const computerSubmarineStatus = document.querySelector(".computer-submarine-status");
  const computerPatrolBoatStatus = document.querySelector(".computer-patrolboat-status");

  // show the dialog
  mainDialog.setAttribute("open", true);

  // prevent from clicking on the boards, when the player is not even created
  getPlayerBoard.style.pointerEvents = "none";
  getComputerBoard.style.pointerEvents = "none";
  const resetForm = () => {
    playerNameInformation.reset();
  };
  const createPlayer = () => {
    const playerName = document.querySelector(".player-name-input").value;
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.setPlayer(playerName);
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.setFirstPlayer();
  };
  playerNameInformation.addEventListener("submit", e => {
    // e.preventDefault();
    createPlayer();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.getPlayer();
    // allow to click on the board after the player object is created
    getPlayerBoard.style.pointerEvents = "auto";
    getComputerBoard.style.pointerEvents = "auto";
    resetForm();
  });

  // TODO: Figure out a better way of rendering the ships/attacks/misses

  const renderPlayerBoard = () => {
    const cols = 10;
    const rows = 10;
    getPlayerBoard.textContent = "";
    for (let i = 0; i < cols; i += 1) {
      for (let j = 0; j < rows; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-col", i);
        cell.setAttribute("data-row", j);
        if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j].name === "carrier") {
          cell.classList.add("render-ships");
        } else if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j].name === "battleShip") {
          cell.classList.add("render-ships");
        } else if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j].name === "destroyer") {
          cell.classList.add("render-ships");
        } else if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j].name === "subMarine") {
          cell.classList.add("render-ships");
        } else if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j].name === "patrolBoat") {
          cell.classList.add("render-ships");
        } else if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j] === "M") {
          cell.classList.add("missed-attacks");
        } else if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j] === "H") {
          cell.classList.add("ship-attacks");
        }
        getPlayerBoard.appendChild(cell);
      }
    }
  };
  const declarePlayerWinner = () => {
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.checkForWin(_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.computerBoard)) {
      displayWinner.textContent = `${_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.getPlayer()} won!`;
      showWinnerDialog.setAttribute("open", true);
      getPlayerBoard.style.pointerEvents = "none";
      getComputerBoard.style.pointerEvents = "none";
    }
  };

  // TODO: Figure out a way to render the filtered missed attacks
  // that are saved in separate array, while the attacks are only
  // rendered from another array !

  const renderComputerBoard = () => {
    const cols = 10;
    const rows = 10;
    getComputerBoard.textContent = "";
    for (let i = 0; i < cols; i += 1) {
      for (let j = 0; j < rows; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-col", i);
        cell.setAttribute("data-row", j);
        if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.computerBoard.board[i][j] === "M") {
          cell.classList.add("missed-attacks");
        } else if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.computerBoard.board[i][j] === "H") {
          cell.classList.add("ship-attacks");
        }
        getComputerBoard.appendChild(cell);
      }
    }
  };
  const declareComputerWinner = () => {
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.computerBoard.checkForWin(_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard)) {
      displayWinner.textContent = `${_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.getComputer().name} won!`;
      showWinnerDialog.setAttribute("open", true);
      getPlayerBoard.style.pointerEvents = "none";
      getComputerBoard.style.pointerEvents = "none";
    }
  };
  const handleShipsPlacedProperty = () => {
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.carrier.isPlaced) {
      playerCarrierStatus.textContent = "Placed";
      playerCarrierStatus.style.color = "green";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.carrierAI.isPlaced) {
      computerCarrierStatus.textContent = "Placed";
      computerCarrierStatus.style.color = "green";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShip.isPlaced) {
      playerBattleshipStatus.textContent = "Placed";
      playerBattleshipStatus.style.color = "green";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipAI.isPlaced) {
      computerBattleshipStatus.textContent = "Placed";
      computerBattleshipStatus.style.color = "green";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.destroyer.isPlaced) {
      playerDestroyerStatus.textContent = "Placed";
      playerDestroyerStatus.style.color = "green";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.destroyerAI.isPlaced) {
      computerDestroyerStatus.textContent = "Placed";
      computerDestroyerStatus.style.color = "green";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.subMarine.isPlaced) {
      playerSubmarineStatus.textContent = "Placed";
      playerSubmarineStatus.style.color = "green";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.subMarineAI.isPlaced) {
      computerSubmarineStatus.textContent = "Placed";
      computerSubmarineStatus.style.color = "green";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.patrolBoat.isPlaced) {
      playerPatrolBoatStatus.textContent = "Placed";
      playerPatrolBoatStatus.style.color = "green";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.patrolBoatAI.isPlaced) {
      computerPatrolBoatStatus.textContent = "Placed";
      computerPatrolBoatStatus.style.color = "green";
    }
  };
  const handleShipsSunkProperty = () => {
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.carrier.isSunk()) {
      playerCarrierStatus.textContent = "Sunk";
      playerCarrierStatus.style.color = "red";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.carrierAI.isSunk()) {
      computerCarrierStatus.textContent = "Sunk";
      computerCarrierStatus.style.color = "red";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShip.isSunk()) {
      playerBattleshipStatus.textContent = "Sunk";
      playerBattleshipStatus.style.color = "red";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipAI.isSunk()) {
      computerBattleshipStatus.textContent = "Sunk";
      computerBattleshipStatus.style.color = "red";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.destroyer.isSunk()) {
      playerDestroyerStatus.textContent = "Sunk";
      playerDestroyerStatus.style.color = "red";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.destroyerAI.isSunk()) {
      computerDestroyerStatus.textContent = "Sunk";
      computerDestroyerStatus.style.color = "red";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.subMarine.isSunk()) {
      playerSubmarineStatus.textContent = "Sunk";
      playerSubmarineStatus.style.color = "red";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.subMarineAI.isSunk()) {
      computerSubmarineStatus.textContent = "Sunk";
      computerSubmarineStatus.style.color = "red";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.patrolBoat.isSunk()) {
      playerPatrolBoatStatus.textContent = "Sunk";
      playerPatrolBoatStatus.style.color = "red";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.patrolBoatAI.isSunk()) {
      computerPatrolBoatStatus.textContent = "Sunk";
      computerPatrolBoatStatus.style.color = "red";
    }
  };
  const clickEventHandler = e => {
    const clickedCell = e.target;
    const col = clickedCell.getAttribute("data-col");
    const row = clickedCell.getAttribute("data-row");
    if (!col && !row) return;
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.gameLoop(col, row);
    handleShipsSunkProperty();
    renderComputerBoard();
    declarePlayerWinner();
    renderPlayerBoard();
    declareComputerWinner();
  };
  renderComputerBoard();
  getComputerBoard.addEventListener("click", clickEventHandler);
  const restartGame = () => {
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.clearBoard();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.computerBoard.clearBoard();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.clearSaveShipsArray();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.computerBoard.clearSaveShipsArray();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.carrier.resetNumberOfHits();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.carrierAI.resetNumberOfHits();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShip.resetNumberOfHits();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipAI.resetNumberOfHits();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.destroyer.resetNumberOfHits();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.destroyerAI.resetNumberOfHits();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.subMarine.resetNumberOfHits();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.subMarineAI.resetNumberOfHits();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.patrolBoat.resetNumberOfHits();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.patrolBoatAI.resetNumberOfHits();
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.carrier.isPlaced = false;
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.carrierAI.isPlaced = false;
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShip.isPlaced = false;
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipAI.isPlaced = false;
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.destroyer.isPlaced = false;
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.destroyerAI.isPlaced = false;
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.subMarine.isPlaced = false;
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.subMarineAI.isPlaced = false;
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.patrolBoat.isPlaced = false;
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.patrolBoatAI.isPlaced = false;
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
      cell.remove(".cell");
    });
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.placeAllShipsRandomly();
    handleShipsPlacedProperty();
    renderPlayerBoard();
    renderComputerBoard();
    showWinnerDialog.removeAttribute("open");
    // show the dialog again on new game
    mainDialog.setAttribute("open", true);
  };
  playAgainButton.addEventListener("click", restartGame);
  return {
    renderPlayerBoard,
    renderComputerBoard,
    handleShipsPlacedProperty
  };
})();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 700px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n  margin-top: 20px;\n  font-size: 20px;\n}\n\n.header-name {\n  font-size: large;\n}\n\n.player-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n  margin-right: 20px;\n}\n\n.cell {\n  outline: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell:hover {\n  cursor: pointer;\n}\n\n.computer-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n}\n\n.dialog,\n.winner-dialog {\n  position: absolute;\n  width: 250px;\n  height: 250px;\n  left: 640px;\n  top: 180px;\n  /* outline: 1px solid black; */\n  border: none;\n}\n\n.dialog-container-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 70px;\n}\n\n.player-name,\n.player-name-input {\n  margin-bottom: 10px;\n}\n\n.instructions-container {\n  padding-top: 10px;\n  padding-left: 30px;\n  padding-right: 20px;\n}\n\n.instructions {\n  margin-top: 10px;\n  width: 220px;\n}\n\n.confirm-button,\n.play-again {\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-size: 15px;\n  border-radius: 5px;\n  border: none;\n}\n\n.player-information {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.render-ships {\n  background-color: blue;\n}\n\n.missed-attacks {\n  background-color: green;\n}\n\n.ship-attacks {\n  background-color: red;\n}\n\n.dialog-content {\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.display-winner {\n  margin-bottom: 30px;\n  font-size: 20px;\n}\n\n.space-is-empty {\n  background-color: lightgreen;\n}\n\n.space-is-not-empty {\n  background-color: red;\n}\n\n.container {\n  /* outline: 2px solid black; */\n  display: flex;\n  justify-content: space-around;\n}\n\n.player-board-status-container,\n.computer-board-status-container {\n  /* outline: 2px solid blue; */\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n\n.player-ship-carrier,\n.player-ship-battleship,\n.player-ship-destroyer,\n.player-ship-submarine,\n.player-ship-patrolboat,\n.computer-ship-carrier,\n.computer-ship-battleship,\n.computer-ship-destroyer,\n.computer-ship-submarine,\n.computer-ship-patrolboat {\n  margin-right: 5px;\n}\n\n.player-carrier-status-container,\n.player-battleship-status-container,\n.player-destroyer-status-container,\n.player-submarine-status-container,\n.player-patrolboat-status-container,\n.computer-carrier-status-container,\n.computer-battleship-status-container,\n.computer-destroyer-status-container,\n.computer-submarine-status-container,\n.computer-patrolboat-status-container {\n  display: flex;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,wBAAwB;AAC1B;;AAEA;;EAEE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,UAAU;EACV,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;;EAEE,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,8BAA8B;EAC9B,aAAa;EACb,6BAA6B;AAC/B;;AAEA;;EAEE,6BAA6B;EAC7B,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;;;;;;;;;;EAUE,iBAAiB;AACnB;;AAEA;;;;;;;;;;EAUE,aAAa;AACf","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 700px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n  margin-top: 20px;\n  font-size: 20px;\n}\n\n.header-name {\n  font-size: large;\n}\n\n.player-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n  margin-right: 20px;\n}\n\n.cell {\n  outline: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell:hover {\n  cursor: pointer;\n}\n\n.computer-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n}\n\n.dialog,\n.winner-dialog {\n  position: absolute;\n  width: 250px;\n  height: 250px;\n  left: 640px;\n  top: 180px;\n  /* outline: 1px solid black; */\n  border: none;\n}\n\n.dialog-container-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 70px;\n}\n\n.player-name,\n.player-name-input {\n  margin-bottom: 10px;\n}\n\n.instructions-container {\n  padding-top: 10px;\n  padding-left: 30px;\n  padding-right: 20px;\n}\n\n.instructions {\n  margin-top: 10px;\n  width: 220px;\n}\n\n.confirm-button,\n.play-again {\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-size: 15px;\n  border-radius: 5px;\n  border: none;\n}\n\n.player-information {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.render-ships {\n  background-color: blue;\n}\n\n.missed-attacks {\n  background-color: green;\n}\n\n.ship-attacks {\n  background-color: red;\n}\n\n.dialog-content {\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.display-winner {\n  margin-bottom: 30px;\n  font-size: 20px;\n}\n\n.space-is-empty {\n  background-color: lightgreen;\n}\n\n.space-is-not-empty {\n  background-color: red;\n}\n\n.container {\n  /* outline: 2px solid black; */\n  display: flex;\n  justify-content: space-around;\n}\n\n.player-board-status-container,\n.computer-board-status-container {\n  /* outline: 2px solid blue; */\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n\n.player-ship-carrier,\n.player-ship-battleship,\n.player-ship-destroyer,\n.player-ship-submarine,\n.player-ship-patrolboat,\n.computer-ship-carrier,\n.computer-ship-battleship,\n.computer-ship-destroyer,\n.computer-ship-submarine,\n.computer-ship-patrolboat {\n  margin-right: 5px;\n}\n\n.player-carrier-status-container,\n.player-battleship-status-container,\n.player-destroyer-status-container,\n.player-submarine-status-container,\n.player-patrolboat-status-container,\n.computer-carrier-status-container,\n.computer-battleship-status-container,\n.computer-destroyer-status-container,\n.computer-submarine-status-container,\n.computer-patrolboat-status-container {\n  display: flex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _View_Interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View/Interface */ "./src/View/Interface.js");
/* harmony import */ var _Controller_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller/Player */ "./src/Controller/Player.js");



_Controller_Player__WEBPACK_IMPORTED_MODULE_2__.battleShipGame.placeAllShipsRandomly();
_View_Interface__WEBPACK_IMPORTED_MODULE_1__.battleShipInterface.renderPlayerBoard();
_View_Interface__WEBPACK_IMPORTED_MODULE_1__.battleShipInterface.renderComputerBoard();
_View_Interface__WEBPACK_IMPORTED_MODULE_1__.battleShipInterface.handleShipsPlacedProperty();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBRWtDO0FBRUY7QUFFckRqSCw4REFBYyxDQUFDc0IscUJBQXFCLENBQUMsQ0FBQztBQUV0Q3FELGdFQUFtQixDQUFDNkIsaUJBQWlCLENBQUMsQ0FBQztBQUV2QzdCLGdFQUFtQixDQUFDb0MsbUJBQW1CLENBQUMsQ0FBQztBQUV6Q3BDLGdFQUFtQixDQUFDc0MseUJBQXlCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Db250cm9sbGVyL1BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL01vZGVsL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL01vZGVsL1NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9WaWV3L0ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29udGludWUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuXG5pbXBvcnQgeyBiYXR0bGVTaGlwTG9naWMgfSBmcm9tIFwiLi4vTW9kZWwvU2hpcFwiO1xuXG5pbXBvcnQgeyBiYXR0bGVTaGlwQm9hcmQgfSBmcm9tIFwiLi4vTW9kZWwvR2FtZWJvYXJkXCI7XG5cbi8vIFRPRE86IEZpZ3VyZSBvdXQgYmV0dGVyIHdheSB0byBzdG9yZSB0aGUgb2JqZWN0cywgaW5zdGVhZCBvZiBoYW5naW5nXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlIG9mIHRoaXMgbW9kdWxlXG5cbmNvbnN0IGNhcnJpZXIgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcImNhcnJpZXJcIiwgNSwgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3QgY2FycmllckFJID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJjYXJyaWVyXCIsIDUsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGJhdHRsZVNoaXAgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcImJhdHRsZVNoaXBcIiwgNCwgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3QgYmF0dGxlU2hpcEFJID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJiYXR0bGVTaGlwXCIsIDQsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGRlc3Ryb3llciA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiZGVzdHJveWVyXCIsIDMsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGRlc3Ryb3llckFJID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJkZXN0cm95ZXJcIiwgMywgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3Qgc3ViTWFyaW5lID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJzdWJNYXJpbmVcIiwgMywgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3Qgc3ViTWFyaW5lQUkgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcInN1Yk1hcmluZVwiLCAzLCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBwYXRyb2xCb2F0ID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJwYXRyb2xCb2F0XCIsIDIsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IHBhdHJvbEJvYXRBSSA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwicGF0cm9sQm9hdFwiLCAyLCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGJhdHRsZVNoaXBCb2FyZC5nYW1lQm9hcmQoKTtcblxuY29uc3QgY29tcHV0ZXJCb2FyZCA9IGJhdHRsZVNoaXBCb2FyZC5nYW1lQm9hcmQoKTtcblxuY29uc3QgYmF0dGxlU2hpcEdhbWUgPSAoKCkgPT4ge1xuICBjb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4gbmFtZTtcblxuICBsZXQgcGxheWVyO1xuXG4gIGNvbnN0IGNvbXB1dGVyID0geyBuYW1lOiBcIkNvbXB1dGVyXCIgfTtcblxuICBjb25zdCBzZXRQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIHBsYXllciA9IFBsYXllcihuYW1lKTtcbiAgfTtcblxuICBsZXQgZmlyc3RQbGF5ZXI7XG5cbiAgY29uc3Qgc2V0Rmlyc3RQbGF5ZXIgPSAoKSA9PiB7XG4gICAgZmlyc3RQbGF5ZXIgPSBwbGF5ZXI7XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4gcGxheWVyO1xuXG4gIGNvbnN0IGdldENvbXB1dGVyID0gKCkgPT4gY29tcHV0ZXI7XG5cbiAgY29uc3Qgc3dpdGNoUGxheWVyc1R1cm5zID0gKCkgPT4ge1xuICAgIGZpcnN0UGxheWVyID0gZmlyc3RQbGF5ZXIgPT09IHBsYXllciA/IGNvbXB1dGVyIDogcGxheWVyO1xuICB9O1xuXG4gIGNvbnN0IGdldEZpcnN0UGxheWVyID0gKCkgPT4gZmlyc3RQbGF5ZXI7XG5cbiAgY29uc3QgYXR0YWNrQ29tcHV0ZXJCb2FyZCA9IChjb2wsIHJvdywgY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb2wsIHJvdykpO1xuICB9O1xuXG4gIC8vIFRPRE86IEZpZ3VyZSBvdXQgaG93IHRvIG1ha2UgdGhlIEFJIHNtYXJ0ZXJcblxuICBjb25zdCBhdHRhY2tQbGF5ZXJCb2FyZCA9IChwbGF5ZXJCb2FyZCkgPT4ge1xuICAgIGxldCBjb2wgPSBNYXRoLmZsb29yKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcblxuICAgIHdoaWxlIChcbiAgICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soY29sLCByb3cpID09PSBcIllvdSBjYW50IGF0dGFjayB0aGUgc2FtZSBzcG90XCJcbiAgICApIHtcbiAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVE9ETzogSW1wbGVtZW50IHBsYXllciBwbGFjaW5nIHN5c3RlbSBhbmQgYWZ0ZXIgdGhhdCBlaXRoZXIgcmVtb3ZlIHRoZVxuICAvLyByYW5kb20gcGxhY2luZyBvZiB0aGUgc2hpcHMgb3IgbWFrZSBpdCBzbyBpdCBjYW4gYmUgdXNlZCBib3RoXG5cbiAgY29uc3QgcGxhY2VBbGxTaGlwc1JhbmRvbWx5ID0gKCkgPT4ge1xuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgxLCAwLCBjYXJyaWVyLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgd2hpbGUgKCFjYXJyaWVyLmlzUGxhY2VkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBSYW5kb21seShjYXJyaWVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMSwgMCwgY2FycmllckFJLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgd2hpbGUgKCFjYXJyaWVyQUkuaXNQbGFjZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwUmFuZG9tbHkoY2FycmllckFJKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDMsIGJhdHRsZVNoaXAsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHdoaWxlICghYmF0dGxlU2hpcC5pc1BsYWNlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwUmFuZG9tbHkoYmF0dGxlU2hpcCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIChcIkludmFsaWQgc2hpcCBwbGFjZW1lbnRcIik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDMsIGJhdHRsZVNoaXAsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHdoaWxlICghYmF0dGxlU2hpcEFJLmlzUGxhY2VkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcFJhbmRvbWx5KGJhdHRsZVNoaXBBSSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIChcIkludmFsaWQgc2hpcCBwbGFjZW1lbnRcIik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgzLCA1LCBkZXN0cm95ZXIsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHdoaWxlICghZGVzdHJveWVyLmlzUGxhY2VkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBSYW5kb21seShkZXN0cm95ZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAoXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50XCIpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgzLCA1LCBkZXN0cm95ZXJBSSwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgd2hpbGUgKCFkZXN0cm95ZXJBSS5pc1BsYWNlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXBSYW5kb21seShkZXN0cm95ZXJBSSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIChcIkludmFsaWQgc2hpcCBwbGFjZW1lbnRcIik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgyLCA0LCBzdWJNYXJpbmUsIFwidmVydGljYWxcIik7XG5cbiAgICB3aGlsZSAoIXN1Yk1hcmluZS5pc1BsYWNlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwUmFuZG9tbHkoc3ViTWFyaW5lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMiwgNCwgc3ViTWFyaW5lQUksIFwidmVydGljYWxcIik7XG5cbiAgICB3aGlsZSAoIXN1Yk1hcmluZUFJLmlzUGxhY2VkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcFJhbmRvbWx5KHN1Yk1hcmluZUFJKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDgsIDIsIHBhdHJvbEJvYXQsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHdoaWxlICghcGF0cm9sQm9hdC5pc1BsYWNlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwUmFuZG9tbHkocGF0cm9sQm9hdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIChcIkludmFsaWQgc2hpcCBwbGFjZW1lbnRcIik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDgsIDIsIHBhdHJvbEJvYXRBSSwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgd2hpbGUgKCFwYXRyb2xCb2F0QUkuaXNQbGFjZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwUmFuZG9tbHkocGF0cm9sQm9hdEFJKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5pc1BsYWNlZCAmJlxuICAgICAgY2FycmllckFJLmlzUGxhY2VkICYmXG4gICAgICBiYXR0bGVTaGlwLmlzUGxhY2VkICYmXG4gICAgICBiYXR0bGVTaGlwQUkuaXNQbGFjZWQgJiZcbiAgICAgIGRlc3Ryb3llci5pc1BsYWNlZCAmJlxuICAgICAgZGVzdHJveWVyQUkuaXNQbGFjZWQgJiZcbiAgICAgIHN1Yk1hcmluZS5pc1BsYWNlZCAmJlxuICAgICAgc3ViTWFyaW5lQUkuaXNQbGFjZWQgJiZcbiAgICAgIHBhdHJvbEJvYXQuaXNQbGFjZWQgJiZcbiAgICAgIHBhdHJvbEJvYXRBSS5pc1BsYWNlZFxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnYW1lTG9vcCA9IChjb2wsIHJvdykgPT4ge1xuICAgIGF0dGFja0NvbXB1dGVyQm9hcmQoY29sLCByb3csIGNvbXB1dGVyQm9hcmQsIGdldEZpcnN0UGxheWVyKCkpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wcmludEJvYXJkKCk7XG5cbiAgICBwbGF5ZXJCb2FyZC5taXNzZWRBdHRhY2tzUGxheWVyKGNvbXB1dGVyQm9hcmQpO1xuXG4gICAgaWYgKHBsYXllckJvYXJkLmNoZWNrRm9yV2luKGNvbXB1dGVyQm9hcmQpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhnZXRQbGF5ZXIoKSwgXCJ3b24hXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaFBsYXllcnNUdXJucygpO1xuXG4gICAgYXR0YWNrUGxheWVyQm9hcmQocGxheWVyQm9hcmQpO1xuXG4gICAgLy8gcGxheWVyQm9hcmQucHJpbnRCb2FyZCgpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5taXNzZWRBdHRhY2tzQ29tcHV0ZXIocGxheWVyQm9hcmQpO1xuXG4gICAgaWYgKGNvbXB1dGVyQm9hcmQuY2hlY2tGb3JXaW4ocGxheWVyQm9hcmQpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhnZXRDb21wdXRlcigpLm5hbWUsIFwid29uIVwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBQbGF5ZXIsXG4gICAgcGxhY2VBbGxTaGlwc1JhbmRvbWx5LFxuICAgIHNldFBsYXllcixcbiAgICBzZXRGaXJzdFBsYXllcixcbiAgICBnZXRQbGF5ZXIsXG4gICAgZ2V0Q29tcHV0ZXIsXG4gICAgc3dpdGNoUGxheWVyc1R1cm5zLFxuICAgIGF0dGFja0NvbXB1dGVyQm9hcmQsXG4gICAgYXR0YWNrUGxheWVyQm9hcmQsXG4gICAgZ2V0Rmlyc3RQbGF5ZXIsXG4gICAgZ2FtZUxvb3AsXG4gIH07XG59KSgpO1xuXG5leHBvcnQge1xuICBiYXR0bGVTaGlwR2FtZSxcbiAgcGxheWVyQm9hcmQsXG4gIGNvbXB1dGVyQm9hcmQsXG4gIGNhcnJpZXIsXG4gIGNhcnJpZXJBSSxcbiAgYmF0dGxlU2hpcCxcbiAgYmF0dGxlU2hpcEFJLFxuICBkZXN0cm95ZXIsXG4gIGRlc3Ryb3llckFJLFxuICBzdWJNYXJpbmUsXG4gIHN1Yk1hcmluZUFJLFxuICBwYXRyb2xCb2F0LFxuICBwYXRyb2xCb2F0QUksXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuY29uc3QgYmF0dGxlU2hpcEJvYXJkID0gKCgpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbHMgPSAxMDtcbiAgICBjb25zdCByb3dzID0gMTA7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcblxuICAgIGxldCBzYXZlU2hpcHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSArPSAxKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqICs9IDEpIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBcIlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQ2VsbEF2YWlsYWJsZSA9IChjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBzaGlwQXJyYXkucHVzaChib2FyZFtjb2wgKyBpXVtyb3ddKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHNoaXBBcnJheS5wdXNoKGJvYXJkW2NvbF1bcm93ICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hpcEFycmF5LmV2ZXJ5KChjZWxsKSA9PiBjZWxsID09PSBcIlwiKTtcbiAgICB9O1xuXG4gICAgLy8gVE9ETzogZmlndXJlIG91dCBkcmFnIGFuZCBkcm9wIG9yIGhvdmVyaW5nIHdpdGggcGxhY2luZyB0aGUgc2hpcHNcbiAgICAvLyBpbiB0aGUgZnV0dXJlICEhIVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvbCwgcm93LCBzaGlwLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXNDZWxsQXZhaWxhYmxlKGNvbCwgcm93LCBzaGlwLCBkaXJlY3Rpb24pID09PSB0cnVlICYmXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbY29sICsgaV1bcm93XSA9IHNoaXA7XG4gICAgICAgICAgc2hpcC5pc1BsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSAmJlxuICAgICAgICBkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbY29sXVtyb3cgKyBpXSA9IHNoaXA7XG4gICAgICAgICAgc2hpcC5pc1BsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50XCIpO1xuICAgICAgfVxuICAgICAgc2F2ZVNoaXBzLnB1c2goc2hpcCk7XG4gICAgICByZXR1cm4gYm9hcmRbY29sXVtyb3ddO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGFjZVNoaXBSYW5kb21seSA9IChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICBjb25zdCBzaGlwRGlyZWN0aW9uID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdO1xuICAgICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hpcERpcmVjdGlvbi5sZW5ndGgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gc2hpcERpcmVjdGlvbltyYW5kb21EaXJlY3Rpb25dO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSAmJlxuICAgICAgICBkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIlxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2NvbCArIGldW3Jvd10gPSBzaGlwO1xuICAgICAgICAgIHNoaXAuaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBpc0NlbGxBdmFpbGFibGUoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT09IHRydWUgJiZcbiAgICAgICAgZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIlxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2NvbF1bcm93ICsgaV0gPSBzaGlwO1xuICAgICAgICAgIHNoaXAuaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFpc0NlbGxBdmFpbGFibGUoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgIH1cbiAgICAgIHNhdmVTaGlwcy5wdXNoKHNoaXApO1xuICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IHByaW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgICBib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGwpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29sLCByb3cpID0+IHtcbiAgICAgIGNvbnN0IGJvYXJkU3BvdCA9IGJvYXJkW2NvbF1bcm93XTtcblxuICAgICAgaWYgKGJvYXJkW2NvbF1bcm93XSA9PT0gXCJcIikge1xuICAgICAgICBib2FyZFtjb2xdW3Jvd10gPSBcIk1cIjtcbiAgICAgICAgcmV0dXJuIFwiTWlzc1wiO1xuICAgICAgfVxuXG4gICAgICBpZiAoYm9hcmRbY29sXVtyb3ddICE9PSBcIkhcIiAmJiBib2FyZFtjb2xdW3Jvd10gIT09IFwiTVwiKSB7XG4gICAgICAgIGJvYXJkW2NvbF1bcm93XSA9IFwiSFwiO1xuICAgICAgICByZXR1cm4gYm9hcmRTcG90LmhpdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiWW91IGNhbnQgaGl0IHRoZSBzYW1lIHNwb3RcIjtcbiAgICB9O1xuXG4gICAgLy8gVE9ETzogRmlndXJlIG91dCBhIHdheSB0byByZW5kZXIgb25seSB0aGUgbWlzc2VzIGZyb20gdGhlc2VcbiAgICAvLyBtZXRob2QgYW5kIHRoZSBhdHRhY2tzIHNlcGFyYXRlbHlcblxuICAgIGNvbnN0IG1pc3NlZEF0dGFja3NQbGF5ZXIgPSAoY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgICAgY29uc3QgZ2V0Qm9hcmRDb3B5ID0gY29tcHV0ZXJCb2FyZC5ib2FyZDtcblxuICAgICAgY29uc3QgZmlsdGVyZWRNaXNzZWRBdHRhY2tzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0Qm9hcmRDb3B5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHJldHJpZXZlTWlzc2VkQXR0YWNrcyA9IGdldEJvYXJkQ29weVtpXS5maWx0ZXIoXG4gICAgICAgICAgKGF0dGFjaykgPT4gYXR0YWNrID09PSBcIk1cIlxuICAgICAgICApO1xuICAgICAgICBpZiAocmV0cmlldmVNaXNzZWRBdHRhY2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGZpbHRlcmVkTWlzc2VkQXR0YWNrcy5wdXNoKHJldHJpZXZlTWlzc2VkQXR0YWNrcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWx0ZXJlZE1pc3NlZEF0dGFja3M7XG4gICAgfTtcblxuICAgIGNvbnN0IG1pc3NlZEF0dGFja3NDb21wdXRlciA9IChwbGF5ZXJCb2FyZCkgPT4ge1xuICAgICAgY29uc3QgZ2V0Qm9hcmRDb3B5ID0gcGxheWVyQm9hcmQuYm9hcmQ7XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkTWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdldEJvYXJkQ29weS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCByZXRyaWV2ZU1pc3NlZEF0dGFja3MgPSBnZXRCb2FyZENvcHlbaV0uZmlsdGVyKFxuICAgICAgICAgIChhdHRhY2spID0+IGF0dGFjayA9PT0gXCJNXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJldHJpZXZlTWlzc2VkQXR0YWNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBmaWx0ZXJlZE1pc3NlZEF0dGFja3MucHVzaChyZXRyaWV2ZU1pc3NlZEF0dGFja3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyZWRNaXNzZWRBdHRhY2tzO1xuICAgIH07XG5cbiAgICAvLyBUT0RPOiBGaWd1cmUgYSBiZXR0ZXIgd2F5IHRvIGtub3cgd2hpY2ggc2hpcCBoYXMgYmVlbiBzdW5rXG4gICAgLy8gd2l0aG91dCBjaGVja2luZyBmb3IgdGhlIG9iamVjdCBuYW1lIGFuZCBsb29waW5nIHRoZSBzYXZlU2hpcHMgYXJyYXlcbiAgICAvLyBhbmQgdmFyaWFibGUgdGhhdCBpbmNyZW1lbnRzIHRvIGZpdmVcblxuICAgIGNvbnN0IGFyZUFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICAgIGxldCBzdW5rU2hpcHMgPSAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhdmVTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwiY2FycmllclwiICYmIHNhdmVTaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHNhdmVTaGlwc1tpXS5uYW1lID09PSBcImJhdHRsZVNoaXBcIiAmJlxuICAgICAgICAgIHNhdmVTaGlwc1tpXS5pc1N1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChzYXZlU2hpcHNbaV0ubmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiBzYXZlU2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChzYXZlU2hpcHNbaV0ubmFtZSA9PT0gXCJzdWJNYXJpbmVcIiAmJiBzYXZlU2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBzYXZlU2hpcHNbaV0ubmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIgJiZcbiAgICAgICAgICBzYXZlU2hpcHNbaV0uaXNTdW5rKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdW5rU2hpcHMgPT09IDUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgYmV0dGVyIHdheSB0byBvcmdhbml6ZSB0aGUgY29kZSB0byBhdm9pZCBjcmVhdGluZ1xuICAgIC8vIHR3byBtZXRob2RzIG9uZSBmb3IgdGhlIGNvbXB1dGVyQm9hcmQgYW5kIG9uZSBmb3IgdGhlIHBsYXllckJvYXJkXG4gICAgLy8gc2luY2UgdGhlIHNpbmdsZSByZXNwb25zaWJpbGl0eSBydWxlIGlzIGJyb2tlblxuXG4gICAgY29uc3QgY2hlY2tGb3JXaW4gPSAoY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgICAgaWYgKGNvbXB1dGVyQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrRm9yV2luQUkgPSAocGxheWVyQm9hcmQpID0+IHtcbiAgICAgIGlmIChwbGF5ZXJCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJCb2FyZCA9ICgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSArPSAxKSB7XG4gICAgICAgIGJvYXJkW2ldID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKGJvYXJkW2ldW2pdICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBib2FyZFtpXVtqXSA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyU2F2ZVNoaXBzQXJyYXkgPSAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhdmVTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2F2ZVNoaXBzW2ldLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHNhdmVTaGlwcyA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFRPRE86IEZpZ3VyZSBvdXQgYmV0dGVyIHdheSB0byBleHBvc2UgdGhlIGJvYXJkXG4gICAgLy8gb3Igc29tZSBvdGhlciB3YXkgZm9yIGVhY2ggb2JqZWN0XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0IGJvYXJkKCkge1xuICAgICAgICByZXR1cm4gWy4uLmJvYXJkXTtcbiAgICAgIH0sXG4gICAgICBpc0NlbGxBdmFpbGFibGUsXG4gICAgICBwbGFjZVNoaXAsXG4gICAgICBwbGFjZVNoaXBSYW5kb21seSxcbiAgICAgIHByaW50Qm9hcmQsXG4gICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgbWlzc2VkQXR0YWNrc1BsYXllcixcbiAgICAgIG1pc3NlZEF0dGFja3NDb21wdXRlcixcbiAgICAgIGFyZUFsbFNoaXBzU3VuayxcbiAgICAgIGNoZWNrRm9yV2luLFxuICAgICAgY2hlY2tGb3JXaW5BSSxcbiAgICAgIGNsZWFyQm9hcmQsXG4gICAgICBjbGVhclNhdmVTaGlwc0FycmF5LFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lQm9hcmQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBiYXR0bGVTaGlwQm9hcmQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5jb25zdCByYW5kb21VVUlEID0gZnVuY3Rpb24gYihhKSB7XG4gIHJldHVybiBhXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgKGEgXiAoKE1hdGgucmFuZG9tKCkgKiAxNikgPj4gKGEgLyA0KSkpLnRvU3RyaW5nKDE2KVxuICAgIDogKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIGIpO1xufTtcblxuY29uc3QgYmF0dGxlU2hpcExvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgU2hpcCA9IChcbiAgICBuYW1lLFxuICAgIGxlbmd0aCxcbiAgICBudW1iZXJPZkhpdHMsXG4gICAgaXNTaGlwU3VuayxcbiAgICBpc1BsYWNlZCxcbiAgICBpZCA9IHJhbmRvbVVVSUQoKVxuICApID0+IHtcbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzaGlwVGFraW5nSGl0ID0gbnVtYmVyT2ZIaXRzKys7XG5cbiAgICAgIGlmIChzaGlwVGFraW5nSGl0ID49IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gXCJUaGUgc2hpcCwgY2Fubm90IGJlIGhpdCBhbnltb3JlIVwiO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYFNoaXAgJHtuYW1lfSBnb3QgaGl0YCk7XG5cbiAgICAgIHJldHVybiB7IG51bWJlck9mSGl0cyB9O1xuICAgIH07XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICBpZiAobmFtZSA9PT0gXCJjYXJyaWVyXCIgJiYgbGVuZ3RoID09PSA1ICYmIG51bWJlck9mSGl0cyA9PT0gNSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhcnJpZXIgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUgPT09IFwiYmF0dGxlU2hpcFwiICYmIGxlbmd0aCA9PT0gNCAmJiBudW1iZXJPZkhpdHMgPT09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCYXR0bGVzaGlwIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgbGVuZ3RoID09PSAzICYmIG51bWJlck9mSGl0cyA9PT0gMykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRlc3Ryb3llciBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBcInN1Yk1hcmluZVwiICYmIGxlbmd0aCA9PT0gMyAmJiBudW1iZXJPZkhpdHMgPT09IDMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWJtYXJpbmUgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIgJiYgbGVuZ3RoID09PSAyICYmIG51bWJlck9mSGl0cyA9PT0gMikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdHJvbEJvYXQgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldE51bWJlck9mSGl0cyA9ICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgKG5hbWUgPT09IFwiY2FycmllclwiICYmIG51bWJlck9mSGl0cyA9PT0gNSAmJiBsZW5ndGggPT09IDUpIHx8XG4gICAgICAgIChuYW1lID09PSBcImNhcnJpZXJcIiAmJiBudW1iZXJPZkhpdHMgPiAwICYmIGxlbmd0aCA9PT0gNSlcbiAgICAgICkge1xuICAgICAgICBudW1iZXJPZkhpdHMgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChuYW1lID09PSBcImJhdHRsZVNoaXBcIiAmJiBudW1iZXJPZkhpdHMgPT09IDQpIHx8XG4gICAgICAgIChuYW1lID09PSBcImJhdHRsZVNoaXBcIiAmJiBudW1iZXJPZkhpdHMgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIG51bWJlck9mSGl0cyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB8fFxuICAgICAgICAobmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiBudW1iZXJPZkhpdHMgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIG51bWJlck9mSGl0cyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG5hbWUgPT09IFwic3ViTWFyaW5lXCIgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB8fFxuICAgICAgICAobmFtZSA9PT0gXCJzdWJNYXJpbmVcIiAmJiBudW1iZXJPZkhpdHMgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIG51bWJlck9mSGl0cyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIG51bWJlck9mSGl0cyA9PT0gMikgfHxcbiAgICAgICAgKG5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIG51bWJlck9mSGl0cyA+IDApXG4gICAgICApIHtcbiAgICAgICAgbnVtYmVyT2ZIaXRzID0gMDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH0sXG4gICAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIGdldCBudW1iZXJPZkhpdHMoKSB7XG4gICAgICAgIHJldHVybiBudW1iZXJPZkhpdHM7XG4gICAgICB9LFxuICAgICAgc2V0IG51bWJlck9mSGl0cyh2YWx1ZSkge1xuICAgICAgICBudW1iZXJPZkhpdHMgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBnZXQgaXNTaGlwU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIGlzU2hpcFN1bms7XG4gICAgICB9LFxuICAgICAgc2V0IGlzU2hpcFN1bmsodmFsdWUpIHtcbiAgICAgICAgaXNTaGlwU3VuayA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGdldCBpc1BsYWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIGlzUGxhY2VkO1xuICAgICAgfSxcbiAgICAgIHNldCBpc1BsYWNlZCh2YWx1ZSkge1xuICAgICAgICBpc1BsYWNlZCA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfSxcbiAgICAgIGhpdCxcbiAgICAgIGlzU3VuayxcbiAgICAgIHJlc2V0TnVtYmVyT2ZIaXRzLFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBTaGlwLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgYmF0dGxlU2hpcExvZ2ljIH07XG4iLCJpbXBvcnQge1xuICBiYXR0bGVTaGlwR2FtZSxcbiAgcGxheWVyQm9hcmQsXG4gIGNvbXB1dGVyQm9hcmQsXG4gIGNhcnJpZXIsXG4gIGNhcnJpZXJBSSxcbiAgYmF0dGxlU2hpcCxcbiAgYmF0dGxlU2hpcEFJLFxuICBkZXN0cm95ZXIsXG4gIGRlc3Ryb3llckFJLFxuICBzdWJNYXJpbmUsXG4gIHN1Yk1hcmluZUFJLFxuICBwYXRyb2xCb2F0LFxuICBwYXRyb2xCb2F0QUksXG59IGZyb20gXCIuLi9Db250cm9sbGVyL1BsYXllclwiO1xuXG5jb25zdCBiYXR0bGVTaGlwSW50ZXJmYWNlID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0UGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKTtcblxuICBjb25zdCBnZXRDb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcblxuICBjb25zdCBwbGF5ZXJOYW1lSW5mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1pbmZvcm1hdGlvblwiKTtcblxuICBjb25zdCBtYWluRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaWFsb2dcIik7XG5cbiAgY29uc3QgZGlzcGxheVdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS13aW5uZXJcIik7XG5cbiAgY29uc3Qgc2hvd1dpbm5lckRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLWRpYWxvZ1wiKTtcblxuICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXktYWdhaW5cIik7XG5cbiAgY29uc3QgcGxheWVyQ2FycmllclN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWNhcnJpZXItc3RhdHVzXCIpO1xuXG4gIGNvbnN0IHBsYXllckJhdHRsZXNoaXBTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnBsYXllci1iYXR0bGVzaGlwLXN0YXR1c1wiXG4gICk7XG5cbiAgY29uc3QgcGxheWVyRGVzdHJveWVyU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wbGF5ZXItZGVzdHJveWVyLXN0YXR1c1wiXG4gICk7XG5cbiAgY29uc3QgcGxheWVyU3VibWFyaW5lU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wbGF5ZXItc3VibWFyaW5lLXN0YXR1c1wiXG4gICk7XG5cbiAgY29uc3QgcGxheWVyUGF0cm9sQm9hdFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIucGxheWVyLXBhdHJvbGJvYXQtc3RhdHVzXCJcbiAgKTtcblxuICBjb25zdCBjb21wdXRlckNhcnJpZXJTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbXB1dGVyLWNhcnJpZXItc3RhdHVzXCJcbiAgKTtcblxuICBjb25zdCBjb21wdXRlckJhdHRsZXNoaXBTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbXB1dGVyLWJhdHRsZXNoaXAtc3RhdHVzXCJcbiAgKTtcblxuICBjb25zdCBjb21wdXRlckRlc3Ryb3llclN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY29tcHV0ZXItZGVzdHJveWVyLXN0YXR1c1wiXG4gICk7XG5cbiAgY29uc3QgY29tcHV0ZXJTdWJtYXJpbmVTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbXB1dGVyLXN1Ym1hcmluZS1zdGF0dXNcIlxuICApO1xuXG4gIGNvbnN0IGNvbXB1dGVyUGF0cm9sQm9hdFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY29tcHV0ZXItcGF0cm9sYm9hdC1zdGF0dXNcIlxuICApO1xuXG4gIC8vIHNob3cgdGhlIGRpYWxvZ1xuICBtYWluRGlhbG9nLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgdHJ1ZSk7XG5cbiAgLy8gcHJldmVudCBmcm9tIGNsaWNraW5nIG9uIHRoZSBib2FyZHMsIHdoZW4gdGhlIHBsYXllciBpcyBub3QgZXZlbiBjcmVhdGVkXG4gIGdldFBsYXllckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgZ2V0Q29tcHV0ZXJCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cbiAgY29uc3QgcmVzZXRGb3JtID0gKCkgPT4ge1xuICAgIHBsYXllck5hbWVJbmZvcm1hdGlvbi5yZXNldCgpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVBsYXllciA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItbmFtZS1pbnB1dFwiKS52YWx1ZTtcbiAgICBiYXR0bGVTaGlwR2FtZS5zZXRQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgYmF0dGxlU2hpcEdhbWUuc2V0Rmlyc3RQbGF5ZXIoKTtcbiAgfTtcblxuICBwbGF5ZXJOYW1lSW5mb3JtYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjcmVhdGVQbGF5ZXIoKTtcbiAgICBiYXR0bGVTaGlwR2FtZS5nZXRQbGF5ZXIoKTtcbiAgICAvLyBhbGxvdyB0byBjbGljayBvbiB0aGUgYm9hcmQgYWZ0ZXIgdGhlIHBsYXllciBvYmplY3QgaXMgY3JlYXRlZFxuICAgIGdldFBsYXllckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgICBnZXRDb21wdXRlckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgICByZXNldEZvcm0oKTtcbiAgfSk7XG5cbiAgLy8gVE9ETzogRmlndXJlIG91dCBhIGJldHRlciB3YXkgb2YgcmVuZGVyaW5nIHRoZSBzaGlwcy9hdHRhY2tzL21pc3Nlc1xuXG4gIGNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbHMgPSAxMDtcbiAgICBjb25zdCByb3dzID0gMTA7XG5cbiAgICBnZXRQbGF5ZXJCb2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHM7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIiwgaSk7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIiwgaik7XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXVtqXS5uYW1lID09PSBcImNhcnJpZXJcIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInJlbmRlci1zaGlwc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXVtqXS5uYW1lID09PSBcImJhdHRsZVNoaXBcIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInJlbmRlci1zaGlwc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXVtqXS5uYW1lID09PSBcImRlc3Ryb3llclwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicmVuZGVyLXNoaXBzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW2ldW2pdLm5hbWUgPT09IFwic3ViTWFyaW5lXCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJyZW5kZXItc2hpcHNcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0ubmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJyZW5kZXItc2hpcHNcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0gPT09IFwiTVwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkLWF0dGFja3NcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0gPT09IFwiSFwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1hdHRhY2tzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGdldFBsYXllckJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWNsYXJlUGxheWVyV2lubmVyID0gKCkgPT4ge1xuICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja0Zvcldpbihjb21wdXRlckJvYXJkKSkge1xuICAgICAgZGlzcGxheVdpbm5lci50ZXh0Q29udGVudCA9IGAke2JhdHRsZVNoaXBHYW1lLmdldFBsYXllcigpfSB3b24hYDtcbiAgICAgIHNob3dXaW5uZXJEaWFsb2cuc2V0QXR0cmlidXRlKFwib3BlblwiLCB0cnVlKTtcbiAgICAgIGdldFBsYXllckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgIGdldENvbXB1dGVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIH1cbiAgfTtcblxuICAvLyBUT0RPOiBGaWd1cmUgb3V0IGEgd2F5IHRvIHJlbmRlciB0aGUgZmlsdGVyZWQgbWlzc2VkIGF0dGFja3NcbiAgLy8gdGhhdCBhcmUgc2F2ZWQgaW4gc2VwYXJhdGUgYXJyYXksIHdoaWxlIHRoZSBhdHRhY2tzIGFyZSBvbmx5XG4gIC8vIHJlbmRlcmVkIGZyb20gYW5vdGhlciBhcnJheSAhXG5cbiAgY29uc3QgcmVuZGVyQ29tcHV0ZXJCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xzID0gMTA7XG4gICAgY29uc3Qgcm93cyA9IDEwO1xuXG4gICAgZ2V0Q29tcHV0ZXJCb2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHM7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIiwgaSk7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIiwgaik7XG4gICAgICAgIGlmIChjb21wdXRlckJvYXJkLmJvYXJkW2ldW2pdID09PSBcIk1cIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NlZC1hdHRhY2tzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbXB1dGVyQm9hcmQuYm9hcmRbaV1bal0gPT09IFwiSFwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1hdHRhY2tzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGdldENvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlY2xhcmVDb21wdXRlcldpbm5lciA9ICgpID0+IHtcbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5jaGVja0ZvcldpbihwbGF5ZXJCb2FyZCkpIHtcbiAgICAgIGRpc3BsYXlXaW5uZXIudGV4dENvbnRlbnQgPSBgJHtiYXR0bGVTaGlwR2FtZS5nZXRDb21wdXRlcigpLm5hbWV9IHdvbiFgO1xuICAgICAgc2hvd1dpbm5lckRpYWxvZy5zZXRBdHRyaWJ1dGUoXCJvcGVuXCIsIHRydWUpO1xuICAgICAgZ2V0UGxheWVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgZ2V0Q29tcHV0ZXJCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNoaXBzUGxhY2VkUHJvcGVydHkgPSAoKSA9PiB7XG4gICAgaWYgKGNhcnJpZXIuaXNQbGFjZWQpIHtcbiAgICAgIHBsYXllckNhcnJpZXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIlBsYWNlZFwiO1xuICAgICAgcGxheWVyQ2FycmllclN0YXR1cy5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgICB9XG5cbiAgICBpZiAoY2FycmllckFJLmlzUGxhY2VkKSB7XG4gICAgICBjb21wdXRlckNhcnJpZXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIlBsYWNlZFwiO1xuICAgICAgY29tcHV0ZXJDYXJyaWVyU3RhdHVzLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICAgIH1cblxuICAgIGlmIChiYXR0bGVTaGlwLmlzUGxhY2VkKSB7XG4gICAgICBwbGF5ZXJCYXR0bGVzaGlwU3RhdHVzLnRleHRDb250ZW50ID0gXCJQbGFjZWRcIjtcbiAgICAgIHBsYXllckJhdHRsZXNoaXBTdGF0dXMuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgfVxuXG4gICAgaWYgKGJhdHRsZVNoaXBBSS5pc1BsYWNlZCkge1xuICAgICAgY29tcHV0ZXJCYXR0bGVzaGlwU3RhdHVzLnRleHRDb250ZW50ID0gXCJQbGFjZWRcIjtcbiAgICAgIGNvbXB1dGVyQmF0dGxlc2hpcFN0YXR1cy5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgICB9XG5cbiAgICBpZiAoZGVzdHJveWVyLmlzUGxhY2VkKSB7XG4gICAgICBwbGF5ZXJEZXN0cm95ZXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIlBsYWNlZFwiO1xuICAgICAgcGxheWVyRGVzdHJveWVyU3RhdHVzLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICAgIH1cblxuICAgIGlmIChkZXN0cm95ZXJBSS5pc1BsYWNlZCkge1xuICAgICAgY29tcHV0ZXJEZXN0cm95ZXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIlBsYWNlZFwiO1xuICAgICAgY29tcHV0ZXJEZXN0cm95ZXJTdGF0dXMuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgfVxuXG4gICAgaWYgKHN1Yk1hcmluZS5pc1BsYWNlZCkge1xuICAgICAgcGxheWVyU3VibWFyaW5lU3RhdHVzLnRleHRDb250ZW50ID0gXCJQbGFjZWRcIjtcbiAgICAgIHBsYXllclN1Ym1hcmluZVN0YXR1cy5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgICB9XG5cbiAgICBpZiAoc3ViTWFyaW5lQUkuaXNQbGFjZWQpIHtcbiAgICAgIGNvbXB1dGVyU3VibWFyaW5lU3RhdHVzLnRleHRDb250ZW50ID0gXCJQbGFjZWRcIjtcbiAgICAgIGNvbXB1dGVyU3VibWFyaW5lU3RhdHVzLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICAgIH1cblxuICAgIGlmIChwYXRyb2xCb2F0LmlzUGxhY2VkKSB7XG4gICAgICBwbGF5ZXJQYXRyb2xCb2F0U3RhdHVzLnRleHRDb250ZW50ID0gXCJQbGFjZWRcIjtcbiAgICAgIHBsYXllclBhdHJvbEJvYXRTdGF0dXMuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgfVxuXG4gICAgaWYgKHBhdHJvbEJvYXRBSS5pc1BsYWNlZCkge1xuICAgICAgY29tcHV0ZXJQYXRyb2xCb2F0U3RhdHVzLnRleHRDb250ZW50ID0gXCJQbGFjZWRcIjtcbiAgICAgIGNvbXB1dGVyUGF0cm9sQm9hdFN0YXR1cy5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2hpcHNTdW5rUHJvcGVydHkgPSAoKSA9PiB7XG4gICAgaWYgKGNhcnJpZXIuaXNTdW5rKCkpIHtcbiAgICAgIHBsYXllckNhcnJpZXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIlN1bmtcIjtcbiAgICAgIHBsYXllckNhcnJpZXJTdGF0dXMuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH1cblxuICAgIGlmIChjYXJyaWVyQUkuaXNTdW5rKCkpIHtcbiAgICAgIGNvbXB1dGVyQ2FycmllclN0YXR1cy50ZXh0Q29udGVudCA9IFwiU3Vua1wiO1xuICAgICAgY29tcHV0ZXJDYXJyaWVyU3RhdHVzLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB9XG5cbiAgICBpZiAoYmF0dGxlU2hpcC5pc1N1bmsoKSkge1xuICAgICAgcGxheWVyQmF0dGxlc2hpcFN0YXR1cy50ZXh0Q29udGVudCA9IFwiU3Vua1wiO1xuICAgICAgcGxheWVyQmF0dGxlc2hpcFN0YXR1cy5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgaWYgKGJhdHRsZVNoaXBBSS5pc1N1bmsoKSkge1xuICAgICAgY29tcHV0ZXJCYXR0bGVzaGlwU3RhdHVzLnRleHRDb250ZW50ID0gXCJTdW5rXCI7XG4gICAgICBjb21wdXRlckJhdHRsZXNoaXBTdGF0dXMuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH1cblxuICAgIGlmIChkZXN0cm95ZXIuaXNTdW5rKCkpIHtcbiAgICAgIHBsYXllckRlc3Ryb3llclN0YXR1cy50ZXh0Q29udGVudCA9IFwiU3Vua1wiO1xuICAgICAgcGxheWVyRGVzdHJveWVyU3RhdHVzLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB9XG5cbiAgICBpZiAoZGVzdHJveWVyQUkuaXNTdW5rKCkpIHtcbiAgICAgIGNvbXB1dGVyRGVzdHJveWVyU3RhdHVzLnRleHRDb250ZW50ID0gXCJTdW5rXCI7XG4gICAgICBjb21wdXRlckRlc3Ryb3llclN0YXR1cy5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgaWYgKHN1Yk1hcmluZS5pc1N1bmsoKSkge1xuICAgICAgcGxheWVyU3VibWFyaW5lU3RhdHVzLnRleHRDb250ZW50ID0gXCJTdW5rXCI7XG4gICAgICBwbGF5ZXJTdWJtYXJpbmVTdGF0dXMuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH1cblxuICAgIGlmIChzdWJNYXJpbmVBSS5pc1N1bmsoKSkge1xuICAgICAgY29tcHV0ZXJTdWJtYXJpbmVTdGF0dXMudGV4dENvbnRlbnQgPSBcIlN1bmtcIjtcbiAgICAgIGNvbXB1dGVyU3VibWFyaW5lU3RhdHVzLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB9XG5cbiAgICBpZiAocGF0cm9sQm9hdC5pc1N1bmsoKSkge1xuICAgICAgcGxheWVyUGF0cm9sQm9hdFN0YXR1cy50ZXh0Q29udGVudCA9IFwiU3Vua1wiO1xuICAgICAgcGxheWVyUGF0cm9sQm9hdFN0YXR1cy5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgaWYgKHBhdHJvbEJvYXRBSS5pc1N1bmsoKSkge1xuICAgICAgY29tcHV0ZXJQYXRyb2xCb2F0U3RhdHVzLnRleHRDb250ZW50ID0gXCJTdW5rXCI7XG4gICAgICBjb21wdXRlclBhdHJvbEJvYXRTdGF0dXMuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGlja0V2ZW50SGFuZGxlciA9IChlKSA9PiB7XG4gICAgY29uc3QgY2xpY2tlZENlbGwgPSBlLnRhcmdldDtcbiAgICBjb25zdCBjb2wgPSBjbGlja2VkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiKTtcbiAgICBjb25zdCByb3cgPSBjbGlja2VkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgICBpZiAoIWNvbCAmJiAhcm93KSByZXR1cm47XG4gICAgYmF0dGxlU2hpcEdhbWUuZ2FtZUxvb3AoY29sLCByb3cpO1xuICAgIGhhbmRsZVNoaXBzU3Vua1Byb3BlcnR5KCk7XG4gICAgcmVuZGVyQ29tcHV0ZXJCb2FyZCgpO1xuICAgIGRlY2xhcmVQbGF5ZXJXaW5uZXIoKTtcbiAgICByZW5kZXJQbGF5ZXJCb2FyZCgpO1xuICAgIGRlY2xhcmVDb21wdXRlcldpbm5lcigpO1xuICB9O1xuXG4gIHJlbmRlckNvbXB1dGVyQm9hcmQoKTtcblxuICBnZXRDb21wdXRlckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0V2ZW50SGFuZGxlcik7XG5cbiAgY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgcGxheWVyQm9hcmQuY2xlYXJCb2FyZCgpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5jbGVhckJvYXJkKCk7XG5cbiAgICBwbGF5ZXJCb2FyZC5jbGVhclNhdmVTaGlwc0FycmF5KCk7XG5cbiAgICBjb21wdXRlckJvYXJkLmNsZWFyU2F2ZVNoaXBzQXJyYXkoKTtcblxuICAgIGNhcnJpZXIucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIGNhcnJpZXJBSS5yZXNldE51bWJlck9mSGl0cygpO1xuXG4gICAgYmF0dGxlU2hpcC5yZXNldE51bWJlck9mSGl0cygpO1xuXG4gICAgYmF0dGxlU2hpcEFJLnJlc2V0TnVtYmVyT2ZIaXRzKCk7XG5cbiAgICBkZXN0cm95ZXIucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIGRlc3Ryb3llckFJLnJlc2V0TnVtYmVyT2ZIaXRzKCk7XG5cbiAgICBzdWJNYXJpbmUucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIHN1Yk1hcmluZUFJLnJlc2V0TnVtYmVyT2ZIaXRzKCk7XG5cbiAgICBwYXRyb2xCb2F0LnJlc2V0TnVtYmVyT2ZIaXRzKCk7XG5cbiAgICBwYXRyb2xCb2F0QUkucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIGNhcnJpZXIuaXNQbGFjZWQgPSBmYWxzZTtcblxuICAgIGNhcnJpZXJBSS5pc1BsYWNlZCA9IGZhbHNlO1xuXG4gICAgYmF0dGxlU2hpcC5pc1BsYWNlZCA9IGZhbHNlO1xuXG4gICAgYmF0dGxlU2hpcEFJLmlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBkZXN0cm95ZXIuaXNQbGFjZWQgPSBmYWxzZTtcblxuICAgIGRlc3Ryb3llckFJLmlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBzdWJNYXJpbmUuaXNQbGFjZWQgPSBmYWxzZTtcblxuICAgIHN1Yk1hcmluZUFJLmlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBwYXRyb2xCb2F0LmlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBwYXRyb2xCb2F0QUkuaXNQbGFjZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwucmVtb3ZlKFwiLmNlbGxcIik7XG4gICAgfSk7XG5cbiAgICBiYXR0bGVTaGlwR2FtZS5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTtcblxuICAgIGhhbmRsZVNoaXBzUGxhY2VkUHJvcGVydHkoKTtcblxuICAgIHJlbmRlclBsYXllckJvYXJkKCk7XG5cbiAgICByZW5kZXJDb21wdXRlckJvYXJkKCk7XG5cbiAgICBzaG93V2lubmVyRGlhbG9nLnJlbW92ZUF0dHJpYnV0ZShcIm9wZW5cIik7XG4gICAgLy8gc2hvdyB0aGUgZGlhbG9nIGFnYWluIG9uIG5ldyBnYW1lXG4gICAgbWFpbkRpYWxvZy5zZXRBdHRyaWJ1dGUoXCJvcGVuXCIsIHRydWUpO1xuICB9O1xuXG4gIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzdGFydEdhbWUpO1xuXG4gIHJldHVybiB7IHJlbmRlclBsYXllckJvYXJkLCByZW5kZXJDb21wdXRlckJvYXJkLCBoYW5kbGVTaGlwc1BsYWNlZFByb3BlcnR5IH07XG59KSgpO1xuXG5leHBvcnQgeyBiYXR0bGVTaGlwSW50ZXJmYWNlIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNzAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5oZWFkZXItbmFtZSB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kaWFsb2csXFxuLndpbm5lci1kaWFsb2cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIGxlZnQ6IDY0MHB4O1xcbiAgdG9wOiAxODBweDtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRpYWxvZy1jb250YWluZXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcblxcbi5wbGF5ZXItbmFtZSxcXG4ucGxheWVyLW5hbWUtaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmluc3RydWN0aW9ucy1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICB3aWR0aDogMjIwcHg7XFxufVxcblxcbi5jb25maXJtLWJ1dHRvbixcXG4ucGxheS1hZ2FpbiB7XFxuICBwYWRkaW5nLXRvcDogMnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucGxheWVyLWluZm9ybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVuZGVyLXNoaXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5taXNzZWQtYXR0YWNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnNoaXAtYXR0YWNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5kaWFsb2ctY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGlzcGxheS13aW5uZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNwYWNlLWlzLWVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5zcGFjZS1pcy1ub3QtZW1wdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIC8qIG91dGxpbmU6IDJweCBzb2xpZCBibGFjazsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnBsYXllci1ib2FyZC1zdGF0dXMtY29udGFpbmVyLFxcbi5jb21wdXRlci1ib2FyZC1zdGF0dXMtY29udGFpbmVyIHtcXG4gIC8qIG91dGxpbmU6IDJweCBzb2xpZCBibHVlOyAqL1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnBsYXllci1zaGlwLWNhcnJpZXIsXFxuLnBsYXllci1zaGlwLWJhdHRsZXNoaXAsXFxuLnBsYXllci1zaGlwLWRlc3Ryb3llcixcXG4ucGxheWVyLXNoaXAtc3VibWFyaW5lLFxcbi5wbGF5ZXItc2hpcC1wYXRyb2xib2F0LFxcbi5jb21wdXRlci1zaGlwLWNhcnJpZXIsXFxuLmNvbXB1dGVyLXNoaXAtYmF0dGxlc2hpcCxcXG4uY29tcHV0ZXItc2hpcC1kZXN0cm95ZXIsXFxuLmNvbXB1dGVyLXNoaXAtc3VibWFyaW5lLFxcbi5jb21wdXRlci1zaGlwLXBhdHJvbGJvYXQge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5wbGF5ZXItY2Fycmllci1zdGF0dXMtY29udGFpbmVyLFxcbi5wbGF5ZXItYmF0dGxlc2hpcC1zdGF0dXMtY29udGFpbmVyLFxcbi5wbGF5ZXItZGVzdHJveWVyLXN0YXR1cy1jb250YWluZXIsXFxuLnBsYXllci1zdWJtYXJpbmUtc3RhdHVzLWNvbnRhaW5lcixcXG4ucGxheWVyLXBhdHJvbGJvYXQtc3RhdHVzLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItY2Fycmllci1zdGF0dXMtY29udGFpbmVyLFxcbi5jb21wdXRlci1iYXR0bGVzaGlwLXN0YXR1cy1jb250YWluZXIsXFxuLmNvbXB1dGVyLWRlc3Ryb3llci1zdGF0dXMtY29udGFpbmVyLFxcbi5jb21wdXRlci1zdWJtYXJpbmUtc3RhdHVzLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItcGF0cm9sYm9hdC1zdGF0dXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTs7Ozs7Ozs7OztFQVVFLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7Ozs7OztFQVVFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcwMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnBsYXllci1ib2FyZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21wdXRlci1ib2FyZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZGlhbG9nLFxcbi53aW5uZXItZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBsZWZ0OiA2NDBweDtcXG4gIHRvcDogMTgwcHg7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kaWFsb2ctY29udGFpbmVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cXG4ucGxheWVyLW5hbWUsXFxuLnBsYXllci1uYW1lLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgd2lkdGg6IDIyMHB4O1xcbn1cXG5cXG4uY29uZmlybS1idXR0b24sXFxuLnBsYXktYWdhaW4ge1xcbiAgcGFkZGluZy10b3A6IDJweDtcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnBsYXllci1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlbmRlci1zaGlwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubWlzc2VkLWF0dGFja3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zaGlwLWF0dGFja3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRpc3BsYXktd2lubmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zcGFjZS1pcy1lbXB0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uc3BhY2UtaXMtbm90LWVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAvKiBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQtc3RhdHVzLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItYm9hcmQtc3RhdHVzLWNvbnRhaW5lciB7XFxuICAvKiBvdXRsaW5lOiAycHggc29saWQgYmx1ZTsgKi9cXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1jYXJyaWVyLFxcbi5wbGF5ZXItc2hpcC1iYXR0bGVzaGlwLFxcbi5wbGF5ZXItc2hpcC1kZXN0cm95ZXIsXFxuLnBsYXllci1zaGlwLXN1Ym1hcmluZSxcXG4ucGxheWVyLXNoaXAtcGF0cm9sYm9hdCxcXG4uY29tcHV0ZXItc2hpcC1jYXJyaWVyLFxcbi5jb21wdXRlci1zaGlwLWJhdHRsZXNoaXAsXFxuLmNvbXB1dGVyLXNoaXAtZGVzdHJveWVyLFxcbi5jb21wdXRlci1zaGlwLXN1Ym1hcmluZSxcXG4uY29tcHV0ZXItc2hpcC1wYXRyb2xib2F0IHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4ucGxheWVyLWNhcnJpZXItc3RhdHVzLWNvbnRhaW5lcixcXG4ucGxheWVyLWJhdHRsZXNoaXAtc3RhdHVzLWNvbnRhaW5lcixcXG4ucGxheWVyLWRlc3Ryb3llci1zdGF0dXMtY29udGFpbmVyLFxcbi5wbGF5ZXItc3VibWFyaW5lLXN0YXR1cy1jb250YWluZXIsXFxuLnBsYXllci1wYXRyb2xib2F0LXN0YXR1cy1jb250YWluZXIsXFxuLmNvbXB1dGVyLWNhcnJpZXItc3RhdHVzLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItYmF0dGxlc2hpcC1zdGF0dXMtY29udGFpbmVyLFxcbi5jb21wdXRlci1kZXN0cm95ZXItc3RhdHVzLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItc3VibWFyaW5lLXN0YXR1cy1jb250YWluZXIsXFxuLmNvbXB1dGVyLXBhdHJvbGJvYXQtc3RhdHVzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgYmF0dGxlU2hpcEludGVyZmFjZSB9IGZyb20gXCIuL1ZpZXcvSW50ZXJmYWNlXCI7XG5cbmltcG9ydCB7IGJhdHRsZVNoaXBHYW1lIH0gZnJvbSBcIi4vQ29udHJvbGxlci9QbGF5ZXJcIjtcblxuYmF0dGxlU2hpcEdhbWUucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7XG5cbmJhdHRsZVNoaXBJbnRlcmZhY2UucmVuZGVyUGxheWVyQm9hcmQoKTtcblxuYmF0dGxlU2hpcEludGVyZmFjZS5yZW5kZXJDb21wdXRlckJvYXJkKCk7XG5cbmJhdHRsZVNoaXBJbnRlcmZhY2UuaGFuZGxlU2hpcHNQbGFjZWRQcm9wZXJ0eSgpO1xuIl0sIm5hbWVzIjpbImJhdHRsZVNoaXBMb2dpYyIsImJhdHRsZVNoaXBCb2FyZCIsImNhcnJpZXIiLCJTaGlwIiwiY2FycmllckFJIiwiYmF0dGxlU2hpcCIsImJhdHRsZVNoaXBBSSIsImRlc3Ryb3llciIsImRlc3Ryb3llckFJIiwic3ViTWFyaW5lIiwic3ViTWFyaW5lQUkiLCJwYXRyb2xCb2F0IiwicGF0cm9sQm9hdEFJIiwicGxheWVyQm9hcmQiLCJnYW1lQm9hcmQiLCJjb21wdXRlckJvYXJkIiwiYmF0dGxlU2hpcEdhbWUiLCJQbGF5ZXIiLCJuYW1lIiwicGxheWVyIiwiY29tcHV0ZXIiLCJzZXRQbGF5ZXIiLCJmaXJzdFBsYXllciIsInNldEZpcnN0UGxheWVyIiwiZ2V0UGxheWVyIiwiZ2V0Q29tcHV0ZXIiLCJzd2l0Y2hQbGF5ZXJzVHVybnMiLCJnZXRGaXJzdFBsYXllciIsImF0dGFja0NvbXB1dGVyQm9hcmQiLCJjb2wiLCJyb3ciLCJjb25zb2xlIiwibG9nIiwicmVjZWl2ZUF0dGFjayIsImF0dGFja1BsYXllckJvYXJkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxhY2VBbGxTaGlwc1JhbmRvbWx5IiwiaXNDZWxsQXZhaWxhYmxlIiwiaXNQbGFjZWQiLCJwbGFjZVNoaXBSYW5kb21seSIsImdhbWVMb29wIiwicHJpbnRCb2FyZCIsIm1pc3NlZEF0dGFja3NQbGF5ZXIiLCJjaGVja0ZvcldpbiIsIm1pc3NlZEF0dGFja3NDb21wdXRlciIsImNvbHMiLCJyb3dzIiwiYm9hcmQiLCJzYXZlU2hpcHMiLCJpIiwiaiIsInNoaXAiLCJkaXJlY3Rpb24iLCJzaGlwQXJyYXkiLCJsZW5ndGgiLCJwdXNoIiwiZXZlcnkiLCJjZWxsIiwicGxhY2VTaGlwIiwiRXJyb3IiLCJzaGlwRGlyZWN0aW9uIiwicmFuZG9tRGlyZWN0aW9uIiwiZm9yRWFjaCIsImJvYXJkU3BvdCIsImhpdCIsImdldEJvYXJkQ29weSIsImZpbHRlcmVkTWlzc2VkQXR0YWNrcyIsInJldHJpZXZlTWlzc2VkQXR0YWNrcyIsImZpbHRlciIsImF0dGFjayIsImFyZUFsbFNoaXBzU3VuayIsInN1bmtTaGlwcyIsImlzU3VuayIsImNoZWNrRm9yV2luQUkiLCJjbGVhckJvYXJkIiwiY2xlYXJTYXZlU2hpcHNBcnJheSIsInJhbmRvbVVVSUQiLCJiIiwiYSIsInRvU3RyaW5nIiwicmVwbGFjZSIsIm51bWJlck9mSGl0cyIsImlzU2hpcFN1bmsiLCJpZCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInNoaXBUYWtpbmdIaXQiLCJyZXNldE51bWJlck9mSGl0cyIsInZhbHVlIiwiYmF0dGxlU2hpcEludGVyZmFjZSIsImdldFBsYXllckJvYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29tcHV0ZXJCb2FyZCIsInBsYXllck5hbWVJbmZvcm1hdGlvbiIsIm1haW5EaWFsb2ciLCJkaXNwbGF5V2lubmVyIiwic2hvd1dpbm5lckRpYWxvZyIsInBsYXlBZ2FpbkJ1dHRvbiIsInBsYXllckNhcnJpZXJTdGF0dXMiLCJwbGF5ZXJCYXR0bGVzaGlwU3RhdHVzIiwicGxheWVyRGVzdHJveWVyU3RhdHVzIiwicGxheWVyU3VibWFyaW5lU3RhdHVzIiwicGxheWVyUGF0cm9sQm9hdFN0YXR1cyIsImNvbXB1dGVyQ2FycmllclN0YXR1cyIsImNvbXB1dGVyQmF0dGxlc2hpcFN0YXR1cyIsImNvbXB1dGVyRGVzdHJveWVyU3RhdHVzIiwiY29tcHV0ZXJTdWJtYXJpbmVTdGF0dXMiLCJjb21wdXRlclBhdHJvbEJvYXRTdGF0dXMiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJyZXNldEZvcm0iLCJyZXNldCIsImNyZWF0ZVBsYXllciIsInBsYXllck5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlbmRlclBsYXllckJvYXJkIiwidGV4dENvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJkZWNsYXJlUGxheWVyV2lubmVyIiwicmVuZGVyQ29tcHV0ZXJCb2FyZCIsImRlY2xhcmVDb21wdXRlcldpbm5lciIsImhhbmRsZVNoaXBzUGxhY2VkUHJvcGVydHkiLCJjb2xvciIsImhhbmRsZVNoaXBzU3Vua1Byb3BlcnR5IiwiY2xpY2tFdmVudEhhbmRsZXIiLCJjbGlja2VkQ2VsbCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInJlc3RhcnRHYW1lIiwiY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwicmVtb3ZlQXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==