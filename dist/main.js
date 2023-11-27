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

  // after the the game is started
  // upon creating the player
  // create the player object
  // and the board objects

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
  const placeAllShipsWithHardcodedCoordinates = () => {
    playerBoard.isCellAvailable(1, 0, carrier, "vertical");
    playerBoard.placeShip(1, 0, carrier, "vertical");
    playerBoard.isCellAvailable(1, 3, battleShip, "horizontal");
    playerBoard.placeShip(1, 3, battleShip, "horizontal");
    playerBoard.isCellAvailable(3, 5, destroyer, "horizontal");
    playerBoard.placeShip(3, 5, destroyer, "horizontal");
    playerBoard.isCellAvailable(2, 4, subMarine, "vertical");
    playerBoard.placeShip(2, 4, subMarine, "vertical");
    playerBoard.isCellAvailable(6, 6, patrolBoat, "horizontal");
    playerBoard.placeShip(6, 6, patrolBoat, "horizontal");
    computerBoard.isCellAvailable(1, 0, carrierAI, "vertical");
    computerBoard.placeShip(1, 0, carrierAI, "vertical");
    computerBoard.isCellAvailable(1, 3, battleShipAI, "horizontal");
    computerBoard.placeShip(1, 3, battleShipAI, "horizontal");
    computerBoard.isCellAvailable(3, 5, destroyerAI, "horizontal");
    computerBoard.placeShip(3, 5, destroyerAI, "horizontal");
    computerBoard.isCellAvailable(2, 4, subMarineAI, "vertical");
    computerBoard.placeShip(2, 4, subMarineAI, "vertical");
    computerBoard.isCellAvailable(8, 2, patrolBoatAI, "horizontal");
    computerBoard.placeShip(8, 2, patrolBoatAI, "horizontal");
  };
  const gameLoop = (col, row) => {
    attackComputerBoard(col, row, computerBoard, getFirstPlayer());
    computerBoard.printBoard();
    console.log("Player missed attacks", playerBoard.missedAttacksPlayer(computerBoard));
    if (playerBoard.checkForWin(computerBoard)) {
      // console.log(getPlayer(), "won!");
      return;
    }

    // console.log("Are computer ships sunk", computerBoard.areAllShipsSunk());

    switchPlayersTurns();
    attackPlayerBoard(playerBoard);
    playerBoard.printBoard();
    console.log("Computer missed attacks", computerBoard.missedAttacksComputer(playerBoard));

    // console.log("Are player ships sunk", playerBoard.areAllShipsSunk());

    if (computerBoard.checkForWin(playerBoard)) {
      // console.log(getComputer().name, "won!");
    }
  };
  return {
    Player,
    setPlayer,
    setFirstPlayer,
    getPlayer,
    getComputer,
    switchPlayersTurns,
    attackComputerBoard,
    attackPlayerBoard,
    getFirstPlayer,
    placeAllShipsWithHardcodedCoordinates,
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
  const clickEventHandler = e => {
    const clickedCell = e.target;
    const col = clickedCell.getAttribute("data-col");
    const row = clickedCell.getAttribute("data-row");
    if (!col && !row) return;
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.gameLoop(col, row);
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
    _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.placeAllShipsWithHardcodedCoordinates();
    renderPlayerBoard();
    renderComputerBoard();
    showWinnerDialog.removeAttribute("open");
    // show the dialog again on new game
    mainDialog.setAttribute("open", true);
  };
  playAgainButton.addEventListener("click", restartGame);
  return {
    renderPlayerBoard,
    renderComputerBoard
  };
})();
battleShipInterface.renderPlayerBoard();
battleShipInterface.renderComputerBoard();


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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 700px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 60px;\n}\n\n.header-name {\n  font-size: large;\n}\n\n.player-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n  margin-right: 20px;\n}\n\n.cell {\n  outline: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell:hover {\n  cursor: pointer;\n}\n\n.computer-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n}\n\n.dialog,\n.winner-dialog {\n  position: absolute;\n  width: 250px;\n  height: 250px;\n  left: 640px;\n  top: 250px;\n  outline: 1px solid black;\n}\n\n.dialog-container-wrapper,\n.winner-dialog-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 70px;\n}\n\n.player-name,\n.player-name-input {\n  margin-bottom: 10px;\n}\n\n.instructions-container {\n  padding-top: 10px;\n  padding-left: 30px;\n  padding-right: 20px;\n}\n\n.player-information {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.render-ships {\n  background-color: blue;\n}\n\n.missed-attacks {\n  background-color: green;\n}\n\n.ship-attacks {\n  background-color: red;\n}\n\n.dialog-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 80px;\n}\n\n.play-again {\n  margin-top: 30px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,wBAAwB;AAC1B;;AAEA;;EAEE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,UAAU;EACV,wBAAwB;AAC1B;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 700px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 60px;\n}\n\n.header-name {\n  font-size: large;\n}\n\n.player-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n  margin-right: 20px;\n}\n\n.cell {\n  outline: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell:hover {\n  cursor: pointer;\n}\n\n.computer-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n}\n\n.dialog,\n.winner-dialog {\n  position: absolute;\n  width: 250px;\n  height: 250px;\n  left: 640px;\n  top: 250px;\n  outline: 1px solid black;\n}\n\n.dialog-container-wrapper,\n.winner-dialog-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 70px;\n}\n\n.player-name,\n.player-name-input {\n  margin-bottom: 10px;\n}\n\n.instructions-container {\n  padding-top: 10px;\n  padding-left: 30px;\n  padding-right: 20px;\n}\n\n.player-information {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.render-ships {\n  background-color: blue;\n}\n\n.missed-attacks {\n  background-color: green;\n}\n\n.ship-attacks {\n  background-color: red;\n}\n\n.dialog-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 80px;\n}\n\n.play-again {\n  margin-top: 30px;\n}\n"],"sourceRoot":""}]);
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



