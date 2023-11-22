/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Controller/Interface.js":
/*!*************************************!*\
  !*** ./src/Controller/Interface.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   battleShipInterface: () => (/* binding */ battleShipInterface)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/Controller/Player.js");

const battleShipInterface = (() => {
  const getPlayerBoard = document.querySelector(".player-board");
  const getComputerBoard = document.querySelector(".computer-board");
  const playerNameInformation = document.querySelector(".player-information");
  const resetForm = () => {
    playerNameInformation.reset();
  };
  const createPlayerAndGameboards = () => {
    const playerName = document.querySelector(".player-name-input").value;
    _Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.setPlayer(playerName);
    _Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.setFirstPlayer();
    // create gameboard objects
  };

  playerNameInformation.addEventListener("submit", e => {
    // e.preventDefault();
    createPlayerAndGameboards();
    console.log(_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.getPlayer());
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
        if (_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j].name === "carrier") {
          cell.classList.add("render-ships");
        } else if (_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j].name === "battleShip") {
          cell.classList.add("render-ships");
        } else if (_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j].name === "destroyer") {
          cell.classList.add("render-ships");
        } else if (_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j].name === "subMarine") {
          cell.classList.add("render-ships");
        } else if (_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j].name === "patrolBoat") {
          cell.classList.add("render-ships");
        } else if (_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j] === "M") {
          cell.classList.add("missed-attacks");
        } else if (_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board[i][j] === "H") {
          cell.classList.add("ship-attacks");
        }
        getPlayerBoard.appendChild(cell);
      }
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
        if (_Player__WEBPACK_IMPORTED_MODULE_0__.computerBoard.board[i][j] === "M") {
          cell.classList.add("missed-attacks");
        } else if (_Player__WEBPACK_IMPORTED_MODULE_0__.computerBoard.board[i][j] === "H") {
          cell.classList.add("ship-attacks");
        }
        getComputerBoard.appendChild(cell);
      }
    }
  };
  const clickEventHandler = e => {
    const clickedCell = e.target;
    const col = clickedCell.getAttribute("data-col");
    const row = clickedCell.getAttribute("data-row");
    if (!col && !row) return;
    _Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.gameLoop(col, row);
    renderComputerBoard();
    renderPlayerBoard();
  };
  renderComputerBoard();
  getComputerBoard.addEventListener("click", clickEventHandler);
  return {
    renderPlayerBoard,
    renderComputerBoard
  };
})();
battleShipInterface.renderPlayerBoard();
battleShipInterface.renderComputerBoard();


/***/ }),

/***/ "./src/Controller/Player.js":
/*!**********************************!*\
  !*** ./src/Controller/Player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   battleShipGame: () => (/* binding */ battleShipGame),
/* harmony export */   computerBoard: () => (/* binding */ computerBoard),
/* harmony export */   playerBoard: () => (/* binding */ playerBoard)
/* harmony export */ });
/* harmony import */ var _Model_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Ship */ "./src/Model/Ship.js");
/* harmony import */ var _Model_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Gameboard */ "./src/Model/Gameboard.js");


const carrier = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("carrier", 5, 0, false, false);
const battleShip = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("battleShip", 4, 0, false, false);
const destroyer = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("destroyer", 3, 0, false, false);
const subMarine = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("subMarine", 3, 0, false, false);
const patrolBoat = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("patrolBoat", 2, 0, false, false);
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
  let firstPlayer = player;
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
    computerBoard.isCellAvailable(1, 0, carrier, "vertical");
    computerBoard.placeShip(1, 0, carrier, "vertical");
    computerBoard.isCellAvailable(1, 3, battleShip, "horizontal");
    computerBoard.placeShip(1, 3, battleShip, "horizontal");
    computerBoard.isCellAvailable(3, 5, destroyer, "horizontal");
    computerBoard.placeShip(3, 5, destroyer, "horizontal");
    computerBoard.isCellAvailable(2, 4, subMarine, "vertical");
    computerBoard.placeShip(2, 4, subMarine, "vertical");
    computerBoard.isCellAvailable(8, 2, patrolBoat, "horizontal");
    computerBoard.placeShip(8, 2, patrolBoat, "horizontal");
  };
  const gameLoop = (col, row) => {
    attackComputerBoard(col, row, computerBoard, getFirstPlayer());
    computerBoard.printBoard();
    console.log("Player missed attacks", playerBoard.missedAttacksPlayer());
    console.log("Are computer ships sunk", computerBoard.areAllShipsSunk());
    switchPlayersTurns();
    attackPlayerBoard(playerBoard);
    playerBoard.printBoard();
    console.log("Computer missed attacks", computerBoard.missedAttacksComputer());
    console.log("Are player ships sunk", computerBoard.areAllShipsSunk());
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
/* harmony import */ var _Controller_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controller/Player */ "./src/Controller/Player.js");
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
    const missedAttacksPlayer = () => {
      const getBoardCopy = _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.computerBoard.board;
      const filteredMissedAttacks = [];
      for (let i = 0; i < getBoardCopy.length; i += 1) {
        const retrieveMissedAttacks = getBoardCopy[i].filter(attack => attack === "M");
        if (retrieveMissedAttacks.length !== 0) {
          filteredMissedAttacks.push(retrieveMissedAttacks);
        }
      }
      return filteredMissedAttacks;
    };
    const missedAttacksComputer = () => {
      const getBoardCopy = _Controller_Player__WEBPACK_IMPORTED_MODULE_0__.playerBoard.board;
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
      areAllShipsSunk
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
      isSunk
    };
  };
  return {
    Ship
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 700px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 60px;\n}\n\n.header-name {\n  font-size: large;\n}\n\n.player-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n  margin-right: 20px;\n}\n\n.cell {\n  outline: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell:hover {\n  cursor: pointer;\n}\n\n.computer-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n}\n\n.dialog {\n  position: absolute;\n  width: 250px;\n  height: 250px;\n  left: 640px;\n  top: 250px;\n  outline: 1px solid black;\n}\n\n.dialog-container-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 70px;\n}\n\n.player-name,\n.player-name-input {\n  margin-bottom: 10px;\n}\n\n.instructions-container {\n  padding-top: 10px;\n  padding-left: 30px;\n  padding-right: 20px;\n}\n\n.player-information {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.render-ships {\n  background-color: blue;\n}\n\n.missed-attacks {\n  background-color: green;\n}\n\n.ship-attacks {\n  background-color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 700px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 60px;\n}\n\n.header-name {\n  font-size: large;\n}\n\n.player-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n  margin-right: 20px;\n}\n\n.cell {\n  outline: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell:hover {\n  cursor: pointer;\n}\n\n.computer-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n}\n\n.dialog {\n  position: absolute;\n  width: 250px;\n  height: 250px;\n  left: 640px;\n  top: 250px;\n  outline: 1px solid black;\n}\n\n.dialog-container-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 70px;\n}\n\n.player-name,\n.player-name-input {\n  margin-bottom: 10px;\n}\n\n.instructions-container {\n  padding-top: 10px;\n  padding-left: 30px;\n  padding-right: 20px;\n}\n\n.player-information {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.render-ships {\n  background-color: blue;\n}\n\n.missed-attacks {\n  background-color: green;\n}\n\n.ship-attacks {\n  background-color: red;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _Controller_Interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller/Interface */ "./src/Controller/Interface.js");
/* harmony import */ var _Controller_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller/Player */ "./src/Controller/Player.js");



