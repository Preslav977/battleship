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
  const attackPlayerBoard = playerBoard => {
    let col = Math.floor(Math.floor(Math.random() * 10));
    let row = Math.floor(Math.floor(Math.random() * 10));
    while (playerBoard.receiveAttack(col, row) === "You cant attack the same spot") {
      col = Math.floor(Math.floor(Math.random() * 10));
      row = Math.floor(Math.floor(Math.random() * 10));
    }
  };
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
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.carrierAI.isPlaced) {
      computerCarrierStatus.textContent = "Placed";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShip.isPlaced) {
      playerBattleshipStatus.textContent = "Placed";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipAI.isPlaced) {
      computerBattleshipStatus.textContent = "Placed";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.destroyer.isPlaced) {
      playerDestroyerStatus.textContent = "Placed";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.destroyerAI.isPlaced) {
      computerDestroyerStatus.textContent = "Placed";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.subMarine.isPlaced) {
      playerSubmarineStatus.textContent = "Placed";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.subMarineAI.isPlaced) {
      computerSubmarineStatus.textContent = "Placed";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.patrolBoat.isPlaced) {
      playerPatrolBoatStatus.textContent = "Placed";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.patrolBoatAI.isPlaced) {
      computerPatrolBoatStatus.textContent = "Placed";
    }
  };
  const handleShipsSunkProperty = () => {
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.carrier.isSunk()) {
      playerCarrierStatus.textContent = "Sunk";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.carrierAI.isSunk()) {
      computerCarrierStatus.textContent = "Sunk";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShip.isSunk()) {
      playerBattleshipStatus.textContent = "Sunk";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipAI.isSunk()) {
      computerBattleshipStatus.textContent = "Sunk";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.destroyer.isSunk()) {
      playerDestroyerStatus.textContent = "Sunk";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.destroyerAI.isSunk()) {
      computerDestroyerStatus.textContent = "Sunk";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.subMarine.isSunk()) {
      playerSubmarineStatus.textContent = "Sunk";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.subMarineAI.isSunk()) {
      computerSubmarineStatus.textContent = "Sunk";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.patrolBoat.isSunk()) {
      playerPatrolBoatStatus.textContent = "Sunk";
    }
    if (_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.patrolBoatAI.isSunk()) {
      computerPatrolBoatStatus.textContent = "Sunk";
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 700px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n  margin-top: 20px;\n}\n\n.header-name {\n  font-size: large;\n}\n\n.player-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n  margin-right: 20px;\n}\n\n.cell {\n  outline: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell:hover {\n  cursor: pointer;\n}\n\n.computer-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n}\n\n.dialog,\n.winner-dialog {\n  position: absolute;\n  width: 250px;\n  height: 250px;\n  left: 640px;\n  top: 180px;\n  outline: 1px solid black;\n}\n\n.dialog-container-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 70px;\n}\n\n.player-name,\n.player-name-input {\n  margin-bottom: 10px;\n}\n\n.instructions-container {\n  padding-top: 10px;\n  padding-left: 30px;\n  padding-right: 20px;\n}\n\n.instructions {\n  margin-top: 10px;\n  width: 220px;\n}\n\n.player-information {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.render-ships {\n  background-color: blue;\n}\n\n.missed-attacks {\n  background-color: green;\n}\n\n.ship-attacks {\n  background-color: red;\n}\n\n.dialog-content {\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.display-winner {\n  margin-bottom: 10px;\n}\n\n.space-is-empty {\n  background-color: lightgreen;\n}\n\n.space-is-not-empty {\n  background-color: red;\n}\n\n.container {\n  /* outline: 2px solid black; */\n  display: flex;\n  justify-content: space-around;\n}\n\n.player-board-status-container,\n.computer-board-status-container {\n  /* outline: 2px solid blue; */\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n\n.player-ship-carrier,\n.player-ship-battleship,\n.player-ship-destroyer,\n.player-ship-submarine,\n.player-ship-patrolboat,\n.computer-ship-carrier,\n.computer-ship-battleship,\n.computer-ship-destroyer,\n.computer-ship-submarine,\n.computer-ship-patrolboat {\n  margin-right: 5px;\n}\n\n.player-carrier-status-container,\n.player-battleship-status-container,\n.player-destroyer-status-container,\n.player-submarine-status-container,\n.player-patrolboat-status-container,\n.computer-carrier-status-container,\n.computer-battleship-status-container,\n.computer-destroyer-status-container,\n.computer-submarine-status-container,\n.computer-patrolboat-status-container {\n  display: flex;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,wBAAwB;AAC1B;;AAEA;;EAEE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,8BAA8B;EAC9B,aAAa;EACb,6BAA6B;AAC/B;;AAEA;;EAEE,6BAA6B;EAC7B,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;;;;;;;;;;EAUE,iBAAiB;AACnB;;AAEA;;;;;;;;;;EAUE,aAAa;AACf","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 700px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n  margin-top: 20px;\n}\n\n.header-name {\n  font-size: large;\n}\n\n.player-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n  margin-right: 20px;\n}\n\n.cell {\n  outline: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell:hover {\n  cursor: pointer;\n}\n\n.computer-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n}\n\n.dialog,\n.winner-dialog {\n  position: absolute;\n  width: 250px;\n  height: 250px;\n  left: 640px;\n  top: 180px;\n  outline: 1px solid black;\n}\n\n.dialog-container-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 70px;\n}\n\n.player-name,\n.player-name-input {\n  margin-bottom: 10px;\n}\n\n.instructions-container {\n  padding-top: 10px;\n  padding-left: 30px;\n  padding-right: 20px;\n}\n\n.instructions {\n  margin-top: 10px;\n  width: 220px;\n}\n\n.player-information {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.render-ships {\n  background-color: blue;\n}\n\n.missed-attacks {\n  background-color: green;\n}\n\n.ship-attacks {\n  background-color: red;\n}\n\n.dialog-content {\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.display-winner {\n  margin-bottom: 10px;\n}\n\n.space-is-empty {\n  background-color: lightgreen;\n}\n\n.space-is-not-empty {\n  background-color: red;\n}\n\n.container {\n  /* outline: 2px solid black; */\n  display: flex;\n  justify-content: space-around;\n}\n\n.player-board-status-container,\n.computer-board-status-container {\n  /* outline: 2px solid blue; */\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n}\n\n.player-ship-carrier,\n.player-ship-battleship,\n.player-ship-destroyer,\n.player-ship-submarine,\n.player-ship-patrolboat,\n.computer-ship-carrier,\n.computer-ship-battleship,\n.computer-ship-destroyer,\n.computer-ship-submarine,\n.computer-ship-patrolboat {\n  margin-right: 5px;\n}\n\n.player-carrier-status-container,\n.player-battleship-status-container,\n.player-destroyer-status-container,\n.player-submarine-status-container,\n.player-patrolboat-status-container,\n.computer-carrier-status-container,\n.computer-battleship-status-container,\n.computer-destroyer-status-container,\n.computer-submarine-status-container,\n.computer-patrolboat-status-container {\n  display: flex;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUVrQztBQUVGO0FBRXJEakgsOERBQWMsQ0FBQ3NCLHFCQUFxQixDQUFDLENBQUM7QUFFdENxRCxnRUFBbUIsQ0FBQzZCLGlCQUFpQixDQUFDLENBQUM7QUFFdkM3QixnRUFBbUIsQ0FBQ29DLG1CQUFtQixDQUFDLENBQUM7QUFFekNwQyxnRUFBbUIsQ0FBQ3NDLHlCQUF5QixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvQ29udHJvbGxlci9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Nb2RlbC9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Nb2RlbC9TaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvVmlldy9JbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRpbnVlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuaW1wb3J0IHsgYmF0dGxlU2hpcExvZ2ljIH0gZnJvbSBcIi4uL01vZGVsL1NoaXBcIjtcblxuaW1wb3J0IHsgYmF0dGxlU2hpcEJvYXJkIH0gZnJvbSBcIi4uL01vZGVsL0dhbWVib2FyZFwiO1xuXG5jb25zdCBjYXJyaWVyID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJjYXJyaWVyXCIsIDUsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGNhcnJpZXJBSSA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiY2FycmllclwiLCA1LCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBiYXR0bGVTaGlwID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJiYXR0bGVTaGlwXCIsIDQsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGJhdHRsZVNoaXBBSSA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiYmF0dGxlU2hpcFwiLCA0LCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBkZXN0cm95ZXIgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcImRlc3Ryb3llclwiLCAzLCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBkZXN0cm95ZXJBSSA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiZGVzdHJveWVyXCIsIDMsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IHN1Yk1hcmluZSA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwic3ViTWFyaW5lXCIsIDMsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IHN1Yk1hcmluZUFJID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJzdWJNYXJpbmVcIiwgMywgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3QgcGF0cm9sQm9hdCA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwicGF0cm9sQm9hdFwiLCAyLCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBwYXRyb2xCb2F0QUkgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcInBhdHJvbEJvYXRcIiwgMiwgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3QgcGxheWVyQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbmNvbnN0IGJhdHRsZVNoaXBHYW1lID0gKCgpID0+IHtcbiAgY29uc3QgUGxheWVyID0gKG5hbWUpID0+IG5hbWU7XG5cbiAgbGV0IHBsYXllcjtcblxuICBjb25zdCBjb21wdXRlciA9IHsgbmFtZTogXCJDb21wdXRlclwiIH07XG5cbiAgY29uc3Qgc2V0UGxheWVyID0gKG5hbWUpID0+IHtcbiAgICBwbGF5ZXIgPSBQbGF5ZXIobmFtZSk7XG4gIH07XG5cbiAgbGV0IGZpcnN0UGxheWVyO1xuXG4gIGNvbnN0IHNldEZpcnN0UGxheWVyID0gKCkgPT4ge1xuICAgIGZpcnN0UGxheWVyID0gcGxheWVyO1xuICB9O1xuXG4gIGNvbnN0IGdldFBsYXllciA9ICgpID0+IHBsYXllcjtcblxuICBjb25zdCBnZXRDb21wdXRlciA9ICgpID0+IGNvbXB1dGVyO1xuXG4gIGNvbnN0IHN3aXRjaFBsYXllcnNUdXJucyA9ICgpID0+IHtcbiAgICBmaXJzdFBsYXllciA9IGZpcnN0UGxheWVyID09PSBwbGF5ZXIgPyBjb21wdXRlciA6IHBsYXllcjtcbiAgfTtcblxuICBjb25zdCBnZXRGaXJzdFBsYXllciA9ICgpID0+IGZpcnN0UGxheWVyO1xuXG4gIGNvbnN0IGF0dGFja0NvbXB1dGVyQm9hcmQgPSAoY29sLCByb3csIGNvbXB1dGVyQm9hcmQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2soY29sLCByb3cpKTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tQbGF5ZXJCb2FyZCA9IChwbGF5ZXJCb2FyZCkgPT4ge1xuICAgIGxldCBjb2wgPSBNYXRoLmZsb29yKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcblxuICAgIHdoaWxlIChcbiAgICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soY29sLCByb3cpID09PSBcIllvdSBjYW50IGF0dGFjayB0aGUgc2FtZSBzcG90XCJcbiAgICApIHtcbiAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2VBbGxTaGlwc1JhbmRvbWx5ID0gKCkgPT4ge1xuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgxLCAwLCBjYXJyaWVyLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgd2hpbGUgKCFjYXJyaWVyLmlzUGxhY2VkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBSYW5kb21seShjYXJyaWVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMSwgMCwgY2FycmllckFJLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgd2hpbGUgKCFjYXJyaWVyQUkuaXNQbGFjZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwUmFuZG9tbHkoY2FycmllckFJKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDMsIGJhdHRsZVNoaXAsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHdoaWxlICghYmF0dGxlU2hpcC5pc1BsYWNlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwUmFuZG9tbHkoYmF0dGxlU2hpcCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIChcIkludmFsaWQgc2hpcCBwbGFjZW1lbnRcIik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDMsIGJhdHRsZVNoaXAsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHdoaWxlICghYmF0dGxlU2hpcEFJLmlzUGxhY2VkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcFJhbmRvbWx5KGJhdHRsZVNoaXBBSSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIChcIkludmFsaWQgc2hpcCBwbGFjZW1lbnRcIik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgzLCA1LCBkZXN0cm95ZXIsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHdoaWxlICghZGVzdHJveWVyLmlzUGxhY2VkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBSYW5kb21seShkZXN0cm95ZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAoXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50XCIpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgzLCA1LCBkZXN0cm95ZXJBSSwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgd2hpbGUgKCFkZXN0cm95ZXJBSS5pc1BsYWNlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXBSYW5kb21seShkZXN0cm95ZXJBSSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIChcIkludmFsaWQgc2hpcCBwbGFjZW1lbnRcIik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgyLCA0LCBzdWJNYXJpbmUsIFwidmVydGljYWxcIik7XG5cbiAgICB3aGlsZSAoIXN1Yk1hcmluZS5pc1BsYWNlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwUmFuZG9tbHkoc3ViTWFyaW5lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMiwgNCwgc3ViTWFyaW5lQUksIFwidmVydGljYWxcIik7XG5cbiAgICB3aGlsZSAoIXN1Yk1hcmluZUFJLmlzUGxhY2VkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcFJhbmRvbWx5KHN1Yk1hcmluZUFJKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDgsIDIsIHBhdHJvbEJvYXQsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHdoaWxlICghcGF0cm9sQm9hdC5pc1BsYWNlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwUmFuZG9tbHkocGF0cm9sQm9hdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIChcIkludmFsaWQgc2hpcCBwbGFjZW1lbnRcIik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDgsIDIsIHBhdHJvbEJvYXRBSSwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgd2hpbGUgKCFwYXRyb2xCb2F0QUkuaXNQbGFjZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwUmFuZG9tbHkocGF0cm9sQm9hdEFJKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2Fycmllci5pc1BsYWNlZCAmJlxuICAgICAgY2FycmllckFJLmlzUGxhY2VkICYmXG4gICAgICBiYXR0bGVTaGlwLmlzUGxhY2VkICYmXG4gICAgICBiYXR0bGVTaGlwQUkuaXNQbGFjZWQgJiZcbiAgICAgIGRlc3Ryb3llci5pc1BsYWNlZCAmJlxuICAgICAgZGVzdHJveWVyQUkuaXNQbGFjZWQgJiZcbiAgICAgIHN1Yk1hcmluZS5pc1BsYWNlZCAmJlxuICAgICAgc3ViTWFyaW5lQUkuaXNQbGFjZWQgJiZcbiAgICAgIHBhdHJvbEJvYXQuaXNQbGFjZWQgJiZcbiAgICAgIHBhdHJvbEJvYXRBSS5pc1BsYWNlZFxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnYW1lTG9vcCA9IChjb2wsIHJvdykgPT4ge1xuICAgIGF0dGFja0NvbXB1dGVyQm9hcmQoY29sLCByb3csIGNvbXB1dGVyQm9hcmQsIGdldEZpcnN0UGxheWVyKCkpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wcmludEJvYXJkKCk7XG5cbiAgICBwbGF5ZXJCb2FyZC5taXNzZWRBdHRhY2tzUGxheWVyKGNvbXB1dGVyQm9hcmQpO1xuXG4gICAgaWYgKHBsYXllckJvYXJkLmNoZWNrRm9yV2luKGNvbXB1dGVyQm9hcmQpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhnZXRQbGF5ZXIoKSwgXCJ3b24hXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaFBsYXllcnNUdXJucygpO1xuXG4gICAgYXR0YWNrUGxheWVyQm9hcmQocGxheWVyQm9hcmQpO1xuXG4gICAgLy8gcGxheWVyQm9hcmQucHJpbnRCb2FyZCgpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5taXNzZWRBdHRhY2tzQ29tcHV0ZXIocGxheWVyQm9hcmQpO1xuXG4gICAgaWYgKGNvbXB1dGVyQm9hcmQuY2hlY2tGb3JXaW4ocGxheWVyQm9hcmQpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhnZXRDb21wdXRlcigpLm5hbWUsIFwid29uIVwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBQbGF5ZXIsXG4gICAgcGxhY2VBbGxTaGlwc1JhbmRvbWx5LFxuICAgIHNldFBsYXllcixcbiAgICBzZXRGaXJzdFBsYXllcixcbiAgICBnZXRQbGF5ZXIsXG4gICAgZ2V0Q29tcHV0ZXIsXG4gICAgc3dpdGNoUGxheWVyc1R1cm5zLFxuICAgIGF0dGFja0NvbXB1dGVyQm9hcmQsXG4gICAgYXR0YWNrUGxheWVyQm9hcmQsXG4gICAgZ2V0Rmlyc3RQbGF5ZXIsXG4gICAgZ2FtZUxvb3AsXG4gIH07XG59KSgpO1xuXG5leHBvcnQge1xuICBiYXR0bGVTaGlwR2FtZSxcbiAgcGxheWVyQm9hcmQsXG4gIGNvbXB1dGVyQm9hcmQsXG4gIGNhcnJpZXIsXG4gIGNhcnJpZXJBSSxcbiAgYmF0dGxlU2hpcCxcbiAgYmF0dGxlU2hpcEFJLFxuICBkZXN0cm95ZXIsXG4gIGRlc3Ryb3llckFJLFxuICBzdWJNYXJpbmUsXG4gIHN1Yk1hcmluZUFJLFxuICBwYXRyb2xCb2F0LFxuICBwYXRyb2xCb2F0QUksXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuY29uc3QgYmF0dGxlU2hpcEJvYXJkID0gKCgpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbHMgPSAxMDtcbiAgICBjb25zdCByb3dzID0gMTA7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcblxuICAgIGxldCBzYXZlU2hpcHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSArPSAxKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqICs9IDEpIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBcIlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQ2VsbEF2YWlsYWJsZSA9IChjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBzaGlwQXJyYXkucHVzaChib2FyZFtjb2wgKyBpXVtyb3ddKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHNoaXBBcnJheS5wdXNoKGJvYXJkW2NvbF1bcm93ICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hpcEFycmF5LmV2ZXJ5KChjZWxsKSA9PiBjZWxsID09PSBcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvbCwgcm93LCBzaGlwLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXNDZWxsQXZhaWxhYmxlKGNvbCwgcm93LCBzaGlwLCBkaXJlY3Rpb24pID09PSB0cnVlICYmXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbY29sICsgaV1bcm93XSA9IHNoaXA7XG4gICAgICAgICAgc2hpcC5pc1BsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSAmJlxuICAgICAgICBkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbY29sXVtyb3cgKyBpXSA9IHNoaXA7XG4gICAgICAgICAgc2hpcC5pc1BsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50XCIpO1xuICAgICAgfVxuICAgICAgc2F2ZVNoaXBzLnB1c2goc2hpcCk7XG4gICAgICByZXR1cm4gYm9hcmRbY29sXVtyb3ddO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGFjZVNoaXBSYW5kb21seSA9IChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICBjb25zdCBzaGlwRGlyZWN0aW9uID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdO1xuICAgICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hpcERpcmVjdGlvbi5sZW5ndGgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gc2hpcERpcmVjdGlvbltyYW5kb21EaXJlY3Rpb25dO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSAmJlxuICAgICAgICBkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIlxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2NvbCArIGldW3Jvd10gPSBzaGlwO1xuICAgICAgICAgIHNoaXAuaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBpc0NlbGxBdmFpbGFibGUoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT09IHRydWUgJiZcbiAgICAgICAgZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIlxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2NvbF1bcm93ICsgaV0gPSBzaGlwO1xuICAgICAgICAgIHNoaXAuaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFpc0NlbGxBdmFpbGFibGUoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgIH1cbiAgICAgIHNhdmVTaGlwcy5wdXNoKHNoaXApO1xuICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IHByaW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgICBib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGwpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29sLCByb3cpID0+IHtcbiAgICAgIGNvbnN0IGJvYXJkU3BvdCA9IGJvYXJkW2NvbF1bcm93XTtcblxuICAgICAgaWYgKGJvYXJkW2NvbF1bcm93XSA9PT0gXCJcIikge1xuICAgICAgICBib2FyZFtjb2xdW3Jvd10gPSBcIk1cIjtcbiAgICAgICAgcmV0dXJuIFwiTWlzc1wiO1xuICAgICAgfVxuXG4gICAgICBpZiAoYm9hcmRbY29sXVtyb3ddICE9PSBcIkhcIiAmJiBib2FyZFtjb2xdW3Jvd10gIT09IFwiTVwiKSB7XG4gICAgICAgIGJvYXJkW2NvbF1bcm93XSA9IFwiSFwiO1xuICAgICAgICByZXR1cm4gYm9hcmRTcG90LmhpdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiWW91IGNhbnQgaGl0IHRoZSBzYW1lIHNwb3RcIjtcbiAgICB9O1xuXG4gICAgY29uc3QgbWlzc2VkQXR0YWNrc1BsYXllciA9IChjb21wdXRlckJvYXJkKSA9PiB7XG4gICAgICBjb25zdCBnZXRCb2FyZENvcHkgPSBjb21wdXRlckJvYXJkLmJvYXJkO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZE1pc3NlZEF0dGFja3MgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRCb2FyZENvcHkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgcmV0cmlldmVNaXNzZWRBdHRhY2tzID0gZ2V0Qm9hcmRDb3B5W2ldLmZpbHRlcihcbiAgICAgICAgICAoYXR0YWNrKSA9PiBhdHRhY2sgPT09IFwiTVwiXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZXRyaWV2ZU1pc3NlZEF0dGFja3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgZmlsdGVyZWRNaXNzZWRBdHRhY2tzLnB1c2gocmV0cmlldmVNaXNzZWRBdHRhY2tzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbHRlcmVkTWlzc2VkQXR0YWNrcztcbiAgICB9O1xuXG4gICAgY29uc3QgbWlzc2VkQXR0YWNrc0NvbXB1dGVyID0gKHBsYXllckJvYXJkKSA9PiB7XG4gICAgICBjb25zdCBnZXRCb2FyZENvcHkgPSBwbGF5ZXJCb2FyZC5ib2FyZDtcblxuICAgICAgY29uc3QgZmlsdGVyZWRNaXNzZWRBdHRhY2tzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0Qm9hcmRDb3B5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHJldHJpZXZlTWlzc2VkQXR0YWNrcyA9IGdldEJvYXJkQ29weVtpXS5maWx0ZXIoXG4gICAgICAgICAgKGF0dGFjaykgPT4gYXR0YWNrID09PSBcIk1cIlxuICAgICAgICApO1xuICAgICAgICBpZiAocmV0cmlldmVNaXNzZWRBdHRhY2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGZpbHRlcmVkTWlzc2VkQXR0YWNrcy5wdXNoKHJldHJpZXZlTWlzc2VkQXR0YWNrcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWx0ZXJlZE1pc3NlZEF0dGFja3M7XG4gICAgfTtcblxuICAgIGNvbnN0IGFyZUFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICAgIGxldCBzdW5rU2hpcHMgPSAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhdmVTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwiY2FycmllclwiICYmIHNhdmVTaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHNhdmVTaGlwc1tpXS5uYW1lID09PSBcImJhdHRsZVNoaXBcIiAmJlxuICAgICAgICAgIHNhdmVTaGlwc1tpXS5pc1N1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChzYXZlU2hpcHNbaV0ubmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiBzYXZlU2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChzYXZlU2hpcHNbaV0ubmFtZSA9PT0gXCJzdWJNYXJpbmVcIiAmJiBzYXZlU2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBzYXZlU2hpcHNbaV0ubmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIgJiZcbiAgICAgICAgICBzYXZlU2hpcHNbaV0uaXNTdW5rKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdW5rU2hpcHMgPT09IDUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrRm9yV2luID0gKGNvbXB1dGVyQm9hcmQpID0+IHtcbiAgICAgIGlmIChjb21wdXRlckJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjaGVja0ZvcldpbkFJID0gKHBsYXllckJvYXJkKSA9PiB7XG4gICAgICBpZiAocGxheWVyQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNsZWFyQm9hcmQgPSAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHM7IGkgKz0gMSkge1xuICAgICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3M7IGogKz0gMSkge1xuICAgICAgICAgIGlmIChib2FyZFtpXVtqXSAhPT0gXCJcIikge1xuICAgICAgICAgICAgYm9hcmRbaV1bal0gPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjbGVhclNhdmVTaGlwc0FycmF5ID0gKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNhdmVTaGlwc1tpXS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBzYXZlU2hpcHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0IGJvYXJkKCkge1xuICAgICAgICByZXR1cm4gWy4uLmJvYXJkXTtcbiAgICAgIH0sXG4gICAgICBpc0NlbGxBdmFpbGFibGUsXG4gICAgICBwbGFjZVNoaXAsXG4gICAgICBwbGFjZVNoaXBSYW5kb21seSxcbiAgICAgIHByaW50Qm9hcmQsXG4gICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgbWlzc2VkQXR0YWNrc1BsYXllcixcbiAgICAgIG1pc3NlZEF0dGFja3NDb21wdXRlcixcbiAgICAgIGFyZUFsbFNoaXBzU3VuayxcbiAgICAgIGNoZWNrRm9yV2luLFxuICAgICAgY2hlY2tGb3JXaW5BSSxcbiAgICAgIGNsZWFyQm9hcmQsXG4gICAgICBjbGVhclNhdmVTaGlwc0FycmF5LFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lQm9hcmQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBiYXR0bGVTaGlwQm9hcmQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5jb25zdCByYW5kb21VVUlEID0gZnVuY3Rpb24gYihhKSB7XG4gIHJldHVybiBhXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgKGEgXiAoKE1hdGgucmFuZG9tKCkgKiAxNikgPj4gKGEgLyA0KSkpLnRvU3RyaW5nKDE2KVxuICAgIDogKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIGIpO1xufTtcblxuY29uc3QgYmF0dGxlU2hpcExvZ2ljID0gKCgpID0+IHtcbiAgY29uc3QgU2hpcCA9IChcbiAgICBuYW1lLFxuICAgIGxlbmd0aCxcbiAgICBudW1iZXJPZkhpdHMsXG4gICAgaXNTaGlwU3VuayxcbiAgICBpc1BsYWNlZCxcbiAgICBpZCA9IHJhbmRvbVVVSUQoKVxuICApID0+IHtcbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzaGlwVGFraW5nSGl0ID0gbnVtYmVyT2ZIaXRzKys7XG5cbiAgICAgIGlmIChzaGlwVGFraW5nSGl0ID49IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gXCJUaGUgc2hpcCwgY2Fubm90IGJlIGhpdCBhbnltb3JlIVwiO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYFNoaXAgJHtuYW1lfSBnb3QgaGl0YCk7XG5cbiAgICAgIHJldHVybiB7IG51bWJlck9mSGl0cyB9O1xuICAgIH07XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICBpZiAobmFtZSA9PT0gXCJjYXJyaWVyXCIgJiYgbGVuZ3RoID09PSA1ICYmIG51bWJlck9mSGl0cyA9PT0gNSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhcnJpZXIgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUgPT09IFwiYmF0dGxlU2hpcFwiICYmIGxlbmd0aCA9PT0gNCAmJiBudW1iZXJPZkhpdHMgPT09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCYXR0bGVzaGlwIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgbGVuZ3RoID09PSAzICYmIG51bWJlck9mSGl0cyA9PT0gMykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRlc3Ryb3llciBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBcInN1Yk1hcmluZVwiICYmIGxlbmd0aCA9PT0gMyAmJiBudW1iZXJPZkhpdHMgPT09IDMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWJtYXJpbmUgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIgJiYgbGVuZ3RoID09PSAyICYmIG51bWJlck9mSGl0cyA9PT0gMikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdHJvbEJvYXQgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldE51bWJlck9mSGl0cyA9ICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgKG5hbWUgPT09IFwiY2FycmllclwiICYmIG51bWJlck9mSGl0cyA9PT0gNSAmJiBsZW5ndGggPT09IDUpIHx8XG4gICAgICAgIChuYW1lID09PSBcImNhcnJpZXJcIiAmJiBudW1iZXJPZkhpdHMgPiAwICYmIGxlbmd0aCA9PT0gNSlcbiAgICAgICkge1xuICAgICAgICBudW1iZXJPZkhpdHMgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChuYW1lID09PSBcImJhdHRsZVNoaXBcIiAmJiBudW1iZXJPZkhpdHMgPT09IDQpIHx8XG4gICAgICAgIChuYW1lID09PSBcImJhdHRsZVNoaXBcIiAmJiBudW1iZXJPZkhpdHMgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIG51bWJlck9mSGl0cyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB8fFxuICAgICAgICAobmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiBudW1iZXJPZkhpdHMgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIG51bWJlck9mSGl0cyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG5hbWUgPT09IFwic3ViTWFyaW5lXCIgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB8fFxuICAgICAgICAobmFtZSA9PT0gXCJzdWJNYXJpbmVcIiAmJiBudW1iZXJPZkhpdHMgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIG51bWJlck9mSGl0cyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIG51bWJlck9mSGl0cyA9PT0gMikgfHxcbiAgICAgICAgKG5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIG51bWJlck9mSGl0cyA+IDApXG4gICAgICApIHtcbiAgICAgICAgbnVtYmVyT2ZIaXRzID0gMDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH0sXG4gICAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIGdldCBudW1iZXJPZkhpdHMoKSB7XG4gICAgICAgIHJldHVybiBudW1iZXJPZkhpdHM7XG4gICAgICB9LFxuICAgICAgc2V0IG51bWJlck9mSGl0cyh2YWx1ZSkge1xuICAgICAgICBudW1iZXJPZkhpdHMgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBnZXQgaXNTaGlwU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIGlzU2hpcFN1bms7XG4gICAgICB9LFxuICAgICAgc2V0IGlzU2hpcFN1bmsodmFsdWUpIHtcbiAgICAgICAgaXNTaGlwU3VuayA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGdldCBpc1BsYWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIGlzUGxhY2VkO1xuICAgICAgfSxcbiAgICAgIHNldCBpc1BsYWNlZCh2YWx1ZSkge1xuICAgICAgICBpc1BsYWNlZCA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfSxcbiAgICAgIGhpdCxcbiAgICAgIGlzU3VuayxcbiAgICAgIHJlc2V0TnVtYmVyT2ZIaXRzLFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBTaGlwLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgYmF0dGxlU2hpcExvZ2ljIH07XG4iLCJpbXBvcnQge1xuICBiYXR0bGVTaGlwR2FtZSxcbiAgcGxheWVyQm9hcmQsXG4gIGNvbXB1dGVyQm9hcmQsXG4gIGNhcnJpZXIsXG4gIGNhcnJpZXJBSSxcbiAgYmF0dGxlU2hpcCxcbiAgYmF0dGxlU2hpcEFJLFxuICBkZXN0cm95ZXIsXG4gIGRlc3Ryb3llckFJLFxuICBzdWJNYXJpbmUsXG4gIHN1Yk1hcmluZUFJLFxuICBwYXRyb2xCb2F0LFxuICBwYXRyb2xCb2F0QUksXG59IGZyb20gXCIuLi9Db250cm9sbGVyL1BsYXllclwiO1xuXG5jb25zdCBiYXR0bGVTaGlwSW50ZXJmYWNlID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0UGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKTtcblxuICBjb25zdCBnZXRDb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcblxuICBjb25zdCBwbGF5ZXJOYW1lSW5mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1pbmZvcm1hdGlvblwiKTtcblxuICBjb25zdCBtYWluRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaWFsb2dcIik7XG5cbiAgY29uc3QgZGlzcGxheVdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS13aW5uZXJcIik7XG5cbiAgY29uc3Qgc2hvd1dpbm5lckRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLWRpYWxvZ1wiKTtcblxuICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXktYWdhaW5cIik7XG5cbiAgY29uc3QgcGxheWVyQ2FycmllclN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWNhcnJpZXItc3RhdHVzXCIpO1xuXG4gIGNvbnN0IHBsYXllckJhdHRsZXNoaXBTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnBsYXllci1iYXR0bGVzaGlwLXN0YXR1c1wiXG4gICk7XG5cbiAgY29uc3QgcGxheWVyRGVzdHJveWVyU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wbGF5ZXItZGVzdHJveWVyLXN0YXR1c1wiXG4gICk7XG5cbiAgY29uc3QgcGxheWVyU3VibWFyaW5lU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wbGF5ZXItc3VibWFyaW5lLXN0YXR1c1wiXG4gICk7XG5cbiAgY29uc3QgcGxheWVyUGF0cm9sQm9hdFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIucGxheWVyLXBhdHJvbGJvYXQtc3RhdHVzXCJcbiAgKTtcblxuICBjb25zdCBjb21wdXRlckNhcnJpZXJTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbXB1dGVyLWNhcnJpZXItc3RhdHVzXCJcbiAgKTtcblxuICBjb25zdCBjb21wdXRlckJhdHRsZXNoaXBTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbXB1dGVyLWJhdHRsZXNoaXAtc3RhdHVzXCJcbiAgKTtcblxuICBjb25zdCBjb21wdXRlckRlc3Ryb3llclN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY29tcHV0ZXItZGVzdHJveWVyLXN0YXR1c1wiXG4gICk7XG5cbiAgY29uc3QgY29tcHV0ZXJTdWJtYXJpbmVTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbXB1dGVyLXN1Ym1hcmluZS1zdGF0dXNcIlxuICApO1xuXG4gIGNvbnN0IGNvbXB1dGVyUGF0cm9sQm9hdFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY29tcHV0ZXItcGF0cm9sYm9hdC1zdGF0dXNcIlxuICApO1xuXG4gIC8vIHNob3cgdGhlIGRpYWxvZ1xuICBtYWluRGlhbG9nLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgdHJ1ZSk7XG5cbiAgLy8gcHJldmVudCBmcm9tIGNsaWNraW5nIG9uIHRoZSBib2FyZHMsIHdoZW4gdGhlIHBsYXllciBpcyBub3QgZXZlbiBjcmVhdGVkXG4gIGdldFBsYXllckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgZ2V0Q29tcHV0ZXJCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cbiAgY29uc3QgcmVzZXRGb3JtID0gKCkgPT4ge1xuICAgIHBsYXllck5hbWVJbmZvcm1hdGlvbi5yZXNldCgpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVBsYXllciA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItbmFtZS1pbnB1dFwiKS52YWx1ZTtcbiAgICBiYXR0bGVTaGlwR2FtZS5zZXRQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgYmF0dGxlU2hpcEdhbWUuc2V0Rmlyc3RQbGF5ZXIoKTtcbiAgfTtcblxuICBwbGF5ZXJOYW1lSW5mb3JtYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjcmVhdGVQbGF5ZXIoKTtcbiAgICBiYXR0bGVTaGlwR2FtZS5nZXRQbGF5ZXIoKTtcbiAgICAvLyBhbGxvdyB0byBjbGljayBvbiB0aGUgYm9hcmQgYWZ0ZXIgdGhlIHBsYXllciBvYmplY3QgaXMgY3JlYXRlZFxuICAgIGdldFBsYXllckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgICBnZXRDb21wdXRlckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgICByZXNldEZvcm0oKTtcbiAgfSk7XG5cbiAgY29uc3QgcmVuZGVyUGxheWVyQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29scyA9IDEwO1xuICAgIGNvbnN0IHJvd3MgPSAxMDtcblxuICAgIGdldFBsYXllckJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3M7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiLCBpKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCBqKTtcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmJvYXJkW2ldW2pdLm5hbWUgPT09IFwiY2FycmllclwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicmVuZGVyLXNoaXBzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW2ldW2pdLm5hbWUgPT09IFwiYmF0dGxlU2hpcFwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicmVuZGVyLXNoaXBzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW2ldW2pdLm5hbWUgPT09IFwiZGVzdHJveWVyXCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJyZW5kZXItc2hpcHNcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0ubmFtZSA9PT0gXCJzdWJNYXJpbmVcIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInJlbmRlci1zaGlwc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXVtqXS5uYW1lID09PSBcInBhdHJvbEJvYXRcIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInJlbmRlci1zaGlwc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXVtqXSA9PT0gXCJNXCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWQtYXR0YWNrc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXVtqXSA9PT0gXCJIXCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWF0dGFja3NcIik7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlY2xhcmVQbGF5ZXJXaW5uZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXllckJvYXJkLmNoZWNrRm9yV2luKGNvbXB1dGVyQm9hcmQpKSB7XG4gICAgICBkaXNwbGF5V2lubmVyLnRleHRDb250ZW50ID0gYCR7YmF0dGxlU2hpcEdhbWUuZ2V0UGxheWVyKCl9IHdvbiFgO1xuICAgICAgc2hvd1dpbm5lckRpYWxvZy5zZXRBdHRyaWJ1dGUoXCJvcGVuXCIsIHRydWUpO1xuICAgICAgZ2V0UGxheWVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgZ2V0Q29tcHV0ZXJCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRPRE86IEZpZ3VyZSBvdXQgYSB3YXkgdG8gcmVuZGVyIHRoZSBmaWx0ZXJlZCBtaXNzZWQgYXR0YWNrc1xuICAvLyB0aGF0IGFyZSBzYXZlZCBpbiBzZXBhcmF0ZSBhcnJheSwgd2hpbGUgdGhlIGF0dGFja3MgYXJlIG9ubHlcbiAgLy8gcmVuZGVyZWQgZnJvbSBhbm90aGVyIGFycmF5ICFcblxuICBjb25zdCByZW5kZXJDb21wdXRlckJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbHMgPSAxMDtcbiAgICBjb25zdCByb3dzID0gMTA7XG5cbiAgICBnZXRDb21wdXRlckJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3M7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiLCBpKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCBqKTtcbiAgICAgICAgaWYgKGNvbXB1dGVyQm9hcmQuYm9hcmRbaV1bal0gPT09IFwiTVwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkLWF0dGFja3NcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZXJCb2FyZC5ib2FyZFtpXVtqXSA9PT0gXCJIXCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWF0dGFja3NcIik7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0Q29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVjbGFyZUNvbXB1dGVyV2lubmVyID0gKCkgPT4ge1xuICAgIGlmIChjb21wdXRlckJvYXJkLmNoZWNrRm9yV2luKHBsYXllckJvYXJkKSkge1xuICAgICAgZGlzcGxheVdpbm5lci50ZXh0Q29udGVudCA9IGAke2JhdHRsZVNoaXBHYW1lLmdldENvbXB1dGVyKCkubmFtZX0gd29uIWA7XG4gICAgICBzaG93V2lubmVyRGlhbG9nLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgdHJ1ZSk7XG4gICAgICBnZXRQbGF5ZXJCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICBnZXRDb21wdXRlckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2hpcHNQbGFjZWRQcm9wZXJ0eSA9ICgpID0+IHtcbiAgICBpZiAoY2Fycmllci5pc1BsYWNlZCkge1xuICAgICAgcGxheWVyQ2FycmllclN0YXR1cy50ZXh0Q29udGVudCA9IFwiUGxhY2VkXCI7XG4gICAgfVxuXG4gICAgaWYgKGNhcnJpZXJBSS5pc1BsYWNlZCkge1xuICAgICAgY29tcHV0ZXJDYXJyaWVyU3RhdHVzLnRleHRDb250ZW50ID0gXCJQbGFjZWRcIjtcbiAgICB9XG5cbiAgICBpZiAoYmF0dGxlU2hpcC5pc1BsYWNlZCkge1xuICAgICAgcGxheWVyQmF0dGxlc2hpcFN0YXR1cy50ZXh0Q29udGVudCA9IFwiUGxhY2VkXCI7XG4gICAgfVxuXG4gICAgaWYgKGJhdHRsZVNoaXBBSS5pc1BsYWNlZCkge1xuICAgICAgY29tcHV0ZXJCYXR0bGVzaGlwU3RhdHVzLnRleHRDb250ZW50ID0gXCJQbGFjZWRcIjtcbiAgICB9XG5cbiAgICBpZiAoZGVzdHJveWVyLmlzUGxhY2VkKSB7XG4gICAgICBwbGF5ZXJEZXN0cm95ZXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIlBsYWNlZFwiO1xuICAgIH1cblxuICAgIGlmIChkZXN0cm95ZXJBSS5pc1BsYWNlZCkge1xuICAgICAgY29tcHV0ZXJEZXN0cm95ZXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIlBsYWNlZFwiO1xuICAgIH1cblxuICAgIGlmIChzdWJNYXJpbmUuaXNQbGFjZWQpIHtcbiAgICAgIHBsYXllclN1Ym1hcmluZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiUGxhY2VkXCI7XG4gICAgfVxuXG4gICAgaWYgKHN1Yk1hcmluZUFJLmlzUGxhY2VkKSB7XG4gICAgICBjb21wdXRlclN1Ym1hcmluZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiUGxhY2VkXCI7XG4gICAgfVxuXG4gICAgaWYgKHBhdHJvbEJvYXQuaXNQbGFjZWQpIHtcbiAgICAgIHBsYXllclBhdHJvbEJvYXRTdGF0dXMudGV4dENvbnRlbnQgPSBcIlBsYWNlZFwiO1xuICAgIH1cblxuICAgIGlmIChwYXRyb2xCb2F0QUkuaXNQbGFjZWQpIHtcbiAgICAgIGNvbXB1dGVyUGF0cm9sQm9hdFN0YXR1cy50ZXh0Q29udGVudCA9IFwiUGxhY2VkXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNoaXBzU3Vua1Byb3BlcnR5ID0gKCkgPT4ge1xuICAgIGlmIChjYXJyaWVyLmlzU3VuaygpKSB7XG4gICAgICBwbGF5ZXJDYXJyaWVyU3RhdHVzLnRleHRDb250ZW50ID0gXCJTdW5rXCI7XG4gICAgfVxuXG4gICAgaWYgKGNhcnJpZXJBSS5pc1N1bmsoKSkge1xuICAgICAgY29tcHV0ZXJDYXJyaWVyU3RhdHVzLnRleHRDb250ZW50ID0gXCJTdW5rXCI7XG4gICAgfVxuXG4gICAgaWYgKGJhdHRsZVNoaXAuaXNTdW5rKCkpIHtcbiAgICAgIHBsYXllckJhdHRsZXNoaXBTdGF0dXMudGV4dENvbnRlbnQgPSBcIlN1bmtcIjtcbiAgICB9XG5cbiAgICBpZiAoYmF0dGxlU2hpcEFJLmlzU3VuaygpKSB7XG4gICAgICBjb21wdXRlckJhdHRsZXNoaXBTdGF0dXMudGV4dENvbnRlbnQgPSBcIlN1bmtcIjtcbiAgICB9XG5cbiAgICBpZiAoZGVzdHJveWVyLmlzU3VuaygpKSB7XG4gICAgICBwbGF5ZXJEZXN0cm95ZXJTdGF0dXMudGV4dENvbnRlbnQgPSBcIlN1bmtcIjtcbiAgICB9XG5cbiAgICBpZiAoZGVzdHJveWVyQUkuaXNTdW5rKCkpIHtcbiAgICAgIGNvbXB1dGVyRGVzdHJveWVyU3RhdHVzLnRleHRDb250ZW50ID0gXCJTdW5rXCI7XG4gICAgfVxuXG4gICAgaWYgKHN1Yk1hcmluZS5pc1N1bmsoKSkge1xuICAgICAgcGxheWVyU3VibWFyaW5lU3RhdHVzLnRleHRDb250ZW50ID0gXCJTdW5rXCI7XG4gICAgfVxuXG4gICAgaWYgKHN1Yk1hcmluZUFJLmlzU3VuaygpKSB7XG4gICAgICBjb21wdXRlclN1Ym1hcmluZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiU3Vua1wiO1xuICAgIH1cblxuICAgIGlmIChwYXRyb2xCb2F0LmlzU3VuaygpKSB7XG4gICAgICBwbGF5ZXJQYXRyb2xCb2F0U3RhdHVzLnRleHRDb250ZW50ID0gXCJTdW5rXCI7XG4gICAgfVxuXG4gICAgaWYgKHBhdHJvbEJvYXRBSS5pc1N1bmsoKSkge1xuICAgICAgY29tcHV0ZXJQYXRyb2xCb2F0U3RhdHVzLnRleHRDb250ZW50ID0gXCJTdW5rXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsaWNrRXZlbnRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBjb25zdCBjbGlja2VkQ2VsbCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGNvbCA9IGNsaWNrZWRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29sXCIpO1xuICAgIGNvbnN0IHJvdyA9IGNsaWNrZWRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpO1xuICAgIGlmICghY29sICYmICFyb3cpIHJldHVybjtcbiAgICBiYXR0bGVTaGlwR2FtZS5nYW1lTG9vcChjb2wsIHJvdyk7XG4gICAgaGFuZGxlU2hpcHNTdW5rUHJvcGVydHkoKTtcbiAgICByZW5kZXJDb21wdXRlckJvYXJkKCk7XG4gICAgZGVjbGFyZVBsYXllcldpbm5lcigpO1xuICAgIHJlbmRlclBsYXllckJvYXJkKCk7XG4gICAgZGVjbGFyZUNvbXB1dGVyV2lubmVyKCk7XG4gIH07XG5cbiAgcmVuZGVyQ29tcHV0ZXJCb2FyZCgpO1xuXG4gIGdldENvbXB1dGVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrRXZlbnRIYW5kbGVyKTtcblxuICBjb25zdCByZXN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBwbGF5ZXJCb2FyZC5jbGVhckJvYXJkKCk7XG5cbiAgICBjb21wdXRlckJvYXJkLmNsZWFyQm9hcmQoKTtcblxuICAgIHBsYXllckJvYXJkLmNsZWFyU2F2ZVNoaXBzQXJyYXkoKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuY2xlYXJTYXZlU2hpcHNBcnJheSgpO1xuXG4gICAgY2Fycmllci5yZXNldE51bWJlck9mSGl0cygpO1xuXG4gICAgY2FycmllckFJLnJlc2V0TnVtYmVyT2ZIaXRzKCk7XG5cbiAgICBiYXR0bGVTaGlwLnJlc2V0TnVtYmVyT2ZIaXRzKCk7XG5cbiAgICBiYXR0bGVTaGlwQUkucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIGRlc3Ryb3llci5yZXNldE51bWJlck9mSGl0cygpO1xuXG4gICAgZGVzdHJveWVyQUkucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIHN1Yk1hcmluZS5yZXNldE51bWJlck9mSGl0cygpO1xuXG4gICAgc3ViTWFyaW5lQUkucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIHBhdHJvbEJvYXQucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIHBhdHJvbEJvYXRBSS5yZXNldE51bWJlck9mSGl0cygpO1xuXG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIik7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5yZW1vdmUoXCIuY2VsbFwiKTtcbiAgICB9KTtcblxuICAgIGJhdHRsZVNoaXBHYW1lLnBsYWNlQWxsU2hpcHNSYW5kb21seSgpO1xuXG4gICAgaGFuZGxlU2hpcHNQbGFjZWRQcm9wZXJ0eSgpO1xuXG4gICAgcmVuZGVyUGxheWVyQm9hcmQoKTtcblxuICAgIHJlbmRlckNvbXB1dGVyQm9hcmQoKTtcblxuICAgIHNob3dXaW5uZXJEaWFsb2cucmVtb3ZlQXR0cmlidXRlKFwib3BlblwiKTtcbiAgICAvLyBzaG93IHRoZSBkaWFsb2cgYWdhaW4gb24gbmV3IGdhbWVcbiAgICBtYWluRGlhbG9nLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgdHJ1ZSk7XG4gIH07XG5cbiAgcGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXN0YXJ0R2FtZSk7XG5cbiAgcmV0dXJuIHsgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlckNvbXB1dGVyQm9hcmQsIGhhbmRsZVNoaXBzUGxhY2VkUHJvcGVydHkgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGJhdHRsZVNoaXBJbnRlcmZhY2UgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3MDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmhlYWRlci1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tcHV0ZXItYm9hcmQge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRpYWxvZyxcXG4ud2lubmVyLWRpYWxvZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgbGVmdDogNjQwcHg7XFxuICB0b3A6IDE4MHB4O1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRhaW5lci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuXFxuLnBsYXllci1uYW1lLFxcbi5wbGF5ZXItbmFtZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHdpZHRoOiAyMjBweDtcXG59XFxuXFxuLnBsYXllci1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlbmRlci1zaGlwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubWlzc2VkLWF0dGFja3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zaGlwLWF0dGFja3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRpc3BsYXktd2lubmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zcGFjZS1pcy1lbXB0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uc3BhY2UtaXMtbm90LWVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAvKiBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQtc3RhdHVzLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItYm9hcmQtc3RhdHVzLWNvbnRhaW5lciB7XFxuICAvKiBvdXRsaW5lOiAycHggc29saWQgYmx1ZTsgKi9cXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1jYXJyaWVyLFxcbi5wbGF5ZXItc2hpcC1iYXR0bGVzaGlwLFxcbi5wbGF5ZXItc2hpcC1kZXN0cm95ZXIsXFxuLnBsYXllci1zaGlwLXN1Ym1hcmluZSxcXG4ucGxheWVyLXNoaXAtcGF0cm9sYm9hdCxcXG4uY29tcHV0ZXItc2hpcC1jYXJyaWVyLFxcbi5jb21wdXRlci1zaGlwLWJhdHRsZXNoaXAsXFxuLmNvbXB1dGVyLXNoaXAtZGVzdHJveWVyLFxcbi5jb21wdXRlci1zaGlwLXN1Ym1hcmluZSxcXG4uY29tcHV0ZXItc2hpcC1wYXRyb2xib2F0IHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4ucGxheWVyLWNhcnJpZXItc3RhdHVzLWNvbnRhaW5lcixcXG4ucGxheWVyLWJhdHRsZXNoaXAtc3RhdHVzLWNvbnRhaW5lcixcXG4ucGxheWVyLWRlc3Ryb3llci1zdGF0dXMtY29udGFpbmVyLFxcbi5wbGF5ZXItc3VibWFyaW5lLXN0YXR1cy1jb250YWluZXIsXFxuLnBsYXllci1wYXRyb2xib2F0LXN0YXR1cy1jb250YWluZXIsXFxuLmNvbXB1dGVyLWNhcnJpZXItc3RhdHVzLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItYmF0dGxlc2hpcC1zdGF0dXMtY29udGFpbmVyLFxcbi5jb21wdXRlci1kZXN0cm95ZXItc3RhdHVzLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItc3VibWFyaW5lLXN0YXR1cy1jb250YWluZXIsXFxuLmNvbXB1dGVyLXBhdHJvbGJvYXQtc3RhdHVzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7Ozs7Ozs7Ozs7RUFVRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Ozs7Ozs7RUFVRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3MDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmhlYWRlci1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tcHV0ZXItYm9hcmQge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRpYWxvZyxcXG4ud2lubmVyLWRpYWxvZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgbGVmdDogNjQwcHg7XFxuICB0b3A6IDE4MHB4O1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRhaW5lci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuXFxuLnBsYXllci1uYW1lLFxcbi5wbGF5ZXItbmFtZS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHdpZHRoOiAyMjBweDtcXG59XFxuXFxuLnBsYXllci1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlbmRlci1zaGlwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubWlzc2VkLWF0dGFja3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zaGlwLWF0dGFja3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRpc3BsYXktd2lubmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zcGFjZS1pcy1lbXB0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uc3BhY2UtaXMtbm90LWVtcHR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAvKiBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQtc3RhdHVzLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItYm9hcmQtc3RhdHVzLWNvbnRhaW5lciB7XFxuICAvKiBvdXRsaW5lOiAycHggc29saWQgYmx1ZTsgKi9cXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5wbGF5ZXItc2hpcC1jYXJyaWVyLFxcbi5wbGF5ZXItc2hpcC1iYXR0bGVzaGlwLFxcbi5wbGF5ZXItc2hpcC1kZXN0cm95ZXIsXFxuLnBsYXllci1zaGlwLXN1Ym1hcmluZSxcXG4ucGxheWVyLXNoaXAtcGF0cm9sYm9hdCxcXG4uY29tcHV0ZXItc2hpcC1jYXJyaWVyLFxcbi5jb21wdXRlci1zaGlwLWJhdHRsZXNoaXAsXFxuLmNvbXB1dGVyLXNoaXAtZGVzdHJveWVyLFxcbi5jb21wdXRlci1zaGlwLXN1Ym1hcmluZSxcXG4uY29tcHV0ZXItc2hpcC1wYXRyb2xib2F0IHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4ucGxheWVyLWNhcnJpZXItc3RhdHVzLWNvbnRhaW5lcixcXG4ucGxheWVyLWJhdHRsZXNoaXAtc3RhdHVzLWNvbnRhaW5lcixcXG4ucGxheWVyLWRlc3Ryb3llci1zdGF0dXMtY29udGFpbmVyLFxcbi5wbGF5ZXItc3VibWFyaW5lLXN0YXR1cy1jb250YWluZXIsXFxuLnBsYXllci1wYXRyb2xib2F0LXN0YXR1cy1jb250YWluZXIsXFxuLmNvbXB1dGVyLWNhcnJpZXItc3RhdHVzLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItYmF0dGxlc2hpcC1zdGF0dXMtY29udGFpbmVyLFxcbi5jb21wdXRlci1kZXN0cm95ZXItc3RhdHVzLWNvbnRhaW5lcixcXG4uY29tcHV0ZXItc3VibWFyaW5lLXN0YXR1cy1jb250YWluZXIsXFxuLmNvbXB1dGVyLXBhdHJvbGJvYXQtc3RhdHVzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgYmF0dGxlU2hpcEludGVyZmFjZSB9IGZyb20gXCIuL1ZpZXcvSW50ZXJmYWNlXCI7XG5cbmltcG9ydCB7IGJhdHRsZVNoaXBHYW1lIH0gZnJvbSBcIi4vQ29udHJvbGxlci9QbGF5ZXJcIjtcblxuYmF0dGxlU2hpcEdhbWUucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7XG5cbmJhdHRsZVNoaXBJbnRlcmZhY2UucmVuZGVyUGxheWVyQm9hcmQoKTtcblxuYmF0dGxlU2hpcEludGVyZmFjZS5yZW5kZXJDb21wdXRlckJvYXJkKCk7XG5cbmJhdHRsZVNoaXBJbnRlcmZhY2UuaGFuZGxlU2hpcHNQbGFjZWRQcm9wZXJ0eSgpO1xuIl0sIm5hbWVzIjpbImJhdHRsZVNoaXBMb2dpYyIsImJhdHRsZVNoaXBCb2FyZCIsImNhcnJpZXIiLCJTaGlwIiwiY2FycmllckFJIiwiYmF0dGxlU2hpcCIsImJhdHRsZVNoaXBBSSIsImRlc3Ryb3llciIsImRlc3Ryb3llckFJIiwic3ViTWFyaW5lIiwic3ViTWFyaW5lQUkiLCJwYXRyb2xCb2F0IiwicGF0cm9sQm9hdEFJIiwicGxheWVyQm9hcmQiLCJnYW1lQm9hcmQiLCJjb21wdXRlckJvYXJkIiwiYmF0dGxlU2hpcEdhbWUiLCJQbGF5ZXIiLCJuYW1lIiwicGxheWVyIiwiY29tcHV0ZXIiLCJzZXRQbGF5ZXIiLCJmaXJzdFBsYXllciIsInNldEZpcnN0UGxheWVyIiwiZ2V0UGxheWVyIiwiZ2V0Q29tcHV0ZXIiLCJzd2l0Y2hQbGF5ZXJzVHVybnMiLCJnZXRGaXJzdFBsYXllciIsImF0dGFja0NvbXB1dGVyQm9hcmQiLCJjb2wiLCJyb3ciLCJjb25zb2xlIiwibG9nIiwicmVjZWl2ZUF0dGFjayIsImF0dGFja1BsYXllckJvYXJkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxhY2VBbGxTaGlwc1JhbmRvbWx5IiwiaXNDZWxsQXZhaWxhYmxlIiwiaXNQbGFjZWQiLCJwbGFjZVNoaXBSYW5kb21seSIsImdhbWVMb29wIiwicHJpbnRCb2FyZCIsIm1pc3NlZEF0dGFja3NQbGF5ZXIiLCJjaGVja0ZvcldpbiIsIm1pc3NlZEF0dGFja3NDb21wdXRlciIsImNvbHMiLCJyb3dzIiwiYm9hcmQiLCJzYXZlU2hpcHMiLCJpIiwiaiIsInNoaXAiLCJkaXJlY3Rpb24iLCJzaGlwQXJyYXkiLCJsZW5ndGgiLCJwdXNoIiwiZXZlcnkiLCJjZWxsIiwicGxhY2VTaGlwIiwiRXJyb3IiLCJzaGlwRGlyZWN0aW9uIiwicmFuZG9tRGlyZWN0aW9uIiwiZm9yRWFjaCIsImJvYXJkU3BvdCIsImhpdCIsImdldEJvYXJkQ29weSIsImZpbHRlcmVkTWlzc2VkQXR0YWNrcyIsInJldHJpZXZlTWlzc2VkQXR0YWNrcyIsImZpbHRlciIsImF0dGFjayIsImFyZUFsbFNoaXBzU3VuayIsInN1bmtTaGlwcyIsImlzU3VuayIsImNoZWNrRm9yV2luQUkiLCJjbGVhckJvYXJkIiwiY2xlYXJTYXZlU2hpcHNBcnJheSIsInJhbmRvbVVVSUQiLCJiIiwiYSIsInRvU3RyaW5nIiwicmVwbGFjZSIsIm51bWJlck9mSGl0cyIsImlzU2hpcFN1bmsiLCJpZCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInNoaXBUYWtpbmdIaXQiLCJyZXNldE51bWJlck9mSGl0cyIsInZhbHVlIiwiYmF0dGxlU2hpcEludGVyZmFjZSIsImdldFBsYXllckJvYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29tcHV0ZXJCb2FyZCIsInBsYXllck5hbWVJbmZvcm1hdGlvbiIsIm1haW5EaWFsb2ciLCJkaXNwbGF5V2lubmVyIiwic2hvd1dpbm5lckRpYWxvZyIsInBsYXlBZ2FpbkJ1dHRvbiIsInBsYXllckNhcnJpZXJTdGF0dXMiLCJwbGF5ZXJCYXR0bGVzaGlwU3RhdHVzIiwicGxheWVyRGVzdHJveWVyU3RhdHVzIiwicGxheWVyU3VibWFyaW5lU3RhdHVzIiwicGxheWVyUGF0cm9sQm9hdFN0YXR1cyIsImNvbXB1dGVyQ2FycmllclN0YXR1cyIsImNvbXB1dGVyQmF0dGxlc2hpcFN0YXR1cyIsImNvbXB1dGVyRGVzdHJveWVyU3RhdHVzIiwiY29tcHV0ZXJTdWJtYXJpbmVTdGF0dXMiLCJjb21wdXRlclBhdHJvbEJvYXRTdGF0dXMiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJyZXNldEZvcm0iLCJyZXNldCIsImNyZWF0ZVBsYXllciIsInBsYXllck5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlbmRlclBsYXllckJvYXJkIiwidGV4dENvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJkZWNsYXJlUGxheWVyV2lubmVyIiwicmVuZGVyQ29tcHV0ZXJCb2FyZCIsImRlY2xhcmVDb21wdXRlcldpbm5lciIsImhhbmRsZVNoaXBzUGxhY2VkUHJvcGVydHkiLCJoYW5kbGVTaGlwc1N1bmtQcm9wZXJ0eSIsImNsaWNrRXZlbnRIYW5kbGVyIiwiY2xpY2tlZENlbGwiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJyZXN0YXJ0R2FtZSIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=