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
  const playerBoard = document.querySelector(".player-board");
  const computerBoard = document.querySelector(".computer-board");
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
  const createPlayerBoard = () => {
    const cols = 10;
    const rows = 10;
    for (let i = 0; i < cols; i += 1) {
      for (let j = 0; j < rows; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-col", i);
        cell.setAttribute("data-row", j);
        // render ships

        playerBoard.appendChild(cell);
      }
    }
  };
  const createComputerBoard = () => {
    const cols = 10;
    const rows = 10;
    for (let i = 0; i < cols; i += 1) {
      for (let j = 0; j < rows; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-col", i);
        cell.setAttribute("data-row", j);
        // render ships

        computerBoard.appendChild(cell);
      }
    }
  };
  const clickEventHandler = e => {
    const clickedCell = e.target;
    const col = clickedCell.getAttribute("data-col");
    const row = clickedCell.getAttribute("data-row");
    if (!col && !row) return;
    _Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.gameLoop(col, row);
  };
  computerBoard.addEventListener("click", clickEventHandler);
  return {
    createPlayerBoard,
    createComputerBoard
  };
})();
battleShipInterface.createPlayerBoard();
battleShipInterface.createComputerBoard();


/***/ }),

/***/ "./src/Controller/Player.js":
/*!**********************************!*\
  !*** ./src/Controller/Player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   battleShipGame: () => (/* binding */ battleShipGame)
/* harmony export */ });
/* harmony import */ var _Model_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Ship */ "./src/Model/Ship.js");
/* harmony import */ var _Model_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Gameboard */ "./src/Model/Gameboard.js");


