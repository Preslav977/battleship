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
    const saveShips = [];
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
      clearBoard
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
      if (name === "carrier" && numberOfHits === 5 || name === "carrier" && numberOfHits > 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFFa0M7QUFFRjtBQUVyRGpHLDhEQUFjLENBQUNzQixxQ0FBcUMsQ0FBQyxDQUFDO0FBRXREaUQsZ0VBQW1CLENBQUNtQixpQkFBaUIsQ0FBQyxDQUFDO0FBRXZDbkIsZ0VBQW1CLENBQUMwQixtQkFBbUIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL0NvbnRyb2xsZXIvUGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvTW9kZWwvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvTW9kZWwvU2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL1ZpZXcvSW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYXR0bGVTaGlwTG9naWMgfSBmcm9tIFwiLi4vTW9kZWwvU2hpcFwiO1xuXG5pbXBvcnQgeyBiYXR0bGVTaGlwQm9hcmQgfSBmcm9tIFwiLi4vTW9kZWwvR2FtZWJvYXJkXCI7XG5cbmNvbnN0IGNhcnJpZXIgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcImNhcnJpZXJcIiwgNSwgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3QgY2FycmllckFJID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJjYXJyaWVyXCIsIDUsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGJhdHRsZVNoaXAgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcImJhdHRsZVNoaXBcIiwgNCwgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3QgYmF0dGxlU2hpcEFJID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJiYXR0bGVTaGlwXCIsIDQsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGRlc3Ryb3llciA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiZGVzdHJveWVyXCIsIDMsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGRlc3Ryb3llckFJID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJkZXN0cm95ZXJcIiwgMywgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3Qgc3ViTWFyaW5lID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJzdWJNYXJpbmVcIiwgMywgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3Qgc3ViTWFyaW5lQUkgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcInN1Yk1hcmluZVwiLCAzLCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBwYXRyb2xCb2F0ID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJwYXRyb2xCb2F0XCIsIDIsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IHBhdHJvbEJvYXRBSSA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwicGF0cm9sQm9hdFwiLCAyLCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGJhdHRsZVNoaXBCb2FyZC5nYW1lQm9hcmQoKTtcblxuY29uc3QgY29tcHV0ZXJCb2FyZCA9IGJhdHRsZVNoaXBCb2FyZC5nYW1lQm9hcmQoKTtcblxuY29uc3QgYmF0dGxlU2hpcEdhbWUgPSAoKCkgPT4ge1xuICBjb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4gbmFtZTtcblxuICAvLyBhZnRlciB0aGUgdGhlIGdhbWUgaXMgc3RhcnRlZFxuICAvLyB1cG9uIGNyZWF0aW5nIHRoZSBwbGF5ZXJcbiAgLy8gY3JlYXRlIHRoZSBwbGF5ZXIgb2JqZWN0XG4gIC8vIGFuZCB0aGUgYm9hcmQgb2JqZWN0c1xuXG4gIGxldCBwbGF5ZXI7XG5cbiAgY29uc3QgY29tcHV0ZXIgPSB7IG5hbWU6IFwiQ29tcHV0ZXJcIiB9O1xuXG4gIGNvbnN0IHNldFBsYXllciA9IChuYW1lKSA9PiB7XG4gICAgcGxheWVyID0gUGxheWVyKG5hbWUpO1xuICB9O1xuXG4gIGxldCBmaXJzdFBsYXllcjtcblxuICBjb25zdCBzZXRGaXJzdFBsYXllciA9ICgpID0+IHtcbiAgICBmaXJzdFBsYXllciA9IHBsYXllcjtcbiAgfTtcblxuICBjb25zdCBnZXRQbGF5ZXIgPSAoKSA9PiBwbGF5ZXI7XG5cbiAgY29uc3QgZ2V0Q29tcHV0ZXIgPSAoKSA9PiBjb21wdXRlcjtcblxuICBjb25zdCBzd2l0Y2hQbGF5ZXJzVHVybnMgPSAoKSA9PiB7XG4gICAgZmlyc3RQbGF5ZXIgPSBmaXJzdFBsYXllciA9PT0gcGxheWVyID8gY29tcHV0ZXIgOiBwbGF5ZXI7XG4gIH07XG5cbiAgY29uc3QgZ2V0Rmlyc3RQbGF5ZXIgPSAoKSA9PiBmaXJzdFBsYXllcjtcblxuICBjb25zdCBhdHRhY2tDb21wdXRlckJvYXJkID0gKGNvbCwgcm93LCBjb21wdXRlckJvYXJkKSA9PiB7XG4gICAgY29uc29sZS5sb2coY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGNvbCwgcm93KSk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrUGxheWVyQm9hcmQgPSAocGxheWVyQm9hcmQpID0+IHtcbiAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG5cbiAgICB3aGlsZSAoXG4gICAgICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGNvbCwgcm93KSA9PT0gXCJZb3UgY2FudCBhdHRhY2sgdGhlIHNhbWUgc3BvdFwiXG4gICAgKSB7XG4gICAgICBjb2wgPSBNYXRoLmZsb29yKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHNXaXRoSGFyZGNvZGVkQ29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDAsIGNhcnJpZXIsIFwidmVydGljYWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMSwgMCwgY2FycmllciwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgxLCAzLCBiYXR0bGVTaGlwLCBcImhvcml6b250YWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMSwgMywgYmF0dGxlU2hpcCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDMsIDUsIGRlc3Ryb3llciwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKDMsIDUsIGRlc3Ryb3llciwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDIsIDQsIHN1Yk1hcmluZSwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgyLCA0LCBzdWJNYXJpbmUsIFwidmVydGljYWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoNiwgNiwgcGF0cm9sQm9hdCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKDYsIDYsIHBhdHJvbEJvYXQsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDAsIGNhcnJpZXJBSSwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDEsIDAsIGNhcnJpZXJBSSwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDMsIGJhdHRsZVNoaXBBSSwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoMSwgMywgYmF0dGxlU2hpcEFJLCBcImhvcml6b250YWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgzLCA1LCBkZXN0cm95ZXJBSSwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoMywgNSwgZGVzdHJveWVyQUksIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDIsIDQsIHN1Yk1hcmluZUFJLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoMiwgNCwgc3ViTWFyaW5lQUksIFwidmVydGljYWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSg4LCAyLCBwYXRyb2xCb2F0QUksIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDgsIDIsIHBhdHJvbEJvYXRBSSwgXCJob3Jpem9udGFsXCIpO1xuICB9O1xuXG4gIGNvbnN0IGdhbWVMb29wID0gKGNvbCwgcm93KSA9PiB7XG4gICAgYXR0YWNrQ29tcHV0ZXJCb2FyZChjb2wsIHJvdywgY29tcHV0ZXJCb2FyZCwgZ2V0Rmlyc3RQbGF5ZXIoKSk7XG5cbiAgICBjb21wdXRlckJvYXJkLnByaW50Qm9hcmQoKTtcblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJQbGF5ZXIgbWlzc2VkIGF0dGFja3NcIixcbiAgICAgIHBsYXllckJvYXJkLm1pc3NlZEF0dGFja3NQbGF5ZXIoY29tcHV0ZXJCb2FyZClcbiAgICApO1xuXG4gICAgaWYgKHBsYXllckJvYXJkLmNoZWNrRm9yV2luKGNvbXB1dGVyQm9hcmQpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhnZXRQbGF5ZXIoKSwgXCJ3b24hXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiQXJlIGNvbXB1dGVyIHNoaXBzIHN1bmtcIiwgY29tcHV0ZXJCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSk7XG5cbiAgICBzd2l0Y2hQbGF5ZXJzVHVybnMoKTtcblxuICAgIGF0dGFja1BsYXllckJvYXJkKHBsYXllckJvYXJkKTtcblxuICAgIHBsYXllckJvYXJkLnByaW50Qm9hcmQoKTtcblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJDb21wdXRlciBtaXNzZWQgYXR0YWNrc1wiLFxuICAgICAgY29tcHV0ZXJCb2FyZC5taXNzZWRBdHRhY2tzQ29tcHV0ZXIocGxheWVyQm9hcmQpXG4gICAgKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiQXJlIHBsYXllciBzaGlwcyBzdW5rXCIsIHBsYXllckJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKTtcblxuICAgIGlmIChjb21wdXRlckJvYXJkLmNoZWNrRm9yV2luKHBsYXllckJvYXJkKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coZ2V0Q29tcHV0ZXIoKS5uYW1lLCBcIndvbiFcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgUGxheWVyLFxuICAgIHNldFBsYXllcixcbiAgICBzZXRGaXJzdFBsYXllcixcbiAgICBnZXRQbGF5ZXIsXG4gICAgZ2V0Q29tcHV0ZXIsXG4gICAgc3dpdGNoUGxheWVyc1R1cm5zLFxuICAgIGF0dGFja0NvbXB1dGVyQm9hcmQsXG4gICAgYXR0YWNrUGxheWVyQm9hcmQsXG4gICAgZ2V0Rmlyc3RQbGF5ZXIsXG4gICAgcGxhY2VBbGxTaGlwc1dpdGhIYXJkY29kZWRDb29yZGluYXRlcyxcbiAgICBnYW1lTG9vcCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7XG4gIGJhdHRsZVNoaXBHYW1lLFxuICBwbGF5ZXJCb2FyZCxcbiAgY29tcHV0ZXJCb2FyZCxcbiAgY2FycmllcixcbiAgY2FycmllckFJLFxuICBiYXR0bGVTaGlwLFxuICBiYXR0bGVTaGlwQUksXG4gIGRlc3Ryb3llcixcbiAgZGVzdHJveWVyQUksXG4gIHN1Yk1hcmluZSxcbiAgc3ViTWFyaW5lQUksXG4gIHBhdHJvbEJvYXQsXG4gIHBhdHJvbEJvYXRBSSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG5jb25zdCBiYXR0bGVTaGlwQm9hcmQgPSAoKCkgPT4ge1xuICBjb25zdCBnYW1lQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29scyA9IDEwO1xuICAgIGNvbnN0IHJvd3MgPSAxMDtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuXG4gICAgY29uc3Qgc2F2ZVNoaXBzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHM7IGkgKz0gMSkge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaiArPSAxKSB7XG4gICAgICAgIGJvYXJkW2ldW2pdID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc0NlbGxBdmFpbGFibGUgPSAoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgc2hpcEFycmF5LnB1c2goYm9hcmRbY29sICsgaV1bcm93XSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBzaGlwQXJyYXkucHVzaChib2FyZFtjb2xdW3JvdyArIGldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNoaXBBcnJheS5ldmVyeSgoY2VsbCkgPT4gY2VsbCA9PT0gXCJcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSAmJlxuICAgICAgICBkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIlxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2NvbCArIGldW3Jvd10gPSBzaGlwO1xuICAgICAgICAgIHNoaXAuaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBpc0NlbGxBdmFpbGFibGUoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT09IHRydWUgJiZcbiAgICAgICAgZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIlxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2NvbF1bcm93ICsgaV0gPSBzaGlwO1xuICAgICAgICAgIHNoaXAuaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFpc0NlbGxBdmFpbGFibGUoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgIH1cbiAgICAgIHNhdmVTaGlwcy5wdXNoKHNoaXApO1xuICAgICAgcmV0dXJuIGJvYXJkW2NvbF1bcm93XTtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJpbnRCb2FyZCA9ICgpID0+IHtcbiAgICAgIGJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2VsbCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb2wsIHJvdykgPT4ge1xuICAgICAgY29uc3QgYm9hcmRTcG90ID0gYm9hcmRbY29sXVtyb3ddO1xuXG4gICAgICBpZiAoYm9hcmRbY29sXVtyb3ddID09PSBcIlwiKSB7XG4gICAgICAgIGJvYXJkW2NvbF1bcm93XSA9IFwiTVwiO1xuICAgICAgICByZXR1cm4gXCJNaXNzXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChib2FyZFtjb2xdW3Jvd10gIT09IFwiSFwiICYmIGJvYXJkW2NvbF1bcm93XSAhPT0gXCJNXCIpIHtcbiAgICAgICAgYm9hcmRbY29sXVtyb3ddID0gXCJIXCI7XG4gICAgICAgIHJldHVybiBib2FyZFNwb3QuaGl0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJZb3UgY2FudCBoaXQgdGhlIHNhbWUgc3BvdFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzUGxheWVyID0gKGNvbXB1dGVyQm9hcmQpID0+IHtcbiAgICAgIGNvbnN0IGdldEJvYXJkQ29weSA9IGNvbXB1dGVyQm9hcmQuYm9hcmQ7XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkTWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdldEJvYXJkQ29weS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCByZXRyaWV2ZU1pc3NlZEF0dGFja3MgPSBnZXRCb2FyZENvcHlbaV0uZmlsdGVyKFxuICAgICAgICAgIChhdHRhY2spID0+IGF0dGFjayA9PT0gXCJNXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJldHJpZXZlTWlzc2VkQXR0YWNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBmaWx0ZXJlZE1pc3NlZEF0dGFja3MucHVzaChyZXRyaWV2ZU1pc3NlZEF0dGFja3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyZWRNaXNzZWRBdHRhY2tzO1xuICAgIH07XG5cbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzQ29tcHV0ZXIgPSAocGxheWVyQm9hcmQpID0+IHtcbiAgICAgIGNvbnN0IGdldEJvYXJkQ29weSA9IHBsYXllckJvYXJkLmJvYXJkO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZE1pc3NlZEF0dGFja3MgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRCb2FyZENvcHkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgcmV0cmlldmVNaXNzZWRBdHRhY2tzID0gZ2V0Qm9hcmRDb3B5W2ldLmZpbHRlcihcbiAgICAgICAgICAoYXR0YWNrKSA9PiBhdHRhY2sgPT09IFwiTVwiXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZXRyaWV2ZU1pc3NlZEF0dGFja3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgZmlsdGVyZWRNaXNzZWRBdHRhY2tzLnB1c2gocmV0cmlldmVNaXNzZWRBdHRhY2tzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbHRlcmVkTWlzc2VkQXR0YWNrcztcbiAgICB9O1xuXG4gICAgY29uc3QgYXJlQWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgbGV0IHN1bmtTaGlwcyA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZVNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzYXZlU2hpcHNbaV0ubmFtZSA9PT0gXCJjYXJyaWVyXCIgJiYgc2F2ZVNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwiYmF0dGxlU2hpcFwiICYmXG4gICAgICAgICAgc2F2ZVNoaXBzW2ldLmlzU3VuaygpXG4gICAgICAgICkge1xuICAgICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHNhdmVTaGlwc1tpXS5uYW1lID09PSBcImRlc3Ryb3llclwiICYmIHNhdmVTaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHNhdmVTaGlwc1tpXS5uYW1lID09PSBcInN1Yk1hcmluZVwiICYmIHNhdmVTaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHNhdmVTaGlwc1tpXS5uYW1lID09PSBcInBhdHJvbEJvYXRcIiAmJlxuICAgICAgICAgIHNhdmVTaGlwc1tpXS5pc1N1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1bmtTaGlwcyA9PT0gNSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tGb3JXaW4gPSAoY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgICAgaWYgKGNvbXB1dGVyQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrRm9yV2luQUkgPSAocGxheWVyQm9hcmQpID0+IHtcbiAgICAgIGlmIChwbGF5ZXJCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJCb2FyZCA9ICgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSArPSAxKSB7XG4gICAgICAgIGJvYXJkW2ldID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKGJvYXJkW2ldW2pdICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBib2FyZFtpXVtqXSA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBnZXQgYm9hcmQoKSB7XG4gICAgICAgIHJldHVybiBbLi4uYm9hcmRdO1xuICAgICAgfSxcbiAgICAgIGlzQ2VsbEF2YWlsYWJsZSxcbiAgICAgIHBsYWNlU2hpcCxcbiAgICAgIHByaW50Qm9hcmQsXG4gICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgbWlzc2VkQXR0YWNrc1BsYXllcixcbiAgICAgIG1pc3NlZEF0dGFja3NDb21wdXRlcixcbiAgICAgIGFyZUFsbFNoaXBzU3VuayxcbiAgICAgIGNoZWNrRm9yV2luLFxuICAgICAgY2hlY2tGb3JXaW5BSSxcbiAgICAgIGNsZWFyQm9hcmQsXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdhbWVCb2FyZCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGJhdHRsZVNoaXBCb2FyZCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmNvbnN0IHJhbmRvbVVVSUQgPSBmdW5jdGlvbiBiKGEpIHtcbiAgcmV0dXJuIGFcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAoYSBeICgoTWF0aC5yYW5kb20oKSAqIDE2KSA+PiAoYSAvIDQpKSkudG9TdHJpbmcoMTYpXG4gICAgOiAoWzFlN10gKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYik7XG59O1xuXG5jb25zdCBiYXR0bGVTaGlwTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBTaGlwID0gKFxuICAgIG5hbWUsXG4gICAgbGVuZ3RoLFxuICAgIG51bWJlck9mSGl0cyxcbiAgICBpc1NoaXBTdW5rLFxuICAgIGlzUGxhY2VkLFxuICAgIGlkID0gcmFuZG9tVVVJRCgpXG4gICkgPT4ge1xuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBUYWtpbmdIaXQgPSBudW1iZXJPZkhpdHMrKztcblxuICAgICAgaWYgKHNoaXBUYWtpbmdIaXQgPj0gbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBcIlRoZSBzaGlwLCBjYW5ub3QgYmUgaGl0IGFueW1vcmUhXCI7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgU2hpcCAke25hbWV9IGdvdCBoaXRgKTtcblxuICAgICAgcmV0dXJuIHsgbnVtYmVyT2ZIaXRzIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgIGlmIChuYW1lID09PSBcImNhcnJpZXJcIiAmJiBsZW5ndGggPT09IDUgJiYgbnVtYmVyT2ZIaXRzID09PSA1KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FycmllciBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobmFtZSA9PT0gXCJiYXR0bGVTaGlwXCIgJiYgbGVuZ3RoID09PSA0ICYmIG51bWJlck9mSGl0cyA9PT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJhdHRsZXNoaXAgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiBsZW5ndGggPT09IDMgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVzdHJveWVyIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFwic3ViTWFyaW5lXCIgJiYgbGVuZ3RoID09PSAzICYmIG51bWJlck9mSGl0cyA9PT0gMykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Ym1hcmluZSBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBcInBhdHJvbEJvYXRcIiAmJiBsZW5ndGggPT09IDIgJiYgbnVtYmVyT2ZIaXRzID09PSAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGF0cm9sQm9hdCBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0TnVtYmVyT2ZIaXRzID0gKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAobmFtZSA9PT0gXCJjYXJyaWVyXCIgJiYgbnVtYmVyT2ZIaXRzID09PSA1KSB8fFxuICAgICAgICAobmFtZSA9PT0gXCJjYXJyaWVyXCIgJiYgbnVtYmVyT2ZIaXRzID4gMClcbiAgICAgICkge1xuICAgICAgICBudW1iZXJPZkhpdHMgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChuYW1lID09PSBcImJhdHRsZVNoaXBcIiAmJiBudW1iZXJPZkhpdHMgPT09IDQpIHx8XG4gICAgICAgIChuYW1lID09PSBcImJhdHRsZVNoaXBcIiAmJiBudW1iZXJPZkhpdHMgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIG51bWJlck9mSGl0cyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB8fFxuICAgICAgICAobmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiBudW1iZXJPZkhpdHMgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIG51bWJlck9mSGl0cyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG5hbWUgPT09IFwic3ViTWFyaW5lXCIgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB8fFxuICAgICAgICAobmFtZSA9PT0gXCJzdWJNYXJpbmVcIiAmJiBudW1iZXJPZkhpdHMgPiAwKVxuICAgICAgKSB7XG4gICAgICAgIG51bWJlck9mSGl0cyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKG5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIG51bWJlck9mSGl0cyA9PT0gMikgfHxcbiAgICAgICAgKG5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIG51bWJlck9mSGl0cyA+IDApXG4gICAgICApIHtcbiAgICAgICAgbnVtYmVyT2ZIaXRzID0gMDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH0sXG4gICAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIGdldCBudW1iZXJPZkhpdHMoKSB7XG4gICAgICAgIHJldHVybiBudW1iZXJPZkhpdHM7XG4gICAgICB9LFxuICAgICAgc2V0IG51bWJlck9mSGl0cyh2YWx1ZSkge1xuICAgICAgICBudW1iZXJPZkhpdHMgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBnZXQgaXNTaGlwU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIGlzU2hpcFN1bms7XG4gICAgICB9LFxuICAgICAgc2V0IGlzU2hpcFN1bmsodmFsdWUpIHtcbiAgICAgICAgaXNTaGlwU3VuayA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGdldCBpc1BsYWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIGlzUGxhY2VkO1xuICAgICAgfSxcbiAgICAgIHNldCBpc1BsYWNlZCh2YWx1ZSkge1xuICAgICAgICBpc1BsYWNlZCA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfSxcbiAgICAgIGhpdCxcbiAgICAgIGlzU3VuayxcbiAgICAgIHJlc2V0TnVtYmVyT2ZIaXRzLFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBTaGlwLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgYmF0dGxlU2hpcExvZ2ljIH07XG4iLCJpbXBvcnQge1xuICBiYXR0bGVTaGlwR2FtZSxcbiAgcGxheWVyQm9hcmQsXG4gIGNvbXB1dGVyQm9hcmQsXG4gIGNhcnJpZXIsXG4gIGNhcnJpZXJBSSxcbiAgYmF0dGxlU2hpcCxcbiAgYmF0dGxlU2hpcEFJLFxuICBkZXN0cm95ZXIsXG4gIGRlc3Ryb3llckFJLFxuICBzdWJNYXJpbmUsXG4gIHN1Yk1hcmluZUFJLFxuICBwYXRyb2xCb2F0LFxuICBwYXRyb2xCb2F0QUksXG59IGZyb20gXCIuLi9Db250cm9sbGVyL1BsYXllclwiO1xuXG5jb25zdCBiYXR0bGVTaGlwSW50ZXJmYWNlID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0UGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKTtcblxuICBjb25zdCBnZXRDb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcblxuICBjb25zdCBwbGF5ZXJOYW1lSW5mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1pbmZvcm1hdGlvblwiKTtcblxuICBjb25zdCBtYWluRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaWFsb2dcIik7XG5cbiAgY29uc3QgZGlzcGxheVdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS13aW5uZXJcIik7XG5cbiAgY29uc3Qgc2hvd1dpbm5lckRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLWRpYWxvZ1wiKTtcblxuICBjb25zdCBwbGF5QWdhaW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXktYWdhaW5cIik7XG5cbiAgLy8gc2hvdyB0aGUgZGlhbG9nXG4gIG1haW5EaWFsb2cuc2V0QXR0cmlidXRlKFwib3BlblwiLCB0cnVlKTtcblxuICAvLyBwcmV2ZW50IGZyb20gY2xpY2tpbmcgb24gdGhlIGJvYXJkcywgd2hlbiB0aGUgcGxheWVyIGlzIG5vdCBldmVuIGNyZWF0ZWRcbiAgZ2V0UGxheWVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICBnZXRDb21wdXRlckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblxuICBjb25zdCByZXNldEZvcm0gPSAoKSA9PiB7XG4gICAgcGxheWVyTmFtZUluZm9ybWF0aW9uLnJlc2V0KCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUGxheWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1uYW1lLWlucHV0XCIpLnZhbHVlO1xuICAgIGJhdHRsZVNoaXBHYW1lLnNldFBsYXllcihwbGF5ZXJOYW1lKTtcbiAgICBiYXR0bGVTaGlwR2FtZS5zZXRGaXJzdFBsYXllcigpO1xuICB9O1xuXG4gIHBsYXllck5hbWVJbmZvcm1hdGlvbi5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZVBsYXllcigpO1xuICAgIGJhdHRsZVNoaXBHYW1lLmdldFBsYXllcigpO1xuICAgIC8vIGFsbG93IHRvIGNsaWNrIG9uIHRoZSBib2FyZCBhZnRlciB0aGUgcGxheWVyIG9iamVjdCBpcyBjcmVhdGVkXG4gICAgZ2V0UGxheWVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgIGdldENvbXB1dGVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgIHJlc2V0Rm9ybSgpO1xuICB9KTtcblxuICBjb25zdCByZW5kZXJQbGF5ZXJCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xzID0gMTA7XG4gICAgY29uc3Qgcm93cyA9IDEwO1xuXG4gICAgZ2V0UGxheWVyQm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGkpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIGopO1xuICAgICAgICBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0ubmFtZSA9PT0gXCJjYXJyaWVyXCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJyZW5kZXItc2hpcHNcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0ubmFtZSA9PT0gXCJiYXR0bGVTaGlwXCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJyZW5kZXItc2hpcHNcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0ubmFtZSA9PT0gXCJkZXN0cm95ZXJcIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInJlbmRlci1zaGlwc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXVtqXS5uYW1lID09PSBcInN1Yk1hcmluZVwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicmVuZGVyLXNoaXBzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW2ldW2pdLm5hbWUgPT09IFwicGF0cm9sQm9hdFwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicmVuZGVyLXNoaXBzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW2ldW2pdID09PSBcIk1cIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NlZC1hdHRhY2tzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW2ldW2pdID09PSBcIkhcIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtYXR0YWNrc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVjbGFyZVBsYXllcldpbm5lciA9ICgpID0+IHtcbiAgICBpZiAocGxheWVyQm9hcmQuY2hlY2tGb3JXaW4oY29tcHV0ZXJCb2FyZCkpIHtcbiAgICAgIGRpc3BsYXlXaW5uZXIudGV4dENvbnRlbnQgPSBgJHtiYXR0bGVTaGlwR2FtZS5nZXRQbGF5ZXIoKX0gd29uIWA7XG4gICAgICBzaG93V2lubmVyRGlhbG9nLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgdHJ1ZSk7XG4gICAgICBnZXRQbGF5ZXJCb2FyZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICBnZXRDb21wdXRlckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH07XG5cbiAgLy8gVE9ETzogRmlndXJlIG91dCBhIHdheSB0byByZW5kZXIgdGhlIGZpbHRlcmVkIG1pc3NlZCBhdHRhY2tzXG4gIC8vIHRoYXQgYXJlIHNhdmVkIGluIHNlcGFyYXRlIGFycmF5LCB3aGlsZSB0aGUgYXR0YWNrcyBhcmUgb25seVxuICAvLyByZW5kZXJlZCBmcm9tIGFub3RoZXIgYXJyYXkgIVxuXG4gIGNvbnN0IHJlbmRlckNvbXB1dGVyQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29scyA9IDEwO1xuICAgIGNvbnN0IHJvd3MgPSAxMDtcblxuICAgIGdldENvbXB1dGVyQm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGkpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIGopO1xuICAgICAgICBpZiAoY29tcHV0ZXJCb2FyZC5ib2FyZFtpXVtqXSA9PT0gXCJNXCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWQtYXR0YWNrc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21wdXRlckJvYXJkLmJvYXJkW2ldW2pdID09PSBcIkhcIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtYXR0YWNrc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRDb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWNsYXJlQ29tcHV0ZXJXaW5uZXIgPSAoKSA9PiB7XG4gICAgaWYgKGNvbXB1dGVyQm9hcmQuY2hlY2tGb3JXaW4ocGxheWVyQm9hcmQpKSB7XG4gICAgICBkaXNwbGF5V2lubmVyLnRleHRDb250ZW50ID0gYCR7YmF0dGxlU2hpcEdhbWUuZ2V0Q29tcHV0ZXIoKS5uYW1lfSB3b24hYDtcbiAgICAgIHNob3dXaW5uZXJEaWFsb2cuc2V0QXR0cmlidXRlKFwib3BlblwiLCB0cnVlKTtcbiAgICAgIGdldFBsYXllckJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgIGdldENvbXB1dGVyQm9hcmQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGlja0V2ZW50SGFuZGxlciA9IChlKSA9PiB7XG4gICAgY29uc3QgY2xpY2tlZENlbGwgPSBlLnRhcmdldDtcbiAgICBjb25zdCBjb2wgPSBjbGlja2VkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiKTtcbiAgICBjb25zdCByb3cgPSBjbGlja2VkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgICBpZiAoIWNvbCAmJiAhcm93KSByZXR1cm47XG4gICAgYmF0dGxlU2hpcEdhbWUuZ2FtZUxvb3AoY29sLCByb3cpO1xuICAgIHJlbmRlckNvbXB1dGVyQm9hcmQoKTtcbiAgICBkZWNsYXJlUGxheWVyV2lubmVyKCk7XG4gICAgcmVuZGVyUGxheWVyQm9hcmQoKTtcbiAgICBkZWNsYXJlQ29tcHV0ZXJXaW5uZXIoKTtcbiAgfTtcblxuICByZW5kZXJDb21wdXRlckJvYXJkKCk7XG5cbiAgZ2V0Q29tcHV0ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tFdmVudEhhbmRsZXIpO1xuXG4gIGNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIHBsYXllckJvYXJkLmNsZWFyQm9hcmQoKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuY2xlYXJCb2FyZCgpO1xuXG4gICAgY2Fycmllci5yZXNldE51bWJlck9mSGl0cygpO1xuXG4gICAgY2FycmllckFJLnJlc2V0TnVtYmVyT2ZIaXRzKCk7XG5cbiAgICBiYXR0bGVTaGlwLnJlc2V0TnVtYmVyT2ZIaXRzKCk7XG5cbiAgICBiYXR0bGVTaGlwQUkucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIGRlc3Ryb3llci5yZXNldE51bWJlck9mSGl0cygpO1xuXG4gICAgZGVzdHJveWVyQUkucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIHN1Yk1hcmluZS5yZXNldE51bWJlck9mSGl0cygpO1xuXG4gICAgc3ViTWFyaW5lQUkucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIHBhdHJvbEJvYXQucmVzZXROdW1iZXJPZkhpdHMoKTtcblxuICAgIHBhdHJvbEJvYXRBSS5yZXNldE51bWJlck9mSGl0cygpO1xuXG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIik7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5yZW1vdmUoXCIuY2VsbFwiKTtcbiAgICB9KTtcblxuICAgIGJhdHRsZVNoaXBHYW1lLnBsYWNlQWxsU2hpcHNXaXRoSGFyZGNvZGVkQ29vcmRpbmF0ZXMoKTtcblxuICAgIHJlbmRlclBsYXllckJvYXJkKCk7XG5cbiAgICByZW5kZXJDb21wdXRlckJvYXJkKCk7XG5cbiAgICBzaG93V2lubmVyRGlhbG9nLnJlbW92ZUF0dHJpYnV0ZShcIm9wZW5cIik7XG4gICAgLy8gc2hvdyB0aGUgZGlhbG9nIGFnYWluIG9uIG5ldyBnYW1lXG4gICAgbWFpbkRpYWxvZy5zZXRBdHRyaWJ1dGUoXCJvcGVuXCIsIHRydWUpO1xuICB9O1xuXG4gIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzdGFydEdhbWUpO1xuXG4gIHJldHVybiB7IHJlbmRlclBsYXllckJvYXJkLCByZW5kZXJDb21wdXRlckJvYXJkIH07XG59KSgpO1xuXG5iYXR0bGVTaGlwSW50ZXJmYWNlLnJlbmRlclBsYXllckJvYXJkKCk7XG5cbmJhdHRsZVNoaXBJbnRlcmZhY2UucmVuZGVyQ29tcHV0ZXJCb2FyZCgpO1xuXG5leHBvcnQgeyBiYXR0bGVTaGlwSW50ZXJmYWNlIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNzAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuXFxuLmhlYWRlci1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tcHV0ZXItYm9hcmQge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRpYWxvZyxcXG4ud2lubmVyLWRpYWxvZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgbGVmdDogNjQwcHg7XFxuICB0b3A6IDI1MHB4O1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRhaW5lci13cmFwcGVyLFxcbi53aW5uZXItZGlhbG9nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcblxcbi5wbGF5ZXItbmFtZSxcXG4ucGxheWVyLW5hbWUtaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmluc3RydWN0aW9ucy1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ucGxheWVyLWluZm9ybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVuZGVyLXNoaXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5taXNzZWQtYXR0YWNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnNoaXAtYXR0YWNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5kaWFsb2ctY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxufVxcblxcbi5wbGF5LWFnYWluIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNzAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuXFxuLmhlYWRlci1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tcHV0ZXItYm9hcmQge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRpYWxvZyxcXG4ud2lubmVyLWRpYWxvZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgbGVmdDogNjQwcHg7XFxuICB0b3A6IDI1MHB4O1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRhaW5lci13cmFwcGVyLFxcbi53aW5uZXItZGlhbG9nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcblxcbi5wbGF5ZXItbmFtZSxcXG4ucGxheWVyLW5hbWUtaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmluc3RydWN0aW9ucy1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ucGxheWVyLWluZm9ybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVuZGVyLXNoaXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5taXNzZWQtYXR0YWNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnNoaXAtYXR0YWNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5kaWFsb2ctY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxufVxcblxcbi5wbGF5LWFnYWluIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBiYXR0bGVTaGlwSW50ZXJmYWNlIH0gZnJvbSBcIi4vVmlldy9JbnRlcmZhY2VcIjtcblxuaW1wb3J0IHsgYmF0dGxlU2hpcEdhbWUgfSBmcm9tIFwiLi9Db250cm9sbGVyL1BsYXllclwiO1xuXG5iYXR0bGVTaGlwR2FtZS5wbGFjZUFsbFNoaXBzV2l0aEhhcmRjb2RlZENvb3JkaW5hdGVzKCk7XG5cbmJhdHRsZVNoaXBJbnRlcmZhY2UucmVuZGVyUGxheWVyQm9hcmQoKTtcblxuYmF0dGxlU2hpcEludGVyZmFjZS5yZW5kZXJDb21wdXRlckJvYXJkKCk7XG4iXSwibmFtZXMiOlsiYmF0dGxlU2hpcExvZ2ljIiwiYmF0dGxlU2hpcEJvYXJkIiwiY2FycmllciIsIlNoaXAiLCJjYXJyaWVyQUkiLCJiYXR0bGVTaGlwIiwiYmF0dGxlU2hpcEFJIiwiZGVzdHJveWVyIiwiZGVzdHJveWVyQUkiLCJzdWJNYXJpbmUiLCJzdWJNYXJpbmVBSSIsInBhdHJvbEJvYXQiLCJwYXRyb2xCb2F0QUkiLCJwbGF5ZXJCb2FyZCIsImdhbWVCb2FyZCIsImNvbXB1dGVyQm9hcmQiLCJiYXR0bGVTaGlwR2FtZSIsIlBsYXllciIsIm5hbWUiLCJwbGF5ZXIiLCJjb21wdXRlciIsInNldFBsYXllciIsImZpcnN0UGxheWVyIiwic2V0Rmlyc3RQbGF5ZXIiLCJnZXRQbGF5ZXIiLCJnZXRDb21wdXRlciIsInN3aXRjaFBsYXllcnNUdXJucyIsImdldEZpcnN0UGxheWVyIiwiYXR0YWNrQ29tcHV0ZXJCb2FyZCIsImNvbCIsInJvdyIsImNvbnNvbGUiLCJsb2ciLCJyZWNlaXZlQXR0YWNrIiwiYXR0YWNrUGxheWVyQm9hcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwbGFjZUFsbFNoaXBzV2l0aEhhcmRjb2RlZENvb3JkaW5hdGVzIiwiaXNDZWxsQXZhaWxhYmxlIiwicGxhY2VTaGlwIiwiZ2FtZUxvb3AiLCJwcmludEJvYXJkIiwibWlzc2VkQXR0YWNrc1BsYXllciIsImNoZWNrRm9yV2luIiwibWlzc2VkQXR0YWNrc0NvbXB1dGVyIiwiY29scyIsInJvd3MiLCJib2FyZCIsInNhdmVTaGlwcyIsImkiLCJqIiwic2hpcCIsImRpcmVjdGlvbiIsInNoaXBBcnJheSIsImxlbmd0aCIsInB1c2giLCJldmVyeSIsImNlbGwiLCJpc1BsYWNlZCIsIkVycm9yIiwiZm9yRWFjaCIsImJvYXJkU3BvdCIsImhpdCIsImdldEJvYXJkQ29weSIsImZpbHRlcmVkTWlzc2VkQXR0YWNrcyIsInJldHJpZXZlTWlzc2VkQXR0YWNrcyIsImZpbHRlciIsImF0dGFjayIsImFyZUFsbFNoaXBzU3VuayIsInN1bmtTaGlwcyIsImlzU3VuayIsImNoZWNrRm9yV2luQUkiLCJjbGVhckJvYXJkIiwicmFuZG9tVVVJRCIsImIiLCJhIiwidG9TdHJpbmciLCJyZXBsYWNlIiwibnVtYmVyT2ZIaXRzIiwiaXNTaGlwU3VuayIsImlkIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwic2hpcFRha2luZ0hpdCIsInJlc2V0TnVtYmVyT2ZIaXRzIiwidmFsdWUiLCJiYXR0bGVTaGlwSW50ZXJmYWNlIiwiZ2V0UGxheWVyQm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb21wdXRlckJvYXJkIiwicGxheWVyTmFtZUluZm9ybWF0aW9uIiwibWFpbkRpYWxvZyIsImRpc3BsYXlXaW5uZXIiLCJzaG93V2lubmVyRGlhbG9nIiwicGxheUFnYWluQnV0dG9uIiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwicmVzZXRGb3JtIiwicmVzZXQiLCJjcmVhdGVQbGF5ZXIiLCJwbGF5ZXJOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZW5kZXJQbGF5ZXJCb2FyZCIsInRleHRDb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiZGVjbGFyZVBsYXllcldpbm5lciIsInJlbmRlckNvbXB1dGVyQm9hcmQiLCJkZWNsYXJlQ29tcHV0ZXJXaW5uZXIiLCJjbGlja0V2ZW50SGFuZGxlciIsImNsaWNrZWRDZWxsIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwicmVzdGFydEdhbWUiLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9