_Controller_Player__WEBPACK_IMPORTED_MODULE_2__.battleShipGame.placeAllShipsWithHardcodedCoordinates();
_Controller_Interface__WEBPACK_IMPORTED_MODULE_1__.battleShipInterface.renderPlayerBoard();
_Controller_Interface__WEBPACK_IMPORTED_MODULE_1__.battleShipInterface.renderComputerBoard();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFFdEUsTUFBTUcsbUJBQW1CLEdBQUcsQ0FBQyxNQUFNO0VBQ2pDLE1BQU1DLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0VBRTlELE1BQU1DLGdCQUFnQixHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUVsRSxNQUFNRSxxQkFBcUIsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7RUFFM0UsTUFBTUcsU0FBUyxHQUFHQSxDQUFBLEtBQU07SUFDdEJELHFCQUFxQixDQUFDRSxLQUFLLENBQUMsQ0FBQztFQUMvQixDQUFDO0VBRUQsTUFBTUMseUJBQXlCLEdBQUdBLENBQUEsS0FBTTtJQUN0QyxNQUFNQyxVQUFVLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUNPLEtBQUs7SUFDckViLG1EQUFjLENBQUNjLFNBQVMsQ0FBQ0YsVUFBVSxDQUFDO0lBQ3BDWixtREFBYyxDQUFDZSxjQUFjLENBQUMsQ0FBQztJQUMvQjtFQUNGLENBQUM7O0VBRURQLHFCQUFxQixDQUFDUSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUdDLENBQUMsSUFBSztJQUN0RDtJQUNBTix5QkFBeUIsQ0FBQyxDQUFDO0lBQzNCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLG1EQUFjLENBQUNvQixTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDWCxTQUFTLENBQUMsQ0FBQztFQUNiLENBQUMsQ0FBQztFQUVGLE1BQU1ZLGlCQUFpQixHQUFHQSxDQUFBLEtBQU07SUFDOUIsTUFBTUMsSUFBSSxHQUFHLEVBQUU7SUFDZixNQUFNQyxJQUFJLEdBQUcsRUFBRTtJQUVmbkIsY0FBYyxDQUFDb0IsV0FBVyxHQUFHLEVBQUU7SUFFL0IsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILElBQUksRUFBRUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNoQyxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsSUFBSSxFQUFFRyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2hDLE1BQU1DLElBQUksR0FBR3RCLFFBQVEsQ0FBQ3VCLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDMUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCSCxJQUFJLENBQUNJLFlBQVksQ0FBQyxVQUFVLEVBQUVOLENBQUMsQ0FBQztRQUNoQ0UsSUFBSSxDQUFDSSxZQUFZLENBQUMsVUFBVSxFQUFFTCxDQUFDLENBQUM7UUFDaEMsSUFBSXpCLGdEQUFXLENBQUMrQixLQUFLLENBQUNQLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxLQUFLLFNBQVMsRUFBRTtVQUM5Q04sSUFBSSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDcEMsQ0FBQyxNQUFNLElBQUk3QixnREFBVyxDQUFDK0IsS0FBSyxDQUFDUCxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLENBQUNPLElBQUksS0FBSyxZQUFZLEVBQUU7VUFDeEROLElBQUksQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQ3BDLENBQUMsTUFBTSxJQUFJN0IsZ0RBQVcsQ0FBQytCLEtBQUssQ0FBQ1AsQ0FBQyxDQUFDLENBQUNDLENBQUMsQ0FBQyxDQUFDTyxJQUFJLEtBQUssV0FBVyxFQUFFO1VBQ3ZETixJQUFJLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUNwQyxDQUFDLE1BQU0sSUFBSTdCLGdEQUFXLENBQUMrQixLQUFLLENBQUNQLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxLQUFLLFdBQVcsRUFBRTtVQUN2RE4sSUFBSSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDcEMsQ0FBQyxNQUFNLElBQUk3QixnREFBVyxDQUFDK0IsS0FBSyxDQUFDUCxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLENBQUNPLElBQUksS0FBSyxZQUFZLEVBQUU7VUFDeEROLElBQUksQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQ3BDLENBQUMsTUFBTSxJQUFJN0IsZ0RBQVcsQ0FBQytCLEtBQUssQ0FBQ1AsQ0FBQyxDQUFDLENBQUNDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtVQUMxQ0MsSUFBSSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN0QyxDQUFDLE1BQU0sSUFBSTdCLGdEQUFXLENBQUMrQixLQUFLLENBQUNQLENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7VUFDMUNDLElBQUksQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQ3BDO1FBQ0ExQixjQUFjLENBQUM4QixXQUFXLENBQUNQLElBQUksQ0FBQztNQUNsQztJQUNGO0VBQ0YsQ0FBQzs7RUFFRDtFQUNBO0VBQ0E7O0VBRUEsTUFBTVEsbUJBQW1CLEdBQUdBLENBQUEsS0FBTTtJQUNoQyxNQUFNYixJQUFJLEdBQUcsRUFBRTtJQUNmLE1BQU1DLElBQUksR0FBRyxFQUFFO0lBRWZoQixnQkFBZ0IsQ0FBQ2lCLFdBQVcsR0FBRyxFQUFFO0lBRWpDLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSCxJQUFJLEVBQUVHLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDaEMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILElBQUksRUFBRUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNoQyxNQUFNQyxJQUFJLEdBQUd0QixRQUFRLENBQUN1QixhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMxQkgsSUFBSSxDQUFDSSxZQUFZLENBQUMsVUFBVSxFQUFFTixDQUFDLENBQUM7UUFDaENFLElBQUksQ0FBQ0ksWUFBWSxDQUFDLFVBQVUsRUFBRUwsQ0FBQyxDQUFDO1FBQ2hDLElBQUl4QixrREFBYSxDQUFDOEIsS0FBSyxDQUFDUCxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1VBQ3JDQyxJQUFJLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1FBQ3RDLENBQUMsTUFBTSxJQUFJNUIsa0RBQWEsQ0FBQzhCLEtBQUssQ0FBQ1AsQ0FBQyxDQUFDLENBQUNDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtVQUM1Q0MsSUFBSSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDcEM7UUFDQXZCLGdCQUFnQixDQUFDMkIsV0FBVyxDQUFDUCxJQUFJLENBQUM7TUFDcEM7SUFDRjtFQUNGLENBQUM7RUFFRCxNQUFNUyxpQkFBaUIsR0FBSW5CLENBQUMsSUFBSztJQUMvQixNQUFNb0IsV0FBVyxHQUFHcEIsQ0FBQyxDQUFDcUIsTUFBTTtJQUM1QixNQUFNQyxHQUFHLEdBQUdGLFdBQVcsQ0FBQ0csWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUNoRCxNQUFNQyxHQUFHLEdBQUdKLFdBQVcsQ0FBQ0csWUFBWSxDQUFDLFVBQVUsQ0FBQztJQUNoRCxJQUFJLENBQUNELEdBQUcsSUFBSSxDQUFDRSxHQUFHLEVBQUU7SUFDbEJ6QyxtREFBYyxDQUFDMEMsUUFBUSxDQUFDSCxHQUFHLEVBQUVFLEdBQUcsQ0FBQztJQUNqQ04sbUJBQW1CLENBQUMsQ0FBQztJQUNyQmQsaUJBQWlCLENBQUMsQ0FBQztFQUNyQixDQUFDO0VBRURjLG1CQUFtQixDQUFDLENBQUM7RUFFckI1QixnQkFBZ0IsQ0FBQ1MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFb0IsaUJBQWlCLENBQUM7RUFFN0QsT0FBTztJQUFFZixpQkFBaUI7SUFBRWM7RUFBb0IsQ0FBQztBQUNuRCxDQUFDLEVBQUUsQ0FBQztBQUVKaEMsbUJBQW1CLENBQUNrQixpQkFBaUIsQ0FBQyxDQUFDO0FBRXZDbEIsbUJBQW1CLENBQUNnQyxtQkFBbUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdPO0FBRUs7QUFFckQsTUFBTVUsT0FBTyxHQUFHRix3REFBZSxDQUFDRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztBQUVuRSxNQUFNQyxVQUFVLEdBQUdKLHdEQUFlLENBQUNHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0FBRXpFLE1BQU1FLFNBQVMsR0FBR0wsd0RBQWUsQ0FBQ0csSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7QUFFdkUsTUFBTUcsU0FBUyxHQUFHTix3REFBZSxDQUFDRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztBQUV2RSxNQUFNSSxVQUFVLEdBQUdQLHdEQUFlLENBQUNHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0FBRXpFLE1BQU03QyxXQUFXLEdBQUcyQyw2REFBZSxDQUFDTyxTQUFTLENBQUMsQ0FBQztBQUUvQyxNQUFNakQsYUFBYSxHQUFHMEMsNkRBQWUsQ0FBQ08sU0FBUyxDQUFDLENBQUM7QUFFakQsTUFBTW5ELGNBQWMsR0FBRyxDQUFDLE1BQU07RUFDNUIsTUFBTW9ELE1BQU0sR0FBSW5CLElBQUksSUFBS0EsSUFBSTs7RUFFN0I7RUFDQTtFQUNBO0VBQ0E7O0VBRUEsSUFBSW9CLE1BQU07RUFFVixNQUFNQyxRQUFRLEdBQUc7SUFBRXJCLElBQUksRUFBRTtFQUFXLENBQUM7RUFFckMsTUFBTW5CLFNBQVMsR0FBSW1CLElBQUksSUFBSztJQUMxQm9CLE1BQU0sR0FBR0QsTUFBTSxDQUFDbkIsSUFBSSxDQUFDO0VBQ3ZCLENBQUM7RUFFRCxJQUFJc0IsV0FBVyxHQUFHRixNQUFNO0VBRXhCLE1BQU10QyxjQUFjLEdBQUdBLENBQUEsS0FBTTtJQUMzQndDLFdBQVcsR0FBR0YsTUFBTTtFQUN0QixDQUFDO0VBRUQsTUFBTWpDLFNBQVMsR0FBR0EsQ0FBQSxLQUFNaUMsTUFBTTtFQUU5QixNQUFNRyxXQUFXLEdBQUdBLENBQUEsS0FBTUYsUUFBUTtFQUVsQyxNQUFNRyxrQkFBa0IsR0FBR0EsQ0FBQSxLQUFNO0lBQy9CRixXQUFXLEdBQUdBLFdBQVcsS0FBS0YsTUFBTSxHQUFHQyxRQUFRLEdBQUdELE1BQU07RUFDMUQsQ0FBQztFQUVELE1BQU1LLGNBQWMsR0FBR0EsQ0FBQSxLQUFNSCxXQUFXO0VBRXhDLE1BQU1JLG1CQUFtQixHQUFHQSxDQUFDcEIsR0FBRyxFQUFFRSxHQUFHLEVBQUV2QyxhQUFhLEtBQUs7SUFDdkRnQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2pCLGFBQWEsQ0FBQzBELGFBQWEsQ0FBQ3JCLEdBQUcsRUFBRUUsR0FBRyxDQUFDLENBQUM7RUFDcEQsQ0FBQztFQUVELE1BQU1vQixpQkFBaUIsR0FBSTVELFdBQVcsSUFBSztJQUN6QyxJQUFJc0MsR0FBRyxHQUFHdUIsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDcEQsSUFBSXZCLEdBQUcsR0FBR3FCLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBRXBELE9BQ0UvRCxXQUFXLENBQUMyRCxhQUFhLENBQUNyQixHQUFHLEVBQUVFLEdBQUcsQ0FBQyxLQUFLLCtCQUErQixFQUN2RTtNQUNBRixHQUFHLEdBQUd1QixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztNQUNoRHZCLEdBQUcsR0FBR3FCLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2xEO0VBQ0YsQ0FBQztFQUVELE1BQU1DLHFDQUFxQyxHQUFHQSxDQUFBLEtBQU07SUFDbERoRSxXQUFXLENBQUNpRSxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXJCLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFFdEQ1QyxXQUFXLENBQUNrRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXRCLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFFaEQ1QyxXQUFXLENBQUNpRSxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW5CLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFFM0Q5QyxXQUFXLENBQUNrRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXBCLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFFckQ5QyxXQUFXLENBQUNpRSxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWxCLFNBQVMsRUFBRSxZQUFZLENBQUM7SUFFMUQvQyxXQUFXLENBQUNrRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW5CLFNBQVMsRUFBRSxZQUFZLENBQUM7SUFFcEQvQyxXQUFXLENBQUNpRSxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWpCLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFFeERoRCxXQUFXLENBQUNrRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWxCLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFFbERoRCxXQUFXLENBQUNpRSxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWhCLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFFM0RqRCxXQUFXLENBQUNrRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWpCLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFFckRoRCxhQUFhLENBQUNnRSxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXJCLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFFeEQzQyxhQUFhLENBQUNpRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXRCLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFFbEQzQyxhQUFhLENBQUNnRSxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW5CLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFFN0Q3QyxhQUFhLENBQUNpRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXBCLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFFdkQ3QyxhQUFhLENBQUNnRSxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWxCLFNBQVMsRUFBRSxZQUFZLENBQUM7SUFFNUQ5QyxhQUFhLENBQUNpRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW5CLFNBQVMsRUFBRSxZQUFZLENBQUM7SUFFdEQ5QyxhQUFhLENBQUNnRSxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWpCLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFFMUQvQyxhQUFhLENBQUNpRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWxCLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFFcEQvQyxhQUFhLENBQUNnRSxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWhCLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFFN0RoRCxhQUFhLENBQUNpRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWpCLFVBQVUsRUFBRSxZQUFZLENBQUM7RUFDekQsQ0FBQztFQUVELE1BQU1SLFFBQVEsR0FBR0EsQ0FBQ0gsR0FBRyxFQUFFRSxHQUFHLEtBQUs7SUFDN0JrQixtQkFBbUIsQ0FBQ3BCLEdBQUcsRUFBRUUsR0FBRyxFQUFFdkMsYUFBYSxFQUFFd0QsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUU5RHhELGFBQWEsQ0FBQ2tFLFVBQVUsQ0FBQyxDQUFDO0lBRTFCbEQsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLEVBQUVsQixXQUFXLENBQUNvRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFFdkVuRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRWpCLGFBQWEsQ0FBQ29FLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFdkViLGtCQUFrQixDQUFDLENBQUM7SUFFcEJJLGlCQUFpQixDQUFDNUQsV0FBVyxDQUFDO0lBRTlCQSxXQUFXLENBQUNtRSxVQUFVLENBQUMsQ0FBQztJQUV4QmxELE9BQU8sQ0FBQ0MsR0FBRyxDQUNULHlCQUF5QixFQUN6QmpCLGFBQWEsQ0FBQ3FFLHFCQUFxQixDQUFDLENBQ3RDLENBQUM7SUFFRHJELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixFQUFFakIsYUFBYSxDQUFDb0UsZUFBZSxDQUFDLENBQUMsQ0FBQztFQUN2RSxDQUFDO0VBRUQsT0FBTztJQUNMbEIsTUFBTTtJQUNOdEMsU0FBUztJQUNUQyxjQUFjO0lBQ2RLLFNBQVM7SUFDVG9DLFdBQVc7SUFDWEMsa0JBQWtCO0lBQ2xCRSxtQkFBbUI7SUFDbkJFLGlCQUFpQjtJQUNqQkgsY0FBYztJQUNkTyxxQ0FBcUM7SUFDckN2QjtFQUNGLENBQUM7QUFDSCxDQUFDLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKSjs7QUFFa0U7QUFFbEUsTUFBTUUsZUFBZSxHQUFHLENBQUMsTUFBTTtFQUM3QixNQUFNTyxTQUFTLEdBQUdBLENBQUEsS0FBTTtJQUN0QixNQUFNN0IsSUFBSSxHQUFHLEVBQUU7SUFDZixNQUFNQyxJQUFJLEdBQUcsRUFBRTtJQUNmLE1BQU1TLEtBQUssR0FBRyxFQUFFO0lBRWhCLE1BQU13QyxTQUFTLEdBQUcsRUFBRTtJQUVwQixLQUFLLElBQUkvQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILElBQUksRUFBRUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNoQ08sS0FBSyxDQUFDUCxDQUFDLENBQUMsR0FBRyxFQUFFO01BQ2IsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILElBQUksRUFBRUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNoQ00sS0FBSyxDQUFDUCxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEdBQUcsRUFBRTtNQUNsQjtJQUNGO0lBRUEsTUFBTXdDLGVBQWUsR0FBR0EsQ0FBQzNCLEdBQUcsRUFBRUUsR0FBRyxFQUFFZ0MsSUFBSSxFQUFFQyxTQUFTLEtBQUs7TUFDckQsTUFBTUMsU0FBUyxHQUFHLEVBQUU7TUFDcEIsSUFBSUQsU0FBUyxLQUFLLFVBQVUsRUFBRTtRQUM1QixLQUFLLElBQUlqRCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdnRCxJQUFJLENBQUNHLE1BQU0sRUFBRW5ELENBQUMsSUFBSSxDQUFDLEVBQUU7VUFDdkNrRCxTQUFTLENBQUNFLElBQUksQ0FBQzdDLEtBQUssQ0FBQ08sR0FBRyxHQUFHZCxDQUFDLENBQUMsQ0FBQ2dCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDO01BQ0YsQ0FBQyxNQUFNLElBQUlpQyxTQUFTLEtBQUssWUFBWSxFQUFFO1FBQ3JDLEtBQUssSUFBSWpELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2dELElBQUksQ0FBQ0csTUFBTSxFQUFFbkQsQ0FBQyxJQUFJLENBQUMsRUFBRTtVQUN2Q2tELFNBQVMsQ0FBQ0UsSUFBSSxDQUFDN0MsS0FBSyxDQUFDTyxHQUFHLENBQUMsQ0FBQ0UsR0FBRyxHQUFHaEIsQ0FBQyxDQUFDLENBQUM7UUFDckM7TUFDRjtNQUNBLE9BQU9rRCxTQUFTLENBQUNHLEtBQUssQ0FBRW5ELElBQUksSUFBS0EsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsTUFBTXdDLFNBQVMsR0FBR0EsQ0FBQzVCLEdBQUcsRUFBRUUsR0FBRyxFQUFFZ0MsSUFBSSxFQUFFQyxTQUFTLEtBQUs7TUFDL0MsSUFDRVIsZUFBZSxDQUFDM0IsR0FBRyxFQUFFRSxHQUFHLEVBQUVnQyxJQUFJLEVBQUVDLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFDbkRBLFNBQVMsS0FBSyxVQUFVLEVBQ3hCO1FBQ0EsS0FBSyxJQUFJakQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHZ0QsSUFBSSxDQUFDRyxNQUFNLEVBQUVuRCxDQUFDLElBQUksQ0FBQyxFQUFFO1VBQ3ZDTyxLQUFLLENBQUNPLEdBQUcsR0FBR2QsQ0FBQyxDQUFDLENBQUNnQixHQUFHLENBQUMsR0FBR2dDLElBQUk7VUFDMUJBLElBQUksQ0FBQ00sUUFBUSxHQUFHLElBQUk7UUFDdEI7TUFDRixDQUFDLE1BQU0sSUFDTGIsZUFBZSxDQUFDM0IsR0FBRyxFQUFFRSxHQUFHLEVBQUVnQyxJQUFJLEVBQUVDLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFDbkRBLFNBQVMsS0FBSyxZQUFZLEVBQzFCO1FBQ0EsS0FBSyxJQUFJakQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHZ0QsSUFBSSxDQUFDRyxNQUFNLEVBQUVuRCxDQUFDLElBQUksQ0FBQyxFQUFFO1VBQ3ZDTyxLQUFLLENBQUNPLEdBQUcsQ0FBQyxDQUFDRSxHQUFHLEdBQUdoQixDQUFDLENBQUMsR0FBR2dELElBQUk7VUFDMUJBLElBQUksQ0FBQ00sUUFBUSxHQUFHLElBQUk7UUFDdEI7TUFDRixDQUFDLE1BQU0sSUFBSSxDQUFDYixlQUFlLENBQUMzQixHQUFHLEVBQUVFLEdBQUcsRUFBRWdDLElBQUksRUFBRUMsU0FBUyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQy9ELE1BQU0sSUFBSU0sS0FBSyxDQUFDLHdCQUF3QixDQUFDO01BQzNDO01BQ0FSLFNBQVMsQ0FBQ0ssSUFBSSxDQUFDSixJQUFJLENBQUM7TUFDcEIsT0FBT3pDLEtBQUssQ0FBQ08sR0FBRyxDQUFDLENBQUNFLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBRUQsTUFBTTJCLFVBQVUsR0FBR0EsQ0FBQSxLQUFNO01BQ3ZCcEMsS0FBSyxDQUFDaUQsT0FBTyxDQUFFdEQsSUFBSSxJQUFLO1FBQ3RCVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDO01BQ25CLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNaUMsYUFBYSxHQUFHQSxDQUFDckIsR0FBRyxFQUFFRSxHQUFHLEtBQUs7TUFDbEMsTUFBTXlDLFNBQVMsR0FBR2xELEtBQUssQ0FBQ08sR0FBRyxDQUFDLENBQUNFLEdBQUcsQ0FBQztNQUVqQyxJQUFJVCxLQUFLLENBQUNPLEdBQUcsQ0FBQyxDQUFDRSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDMUJULEtBQUssQ0FBQ08sR0FBRyxDQUFDLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEdBQUc7UUFDckIsT0FBTyxNQUFNO01BQ2Y7TUFFQSxJQUFJVCxLQUFLLENBQUNPLEdBQUcsQ0FBQyxDQUFDRSxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUlULEtBQUssQ0FBQ08sR0FBRyxDQUFDLENBQUNFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUN0RFQsS0FBSyxDQUFDTyxHQUFHLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsR0FBRztRQUNyQixPQUFPeUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBQztNQUN4QjtNQUNBLE9BQU8sNEJBQTRCO0lBQ3JDLENBQUM7SUFFRCxNQUFNZCxtQkFBbUIsR0FBR0EsQ0FBQSxLQUFNO01BQ2hDLE1BQU1lLFlBQVksR0FBR2xGLDZEQUFhLENBQUM4QixLQUFLO01BRXhDLE1BQU1xRCxxQkFBcUIsR0FBRyxFQUFFO01BRWhDLEtBQUssSUFBSTVELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzJELFlBQVksQ0FBQ1IsTUFBTSxFQUFFbkQsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMvQyxNQUFNNkQscUJBQXFCLEdBQUdGLFlBQVksQ0FBQzNELENBQUMsQ0FBQyxDQUFDOEQsTUFBTSxDQUNqREMsTUFBTSxJQUFLQSxNQUFNLEtBQUssR0FDekIsQ0FBQztRQUNELElBQUlGLHFCQUFxQixDQUFDVixNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ3RDUyxxQkFBcUIsQ0FBQ1IsSUFBSSxDQUFDUyxxQkFBcUIsQ0FBQztRQUNuRDtNQUNGO01BQ0EsT0FBT0QscUJBQXFCO0lBQzlCLENBQUM7SUFFRCxNQUFNZCxxQkFBcUIsR0FBR0EsQ0FBQSxLQUFNO01BQ2xDLE1BQU1hLFlBQVksR0FBR25GLDJEQUFXLENBQUMrQixLQUFLO01BRXRDLE1BQU1xRCxxQkFBcUIsR0FBRyxFQUFFO01BRWhDLEtBQUssSUFBSTVELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzJELFlBQVksQ0FBQ1IsTUFBTSxFQUFFbkQsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMvQyxNQUFNNkQscUJBQXFCLEdBQUdGLFlBQVksQ0FBQzNELENBQUMsQ0FBQyxDQUFDOEQsTUFBTSxDQUNqREMsTUFBTSxJQUFLQSxNQUFNLEtBQUssR0FDekIsQ0FBQztRQUNELElBQUlGLHFCQUFxQixDQUFDVixNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ3RDUyxxQkFBcUIsQ0FBQ1IsSUFBSSxDQUFDUyxxQkFBcUIsQ0FBQztRQUNuRDtNQUNGO01BQ0EsT0FBT0QscUJBQXFCO0lBQzlCLENBQUM7SUFFRCxNQUFNZixlQUFlLEdBQUdBLENBQUEsS0FBTTtNQUM1QixJQUFJbUIsU0FBUyxHQUFHLENBQUM7TUFFakIsS0FBSyxJQUFJaEUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHK0MsU0FBUyxDQUFDSSxNQUFNLEVBQUVuRCxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzVDLElBQUkrQyxTQUFTLENBQUMvQyxDQUFDLENBQUMsQ0FBQ1EsSUFBSSxLQUFLLFNBQVMsSUFBSXVDLFNBQVMsQ0FBQy9DLENBQUMsQ0FBQyxDQUFDaUUsTUFBTSxDQUFDLENBQUMsRUFBRTtVQUM1REQsU0FBUyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxNQUFNLElBQ0xqQixTQUFTLENBQUMvQyxDQUFDLENBQUMsQ0FBQ1EsSUFBSSxLQUFLLFlBQVksSUFDbEN1QyxTQUFTLENBQUMvQyxDQUFDLENBQUMsQ0FBQ2lFLE1BQU0sQ0FBQyxDQUFDLEVBQ3JCO1VBQ0FELFNBQVMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsTUFBTSxJQUFJakIsU0FBUyxDQUFDL0MsQ0FBQyxDQUFDLENBQUNRLElBQUksS0FBSyxXQUFXLElBQUl1QyxTQUFTLENBQUMvQyxDQUFDLENBQUMsQ0FBQ2lFLE1BQU0sQ0FBQyxDQUFDLEVBQUU7VUFDckVELFNBQVMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsTUFBTSxJQUFJakIsU0FBUyxDQUFDL0MsQ0FBQyxDQUFDLENBQUNRLElBQUksS0FBSyxXQUFXLElBQUl1QyxTQUFTLENBQUMvQyxDQUFDLENBQUMsQ0FBQ2lFLE1BQU0sQ0FBQyxDQUFDLEVBQUU7VUFDckVELFNBQVMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsTUFBTSxJQUNMakIsU0FBUyxDQUFDL0MsQ0FBQyxDQUFDLENBQUNRLElBQUksS0FBSyxZQUFZLElBQ2xDdUMsU0FBUyxDQUFDL0MsQ0FBQyxDQUFDLENBQUNpRSxNQUFNLENBQUMsQ0FBQyxFQUNyQjtVQUNBRCxTQUFTLElBQUksQ0FBQztRQUNoQjtNQUNGO01BQ0EsSUFBSUEsU0FBUyxLQUFLLENBQUMsRUFBRTtRQUNuQixPQUFPLElBQUk7TUFDYjtNQUNBLE9BQU8sS0FBSztJQUNkLENBQUM7SUFFRCxPQUFPO01BQ0wsSUFBSXpELEtBQUtBLENBQUEsRUFBRztRQUNWLE9BQU8sQ0FBQyxHQUFHQSxLQUFLLENBQUM7TUFDbkIsQ0FBQztNQUNEa0MsZUFBZTtNQUNmQyxTQUFTO01BQ1RDLFVBQVU7TUFDVlIsYUFBYTtNQUNiUyxtQkFBbUI7TUFDbkJFLHFCQUFxQjtNQUNyQkQ7SUFDRixDQUFDO0VBQ0gsQ0FBQztFQUVELE9BQU87SUFDTG5CO0VBQ0YsQ0FBQztBQUNILENBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzSko7QUFDQSxNQUFNd0MsVUFBVSxHQUFHLFNBQVNDLENBQUNBLENBQUNDLENBQUMsRUFBRTtFQUMvQixPQUFPQSxDQUFDO0VBQ0o7RUFDQSxDQUFDQSxDQUFDLEdBQUsvQixJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFNNkIsQ0FBQyxHQUFHLENBQUcsRUFBRUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUNwRCxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxRQUFRLEVBQUVILENBQUMsQ0FBQztBQUMvRCxDQUFDO0FBRUQsTUFBTWpELGVBQWUsR0FBRyxDQUFDLE1BQU07RUFDN0IsTUFBTUcsSUFBSSxHQUFHLFNBQUFBLENBQ1hiLElBQUksRUFDSjJDLE1BQU0sRUFDTm9CLFlBQVksRUFDWkMsVUFBVSxFQUNWbEIsUUFBUSxFQUVMO0lBQUEsSUFESG1CLEVBQUUsR0FBQUMsU0FBQSxDQUFBdkIsTUFBQSxRQUFBdUIsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBR1IsVUFBVSxDQUFDLENBQUM7SUFFakIsTUFBTVIsR0FBRyxHQUFHQSxDQUFBLEtBQU07TUFDaEIsTUFBTWtCLGFBQWEsR0FBR0wsWUFBWSxFQUFFO01BRXBDLElBQUlLLGFBQWEsSUFBSXpCLE1BQU0sRUFBRTtRQUMzQixPQUFPLGtDQUFrQztNQUMzQztNQUNBMUQsT0FBTyxDQUFDQyxHQUFHLENBQUUsUUFBT2MsSUFBSyxVQUFTLENBQUM7TUFFbkMsT0FBTztRQUFFK0Q7TUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNTixNQUFNLEdBQUdBLENBQUEsS0FBTTtNQUNuQixJQUFJekQsSUFBSSxLQUFLLFNBQVMsSUFBSTJDLE1BQU0sS0FBSyxDQUFDLElBQUlvQixZQUFZLEtBQUssQ0FBQyxFQUFFO1FBQzVEOUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7UUFDL0IsT0FBTyxJQUFJO01BQ2I7TUFDQSxJQUFJYyxJQUFJLEtBQUssWUFBWSxJQUFJMkMsTUFBTSxLQUFLLENBQUMsSUFBSW9CLFlBQVksS0FBSyxDQUFDLEVBQUU7UUFDL0Q5RSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQyxPQUFPLElBQUk7TUFDYjtNQUVBLElBQUljLElBQUksS0FBSyxXQUFXLElBQUkyQyxNQUFNLEtBQUssQ0FBQyxJQUFJb0IsWUFBWSxLQUFLLENBQUMsRUFBRTtRQUM5RDlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO1FBQ2pDLE9BQU8sSUFBSTtNQUNiO01BRUEsSUFBSWMsSUFBSSxLQUFLLFdBQVcsSUFBSTJDLE1BQU0sS0FBSyxDQUFDLElBQUlvQixZQUFZLEtBQUssQ0FBQyxFQUFFO1FBQzlEOUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7UUFDakMsT0FBTyxJQUFJO01BQ2I7TUFFQSxJQUFJYyxJQUFJLEtBQUssWUFBWSxJQUFJMkMsTUFBTSxLQUFLLENBQUMsSUFBSW9CLFlBQVksS0FBSyxDQUFDLEVBQUU7UUFDL0Q5RSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQyxPQUFPLElBQUk7TUFDYjtNQUNBLE9BQU8sS0FBSztJQUNkLENBQUM7SUFFRCxPQUFPO01BQ0wsSUFBSWMsSUFBSUEsQ0FBQSxFQUFHO1FBQ1QsT0FBT0EsSUFBSTtNQUNiLENBQUM7TUFDRCxJQUFJMkMsTUFBTUEsQ0FBQSxFQUFHO1FBQ1gsT0FBT0EsTUFBTTtNQUNmLENBQUM7TUFDRCxJQUFJb0IsWUFBWUEsQ0FBQSxFQUFHO1FBQ2pCLE9BQU9BLFlBQVk7TUFDckIsQ0FBQztNQUNELElBQUlBLFlBQVlBLENBQUNuRixLQUFLLEVBQUU7UUFDdEJtRixZQUFZLEdBQUduRixLQUFLO01BQ3RCLENBQUM7TUFDRCxJQUFJb0YsVUFBVUEsQ0FBQSxFQUFHO1FBQ2YsT0FBT0EsVUFBVTtNQUNuQixDQUFDO01BQ0QsSUFBSUEsVUFBVUEsQ0FBQ3BGLEtBQUssRUFBRTtRQUNwQm9GLFVBQVUsR0FBR3BGLEtBQUs7TUFDcEIsQ0FBQztNQUNELElBQUlrRSxRQUFRQSxDQUFBLEVBQUc7UUFDYixPQUFPQSxRQUFRO01BQ2pCLENBQUM7TUFDRCxJQUFJQSxRQUFRQSxDQUFDbEUsS0FBSyxFQUFFO1FBQ2xCa0UsUUFBUSxHQUFHbEUsS0FBSztNQUNsQixDQUFDO01BQ0QsSUFBSXFGLEVBQUVBLENBQUEsRUFBRztRQUNQLE9BQU9BLEVBQUU7TUFDWCxDQUFDO01BQ0RmLEdBQUc7TUFDSE87SUFDRixDQUFDO0VBQ0gsQ0FBQztFQUVELE9BQU87SUFDTDVDO0VBQ0YsQ0FBQztBQUNILENBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZKO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFVBQVUsa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLEdBQUcsYUFBYSxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQixxQkFBcUIsR0FBRyxtQkFBbUIseUJBQXlCLDJDQUEyQyx3Q0FBd0MsaUJBQWlCLGtCQUFrQiw2QkFBNkIsdUJBQXVCLEdBQUcsV0FBVyw2QkFBNkIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcscUJBQXFCLHlCQUF5QiwyQ0FBMkMsd0NBQXdDLGlCQUFpQixrQkFBa0IsNkJBQTZCLEdBQUcsYUFBYSx1QkFBdUIsaUJBQWlCLGtCQUFrQixnQkFBZ0IsZUFBZSw2QkFBNkIsR0FBRywrQkFBK0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLHFCQUFxQixHQUFHLHVDQUF1Qyx3QkFBd0IsR0FBRyw2QkFBNkIsc0JBQXNCLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsbUJBQW1CLDJCQUEyQixHQUFHLHFCQUFxQiw0QkFBNEIsR0FBRyxtQkFBbUIsMEJBQTBCLEdBQUcsU0FBUyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksNkJBQTZCLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxVQUFVLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsbUJBQW1CLHlCQUF5QiwyQ0FBMkMsd0NBQXdDLGlCQUFpQixrQkFBa0IsNkJBQTZCLHVCQUF1QixHQUFHLFdBQVcsNkJBQTZCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLHFCQUFxQix5QkFBeUIsMkNBQTJDLHdDQUF3QyxpQkFBaUIsa0JBQWtCLDZCQUE2QixHQUFHLGFBQWEsdUJBQXVCLGlCQUFpQixrQkFBa0IsZ0JBQWdCLGVBQWUsNkJBQTZCLEdBQUcsK0JBQStCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixxQkFBcUIsR0FBRyx1Q0FBdUMsd0JBQXdCLEdBQUcsNkJBQTZCLHNCQUFzQix1QkFBdUIsd0JBQXdCLEdBQUcseUJBQXlCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLG1CQUFtQiwyQkFBMkIsR0FBRyxxQkFBcUIsNEJBQTRCLEdBQUcsbUJBQW1CLDBCQUEwQixHQUFHLHFCQUFxQjtBQUM1aEk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUV3QztBQUVSO0FBRXJEOUMsOERBQWMsQ0FBQ2lFLHFDQUFxQyxDQUFDLENBQUM7QUFFdEQ5RCxzRUFBbUIsQ0FBQ2tCLGlCQUFpQixDQUFDLENBQUM7QUFFdkNsQixzRUFBbUIsQ0FBQ2dDLG1CQUFtQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvQ29udHJvbGxlci9JbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Db250cm9sbGVyL1BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL01vZGVsL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL01vZGVsL1NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhdHRsZVNoaXBHYW1lLCBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCB9IGZyb20gXCIuL1BsYXllclwiO1xuXG5jb25zdCBiYXR0bGVTaGlwSW50ZXJmYWNlID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0UGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKTtcblxuICBjb25zdCBnZXRDb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcblxuICBjb25zdCBwbGF5ZXJOYW1lSW5mb3JtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1pbmZvcm1hdGlvblwiKTtcblxuICBjb25zdCByZXNldEZvcm0gPSAoKSA9PiB7XG4gICAgcGxheWVyTmFtZUluZm9ybWF0aW9uLnJlc2V0KCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUGxheWVyQW5kR2FtZWJvYXJkcyA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItbmFtZS1pbnB1dFwiKS52YWx1ZTtcbiAgICBiYXR0bGVTaGlwR2FtZS5zZXRQbGF5ZXIocGxheWVyTmFtZSk7XG4gICAgYmF0dGxlU2hpcEdhbWUuc2V0Rmlyc3RQbGF5ZXIoKTtcbiAgICAvLyBjcmVhdGUgZ2FtZWJvYXJkIG9iamVjdHNcbiAgfTtcblxuICBwbGF5ZXJOYW1lSW5mb3JtYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjcmVhdGVQbGF5ZXJBbmRHYW1lYm9hcmRzKCk7XG4gICAgY29uc29sZS5sb2coYmF0dGxlU2hpcEdhbWUuZ2V0UGxheWVyKCkpO1xuICAgIHJlc2V0Rm9ybSgpO1xuICB9KTtcblxuICBjb25zdCByZW5kZXJQbGF5ZXJCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xzID0gMTA7XG4gICAgY29uc3Qgcm93cyA9IDEwO1xuXG4gICAgZ2V0UGxheWVyQm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGkpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIGopO1xuICAgICAgICBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0ubmFtZSA9PT0gXCJjYXJyaWVyXCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJyZW5kZXItc2hpcHNcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0ubmFtZSA9PT0gXCJiYXR0bGVTaGlwXCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJyZW5kZXItc2hpcHNcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbaV1bal0ubmFtZSA9PT0gXCJkZXN0cm95ZXJcIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInJlbmRlci1zaGlwc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXVtqXS5uYW1lID09PSBcInN1Yk1hcmluZVwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicmVuZGVyLXNoaXBzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW2ldW2pdLm5hbWUgPT09IFwicGF0cm9sQm9hdFwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicmVuZGVyLXNoaXBzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW2ldW2pdID09PSBcIk1cIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NlZC1hdHRhY2tzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW2ldW2pdID09PSBcIkhcIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtYXR0YWNrc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRQbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gVE9ETzogRmlndXJlIG91dCBhIHdheSB0byByZW5kZXIgdGhlIGZpbHRlcmVkIG1pc3NlZCBhdHRhY2tzXG4gIC8vIHRoYXQgYXJlIHNhdmVkIGluIHNlcGFyYXRlIGFycmF5LCB3aGlsZSB0aGUgYXR0YWNrcyBhcmUgb25seVxuICAvLyByZW5kZXJlZCBmcm9tIGFub3RoZXIgYXJyYXkgIVxuXG4gIGNvbnN0IHJlbmRlckNvbXB1dGVyQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29scyA9IDEwO1xuICAgIGNvbnN0IHJvd3MgPSAxMDtcblxuICAgIGdldENvbXB1dGVyQm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGkpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIGopO1xuICAgICAgICBpZiAoY29tcHV0ZXJCb2FyZC5ib2FyZFtpXVtqXSA9PT0gXCJNXCIpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWQtYXR0YWNrc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb21wdXRlckJvYXJkLmJvYXJkW2ldW2pdID09PSBcIkhcIikge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtYXR0YWNrc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRDb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGlja0V2ZW50SGFuZGxlciA9IChlKSA9PiB7XG4gICAgY29uc3QgY2xpY2tlZENlbGwgPSBlLnRhcmdldDtcbiAgICBjb25zdCBjb2wgPSBjbGlja2VkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiKTtcbiAgICBjb25zdCByb3cgPSBjbGlja2VkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgICBpZiAoIWNvbCAmJiAhcm93KSByZXR1cm47XG4gICAgYmF0dGxlU2hpcEdhbWUuZ2FtZUxvb3AoY29sLCByb3cpO1xuICAgIHJlbmRlckNvbXB1dGVyQm9hcmQoKTtcbiAgICByZW5kZXJQbGF5ZXJCb2FyZCgpO1xuICB9O1xuXG4gIHJlbmRlckNvbXB1dGVyQm9hcmQoKTtcblxuICBnZXRDb21wdXRlckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0V2ZW50SGFuZGxlcik7XG5cbiAgcmV0dXJuIHsgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlckNvbXB1dGVyQm9hcmQgfTtcbn0pKCk7XG5cbmJhdHRsZVNoaXBJbnRlcmZhY2UucmVuZGVyUGxheWVyQm9hcmQoKTtcblxuYmF0dGxlU2hpcEludGVyZmFjZS5yZW5kZXJDb21wdXRlckJvYXJkKCk7XG5cbmV4cG9ydCB7IGJhdHRsZVNoaXBJbnRlcmZhY2UgfTtcbiIsImltcG9ydCB7IGJhdHRsZVNoaXBMb2dpYyB9IGZyb20gXCIuLi9Nb2RlbC9TaGlwXCI7XG5cbmltcG9ydCB7IGJhdHRsZVNoaXBCb2FyZCB9IGZyb20gXCIuLi9Nb2RlbC9HYW1lYm9hcmRcIjtcblxuY29uc3QgY2FycmllciA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiY2FycmllclwiLCA1LCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBiYXR0bGVTaGlwID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJiYXR0bGVTaGlwXCIsIDQsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGRlc3Ryb3llciA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiZGVzdHJveWVyXCIsIDMsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IHN1Yk1hcmluZSA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwic3ViTWFyaW5lXCIsIDMsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IHBhdHJvbEJvYXQgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcInBhdHJvbEJvYXRcIiwgMiwgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3QgcGxheWVyQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbmNvbnN0IGJhdHRsZVNoaXBHYW1lID0gKCgpID0+IHtcbiAgY29uc3QgUGxheWVyID0gKG5hbWUpID0+IG5hbWU7XG5cbiAgLy8gYWZ0ZXIgdGhlIHRoZSBnYW1lIGlzIHN0YXJ0ZWRcbiAgLy8gdXBvbiBjcmVhdGluZyB0aGUgcGxheWVyXG4gIC8vIGNyZWF0ZSB0aGUgcGxheWVyIG9iamVjdFxuICAvLyBhbmQgdGhlIGJvYXJkIG9iamVjdHNcblxuICBsZXQgcGxheWVyO1xuXG4gIGNvbnN0IGNvbXB1dGVyID0geyBuYW1lOiBcIkNvbXB1dGVyXCIgfTtcblxuICBjb25zdCBzZXRQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIHBsYXllciA9IFBsYXllcihuYW1lKTtcbiAgfTtcblxuICBsZXQgZmlyc3RQbGF5ZXIgPSBwbGF5ZXI7XG5cbiAgY29uc3Qgc2V0Rmlyc3RQbGF5ZXIgPSAoKSA9PiB7XG4gICAgZmlyc3RQbGF5ZXIgPSBwbGF5ZXI7XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4gcGxheWVyO1xuXG4gIGNvbnN0IGdldENvbXB1dGVyID0gKCkgPT4gY29tcHV0ZXI7XG5cbiAgY29uc3Qgc3dpdGNoUGxheWVyc1R1cm5zID0gKCkgPT4ge1xuICAgIGZpcnN0UGxheWVyID0gZmlyc3RQbGF5ZXIgPT09IHBsYXllciA/IGNvbXB1dGVyIDogcGxheWVyO1xuICB9O1xuXG4gIGNvbnN0IGdldEZpcnN0UGxheWVyID0gKCkgPT4gZmlyc3RQbGF5ZXI7XG5cbiAgY29uc3QgYXR0YWNrQ29tcHV0ZXJCb2FyZCA9IChjb2wsIHJvdywgY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb2wsIHJvdykpO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1BsYXllckJvYXJkID0gKHBsYXllckJvYXJkKSA9PiB7XG4gICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuXG4gICAgd2hpbGUgKFxuICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb2wsIHJvdykgPT09IFwiWW91IGNhbnQgYXR0YWNrIHRoZSBzYW1lIHNwb3RcIlxuICAgICkge1xuICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZUFsbFNoaXBzV2l0aEhhcmRjb2RlZENvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgxLCAwLCBjYXJyaWVyLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKDEsIDAsIGNhcnJpZXIsIFwidmVydGljYWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMSwgMywgYmF0dGxlU2hpcCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKDEsIDMsIGJhdHRsZVNoaXAsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgzLCA1LCBkZXN0cm95ZXIsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgzLCA1LCBkZXN0cm95ZXIsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgyLCA0LCBzdWJNYXJpbmUsIFwidmVydGljYWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMiwgNCwgc3ViTWFyaW5lLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDYsIDYsIHBhdHJvbEJvYXQsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCg2LCA2LCBwYXRyb2xCb2F0LCBcImhvcml6b250YWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgxLCAwLCBjYXJyaWVyLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoMSwgMCwgY2FycmllciwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDMsIGJhdHRsZVNoaXAsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDEsIDMsIGJhdHRsZVNoaXAsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDMsIDUsIGRlc3Ryb3llciwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoMywgNSwgZGVzdHJveWVyLCBcImhvcml6b250YWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgyLCA0LCBzdWJNYXJpbmUsIFwidmVydGljYWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgyLCA0LCBzdWJNYXJpbmUsIFwidmVydGljYWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSg4LCAyLCBwYXRyb2xCb2F0LCBcImhvcml6b250YWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCg4LCAyLCBwYXRyb2xCb2F0LCBcImhvcml6b250YWxcIik7XG4gIH07XG5cbiAgY29uc3QgZ2FtZUxvb3AgPSAoY29sLCByb3cpID0+IHtcbiAgICBhdHRhY2tDb21wdXRlckJvYXJkKGNvbCwgcm93LCBjb21wdXRlckJvYXJkLCBnZXRGaXJzdFBsYXllcigpKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucHJpbnRCb2FyZCgpO1xuXG4gICAgY29uc29sZS5sb2coXCJQbGF5ZXIgbWlzc2VkIGF0dGFja3NcIiwgcGxheWVyQm9hcmQubWlzc2VkQXR0YWNrc1BsYXllcigpKTtcblxuICAgIGNvbnNvbGUubG9nKFwiQXJlIGNvbXB1dGVyIHNoaXBzIHN1bmtcIiwgY29tcHV0ZXJCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSk7XG5cbiAgICBzd2l0Y2hQbGF5ZXJzVHVybnMoKTtcblxuICAgIGF0dGFja1BsYXllckJvYXJkKHBsYXllckJvYXJkKTtcblxuICAgIHBsYXllckJvYXJkLnByaW50Qm9hcmQoKTtcblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJDb21wdXRlciBtaXNzZWQgYXR0YWNrc1wiLFxuICAgICAgY29tcHV0ZXJCb2FyZC5taXNzZWRBdHRhY2tzQ29tcHV0ZXIoKVxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkFyZSBwbGF5ZXIgc2hpcHMgc3Vua1wiLCBjb21wdXRlckJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIFBsYXllcixcbiAgICBzZXRQbGF5ZXIsXG4gICAgc2V0Rmlyc3RQbGF5ZXIsXG4gICAgZ2V0UGxheWVyLFxuICAgIGdldENvbXB1dGVyLFxuICAgIHN3aXRjaFBsYXllcnNUdXJucyxcbiAgICBhdHRhY2tDb21wdXRlckJvYXJkLFxuICAgIGF0dGFja1BsYXllckJvYXJkLFxuICAgIGdldEZpcnN0UGxheWVyLFxuICAgIHBsYWNlQWxsU2hpcHNXaXRoSGFyZGNvZGVkQ29vcmRpbmF0ZXMsXG4gICAgZ2FtZUxvb3AsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBiYXR0bGVTaGlwR2FtZSwgcGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbmltcG9ydCB7IGNvbXB1dGVyQm9hcmQsIHBsYXllckJvYXJkIH0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvUGxheWVyXCI7XG5cbmNvbnN0IGJhdHRsZVNoaXBCb2FyZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xzID0gMTA7XG4gICAgY29uc3Qgcm93cyA9IDEwO1xuICAgIGNvbnN0IGJvYXJkID0gW107XG5cbiAgICBjb25zdCBzYXZlU2hpcHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSArPSAxKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqICs9IDEpIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBcIlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQ2VsbEF2YWlsYWJsZSA9IChjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBzaGlwQXJyYXkucHVzaChib2FyZFtjb2wgKyBpXVtyb3ddKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHNoaXBBcnJheS5wdXNoKGJvYXJkW2NvbF1bcm93ICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hpcEFycmF5LmV2ZXJ5KChjZWxsKSA9PiBjZWxsID09PSBcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvbCwgcm93LCBzaGlwLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXNDZWxsQXZhaWxhYmxlKGNvbCwgcm93LCBzaGlwLCBkaXJlY3Rpb24pID09PSB0cnVlICYmXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbY29sICsgaV1bcm93XSA9IHNoaXA7XG4gICAgICAgICAgc2hpcC5pc1BsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSAmJlxuICAgICAgICBkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbY29sXVtyb3cgKyBpXSA9IHNoaXA7XG4gICAgICAgICAgc2hpcC5pc1BsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50XCIpO1xuICAgICAgfVxuICAgICAgc2F2ZVNoaXBzLnB1c2goc2hpcCk7XG4gICAgICByZXR1cm4gYm9hcmRbY29sXVtyb3ddO1xuICAgIH07XG5cbiAgICBjb25zdCBwcmludEJvYXJkID0gKCkgPT4ge1xuICAgICAgYm9hcmQuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhjZWxsKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvbCwgcm93KSA9PiB7XG4gICAgICBjb25zdCBib2FyZFNwb3QgPSBib2FyZFtjb2xdW3Jvd107XG5cbiAgICAgIGlmIChib2FyZFtjb2xdW3Jvd10gPT09IFwiXCIpIHtcbiAgICAgICAgYm9hcmRbY29sXVtyb3ddID0gXCJNXCI7XG4gICAgICAgIHJldHVybiBcIk1pc3NcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGJvYXJkW2NvbF1bcm93XSAhPT0gXCJIXCIgJiYgYm9hcmRbY29sXVtyb3ddICE9PSBcIk1cIikge1xuICAgICAgICBib2FyZFtjb2xdW3Jvd10gPSBcIkhcIjtcbiAgICAgICAgcmV0dXJuIGJvYXJkU3BvdC5oaXQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIllvdSBjYW50IGhpdCB0aGUgc2FtZSBzcG90XCI7XG4gICAgfTtcblxuICAgIGNvbnN0IG1pc3NlZEF0dGFja3NQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBnZXRCb2FyZENvcHkgPSBjb21wdXRlckJvYXJkLmJvYXJkO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZE1pc3NlZEF0dGFja3MgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRCb2FyZENvcHkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgcmV0cmlldmVNaXNzZWRBdHRhY2tzID0gZ2V0Qm9hcmRDb3B5W2ldLmZpbHRlcihcbiAgICAgICAgICAoYXR0YWNrKSA9PiBhdHRhY2sgPT09IFwiTVwiXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZXRyaWV2ZU1pc3NlZEF0dGFja3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgZmlsdGVyZWRNaXNzZWRBdHRhY2tzLnB1c2gocmV0cmlldmVNaXNzZWRBdHRhY2tzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbHRlcmVkTWlzc2VkQXR0YWNrcztcbiAgICB9O1xuXG4gICAgY29uc3QgbWlzc2VkQXR0YWNrc0NvbXB1dGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgZ2V0Qm9hcmRDb3B5ID0gcGxheWVyQm9hcmQuYm9hcmQ7XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkTWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdldEJvYXJkQ29weS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCByZXRyaWV2ZU1pc3NlZEF0dGFja3MgPSBnZXRCb2FyZENvcHlbaV0uZmlsdGVyKFxuICAgICAgICAgIChhdHRhY2spID0+IGF0dGFjayA9PT0gXCJNXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJldHJpZXZlTWlzc2VkQXR0YWNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBmaWx0ZXJlZE1pc3NlZEF0dGFja3MucHVzaChyZXRyaWV2ZU1pc3NlZEF0dGFja3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyZWRNaXNzZWRBdHRhY2tzO1xuICAgIH07XG5cbiAgICBjb25zdCBhcmVBbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgICBsZXQgc3Vua1NoaXBzID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNhdmVTaGlwc1tpXS5uYW1lID09PSBcImNhcnJpZXJcIiAmJiBzYXZlU2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBzYXZlU2hpcHNbaV0ubmFtZSA9PT0gXCJiYXR0bGVTaGlwXCIgJiZcbiAgICAgICAgICBzYXZlU2hpcHNbaV0uaXNTdW5rKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgc2F2ZVNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwic3ViTWFyaW5lXCIgJiYgc2F2ZVNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmXG4gICAgICAgICAgc2F2ZVNoaXBzW2ldLmlzU3VuaygpXG4gICAgICAgICkge1xuICAgICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3Vua1NoaXBzID09PSA1KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0IGJvYXJkKCkge1xuICAgICAgICByZXR1cm4gWy4uLmJvYXJkXTtcbiAgICAgIH0sXG4gICAgICBpc0NlbGxBdmFpbGFibGUsXG4gICAgICBwbGFjZVNoaXAsXG4gICAgICBwcmludEJvYXJkLFxuICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgIG1pc3NlZEF0dGFja3NQbGF5ZXIsXG4gICAgICBtaXNzZWRBdHRhY2tzQ29tcHV0ZXIsXG4gICAgICBhcmVBbGxTaGlwc1N1bmssXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdhbWVCb2FyZCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGJhdHRsZVNoaXBCb2FyZCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmNvbnN0IHJhbmRvbVVVSUQgPSBmdW5jdGlvbiBiKGEpIHtcbiAgcmV0dXJuIGFcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAoYSBeICgoTWF0aC5yYW5kb20oKSAqIDE2KSA+PiAoYSAvIDQpKSkudG9TdHJpbmcoMTYpXG4gICAgOiAoWzFlN10gKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYik7XG59O1xuXG5jb25zdCBiYXR0bGVTaGlwTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBTaGlwID0gKFxuICAgIG5hbWUsXG4gICAgbGVuZ3RoLFxuICAgIG51bWJlck9mSGl0cyxcbiAgICBpc1NoaXBTdW5rLFxuICAgIGlzUGxhY2VkLFxuICAgIGlkID0gcmFuZG9tVVVJRCgpXG4gICkgPT4ge1xuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBUYWtpbmdIaXQgPSBudW1iZXJPZkhpdHMrKztcblxuICAgICAgaWYgKHNoaXBUYWtpbmdIaXQgPj0gbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBcIlRoZSBzaGlwLCBjYW5ub3QgYmUgaGl0IGFueW1vcmUhXCI7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgU2hpcCAke25hbWV9IGdvdCBoaXRgKTtcblxuICAgICAgcmV0dXJuIHsgbnVtYmVyT2ZIaXRzIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgIGlmIChuYW1lID09PSBcImNhcnJpZXJcIiAmJiBsZW5ndGggPT09IDUgJiYgbnVtYmVyT2ZIaXRzID09PSA1KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FycmllciBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobmFtZSA9PT0gXCJiYXR0bGVTaGlwXCIgJiYgbGVuZ3RoID09PSA0ICYmIG51bWJlck9mSGl0cyA9PT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJhdHRsZXNoaXAgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiBsZW5ndGggPT09IDMgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVzdHJveWVyIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFwic3ViTWFyaW5lXCIgJiYgbGVuZ3RoID09PSAzICYmIG51bWJlck9mSGl0cyA9PT0gMykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Ym1hcmluZSBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBcInBhdHJvbEJvYXRcIiAmJiBsZW5ndGggPT09IDIgJiYgbnVtYmVyT2ZIaXRzID09PSAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGF0cm9sQm9hdCBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICB9LFxuICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgIH0sXG4gICAgICBnZXQgbnVtYmVyT2ZIaXRzKCkge1xuICAgICAgICByZXR1cm4gbnVtYmVyT2ZIaXRzO1xuICAgICAgfSxcbiAgICAgIHNldCBudW1iZXJPZkhpdHModmFsdWUpIHtcbiAgICAgICAgbnVtYmVyT2ZIaXRzID0gdmFsdWU7XG4gICAgICB9LFxuICAgICAgZ2V0IGlzU2hpcFN1bmsoKSB7XG4gICAgICAgIHJldHVybiBpc1NoaXBTdW5rO1xuICAgICAgfSxcbiAgICAgIHNldCBpc1NoaXBTdW5rKHZhbHVlKSB7XG4gICAgICAgIGlzU2hpcFN1bmsgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBnZXQgaXNQbGFjZWQoKSB7XG4gICAgICAgIHJldHVybiBpc1BsYWNlZDtcbiAgICAgIH0sXG4gICAgICBzZXQgaXNQbGFjZWQodmFsdWUpIHtcbiAgICAgICAgaXNQbGFjZWQgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH0sXG4gICAgICBoaXQsXG4gICAgICBpc1N1bmssXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIFNoaXAsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBiYXR0bGVTaGlwTG9naWMgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3MDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnBsYXllci1ib2FyZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21wdXRlci1ib2FyZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBsZWZ0OiA2NDBweDtcXG4gIHRvcDogMjUwcHg7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kaWFsb2ctY29udGFpbmVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cXG4ucGxheWVyLW5hbWUsXFxuLnBsYXllci1uYW1lLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLnBsYXllci1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlbmRlci1zaGlwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubWlzc2VkLWF0dGFja3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zaGlwLWF0dGFja3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcwMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcblxcbi5oZWFkZXItbmFtZSB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kaWFsb2cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIGxlZnQ6IDY0MHB4O1xcbiAgdG9wOiAyNTBweDtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmRpYWxvZy1jb250YWluZXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcblxcbi5wbGF5ZXItbmFtZSxcXG4ucGxheWVyLW5hbWUtaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmluc3RydWN0aW9ucy1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ucGxheWVyLWluZm9ybWF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVuZGVyLXNoaXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5taXNzZWQtYXR0YWNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnNoaXAtYXR0YWNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBiYXR0bGVTaGlwSW50ZXJmYWNlIH0gZnJvbSBcIi4vQ29udHJvbGxlci9JbnRlcmZhY2VcIjtcblxuaW1wb3J0IHsgYmF0dGxlU2hpcEdhbWUgfSBmcm9tIFwiLi9Db250cm9sbGVyL1BsYXllclwiO1xuXG5iYXR0bGVTaGlwR2FtZS5wbGFjZUFsbFNoaXBzV2l0aEhhcmRjb2RlZENvb3JkaW5hdGVzKCk7XG5cbmJhdHRsZVNoaXBJbnRlcmZhY2UucmVuZGVyUGxheWVyQm9hcmQoKTtcblxuYmF0dGxlU2hpcEludGVyZmFjZS5yZW5kZXJDb21wdXRlckJvYXJkKCk7XG4iXSwibmFtZXMiOlsiYmF0dGxlU2hpcEdhbWUiLCJwbGF5ZXJCb2FyZCIsImNvbXB1dGVyQm9hcmQiLCJiYXR0bGVTaGlwSW50ZXJmYWNlIiwiZ2V0UGxheWVyQm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb21wdXRlckJvYXJkIiwicGxheWVyTmFtZUluZm9ybWF0aW9uIiwicmVzZXRGb3JtIiwicmVzZXQiLCJjcmVhdGVQbGF5ZXJBbmRHYW1lYm9hcmRzIiwicGxheWVyTmFtZSIsInZhbHVlIiwic2V0UGxheWVyIiwic2V0Rmlyc3RQbGF5ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRQbGF5ZXIiLCJyZW5kZXJQbGF5ZXJCb2FyZCIsImNvbHMiLCJyb3dzIiwidGV4dENvbnRlbnQiLCJpIiwiaiIsImNlbGwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiYm9hcmQiLCJuYW1lIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJDb21wdXRlckJvYXJkIiwiY2xpY2tFdmVudEhhbmRsZXIiLCJjbGlja2VkQ2VsbCIsInRhcmdldCIsImNvbCIsImdldEF0dHJpYnV0ZSIsInJvdyIsImdhbWVMb29wIiwiYmF0dGxlU2hpcExvZ2ljIiwiYmF0dGxlU2hpcEJvYXJkIiwiY2FycmllciIsIlNoaXAiLCJiYXR0bGVTaGlwIiwiZGVzdHJveWVyIiwic3ViTWFyaW5lIiwicGF0cm9sQm9hdCIsImdhbWVCb2FyZCIsIlBsYXllciIsInBsYXllciIsImNvbXB1dGVyIiwiZmlyc3RQbGF5ZXIiLCJnZXRDb21wdXRlciIsInN3aXRjaFBsYXllcnNUdXJucyIsImdldEZpcnN0UGxheWVyIiwiYXR0YWNrQ29tcHV0ZXJCb2FyZCIsInJlY2VpdmVBdHRhY2siLCJhdHRhY2tQbGF5ZXJCb2FyZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBsYWNlQWxsU2hpcHNXaXRoSGFyZGNvZGVkQ29vcmRpbmF0ZXMiLCJpc0NlbGxBdmFpbGFibGUiLCJwbGFjZVNoaXAiLCJwcmludEJvYXJkIiwibWlzc2VkQXR0YWNrc1BsYXllciIsImFyZUFsbFNoaXBzU3VuayIsIm1pc3NlZEF0dGFja3NDb21wdXRlciIsInNhdmVTaGlwcyIsInNoaXAiLCJkaXJlY3Rpb24iLCJzaGlwQXJyYXkiLCJsZW5ndGgiLCJwdXNoIiwiZXZlcnkiLCJpc1BsYWNlZCIsIkVycm9yIiwiZm9yRWFjaCIsImJvYXJkU3BvdCIsImhpdCIsImdldEJvYXJkQ29weSIsImZpbHRlcmVkTWlzc2VkQXR0YWNrcyIsInJldHJpZXZlTWlzc2VkQXR0YWNrcyIsImZpbHRlciIsImF0dGFjayIsInN1bmtTaGlwcyIsImlzU3VuayIsInJhbmRvbVVVSUQiLCJiIiwiYSIsInRvU3RyaW5nIiwicmVwbGFjZSIsIm51bWJlck9mSGl0cyIsImlzU2hpcFN1bmsiLCJpZCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInNoaXBUYWtpbmdIaXQiXSwic291cmNlUm9vdCI6IiJ9