const playerBoard = _Model_Gameboard__WEBPACK_IMPORTED_MODULE_1__.battleShipBoard.gameBoard();
const computerBoard = _Model_Gameboard__WEBPACK_IMPORTED_MODULE_1__.battleShipBoard.gameBoard();
const carrier = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("carrier", 5, 0, false, false);
const battleShip = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("battleShip", 4, 0, false, false);
const destroyer = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("destroyer", 3, 0, false, false);
const subMarine = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("subMarine", 3, 0, false, false);
const patrolBoat = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipLogic.Ship("patrolBoat", 2, 0, false, false);
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
  const attackComputerBoard = (col, row) => {
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
  const placeAllShipsOnPredeterminedCoordinates = () => {
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
    attackComputerBoard(col, row, getFirstPlayer().name);
    computerBoard.printBoard();
    console.log("Player missed attacks", playerBoard.missedShipAttacksPlayer());
    if (computerBoard.areAllShipsSunk()) {
      return true;
    }
    switchPlayersTurns();
    attackPlayerBoard(playerBoard);
    console.log("Computer missed attacks", computerBoard.missedShipAttacksComputer());
    if (playerBoard.areAllShipsSunk()) {
      return true;
    }
    playerBoard.printBoard();
  };
  return {
    Player,
    setPlayer,
    setFirstPlayer,
    getPlayer,
    getComputer,
    switchPlayersTurns,
    getFirstPlayer,
    placeAllShipsOnPredeterminedCoordinates,
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
    const missedShipAttacksPlayer = () => {
      const computerBoard = battleShipBoard.gameBoard();
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
    const missedShipAttacksComputer = () => {
      const playerBoard = battleShipBoard.gameBoard();
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
    return {
      get board() {
        return [...board];
      },
      isCellAvailable,
      placeShip,
      printBoard,
      receiveAttack,
      missedShipAttacksPlayer,
      missedShipAttacksComputer,
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 700px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 60px;\n}\n\n.header-name {\n  font-size: large;\n}\n\n.player-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n  margin-right: 20px;\n}\n\n.cell {\n  outline: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell:hover {\n  cursor: pointer;\n}\n\n.computer-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n}\n\n.dialog {\n  position: absolute;\n  width: 250px;\n  height: 250px;\n  left: 640px;\n  top: 250px;\n  outline: 1px solid black;\n}\n\n.dialog-container-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 70px;\n}\n\n.player-name,\n.player-name-input {\n  margin-bottom: 10px;\n}\n\n.instructions-container {\n  padding-top: 10px;\n  padding-left: 30px;\n  padding-right: 20px;\n}\n\n.player-information {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.render-ships {\n  background-color: blue;\n}\n\n.render-misses {\n  background-color: green;\n}\n\n.render-attacks {\n  background-color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 700px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 60px;\n}\n\n.header-name {\n  font-size: large;\n}\n\n.player-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n  margin-right: 20px;\n}\n\n.cell {\n  outline: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell:hover {\n  cursor: pointer;\n}\n\n.computer-board {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  outline: 2px solid black;\n}\n\n.dialog {\n  position: absolute;\n  width: 250px;\n  height: 250px;\n  left: 640px;\n  top: 250px;\n  outline: 1px solid black;\n}\n\n.dialog-container-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 70px;\n}\n\n.player-name,\n.player-name-input {\n  margin-bottom: 10px;\n}\n\n.instructions-container {\n  padding-top: 10px;\n  padding-left: 30px;\n  padding-right: 20px;\n}\n\n.player-information {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.render-ships {\n  background-color: blue;\n}\n\n.render-misses {\n  background-color: green;\n}\n\n.render-attacks {\n  background-color: red;\n}\n"],"sourceRoot":""}]);
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



_Controller_Player__WEBPACK_IMPORTED_MODULE_2__.battleShipGame.placeAllShipsOnPredeterminedCoordinates();
_Controller_Interface__WEBPACK_IMPORTED_MODULE_1__.battleShipInterface.createPlayerBoard();
_Controller_Interface__WEBPACK_IMPORTED_MODULE_1__.battleShipInterface.createComputerBoard();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxZQUFZLENBQUM7SUFFMUQxQyxXQUFXLENBQUM2RCxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW5CLFNBQVMsRUFBRSxZQUFZLENBQUM7SUFFcEQxQyxXQUFXLENBQUM0RCxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWpCLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFFeEQzQyxXQUFXLENBQUM2RCxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWxCLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFFbEQzQyxXQUFXLENBQUM0RCxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWhCLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFFM0Q1QyxXQUFXLENBQUM2RCxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWpCLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFFckR6QyxhQUFhLENBQUN5RCxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXJCLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFFeERwQyxhQUFhLENBQUMwRCxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXRCLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFFbERwQyxhQUFhLENBQUN5RCxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW5CLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFFN0R0QyxhQUFhLENBQUMwRCxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXBCLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFFdkR0QyxhQUFhLENBQUN5RCxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWxCLFNBQVMsRUFBRSxZQUFZLENBQUM7SUFFNUR2QyxhQUFhLENBQUMwRCxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRW5CLFNBQVMsRUFBRSxZQUFZLENBQUM7SUFFdER2QyxhQUFhLENBQUN5RCxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWpCLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFFMUR4QyxhQUFhLENBQUMwRCxT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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBRXdDO0FBRVI7QUFFckQxQyw4REFBYyxDQUFDNkQsdUNBQXVDLENBQUMsQ0FBQztBQUV4RDVELHNFQUFtQixDQUFDa0IsaUJBQWlCLENBQUMsQ0FBQztBQUV2Q2xCLHNFQUFtQixDQUFDNkIsbUJBQW1CLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Db250cm9sbGVyL0ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL0NvbnRyb2xsZXIvUGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvTW9kZWwvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvTW9kZWwvU2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmF0dGxlU2hpcEdhbWUgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuY29uc3QgYmF0dGxlU2hpcEludGVyZmFjZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYm9hcmRcIik7XG5cbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIik7XG5cbiAgY29uc3QgcGxheWVyTmFtZUluZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItaW5mb3JtYXRpb25cIik7XG5cbiAgY29uc3QgcmVzZXRGb3JtID0gKCkgPT4ge1xuICAgIHBsYXllck5hbWVJbmZvcm1hdGlvbi5yZXNldCgpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVBsYXllckFuZEdhbWVib2FyZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW5hbWUtaW5wdXRcIikudmFsdWU7XG4gICAgYmF0dGxlU2hpcEdhbWUuc2V0UGxheWVyKHBsYXllck5hbWUpO1xuICAgIGJhdHRsZVNoaXBHYW1lLnNldEZpcnN0UGxheWVyKCk7XG4gICAgLy8gY3JlYXRlIGdhbWVib2FyZCBvYmplY3RzXG4gIH07XG5cbiAgcGxheWVyTmFtZUluZm9ybWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3JlYXRlUGxheWVyQW5kR2FtZWJvYXJkcygpO1xuICAgIGNvbnNvbGUubG9nKGJhdHRsZVNoaXBHYW1lLmdldFBsYXllcigpKTtcbiAgICByZXNldEZvcm0oKTtcbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlUGxheWVyQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29scyA9IDEwO1xuICAgIGNvbnN0IHJvd3MgPSAxMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3M7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiLCBpKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCBqKTtcbiAgICAgICAgLy8gcmVuZGVyIHNoaXBzXG5cbiAgICAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNvbXB1dGVyQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29scyA9IDEwO1xuICAgIGNvbnN0IHJvd3MgPSAxMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3M7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiLCBpKTtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCBqKTtcbiAgICAgICAgLy8gcmVuZGVyIHNoaXBzXG5cbiAgICAgICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xpY2tFdmVudEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGNsaWNrZWRDZWxsID0gZS50YXJnZXQ7XG4gICAgY29uc3QgY29sID0gY2xpY2tlZENlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIik7XG4gICAgY29uc3Qgcm93ID0gY2xpY2tlZENlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIik7XG4gICAgaWYgKCFjb2wgJiYgIXJvdykgcmV0dXJuO1xuICAgIGJhdHRsZVNoaXBHYW1lLmdhbWVMb29wKGNvbCwgcm93KTtcbiAgfTtcblxuICBjb21wdXRlckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0V2ZW50SGFuZGxlcik7XG5cbiAgcmV0dXJuIHsgY3JlYXRlUGxheWVyQm9hcmQsIGNyZWF0ZUNvbXB1dGVyQm9hcmQgfTtcbn0pKCk7XG5cbmJhdHRsZVNoaXBJbnRlcmZhY2UuY3JlYXRlUGxheWVyQm9hcmQoKTtcblxuYmF0dGxlU2hpcEludGVyZmFjZS5jcmVhdGVDb21wdXRlckJvYXJkKCk7XG5cbmV4cG9ydCB7IGJhdHRsZVNoaXBJbnRlcmZhY2UgfTtcbiIsImltcG9ydCB7IGJhdHRsZVNoaXBMb2dpYyB9IGZyb20gXCIuLi9Nb2RlbC9TaGlwXCI7XG5cbmltcG9ydCB7IGJhdHRsZVNoaXBCb2FyZCB9IGZyb20gXCIuLi9Nb2RlbC9HYW1lYm9hcmRcIjtcblxuY29uc3QgcGxheWVyQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbmNvbnN0IGNhcnJpZXIgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcImNhcnJpZXJcIiwgNSwgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3QgYmF0dGxlU2hpcCA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiYmF0dGxlU2hpcFwiLCA0LCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBkZXN0cm95ZXIgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcImRlc3Ryb3llclwiLCAzLCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBzdWJNYXJpbmUgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcInN1Yk1hcmluZVwiLCAzLCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBwYXRyb2xCb2F0ID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJwYXRyb2xCb2F0XCIsIDIsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGJhdHRsZVNoaXBHYW1lID0gKCgpID0+IHtcbiAgY29uc3QgUGxheWVyID0gKG5hbWUpID0+IG5hbWU7XG5cbiAgLy8gYWZ0ZXIgdGhlIHRoZSBnYW1lIGlzIHN0YXJ0ZWRcbiAgLy8gdXBvbiBjcmVhdGluZyB0aGUgcGxheWVyXG4gIC8vIGNyZWF0ZSB0aGUgcGxheWVyIG9iamVjdFxuICAvLyBhbmQgdGhlIGJvYXJkIG9iamVjdHNcblxuICBsZXQgcGxheWVyO1xuXG4gIGNvbnN0IGNvbXB1dGVyID0geyBuYW1lOiBcIkNvbXB1dGVyXCIgfTtcblxuICBjb25zdCBzZXRQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICAgIHBsYXllciA9IFBsYXllcihuYW1lKTtcbiAgfTtcblxuICBsZXQgZmlyc3RQbGF5ZXIgPSBwbGF5ZXI7XG5cbiAgY29uc3Qgc2V0Rmlyc3RQbGF5ZXIgPSAoKSA9PiB7XG4gICAgZmlyc3RQbGF5ZXIgPSBwbGF5ZXI7XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4gcGxheWVyO1xuXG4gIGNvbnN0IGdldENvbXB1dGVyID0gKCkgPT4gY29tcHV0ZXI7XG5cbiAgY29uc3Qgc3dpdGNoUGxheWVyc1R1cm5zID0gKCkgPT4ge1xuICAgIGZpcnN0UGxheWVyID0gZmlyc3RQbGF5ZXIgPT09IHBsYXllciA/IGNvbXB1dGVyIDogcGxheWVyO1xuICB9O1xuXG4gIGNvbnN0IGdldEZpcnN0UGxheWVyID0gKCkgPT4gZmlyc3RQbGF5ZXI7XG5cbiAgY29uc3QgYXR0YWNrQ29tcHV0ZXJCb2FyZCA9IChjb2wsIHJvdykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb2wsIHJvdykpO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1BsYXllckJvYXJkID0gKHBsYXllckJvYXJkKSA9PiB7XG4gICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuXG4gICAgd2hpbGUgKFxuICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb2wsIHJvdykgPT09IFwiWW91IGNhbnQgYXR0YWNrIHRoZSBzYW1lIHNwb3RcIlxuICAgICkge1xuICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZUFsbFNoaXBzT25QcmVkZXRlcm1pbmVkQ29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDAsIGNhcnJpZXIsIFwidmVydGljYWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMSwgMCwgY2FycmllciwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgxLCAzLCBiYXR0bGVTaGlwLCBcImhvcml6b250YWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMSwgMywgYmF0dGxlU2hpcCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDMsIDUsIGRlc3Ryb3llciwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKDMsIDUsIGRlc3Ryb3llciwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDIsIDQsIHN1Yk1hcmluZSwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgyLCA0LCBzdWJNYXJpbmUsIFwidmVydGljYWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoNiwgNiwgcGF0cm9sQm9hdCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKDYsIDYsIHBhdHJvbEJvYXQsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDAsIGNhcnJpZXIsIFwidmVydGljYWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgxLCAwLCBjYXJyaWVyLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMSwgMywgYmF0dGxlU2hpcCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoMSwgMywgYmF0dGxlU2hpcCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMywgNSwgZGVzdHJveWVyLCBcImhvcml6b250YWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgzLCA1LCBkZXN0cm95ZXIsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDIsIDQsIHN1Yk1hcmluZSwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDIsIDQsIHN1Yk1hcmluZSwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDgsIDIsIHBhdHJvbEJvYXQsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDgsIDIsIHBhdHJvbEJvYXQsIFwiaG9yaXpvbnRhbFwiKTtcbiAgfTtcblxuICBjb25zdCBnYW1lTG9vcCA9IChjb2wsIHJvdykgPT4ge1xuICAgIGF0dGFja0NvbXB1dGVyQm9hcmQoY29sLCByb3csIGdldEZpcnN0UGxheWVyKCkubmFtZSk7XG5cbiAgICBjb21wdXRlckJvYXJkLnByaW50Qm9hcmQoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIG1pc3NlZCBhdHRhY2tzXCIsIHBsYXllckJvYXJkLm1pc3NlZFNoaXBBdHRhY2tzUGxheWVyKCkpO1xuXG4gICAgaWYgKGNvbXB1dGVyQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN3aXRjaFBsYXllcnNUdXJucygpO1xuXG4gICAgYXR0YWNrUGxheWVyQm9hcmQocGxheWVyQm9hcmQpO1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIkNvbXB1dGVyIG1pc3NlZCBhdHRhY2tzXCIsXG4gICAgICBjb21wdXRlckJvYXJkLm1pc3NlZFNoaXBBdHRhY2tzQ29tcHV0ZXIoKVxuICAgICk7XG5cbiAgICBpZiAocGxheWVyQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHBsYXllckJvYXJkLnByaW50Qm9hcmQoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIFBsYXllcixcbiAgICBzZXRQbGF5ZXIsXG4gICAgc2V0Rmlyc3RQbGF5ZXIsXG4gICAgZ2V0UGxheWVyLFxuICAgIGdldENvbXB1dGVyLFxuICAgIHN3aXRjaFBsYXllcnNUdXJucyxcbiAgICBnZXRGaXJzdFBsYXllcixcbiAgICBwbGFjZUFsbFNoaXBzT25QcmVkZXRlcm1pbmVkQ29vcmRpbmF0ZXMsXG4gICAgZ2FtZUxvb3AsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBiYXR0bGVTaGlwR2FtZSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuY29uc3QgYmF0dGxlU2hpcEJvYXJkID0gKCgpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbHMgPSAxMDtcbiAgICBjb25zdCByb3dzID0gMTA7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBjb25zdCBzYXZlU2hpcHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSArPSAxKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqICs9IDEpIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBcIlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQ2VsbEF2YWlsYWJsZSA9IChjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBzaGlwQXJyYXkucHVzaChib2FyZFtjb2wgKyBpXVtyb3ddKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHNoaXBBcnJheS5wdXNoKGJvYXJkW2NvbF1bcm93ICsgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hpcEFycmF5LmV2ZXJ5KChjZWxsKSA9PiBjZWxsID09PSBcIlwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvbCwgcm93LCBzaGlwLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXNDZWxsQXZhaWxhYmxlKGNvbCwgcm93LCBzaGlwLCBkaXJlY3Rpb24pID09PSB0cnVlICYmXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbY29sICsgaV1bcm93XSA9IHNoaXA7XG4gICAgICAgICAgc2hpcC5pc1BsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSAmJlxuICAgICAgICBkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbY29sXVtyb3cgKyBpXSA9IHNoaXA7XG4gICAgICAgICAgc2hpcC5pc1BsYWNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50XCIpO1xuICAgICAgfVxuICAgICAgc2F2ZVNoaXBzLnB1c2goc2hpcCk7XG4gICAgICByZXR1cm4gc2hpcDtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJpbnRCb2FyZCA9ICgpID0+IHtcbiAgICAgIGJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2VsbCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb2wsIHJvdykgPT4ge1xuICAgICAgY29uc3QgYm9hcmRTcG90ID0gYm9hcmRbY29sXVtyb3ddO1xuXG4gICAgICBpZiAoYm9hcmRbY29sXVtyb3ddID09PSBcIlwiKSB7XG4gICAgICAgIGJvYXJkW2NvbF1bcm93XSA9IFwiTVwiO1xuICAgICAgICByZXR1cm4gXCJNaXNzXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChib2FyZFtjb2xdW3Jvd10gIT09IFwiSFwiICYmIGJvYXJkW2NvbF1bcm93XSAhPT0gXCJNXCIpIHtcbiAgICAgICAgYm9hcmRbY29sXVtyb3ddID0gXCJIXCI7XG4gICAgICAgIHJldHVybiBib2FyZFNwb3QuaGl0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJZb3UgY2FudCBoaXQgdGhlIHNhbWUgc3BvdFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtaXNzZWRTaGlwQXR0YWNrc1BsYXllciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbiAgICAgIGNvbnN0IGdldEJvYXJkQ29weSA9IGNvbXB1dGVyQm9hcmQuYm9hcmQ7XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkTWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdldEJvYXJkQ29weS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCByZXRyaWV2ZU1pc3NlZEF0dGFja3MgPSBnZXRCb2FyZENvcHlbaV0uZmlsdGVyKFxuICAgICAgICAgIChhdHRhY2spID0+IGF0dGFjayA9PT0gXCJNXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJldHJpZXZlTWlzc2VkQXR0YWNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBmaWx0ZXJlZE1pc3NlZEF0dGFja3MucHVzaChyZXRyaWV2ZU1pc3NlZEF0dGFja3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyZWRNaXNzZWRBdHRhY2tzO1xuICAgIH07XG5cbiAgICBjb25zdCBtaXNzZWRTaGlwQXR0YWNrc0NvbXB1dGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbiAgICAgIGNvbnN0IGdldEJvYXJkQ29weSA9IHBsYXllckJvYXJkLmJvYXJkO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZE1pc3NlZEF0dGFja3MgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRCb2FyZENvcHkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgcmV0cmlldmVNaXNzZWRBdHRhY2tzID0gZ2V0Qm9hcmRDb3B5W2ldLmZpbHRlcihcbiAgICAgICAgICAoYXR0YWNrKSA9PiBhdHRhY2sgPT09IFwiTVwiXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZXRyaWV2ZU1pc3NlZEF0dGFja3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgZmlsdGVyZWRNaXNzZWRBdHRhY2tzLnB1c2gocmV0cmlldmVNaXNzZWRBdHRhY2tzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbHRlcmVkTWlzc2VkQXR0YWNrcztcbiAgICB9O1xuXG4gICAgY29uc3QgYXJlQWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgbGV0IHN1bmtTaGlwcyA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZVNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzYXZlU2hpcHNbaV0ubmFtZSA9PT0gXCJjYXJyaWVyXCIgJiYgc2F2ZVNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwiYmF0dGxlU2hpcFwiICYmXG4gICAgICAgICAgc2F2ZVNoaXBzW2ldLmlzU3VuaygpXG4gICAgICAgICkge1xuICAgICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHNhdmVTaGlwc1tpXS5uYW1lID09PSBcImRlc3Ryb3llclwiICYmIHNhdmVTaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHNhdmVTaGlwc1tpXS5uYW1lID09PSBcInN1Yk1hcmluZVwiICYmIHNhdmVTaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHNhdmVTaGlwc1tpXS5uYW1lID09PSBcInBhdHJvbEJvYXRcIiAmJlxuICAgICAgICAgIHNhdmVTaGlwc1tpXS5pc1N1bmsoKVxuICAgICAgICApIHtcbiAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1bmtTaGlwcyA9PT0gNSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBib2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5ib2FyZF07XG4gICAgICB9LFxuICAgICAgaXNDZWxsQXZhaWxhYmxlLFxuICAgICAgcGxhY2VTaGlwLFxuICAgICAgcHJpbnRCb2FyZCxcbiAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICBtaXNzZWRTaGlwQXR0YWNrc1BsYXllcixcbiAgICAgIG1pc3NlZFNoaXBBdHRhY2tzQ29tcHV0ZXIsXG4gICAgICBhcmVBbGxTaGlwc1N1bmssXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdhbWVCb2FyZCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGJhdHRsZVNoaXBCb2FyZCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmNvbnN0IHJhbmRvbVVVSUQgPSBmdW5jdGlvbiBiKGEpIHtcbiAgcmV0dXJuIGFcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAoYSBeICgoTWF0aC5yYW5kb20oKSAqIDE2KSA+PiAoYSAvIDQpKSkudG9TdHJpbmcoMTYpXG4gICAgOiAoWzFlN10gKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYik7XG59O1xuXG5jb25zdCBiYXR0bGVTaGlwTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBTaGlwID0gKFxuICAgIG5hbWUsXG4gICAgbGVuZ3RoLFxuICAgIG51bWJlck9mSGl0cyxcbiAgICBpc1NoaXBTdW5rLFxuICAgIGlzUGxhY2VkLFxuICAgIGlkID0gcmFuZG9tVVVJRCgpXG4gICkgPT4ge1xuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBUYWtpbmdIaXQgPSBudW1iZXJPZkhpdHMrKztcblxuICAgICAgaWYgKHNoaXBUYWtpbmdIaXQgPj0gbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBcIlRoZSBzaGlwLCBjYW5ub3QgYmUgaGl0IGFueW1vcmUhXCI7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhgU2hpcCAke25hbWV9IGdvdCBoaXRgKTtcblxuICAgICAgcmV0dXJuIHsgbnVtYmVyT2ZIaXRzIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgIGlmIChuYW1lID09PSBcImNhcnJpZXJcIiAmJiBsZW5ndGggPT09IDUgJiYgbnVtYmVyT2ZIaXRzID09PSA1KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FycmllciBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobmFtZSA9PT0gXCJiYXR0bGVTaGlwXCIgJiYgbGVuZ3RoID09PSA0ICYmIG51bWJlck9mSGl0cyA9PT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJhdHRsZXNoaXAgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gXCJkZXN0cm95ZXJcIiAmJiBsZW5ndGggPT09IDMgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVzdHJveWVyIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFwic3ViTWFyaW5lXCIgJiYgbGVuZ3RoID09PSAzICYmIG51bWJlck9mSGl0cyA9PT0gMykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Ym1hcmluZSBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBcInBhdHJvbEJvYXRcIiAmJiBsZW5ndGggPT09IDIgJiYgbnVtYmVyT2ZIaXRzID09PSAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGF0cm9sQm9hdCBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICB9LFxuICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgIH0sXG4gICAgICBnZXQgbnVtYmVyT2ZIaXRzKCkge1xuICAgICAgICByZXR1cm4gbnVtYmVyT2ZIaXRzO1xuICAgICAgfSxcbiAgICAgIHNldCBudW1iZXJPZkhpdHModmFsdWUpIHtcbiAgICAgICAgbnVtYmVyT2ZIaXRzID0gdmFsdWU7XG4gICAgICB9LFxuICAgICAgZ2V0IGlzU2hpcFN1bmsoKSB7XG4gICAgICAgIHJldHVybiBpc1NoaXBTdW5rO1xuICAgICAgfSxcbiAgICAgIHNldCBpc1NoaXBTdW5rKHZhbHVlKSB7XG4gICAgICAgIGlzU2hpcFN1bmsgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBnZXQgaXNQbGFjZWQoKSB7XG4gICAgICAgIHJldHVybiBpc1BsYWNlZDtcbiAgICAgIH0sXG4gICAgICBzZXQgaXNQbGFjZWQodmFsdWUpIHtcbiAgICAgICAgaXNQbGFjZWQgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH0sXG4gICAgICBoaXQsXG4gICAgICBpc1N1bmssXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIFNoaXAsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBiYXR0bGVTaGlwTG9naWMgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3MDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnBsYXllci1ib2FyZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21wdXRlci1ib2FyZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBsZWZ0OiA2NDBweDtcXG4gIHRvcDogMjUwcHg7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kaWFsb2ctY29udGFpbmVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cXG4ucGxheWVyLW5hbWUsXFxuLnBsYXllci1uYW1lLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLnBsYXllci1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlbmRlci1zaGlwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucmVuZGVyLW1pc3NlcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnJlbmRlci1hdHRhY2tzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3MDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnBsYXllci1ib2FyZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21wdXRlci1ib2FyZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBsZWZ0OiA2NDBweDtcXG4gIHRvcDogMjUwcHg7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5kaWFsb2ctY29udGFpbmVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cXG4ucGxheWVyLW5hbWUsXFxuLnBsYXllci1uYW1lLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLnBsYXllci1pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlbmRlci1zaGlwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucmVuZGVyLW1pc3NlcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnJlbmRlci1hdHRhY2tzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCB7IGJhdHRsZVNoaXBJbnRlcmZhY2UgfSBmcm9tIFwiLi9Db250cm9sbGVyL0ludGVyZmFjZVwiO1xuXG5pbXBvcnQgeyBiYXR0bGVTaGlwR2FtZSB9IGZyb20gXCIuL0NvbnRyb2xsZXIvUGxheWVyXCI7XG5cbmJhdHRsZVNoaXBHYW1lLnBsYWNlQWxsU2hpcHNPblByZWRldGVybWluZWRDb29yZGluYXRlcygpO1xuXG5iYXR0bGVTaGlwSW50ZXJmYWNlLmNyZWF0ZVBsYXllckJvYXJkKCk7XG5cbmJhdHRsZVNoaXBJbnRlcmZhY2UuY3JlYXRlQ29tcHV0ZXJCb2FyZCgpO1xuIl0sIm5hbWVzIjpbImJhdHRsZVNoaXBHYW1lIiwiYmF0dGxlU2hpcEludGVyZmFjZSIsInBsYXllckJvYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29tcHV0ZXJCb2FyZCIsInBsYXllck5hbWVJbmZvcm1hdGlvbiIsInJlc2V0Rm9ybSIsInJlc2V0IiwiY3JlYXRlUGxheWVyQW5kR2FtZWJvYXJkcyIsInBsYXllck5hbWUiLCJ2YWx1ZSIsInNldFBsYXllciIsInNldEZpcnN0UGxheWVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwiZ2V0UGxheWVyIiwiY3JlYXRlUGxheWVyQm9hcmQiLCJjb2xzIiwicm93cyIsImkiLCJqIiwiY2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUNvbXB1dGVyQm9hcmQiLCJjbGlja0V2ZW50SGFuZGxlciIsImNsaWNrZWRDZWxsIiwidGFyZ2V0IiwiY29sIiwiZ2V0QXR0cmlidXRlIiwicm93IiwiZ2FtZUxvb3AiLCJiYXR0bGVTaGlwTG9naWMiLCJiYXR0bGVTaGlwQm9hcmQiLCJnYW1lQm9hcmQiLCJjYXJyaWVyIiwiU2hpcCIsImJhdHRsZVNoaXAiLCJkZXN0cm95ZXIiLCJzdWJNYXJpbmUiLCJwYXRyb2xCb2F0IiwiUGxheWVyIiwibmFtZSIsInBsYXllciIsImNvbXB1dGVyIiwiZmlyc3RQbGF5ZXIiLCJnZXRDb21wdXRlciIsInN3aXRjaFBsYXllcnNUdXJucyIsImdldEZpcnN0UGxheWVyIiwiYXR0YWNrQ29tcHV0ZXJCb2FyZCIsInJlY2VpdmVBdHRhY2siLCJhdHRhY2tQbGF5ZXJCb2FyZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBsYWNlQWxsU2hpcHNPblByZWRldGVybWluZWRDb29yZGluYXRlcyIsImlzQ2VsbEF2YWlsYWJsZSIsInBsYWNlU2hpcCIsInByaW50Qm9hcmQiLCJtaXNzZWRTaGlwQXR0YWNrc1BsYXllciIsImFyZUFsbFNoaXBzU3VuayIsIm1pc3NlZFNoaXBBdHRhY2tzQ29tcHV0ZXIiLCJib2FyZCIsInNhdmVTaGlwcyIsInNoaXAiLCJkaXJlY3Rpb24iLCJzaGlwQXJyYXkiLCJsZW5ndGgiLCJwdXNoIiwiZXZlcnkiLCJpc1BsYWNlZCIsIkVycm9yIiwiZm9yRWFjaCIsImJvYXJkU3BvdCIsImhpdCIsImdldEJvYXJkQ29weSIsImZpbHRlcmVkTWlzc2VkQXR0YWNrcyIsInJldHJpZXZlTWlzc2VkQXR0YWNrcyIsImZpbHRlciIsImF0dGFjayIsInN1bmtTaGlwcyIsImlzU3VuayIsInJhbmRvbVVVSUQiLCJiIiwiYSIsInRvU3RyaW5nIiwicmVwbGFjZSIsIm51bWJlck9mSGl0cyIsImlzU2hpcFN1bmsiLCJpZCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInNoaXBUYWtpbmdIaXQiXSwic291cmNlUm9vdCI6IiJ9