_Controller_Player__WEBPACK_IMPORTED_MODULE_2__.battleShipGame.placeAllShipsWithHardcodedCoordinates();
_View_Interface__WEBPACK_IMPORTED_MODULE_1__.battleShipInterface.renderPlayerBoard();
_View_Interface__WEBPACK_IMPORTED_MODULE_1__.battleShipInterface.renderComputerBoard();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBRWtDO0FBRUY7QUFFckRsRyw4REFBYyxDQUFDc0IscUNBQXFDLENBQUMsQ0FBQztBQUV0RGtELGdFQUFtQixDQUFDbUIsaUJBQWlCLENBQUMsQ0FBQztBQUV2Q25CLGdFQUFtQixDQUFDMEIsbUJBQW1CLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Db250cm9sbGVyL1BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL01vZGVsL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL01vZGVsL1NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9WaWV3L0ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmF0dGxlU2hpcExvZ2ljIH0gZnJvbSBcIi4uL01vZGVsL1NoaXBcIjtcblxuaW1wb3J0IHsgYmF0dGxlU2hpcEJvYXJkIH0gZnJvbSBcIi4uL01vZGVsL0dhbWVib2FyZFwiO1xuXG5jb25zdCBjYXJyaWVyID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJjYXJyaWVyXCIsIDUsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGNhcnJpZXJBSSA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiY2FycmllclwiLCA1LCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBiYXR0bGVTaGlwID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJiYXR0bGVTaGlwXCIsIDQsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGJhdHRsZVNoaXBBSSA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiYmF0dGxlU2hpcFwiLCA0LCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBkZXN0cm95ZXIgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcImRlc3Ryb3llclwiLCAzLCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBkZXN0cm95ZXJBSSA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiZGVzdHJveWVyXCIsIDMsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IHN1Yk1hcmluZSA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwic3ViTWFyaW5lXCIsIDMsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IHN1Yk1hcmluZUFJID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJzdWJNYXJpbmVcIiwgMywgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3QgcGF0cm9sQm9hdCA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwicGF0cm9sQm9hdFwiLCAyLCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBwYXRyb2xCb2F0QUkgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcInBhdHJvbEJvYXRcIiwgMiwgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3QgcGxheWVyQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbmNvbnN0IGJhdHRsZVNoaXBHYW1lID0gKCgpID0+IHtcbiAgY29uc3QgUGxheWVyID0gKG5hbWUpID0+IG5hbWU7XG5cbiAgLy8gYWZ0ZXIgdGhlIHRoZSBnYW1lIGlzIHN0YXJ0ZWRcbiAgLy8gdXBvbiBjcmVhdGluZyB0aGUgcGxheWVyXG4gIC8vIGNyZWF0ZSB0aGUgcGxheWVyIG9iamVjdFxuICAvLyBhbmQgdGhlIGJvYXJkIG9iamVjdHNcblxuICBsZXQgcGxheWVyO1xuXG4gIGNvbnN0IGNvbXB1dGVyID0geyBuYW1lOiBcIkNvbXB1dGVyXCIgfTtcblxuICBjb25zdCBzZXRQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIHBsYXllciA9IFBsYXllcihuYW1lKTtcbiAgfTtcblxuICBsZXQgZmlyc3RQbGF5ZXI7XG5cbiAgY29uc3Qgc2V0Rmlyc3RQbGF5ZXIgPSAoKSA9PiB7XG4gICAgZmlyc3RQbGF5ZXIgPSBwbGF5ZXI7XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4gcGxheWVyO1xuXG4gIGNvbnN0IGdldENvbXB1dGVyID0gKCkgPT4gY29tcHV0ZXI7XG5cbiAgY29uc3Qgc3dpdGNoUGxheWVyc1R1cm5zID0gKCkgPT4ge1xuICAgIGZpcnN0UGxheWVyID0gZmlyc3RQbGF5ZXIgPT09IHBsYXllciA/IGNvbXB1dGVyIDogcGxheWVyO1xuICB9O1xuXG4gIGNvbnN0IGdldEZpcnN0UGxheWVyID0gKCkgPT4gZmlyc3RQbGF5ZXI7XG5cbiAgY29uc3QgYXR0YWNrQ29tcHV0ZXJCb2FyZCA9IChjb2wsIHJvdywgY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb2wsIHJvdykpO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1BsYXllckJvYXJkID0gKHBsYXllckJvYXJkKSA9PiB7XG4gICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuXG4gICAgd2hpbGUgKFxuICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb2wsIHJvdykgPT09IFwiWW91IGNhbnQgYXR0YWNrIHRoZSBzYW1lIHNwb3RcIlxuICAgICkge1xuICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZUFsbFNoaXBzV2l0aEhhcmRjb2RlZENvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgxLCAwLCBjYXJyaWVyLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKDEsIDAsIGNhcnJpZXIsIFwidmVydGljYWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMSwgMywgYmF0dGxlU2hpcCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKDEsIDMsIGJhdHRsZVNoaXAsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgzLCA1LCBkZXN0cm95ZXIsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgzLCA1LCBkZXN0cm95ZXIsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgyLCA0LCBzdWJNYXJpbmUsIFwidmVydGljYWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMiwgNCwgc3ViTWFyaW5lLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDYsIDYsIHBhdHJvbEJvYXQsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCg2LCA2LCBwYXRyb2xCb2F0LCBcImhvcml6b250YWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgxLCAwLCBjYXJyaWVyQUksIFwidmVydGljYWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgxLCAwLCBjYXJyaWVyQUksIFwidmVydGljYWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgxLCAzLCBiYXR0bGVTaGlwQUksIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDEsIDMsIGJhdHRsZVNoaXBBSSwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMywgNSwgZGVzdHJveWVyQUksIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDMsIDUsIGRlc3Ryb3llckFJLCBcImhvcml6b250YWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgyLCA0LCBzdWJNYXJpbmVBSSwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDIsIDQsIHN1Yk1hcmluZUFJLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoOCwgMiwgcGF0cm9sQm9hdEFJLCBcImhvcml6b250YWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCg4LCAyLCBwYXRyb2xCb2F0QUksIFwiaG9yaXpvbnRhbFwiKTtcbiAgfTtcblxuICBjb25zdCBnYW1lTG9vcCA9IChjb2wsIHJvdykgPT4ge1xuICAgIGF0dGFja0NvbXB1dGVyQm9hcmQoY29sLCByb3csIGNvbXB1dGVyQm9hcmQsIGdldEZpcnN0UGxheWVyKCkpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wcmludEJvYXJkKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiUGxheWVyIG1pc3NlZCBhdHRhY2tzXCIsXG4gICAgICBwbGF5ZXJCb2FyZC5taXNzZWRBdHRhY2tzUGxheWVyKGNvbXB1dGVyQm9hcmQpXG4gICAgKTtcblxuICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja0Zvcldpbihjb21wdXRlckJvYXJkKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coZ2V0UGxheWVyKCksIFwid29uIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIkFyZSBjb21wdXRlciBzaGlwcyBzdW5rXCIsIGNvbXB1dGVyQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpO1xuXG4gICAgc3dpdGNoUGxheWVyc1R1cm5zKCk7XG5cbiAgICBhdHRhY2tQbGF5ZXJCb2FyZChwbGF5ZXJCb2FyZCk7XG5cbiAgICBwbGF5ZXJCb2FyZC5wcmludEJvYXJkKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiQ29tcHV0ZXIgbWlzc2VkIGF0dGFja3NcIixcbiAgICAgIGNvbXB1dGVyQm9hcmQubWlzc2VkQXR0YWNrc0NvbXB1dGVyKHBsYXllckJvYXJkKVxuICAgICk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIkFyZSBwbGF5ZXIgc2hpcHMgc3Vua1wiLCBwbGF5ZXJCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSk7XG5cbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5jaGVja0ZvcldpbihwbGF5ZXJCb2FyZCkpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdldENvbXB1dGVyKCkubmFtZSwgXCJ3b24hXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIFBsYXllcixcbiAgICBzZXRQbGF5ZXIsXG4gICAgc2V0Rmlyc3RQbGF5ZXIsXG4gICAgZ2V0UGxheWVyLFxuICAgIGdldENvbXB1dGVyLFxuICAgIHN3aXRjaFBsYXllcnNUdXJucyxcbiAgICBhdHRhY2tDb21wdXRlckJvYXJkLFxuICAgIGF0dGFja1BsYXllckJvYXJkLFxuICAgIGdldEZpcnN0UGxheWVyLFxuICAgIHBsYWNlQWxsU2hpcHNXaXRoSGFyZGNvZGVkQ29vcmRpbmF0ZXMsXG4gICAgZ2FtZUxvb3AsXG4gIH07XG59KSgpO1xuXG5leHBvcnQge1xuICBiYXR0bGVTaGlwR2FtZSxcbiAgcGxheWVyQm9hcmQsXG4gIGNvbXB1dGVyQm9hcmQsXG4gIGNhcnJpZXIsXG4gIGNhcnJpZXJBSSxcbiAgYmF0dGxlU2hpcCxcbiAgYmF0dGxlU2hpcEFJLFxuICBkZXN0cm95ZXIsXG4gIGRlc3Ryb3llckFJLFxuICBzdWJNYXJpbmUsXG4gIHN1Yk1hcmluZUFJLFxuICBwYXRyb2xCb2F0LFxuICBwYXRyb2xCb2F0QUksXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuY29uc3QgYmF0dGxlU2hpcEJvYXJkID0gKCgpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbHMgPSAxMDtcbiAgICBjb25zdCByb3dzID0gMTA7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcblxuICAgIGxldCBzYXZlU2hpcHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSArPSAxKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqICs9IDEpIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBcIlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQ2VsbEF2YWlsYWJsZSA9IChjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBzaGlwQXJyYXkucHVzaChib2FyZFtjb2wgKyBpXVtyb3ddKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHNoaXBBcnJheS5wdXNoKGJvYXJkW2NvbF1bcm93ICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hpcEFycmF5LmV2ZXJ5KChjZWxsKSA9PiBjZWxsID09PSBcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvbCwgcm93LCBzaGlwLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXNDZWxsQXZhaWxhYmxlKGNvbCwgcm93LCBzaGlwLCBkaXJlY3Rpb24pID09PSB0cnVlICYmXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbY29sICsgaV1bcm93XSA9IHNoaXA7XG4gICAgICAgICAgc2hpcC5pc1BsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSAmJlxuICAgICAgICBkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbY29sXVtyb3cgKyBpXSA9IHNoaXA7XG4gICAgICAgICAgc2hpcC5pc1BsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50XCIpO1xuICAgICAgfVxuICAgICAgc2F2ZVNoaXBzLnB1c2goc2hpcCk7XG4gICAgICByZXR1cm4gYm9hcmRbY29sXVtyb3ddO1xuICAgIH07XG5cbiAgICBjb25zdCBwcmludEJvYXJkID0gKCkgPT4ge1xuICAgICAgYm9hcmQuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhjZWxsKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvbCwgcm93KSA9PiB7XG4gICAgICBjb25zdCBib2FyZFNwb3QgPSBib2FyZFtjb2xdW3Jvd107XG5cbiAgICAgIGlmIChib2FyZFtjb2xdW3Jvd10gPT09IFwiXCIpIHtcbiAgICAgICAgYm9hcmRbY29sXVtyb3ddID0gXCJNXCI7XG4gICAgICAgIHJldHVybiBcIk1pc3NcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGJvYXJkW2NvbF1bcm93XSAhPT0gXCJIXCIgJiYgYm9hcmRbY29sXVtyb3ddICE9PSBcIk1cIikge1xuICAgICAgICBib2FyZFtjb2xdW3Jvd10gPSBcIkhcIjtcbiAgICAgICAgcmV0dXJuIGJvYXJkU3BvdC5oaXQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIllvdSBjYW50IGhpdCB0aGUgc2FtZSBzcG90XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1pc3NlZEF0dGFja3NQbGF5ZXIgPSAoY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgICAgY29uc3QgZ2V0Qm9hcmRDb3B5ID0gY29tcHV0ZXJCb2FyZC5ib2FyZDtcblxuICAgICAgY29uc3QgZmlsdGVyZWRNaXNzZWRBdHRhY2tzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0Qm9hcmRDb3B5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHJldHJpZXZlTWlzc2VkQXR0YWNrcyA9IGdldEJvYXJkQ29weVtpXS5maWx0ZXIoXG4gICAgICAgICAgKGF0dGFjaykgPT4gYXR0YWNrID09PSBcIk1cIlxuICAgICAgICApO1xuICAgICAgICBpZiAocmV0cmlldmVNaXNzZWRBdHRhY2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGZpbHRlcmVkTWlzc2VkQXR0YWNrcy5wdXNoKHJldHJpZXZlTWlzc2VkQXR0YWNrcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWx0ZXJlZE1pc3NlZEF0dGFja3M7XG4gICAgfTtcblxuICAgIGNvbnN0IG1pc3NlZEF0dGFja3NDb21wdXRlciA9IChwbGF5ZXJCb2FyZCkgPT4ge1xuICAgICAgY29uc3QgZ2V0Qm9hcmRDb3B5ID0gcGxheWVyQm9hcmQuYm9hcmQ7XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkTWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdldEJvYXJkQ29weS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCByZXRyaWV2ZU1pc3NlZEF0dGFja3MgPSBnZXRCb2FyZENvcHlbaV0uZmlsdGVyKFxuICAgICAgICAgIChhdHRhY2spID0+IGF0dGFjayA9PT0gXCJNXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJldHJpZXZlTWlzc2VkQXR0YWNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBmaWx0ZXJlZE1pc3NlZEF0dGFja3MucHVzaChyZXRyaWV2ZU1pc3NlZEF0dGFja3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyZWRNaXNzZWRBdHRhY2tzO1xuICAgIH07XG5cbiAgICBjb25zdCBhcmVBbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgICBsZXQgc3Vua1NoaXBzID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNhdmVTaGlwc1tpXS5uYW1lID09PSBcImNhcnJpZXJcIiAmJiBzYXZlU2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBzYXZlU2hpcHNbaV0ubmFtZSA9PT0gXCJiYXR0bGVTaGlwXCIgJiZcbiAgICAgICAgICBzYXZlU2hpcHNbaV0uaXNTdW5rKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgc2F2ZVNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwic3ViTWFyaW5lXCIgJiYgc2F2ZVNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmXG4gICAgICAgICAgc2F2ZVNoaXBzW2ldLmlzU3VuaygpXG4gICAgICAgICkge1xuICAgICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3Vua1NoaXBzID09PSA1KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja0ZvcldpbiA9IChjb21wdXRlckJvYXJkKSA9PiB7XG4gICAgICBpZiAoY29tcHV0ZXJCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tGb3JXaW5BSSA9IChwbGF5ZXJCb2FyZCkgPT4ge1xuICAgICAgaWYgKHBsYXllckJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjbGVhckJvYXJkID0gKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzOyBpICs9IDEpIHtcbiAgICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAoYm9hcmRbaV1bal0gIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGJvYXJkW2ldW2pdID0gXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJTYXZlU2hpcHNBcnJheSA9ICgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZVNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzYXZlU2hpcHNbaV0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgc2F2ZVNoaXBzID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBib2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5ib2FyZF07XG4gICAgICB9LFxuICAgICAgaXNDZWxsQXZhaWxhYmxlLFxuICAgICAgcGxhY2VTaGlwLFxuICAgICAgcHJpbnRCb2FyZCxcbiAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICBtaXNzZWRBdHRhY2tzUGxheWVyLFxuICAgICAgbWlzc2VkQXR0YWNrc0NvbXB1dGVyLFxuICAgICAgYXJlQWxsU2hpcHNTdW5rLFxuICAgICAgY2hlY2tGb3JXaW4sXG4gICAgICBjaGVja0ZvcldpbkFJLFxuICAgICAgY2xlYXJCb2FyZCxcbiAgICAgIGNsZWFyU2F2ZVNoaXBzQXJyYXksXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdhbWVCb2FyZCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGJhdHRsZVNoaXBCb2FyZCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmNvbnN0IHJhbmRvbVVVSUQgPSBmdW5jdGlvbiBiKGEpIHtcbiAgcmV0dXJuIGFcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAoYSBeICgoTWF0aC5yYW5kb20oKSAqIDE2KSA+PiAoYSAvIDQpKSkudG9TdHJpbmcoMTYpXG4gICAgOiAoWzFlN10gKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYik7XG59O1xuXG5jb25zdCBiYXR0bGVTaGlwTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBTaGlwID0gKFxuICAgIG5hbWUsXG4gICAgbGVuZ3RoLFxuICAgIG51bWJlck9mSGl0cyxcbiAgICBpc1NoaXBTdW5rLFxuICAgIGlzUGxhY2VkLFxuICAgIGlkID0gcmFuZG9tVVVJRCgpXG4gICkgPT4ge1xuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBUYWtpbmdIaXQgPSBudW1iZXJPZkhpdHMrKztcblxuICAgICAgaWYgKHNoaXBUYWtpbmdIaXQgPj0gbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBcIlRoZSBzaGlwLCBjYW5ub3QgYmUgaGl0IGFueW1vcmUhXCI7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgU2hpcCAke25hbWV9IGdvdCBoaXRgKTtcblxuICAgICAgcmV0dXJuIHsgbnVtYmVyT2ZIaXRzIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgIGlmIChuYW1lID09PSBcImNhcnJpZXJcIiAmJiBsZW5ndGggPT09IDUgJiYgbnVtYmVyT2ZIaXRzID09PSA1KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FycmllciBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobmFtZSA9PT0gXCJiYXR0bGVTaGlwXCIgJiYgbGVuZ3RoID09PSA0ICYmIG51bWJlck9mSGl0cyA9PT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJhdHRsZXNoaXAgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiBsZW5ndGggPT09IDMgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVzdHJveWVyIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFwic3ViTWFyaW5lXCIgJiYgbGVuZ3RoID09PSAzICYmIG51bWJlck9mSGl0cyA9PT0gMykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Ym1hcmluZSBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBcInBhdHJvbEJvYXRcIiAmJiBsZW5ndGggPT09IDIgJiYgbnVtYmVyT2ZIaXRzID09PSAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGF0cm9sQm9hdCBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0TnVtYmVyT2ZIaXRzID0gKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAobmFtZSA9PT0gXCJjYXJyaWVyXCIgJiYgbnVtYmVyT2ZIaXRzID09PSA1ICYmIGxlbmd0aCA9PT0gNSkgfHxcbiAgICAgICAgKG5hbWUgPT09IFwiY2FycmllclwiICYmIG51bWJlck9mSGl0cyA+IDAgJiYgbGVuZ3RoID09PSA1KVxuICAgICAgKSB7XG4gICAgICAgIG51bWJlck9mSGl0cyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG5hbWUgPT09IFwiYmF0dGxlU2hpcFwiICYmIG51bWJlck9mSGl0cyA9PT0gNCkgfHxcbiAgICAgICAgKG5hbWUgPT09IFwiYmF0dGxlU2hpcFwiICYmIG51bWJlck9mSGl0cyA+IDApXG4gICAgICApIHtcbiAgICAgICAgbnVtYmVyT2ZIaXRzID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAobmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiBudW1iZXJPZkhpdHMgPT09IDMpIHx8XG4gICAgICAgIChuYW1lID09PSBcImRlc3Ryb3llclwiICYmIG51bWJlck9mSGl0cyA+IDApXG4gICAgICApIHtcbiAgICAgICAgbnVtYmVyT2ZIaXRzID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAobmFtZSA9PT0gXCJzdWJNYXJpbmVcIiAmJiBudW1iZXJPZkhpdHMgPT09IDMpIHx8XG4gICAgICAgIChuYW1lID09PSBcInN1Yk1hcmluZVwiICYmIG51bWJlck9mSGl0cyA+IDApXG4gICAgICApIHtcbiAgICAgICAgbnVtYmVyT2ZIaXRzID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAobmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIgJiYgbnVtYmVyT2ZIaXRzID09PSAyKSB8fFxuICAgICAgICAobmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIgJiYgbnVtYmVyT2ZIaXRzID4gMClcbiAgICAgICkge1xuICAgICAgICBudW1iZXJPZkhpdHMgPSAwO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgfSxcbiAgICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICB9LFxuICAgICAgZ2V0IG51bWJlck9mSGl0cygpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlck9mSGl0cztcbiAgICAgIH0sXG4gICAgICBzZXQgbnVtYmVyT2ZIaXRzKHZhbHVlKSB7XG4gICAgICAgIG51bWJlck9mSGl0cyA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGdldCBpc1NoaXBTdW5rKCkge1xuICAgICAgICByZXR1cm4gaXNTaGlwU3VuaztcbiAgICAgIH0sXG4gICAgICBzZXQgaXNTaGlwU3Vuayh2YWx1ZSkge1xuICAgICAgICBpc1NoaXBTdW5rID0gdmFsdWU7XG4gICAgICB9LFxuICAgICAgZ2V0IGlzUGxhY2VkKCkge1xuICAgICAgICByZXR1cm4gaXNQbGFjZWQ7XG4gICAgICB9LFxuICAgICAgc2V0IGlzUGxhY2VkKHZhbHVlKSB7XG4gICAgICAgIGlzUGxhY2VkID0gdmFsdWU7XG4gICAgICB9LFxuICAgICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9LFxuICAgICAgaGl0LFxuICAgICAgaXNTdW5rLFxuICAgICAgcmVzZXROdW1iZXJPZkhpdHMsXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIFNoaXAsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBiYXR0bGVTaGlwTG9naWMgfTtcbiIsImltcG9ydCB7XG4gIGJhdHRsZVNoaXBHYW1lLFxuICBwbGF5ZXJCb2FyZCxcbiAgY29tcHV0ZXJCb2FyZCxcbiAgY2FycmllcixcbiAgY2FycmllckFJLFxuICBiYXR0bGVTaGlwLFxuICBiYXR0bGVTaGlwQUksXG4gIGRlc3Ryb3llcixcbiAgZGVzdHJveWVyQUksXG4gIHN1Yk1hcmluZSxcbiAgc3ViTWFyaW5lQUksXG4gIHBhdHJvbEJvYXQsXG4gIHBhdHJvbEJvYXRBSSxcbn0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvUGxheWVyXCI7XG5cbmNvbnN0IGJhdHRsZVNoaXBJbnRlcmZhY2UgPSAoKCkgPT4ge1xuICBjb25zdCBnZXRQbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpO1xuXG4gIGNvbnN0IGdldENvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpO1xuXG4gIGNvbnN0IHBsYXllck5hbWVJbmZvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWluZm9ybWF0aW9uXCIpO1xuXG4gIGNvbnN0IG1haW5EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpYWxvZ1wiKTtcblxuICBjb25zdCBkaXNwbGF5V2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LXdpbm5lclwiKTtcblxuICBjb25zdCBzaG93V2lubmVyRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXItZGlhbG9nXCIpO1xuXG4gIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1hZ2FpblwiKTtcblxuICAvLyBzaG93IHRoZSBkaWFsb2dcbiAgbWFpbkRpYWxvZy5zZXRBdHRyaWJ1dGUoXCJvcGVuXCIsIHRydWUpO1xuXG4gIC8vIHByZXZlbnQgZnJvbSBjbGlja2luZyBvbiB0aGUgYm9hcmRzLCB3aGVuIHRoZSBwbGF5ZXIgaXMgbm90IGV2ZW4gY3JlYXRlZFxuICBnZXRQbGF5ZXJCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gIGdldENvbXB1dGVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG4gIGNvbnN0IHJlc2V0Rm9ybSA9ICgpID0+IHtcbiAgICBwbGF5ZXJOYW1lSW5mb3JtYXRpb24ucmVzZXQoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQbGF5ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW5hbWUtaW5wdXRcIikudmFsdWU7XG4gICAgYmF0dGxlU2hpcEdhbWUuc2V0UGxheWVyKHBsYXllck5hbWUpO1xuICAgIGJhdHRsZVNoaXBHYW1lLnNldEZpcnN0UGxheWVyKCk7XG4gIH07XG5cbiAgcGxheWVyTmFtZUluZm9ybWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3JlYXRlUGxheWVyKCk7XG4gICAgYmF0dGxlU2hpcEdhbWUuZ2V0UGxheWVyKCk7XG4gICAgLy8gYWxsb3cgdG8gY2xpY2sgb24gdGhlIGJvYXJkIGFmdGVyIHRoZSBwbGF5ZXIgb2JqZWN0IGlzIGNyZWF0ZWRcbiAgICBnZXRQbGF5ZXJCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgZ2V0Q29tcHV0ZXJCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgcmVzZXRGb3JtKCk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbHMgPSAxMDtcbiAgICBjb25zdCByb3dzID0gMTA7XG5cbiAgICBnZXRQbGF5ZXJCb2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHM7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIiwgaSk7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIiwgaik7XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXVtqXS5uYW1lID09PSBcImNhcnJpZXJcIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInJlbmRlci1zaGlwc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXVtqXS5uYW1lID09PSBcImJhdHRsZVNoaXBcIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInJlbmRlci1zaGlwc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXVtqXS5uYW1lID09PSBcImRlc3Ryb3llclwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicmVuZGVyLXNoaXBzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW2ldW2pdLm5hbWUgPT09IFwic3ViTWFyaW5lXCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJyZW5kZXItc2hpcHNcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0ubmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJyZW5kZXItc2hpcHNcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0gPT09IFwiTVwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkLWF0dGFja3NcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0gPT09IFwiSFwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1hdHRhY2tzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGdldFBsYXllckJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWNsYXJlUGxheWVyV2lubmVyID0gKCkgPT4ge1xuICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja0Zvcldpbihjb21wdXRlckJvYXJkKSkge1xuICAgICAgZGlzcGxheVdpbm5lci50ZXh0Q29udGVudCA9IGAke2JhdHRsZVNoaXBHYW1lLmdldFBsYXllcigpfSB3b24hYDtcbiAgICAgIHNob3dXaW5uZXJEaWFsb2cuc2V0QXR0cmlidXRlKFwib3BlblwiLCB0cnVlKTtcbiAgICAgIGdldFBsYXllckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgIGdldENvbXB1dGVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIH1cbiAgfTtcblxuICAvLyBUT0RPOiBGaWd1cmUgb3V0IGEgd2F5IHRvIHJlbmRlciB0aGUgZmlsdGVyZWQgbWlzc2VkIGF0dGFja3NcbiAgLy8gdGhhdCBhcmUgc2F2ZWQgaW4gc2VwYXJhdGUgYXJyYXksIHdoaWxlIHRoZSBhdHRhY2tzIGFyZSBvbmx5XG4gIC8vIHJlbmRlcmVkIGZyb20gYW5vdGhlciBhcnJheSAhXG5cbiAgY29uc3QgcmVuZGVyQ29tcHV0ZXJCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xzID0gMTA7XG4gICAgY29uc3Qgcm93cyA9IDEwO1xuXG4gICAgZ2V0Q29tcHV0ZXJCb2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHM7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIiwgaSk7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIiwgaik7XG4gICAgICAgIGlmIChjb21wdXRlckJvYXJkLmJvYXJkW2ldW2pdID09PSBcIk1cIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NlZC1hdHRhY2tzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbXB1dGVyQm9hcmQuYm9hcmRbaV1bal0gPT09IFwiSFwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1hdHRhY2tzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGdldENvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlY2xhcmVDb21wdXRlcldpbm5lciA9ICgpID0+IHtcbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5jaGVja0ZvcldpbihwbGF5ZXJCb2FyZCkpIHtcbiAgICAgIGRpc3BsYXlXaW5uZXIudGV4dENvbnRlbnQgPSBgJHtiYXR0bGVTaGlwR2FtZS5nZXRDb21wdXRlcigpLm5hbWV9IHdvbiFgO1xuICAgICAgc2hvd1dpbm5lckRpYWxvZy5zZXRBdHRyaWJ1dGUoXCJvcGVuXCIsIHRydWUpO1xuICAgICAgZ2V0UGxheWVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgZ2V0Q29tcHV0ZXJCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsaWNrRXZlbnRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBjb25zdCBjbGlja2VkQ2VsbCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGNvbCA9IGNsaWNrZWRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29sXCIpO1xuICAgIGNvbnN0IHJvdyA9IGNsaWNrZWRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpO1xuICAgIGlmICghY29sICYmICFyb3cpIHJldHVybjtcbiAgICBiYXR0bGVTaGlwR2FtZS5nYW1lTG9vcChjb2wsIHJvdyk7XG4gICAgcmVuZGVyQ29tcHV0ZXJCb2FyZCgpO1xuICAgIGRlY2xhcmVQbGF5ZXJXaW5uZXIoKTtcbiAgICByZW5kZXJQbGF5ZXJCb2FyZCgpO1xuICAgIGRlY2xhcmVDb21wdXRlcldpbm5lcigpO1xuICB9O1xuXG4gIHJlbmRlckNvbXB1dGVyQm9hcmQoKTtcblxuICBnZXRDb21wdXRlckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0V2ZW50SGFuZGxlcik7XG5cbiAgY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgcGxheWVyQm9hcmQuY2xlYXJCb2FyZCgpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5jbGVhckJvYXJkKCk7XG5cbiAgICBwbGF5ZXJCb2FyZC5jbGVhclNhdmVTaGlwc0FycmF5KCk7XG5cbiAgICBjb21wdXRlckJvYXJkLmNsZWFyU2F2ZVNoaXBzQXJyYXkoKTtcblxuICAgIGNhcnJpZXIucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIGNhcnJpZXJBSS5yZXNldE51bWJlck9mSGl0cygpO1xuXG4gICAgYmF0dGxlU2hpcC5yZXNldE51bWJlck9mSGl0cygpO1xuXG4gICAgYmF0dGxlU2hpcEFJLnJlc2V0TnVtYmVyT2ZIaXRzKCk7XG5cbiAgICBkZXN0cm95ZXIucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIGRlc3Ryb3llckFJLnJlc2V0TnVtYmVyT2ZIaXRzKCk7XG5cbiAgICBzdWJNYXJpbmUucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIHN1Yk1hcmluZUFJLnJlc2V0TnVtYmVyT2ZIaXRzKCk7XG5cbiAgICBwYXRyb2xCb2F0LnJlc2V0TnVtYmVyT2ZIaXRzKCk7XG5cbiAgICBwYXRyb2xCb2F0QUkucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwucmVtb3ZlKFwiLmNlbGxcIik7XG4gICAgfSk7XG5cbiAgICBiYXR0bGVTaGlwR2FtZS5wbGFjZUFsbFNoaXBzV2l0aEhhcmRjb2RlZENvb3JkaW5hdGVzKCk7XG5cbiAgICByZW5kZXJQbGF5ZXJCb2FyZCgpO1xuXG4gICAgcmVuZGVyQ29tcHV0ZXJCb2FyZCgpO1xuXG4gICAgc2hvd1dpbm5lckRpYWxvZy5yZW1vdmVBdHRyaWJ1dGUoXCJvcGVuXCIpO1xuICAgIC8vIHNob3cgdGhlIGRpYWxvZyBhZ2FpbiBvbiBuZXcgZ2FtZVxuICAgIG1haW5EaWFsb2cuc2V0QXR0cmlidXRlKFwib3BlblwiLCB0cnVlKTtcbiAgfTtcblxuICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc3RhcnRHYW1lKTtcblxuICByZXR1cm4geyByZW5kZXJQbGF5ZXJCb2FyZCwgcmVuZGVyQ29tcHV0ZXJCb2FyZCB9O1xufSkoKTtcblxuYmF0dGxlU2hpcEludGVyZmFjZS5yZW5kZXJQbGF5ZXJCb2FyZCgpO1xuXG5iYXR0bGVTaGlwSW50ZXJmYWNlLnJlbmRlckNvbXB1dGVyQm9hcmQoKTtcblxuZXhwb3J0IHsgYmF0dGxlU2hpcEludGVyZmFjZSB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcwMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcblxcbi5oZWFkZXItbmFtZSB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kaWFsb2csXFxuLndpbm5lci1kaWFsb2cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIGxlZnQ6IDY0MHB4O1xcbiAgdG9wOiAyNTBweDtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRpYWxvZy1jb250YWluZXItd3JhcHBlcixcXG4ud2lubmVyLWRpYWxvZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cXG4ucGxheWVyLW5hbWUsXFxuLnBsYXllci1uYW1lLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLnBsYXllci1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlbmRlci1zaGlwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubWlzc2VkLWF0dGFja3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zaGlwLWF0dGFja3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbn1cXG5cXG4ucGxheS1hZ2FpbiB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcwMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcblxcbi5oZWFkZXItbmFtZSB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kaWFsb2csXFxuLndpbm5lci1kaWFsb2cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIGxlZnQ6IDY0MHB4O1xcbiAgdG9wOiAyNTBweDtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRpYWxvZy1jb250YWluZXItd3JhcHBlcixcXG4ud2lubmVyLWRpYWxvZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cXG4ucGxheWVyLW5hbWUsXFxuLnBsYXllci1uYW1lLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLnBsYXllci1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlbmRlci1zaGlwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubWlzc2VkLWF0dGFja3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zaGlwLWF0dGFja3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbn1cXG5cXG4ucGxheS1hZ2FpbiB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgYmF0dGxlU2hpcEludGVyZmFjZSB9IGZyb20gXCIuL1ZpZXcvSW50ZXJmYWNlXCI7XG5cbmltcG9ydCB7IGJhdHRsZVNoaXBHYW1lIH0gZnJvbSBcIi4vQ29udHJvbGxlci9QbGF5ZXJcIjtcblxuYmF0dGxlU2hpcEdhbWUucGxhY2VBbGxTaGlwc1dpdGhIYXJkY29kZWRDb29yZGluYXRlcygpO1xuXG5iYXR0bGVTaGlwSW50ZXJmYWNlLnJlbmRlclBsYXllckJvYXJkKCk7XG5cbmJhdHRsZVNoaXBJbnRlcmZhY2UucmVuZGVyQ29tcHV0ZXJCb2FyZCgpO1xuIl0sIm5hbWVzIjpbImJhdHRsZVNoaXBMb2dpYyIsImJhdHRsZVNoaXBCb2FyZCIsImNhcnJpZXIiLCJTaGlwIiwiY2FycmllckFJIiwiYmF0dGxlU2hpcCIsImJhdHRsZVNoaXBBSSIsImRlc3Ryb3llciIsImRlc3Ryb3llckFJIiwic3ViTWFyaW5lIiwic3ViTWFyaW5lQUkiLCJwYXRyb2xCb2F0IiwicGF0cm9sQm9hdEFJIiwicGxheWVyQm9hcmQiLCJnYW1lQm9hcmQiLCJjb21wdXRlckJvYXJkIiwiYmF0dGxlU2hpcEdhbWUiLCJQbGF5ZXIiLCJuYW1lIiwicGxheWVyIiwiY29tcHV0ZXIiLCJzZXRQbGF5ZXIiLCJmaXJzdFBsYXllciIsInNldEZpcnN0UGxheWVyIiwiZ2V0UGxheWVyIiwiZ2V0Q29tcHV0ZXIiLCJzd2l0Y2hQbGF5ZXJzVHVybnMiLCJnZXRGaXJzdFBsYXllciIsImF0dGFja0NvbXB1dGVyQm9hcmQiLCJjb2wiLCJyb3ciLCJjb25zb2xlIiwibG9nIiwicmVjZWl2ZUF0dGFjayIsImF0dGFja1BsYXllckJvYXJkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxhY2VBbGxTaGlwc1dpdGhIYXJkY29kZWRDb29yZGluYXRlcyIsImlzQ2VsbEF2YWlsYWJsZSIsInBsYWNlU2hpcCIsImdhbWVMb29wIiwicHJpbnRCb2FyZCIsIm1pc3NlZEF0dGFja3NQbGF5ZXIiLCJjaGVja0ZvcldpbiIsIm1pc3NlZEF0dGFja3NDb21wdXRlciIsImNvbHMiLCJyb3dzIiwiYm9hcmQiLCJzYXZlU2hpcHMiLCJpIiwiaiIsInNoaXAiLCJkaXJlY3Rpb24iLCJzaGlwQXJyYXkiLCJsZW5ndGgiLCJwdXNoIiwiZXZlcnkiLCJjZWxsIiwiaXNQbGFjZWQiLCJFcnJvciIsImZvckVhY2giLCJib2FyZFNwb3QiLCJoaXQiLCJnZXRCb2FyZENvcHkiLCJmaWx0ZXJlZE1pc3NlZEF0dGFja3MiLCJyZXRyaWV2ZU1pc3NlZEF0dGFja3MiLCJmaWx0ZXIiLCJhdHRhY2siLCJhcmVBbGxTaGlwc1N1bmsiLCJzdW5rU2hpcHMiLCJpc1N1bmsiLCJjaGVja0ZvcldpbkFJIiwiY2xlYXJCb2FyZCIsImNsZWFyU2F2ZVNoaXBzQXJyYXkiLCJyYW5kb21VVUlEIiwiYiIsImEiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJudW1iZXJPZkhpdHMiLCJpc1NoaXBTdW5rIiwiaWQiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJzaGlwVGFraW5nSGl0IiwicmVzZXROdW1iZXJPZkhpdHMiLCJ2YWx1ZSIsImJhdHRsZVNoaXBJbnRlcmZhY2UiLCJnZXRQbGF5ZXJCb2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbXB1dGVyQm9hcmQiLCJwbGF5ZXJOYW1lSW5mb3JtYXRpb24iLCJtYWluRGlhbG9nIiwiZGlzcGxheVdpbm5lciIsInNob3dXaW5uZXJEaWFsb2ciLCJwbGF5QWdhaW5CdXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJyZXNldEZvcm0iLCJyZXNldCIsImNyZWF0ZVBsYXllciIsInBsYXllck5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlbmRlclBsYXllckJvYXJkIiwidGV4dENvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJkZWNsYXJlUGxheWVyV2lubmVyIiwicmVuZGVyQ29tcHV0ZXJCb2FyZCIsImRlY2xhcmVDb21wdXRlcldpbm5lciIsImNsaWNrRXZlbnRIYW5kbGVyIiwiY2xpY2tlZENlbGwiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJyZXN0YXJ0R2FtZSIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=