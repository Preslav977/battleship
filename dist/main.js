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
/* harmony export */   Player: () => (/* binding */ Player)
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
const Player = name => {
  const player = {
    name: "Player"
  };
  const computer = {
    name: "Computer"
  };

  // const setPlayer = (name) => {
  //   player = Player(name);
  // };

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
  const printTurn = () => {
    console.log(`${getFirstPlayer()} turn`);
  };
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
  const gameLoop = (col, row) => {
    playerBoard.isCellAvailable(1, 0, carrier, "vertical");
    playerBoard.placeShip(1, 0, carrier, "vertical");
    playerBoard.isCellAvailable(1, 3, battleShip, "horizontal");
    playerBoard.placeShip(1, 3, battleShip, "horizontal");
    playerBoard.isCellAvailable(3, 5, destroyer, "horizontal");
    playerBoard.placeShip(3, 5, destroyer, "horizontal");
    playerBoard.isCellAvailable(2, 4, subMarine, "vertical");
    playerBoard.placeShip(2, 2, subMarine, "vertical");
    playerBoard.isCellAvailable(6, 6, patrolBoat, "horizontal");
    playerBoard.placeShip(6, 6, patrolBoat, "horizontal");
    computerBoard.isCellAvailable(1, 0, carrier, "vertical");
    computerBoard.placeShip(1, 0, carrier, "vertical");
    computerBoard.isCellAvailable(1, 3, battleShip, "horizontal");
    computerBoard.placeShip(1, 3, battleShip, "horizontal");
    computerBoard.isCellAvailable(3, 5, destroyer, "horizontal");
    computerBoard.placeShip(3, 5, destroyer, "horizontal");
    computerBoard.isCellAvailable(2, 4, subMarine, "vertical");
    computerBoard.placeShip(2, 2, subMarine, "vertical");
    computerBoard.isCellAvailable(6, 6, patrolBoat, "horizontal");
    computerBoard.placeShip(6, 6, patrolBoat, "horizontal");
    console.log(attackComputerBoard(col, row, getFirstPlayer()));
    computerBoard.printBoard();
    switchPlayersTurns();
    printTurn();
    console.log(attackPlayerBoard(playerBoard));
    playerBoard.printBoard();
  };
  printTurn();
  return {
    name,
    // setPlayer,
    setFirstPlayer,
    getPlayer,
    getComputer,
    switchPlayersTurns,
    getFirstPlayer,
    printTurn,
    attackComputerBoard,
    attackPlayerBoard,
    gameLoop
  };
};


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
      const getAllShips = board[col][row];
      if (board[col][row] === "") {
        board[col][row] = "M";
        return "Miss";
      }
      if (board[col][row] === getAllShips && board[col][row] !== "H" && board[col][row] === getAllShips && board[col][row] !== "M") {
        board[col][row] = "H";
        return getAllShips.hit();
      }
      return "You cant hit the same spot";
    };
    const missedShipAttacks = () => {
      const getBoardCopy = [...board];
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
      isCellAvailable,
      placeShip,
      printBoard,
      receiveAttack,
      missedShipAttacks,
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controller_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller/Player */ "./src/Controller/Player.js");

const player = (0,_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.Player)("Player");
console.log(player.gameLoop(1, 0));
console.log(player.gameLoop(5, 0));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BCLENBQUM7TUFDRCxJQUFJekIsUUFBUUEsQ0FBQSxFQUFHO1FBQ2IsT0FBT0EsUUFBUTtNQUNqQixDQUFDO01BQ0QsSUFBSUEsUUFBUUEsQ0FBQ3lCLEtBQUssRUFBRTtRQUNsQnpCLFFBQVEsR0FBR3lCLEtBQUs7TUFDbEIsQ0FBQztNQUNELElBQUlKLEVBQUVBLENBQUEsRUFBRztRQUNQLE9BQU9BLEVBQUU7TUFDWCxDQUFDO01BQ0RqQixHQUFHO01BQ0hTO0lBQ0YsQ0FBQztFQUNILENBQUM7RUFFRCxPQUFPO0lBQ0x4RDtFQUNGLENBQUM7QUFDSCxDQUFDLEVBQUUsQ0FBQzs7Ozs7OztVQzNGSjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjZDO0FBRTdDLE1BQU1PLE1BQU0sR0FBR0YsMERBQU0sQ0FBQyxRQUFRLENBQUM7QUFFL0JXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixNQUFNLENBQUNtQixRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWxDVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsTUFBTSxDQUFDbUIsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Db250cm9sbGVyL1BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL01vZGVsL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL01vZGVsL1NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmF0dGxlU2hpcExvZ2ljIH0gZnJvbSBcIi4uL01vZGVsL1NoaXBcIjtcblxuaW1wb3J0IHsgYmF0dGxlU2hpcEJvYXJkIH0gZnJvbSBcIi4uL01vZGVsL0dhbWVib2FyZFwiO1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGJhdHRsZVNoaXBCb2FyZC5nYW1lQm9hcmQoKTtcblxuY29uc3QgY29tcHV0ZXJCb2FyZCA9IGJhdHRsZVNoaXBCb2FyZC5nYW1lQm9hcmQoKTtcblxuY29uc3QgY2FycmllciA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiY2FycmllclwiLCA1LCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBiYXR0bGVTaGlwID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJiYXR0bGVTaGlwXCIsIDQsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGRlc3Ryb3llciA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiZGVzdHJveWVyXCIsIDMsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IHN1Yk1hcmluZSA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwic3ViTWFyaW5lXCIsIDMsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IHBhdHJvbEJvYXQgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcInBhdHJvbEJvYXRcIiwgMiwgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgY29uc3QgcGxheWVyID0geyBuYW1lOiBcIlBsYXllclwiIH07XG5cbiAgY29uc3QgY29tcHV0ZXIgPSB7IG5hbWU6IFwiQ29tcHV0ZXJcIiB9O1xuXG4gIC8vIGNvbnN0IHNldFBsYXllciA9IChuYW1lKSA9PiB7XG4gIC8vICAgcGxheWVyID0gUGxheWVyKG5hbWUpO1xuICAvLyB9O1xuXG4gIGxldCBmaXJzdFBsYXllciA9IHBsYXllcjtcblxuICBjb25zdCBzZXRGaXJzdFBsYXllciA9ICgpID0+IHtcbiAgICBmaXJzdFBsYXllciA9IHBsYXllcjtcbiAgfTtcblxuICBjb25zdCBnZXRQbGF5ZXIgPSAoKSA9PiBwbGF5ZXI7XG5cbiAgY29uc3QgZ2V0Q29tcHV0ZXIgPSAoKSA9PiBjb21wdXRlcjtcblxuICBjb25zdCBzd2l0Y2hQbGF5ZXJzVHVybnMgPSAoKSA9PiB7XG4gICAgZmlyc3RQbGF5ZXIgPSBmaXJzdFBsYXllciA9PT0gcGxheWVyID8gY29tcHV0ZXIgOiBwbGF5ZXI7XG4gIH07XG5cbiAgY29uc3QgZ2V0Rmlyc3RQbGF5ZXIgPSAoKSA9PiBmaXJzdFBsYXllcjtcblxuICBjb25zdCBwcmludFR1cm4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYCR7Z2V0Rmlyc3RQbGF5ZXIoKX0gdHVybmApO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja0NvbXB1dGVyQm9hcmQgPSAoY29sLCByb3cpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2soY29sLCByb3cpKTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tQbGF5ZXJCb2FyZCA9IChwbGF5ZXJCb2FyZCkgPT4ge1xuICAgIGxldCBjb2wgPSBNYXRoLmZsb29yKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcblxuICAgIHdoaWxlIChcbiAgICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soY29sLCByb3cpID09PSBcIllvdSBjYW50IGF0dGFjayB0aGUgc2FtZSBzcG90XCJcbiAgICApIHtcbiAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2FtZUxvb3AgPSAoY29sLCByb3cpID0+IHtcbiAgICBwbGF5ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMSwgMCwgY2FycmllciwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgxLCAwLCBjYXJyaWVyLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDMsIGJhdHRsZVNoaXAsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgxLCAzLCBiYXR0bGVTaGlwLCBcImhvcml6b250YWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMywgNSwgZGVzdHJveWVyLCBcImhvcml6b250YWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMywgNSwgZGVzdHJveWVyLCBcImhvcml6b250YWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMiwgNCwgc3ViTWFyaW5lLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKDIsIDIsIHN1Yk1hcmluZSwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSg2LCA2LCBwYXRyb2xCb2F0LCBcImhvcml6b250YWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoNiwgNiwgcGF0cm9sQm9hdCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMSwgMCwgY2FycmllciwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDEsIDAsIGNhcnJpZXIsIFwidmVydGljYWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgxLCAzLCBiYXR0bGVTaGlwLCBcImhvcml6b250YWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgxLCAzLCBiYXR0bGVTaGlwLCBcImhvcml6b250YWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgzLCA1LCBkZXN0cm95ZXIsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDMsIDUsIGRlc3Ryb3llciwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMiwgNCwgc3ViTWFyaW5lLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoMiwgMiwgc3ViTWFyaW5lLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoNiwgNiwgcGF0cm9sQm9hdCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoNiwgNiwgcGF0cm9sQm9hdCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29uc29sZS5sb2coYXR0YWNrQ29tcHV0ZXJCb2FyZChjb2wsIHJvdywgZ2V0Rmlyc3RQbGF5ZXIoKSkpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wcmludEJvYXJkKCk7XG5cbiAgICBzd2l0Y2hQbGF5ZXJzVHVybnMoKTtcblxuICAgIHByaW50VHVybigpO1xuXG4gICAgY29uc29sZS5sb2coYXR0YWNrUGxheWVyQm9hcmQocGxheWVyQm9hcmQpKTtcblxuICAgIHBsYXllckJvYXJkLnByaW50Qm9hcmQoKTtcbiAgfTtcblxuICBwcmludFR1cm4oKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgLy8gc2V0UGxheWVyLFxuICAgIHNldEZpcnN0UGxheWVyLFxuICAgIGdldFBsYXllcixcbiAgICBnZXRDb21wdXRlcixcbiAgICBzd2l0Y2hQbGF5ZXJzVHVybnMsXG4gICAgZ2V0Rmlyc3RQbGF5ZXIsXG4gICAgcHJpbnRUdXJuLFxuICAgIGF0dGFja0NvbXB1dGVyQm9hcmQsXG4gICAgYXR0YWNrUGxheWVyQm9hcmQsXG4gICAgZ2FtZUxvb3AsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbmNvbnN0IGJhdHRsZVNoaXBCb2FyZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xzID0gMTA7XG4gICAgY29uc3Qgcm93cyA9IDEwO1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgY29uc3Qgc2F2ZVNoaXBzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHM7IGkgKz0gMSkge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaiArPSAxKSB7XG4gICAgICAgIGJvYXJkW2ldW2pdID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc0NlbGxBdmFpbGFibGUgPSAoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgc2hpcEFycmF5LnB1c2goYm9hcmRbY29sICsgaV1bcm93XSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBzaGlwQXJyYXkucHVzaChib2FyZFtjb2xdW3JvdyArIGldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNoaXBBcnJheS5ldmVyeSgoY2VsbCkgPT4gY2VsbCA9PT0gXCJcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSAmJlxuICAgICAgICBkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIlxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2NvbCArIGldW3Jvd10gPSBzaGlwO1xuICAgICAgICAgIHNoaXAuaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBpc0NlbGxBdmFpbGFibGUoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT09IHRydWUgJiZcbiAgICAgICAgZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIlxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2NvbF1bcm93ICsgaV0gPSBzaGlwO1xuICAgICAgICAgIHNoaXAuaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFpc0NlbGxBdmFpbGFibGUoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgIH1cbiAgICAgIHNhdmVTaGlwcy5wdXNoKHNoaXApO1xuICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IHByaW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgICBib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGwpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29sLCByb3cpID0+IHtcbiAgICAgIGNvbnN0IGdldEFsbFNoaXBzID0gYm9hcmRbY29sXVtyb3ddO1xuXG4gICAgICBpZiAoYm9hcmRbY29sXVtyb3ddID09PSBcIlwiKSB7XG4gICAgICAgIGJvYXJkW2NvbF1bcm93XSA9IFwiTVwiO1xuICAgICAgICByZXR1cm4gXCJNaXNzXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgYm9hcmRbY29sXVtyb3ddID09PSBnZXRBbGxTaGlwcyAmJlxuICAgICAgICBib2FyZFtjb2xdW3Jvd10gIT09IFwiSFwiICYmXG4gICAgICAgIGJvYXJkW2NvbF1bcm93XSA9PT0gZ2V0QWxsU2hpcHMgJiZcbiAgICAgICAgYm9hcmRbY29sXVtyb3ddICE9PSBcIk1cIlxuICAgICAgKSB7XG4gICAgICAgIGJvYXJkW2NvbF1bcm93XSA9IFwiSFwiO1xuICAgICAgICByZXR1cm4gZ2V0QWxsU2hpcHMuaGl0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJZb3UgY2FudCBoaXQgdGhlIHNhbWUgc3BvdFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtaXNzZWRTaGlwQXR0YWNrcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGdldEJvYXJkQ29weSA9IFsuLi5ib2FyZF07XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkTWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdldEJvYXJkQ29weS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCByZXRyaWV2ZU1pc3NlZEF0dGFja3MgPSBnZXRCb2FyZENvcHlbaV0uZmlsdGVyKFxuICAgICAgICAgIChhdHRhY2spID0+IGF0dGFjayA9PT0gXCJNXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJldHJpZXZlTWlzc2VkQXR0YWNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBmaWx0ZXJlZE1pc3NlZEF0dGFja3MucHVzaChyZXRyaWV2ZU1pc3NlZEF0dGFja3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyZWRNaXNzZWRBdHRhY2tzO1xuICAgIH07XG5cbiAgICBjb25zdCBhcmVBbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgICBsZXQgc3Vua1NoaXBzID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNhdmVTaGlwc1tpXS5uYW1lID09PSBcImNhcnJpZXJcIiAmJiBzYXZlU2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBzYXZlU2hpcHNbaV0ubmFtZSA9PT0gXCJiYXR0bGVTaGlwXCIgJiZcbiAgICAgICAgICBzYXZlU2hpcHNbaV0uaXNTdW5rKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgc2F2ZVNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwic3ViTWFyaW5lXCIgJiYgc2F2ZVNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmXG4gICAgICAgICAgc2F2ZVNoaXBzW2ldLmlzU3VuaygpXG4gICAgICAgICkge1xuICAgICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3Vua1NoaXBzID09PSA1KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNDZWxsQXZhaWxhYmxlLFxuICAgICAgcGxhY2VTaGlwLFxuICAgICAgcHJpbnRCb2FyZCxcbiAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICBtaXNzZWRTaGlwQXR0YWNrcyxcbiAgICAgIGFyZUFsbFNoaXBzU3VuayxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2FtZUJvYXJkLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgYmF0dGxlU2hpcEJvYXJkIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuY29uc3QgcmFuZG9tVVVJRCA9IGZ1bmN0aW9uIGIoYSkge1xuICByZXR1cm4gYVxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgIChhIF4gKChNYXRoLnJhbmRvbSgpICogMTYpID4+IChhIC8gNCkpKS50b1N0cmluZygxNilcbiAgICA6IChbMWU3XSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBiKTtcbn07XG5cbmNvbnN0IGJhdHRsZVNoaXBMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IFNoaXAgPSAoXG4gICAgbmFtZSxcbiAgICBsZW5ndGgsXG4gICAgbnVtYmVyT2ZIaXRzLFxuICAgIGlzU2hpcFN1bmssXG4gICAgaXNQbGFjZWQsXG4gICAgaWQgPSByYW5kb21VVUlEKClcbiAgKSA9PiB7XG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcFRha2luZ0hpdCA9IG51bWJlck9mSGl0cysrO1xuXG4gICAgICBpZiAoc2hpcFRha2luZ0hpdCA+PSBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFwiVGhlIHNoaXAsIGNhbm5vdCBiZSBoaXQgYW55bW9yZSFcIjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGBTaGlwICR7bmFtZX0gZ290IGhpdGApO1xuXG4gICAgICByZXR1cm4geyBudW1iZXJPZkhpdHMgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgaWYgKG5hbWUgPT09IFwiY2FycmllclwiICYmIGxlbmd0aCA9PT0gNSAmJiBudW1iZXJPZkhpdHMgPT09IDUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXJyaWVyIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lID09PSBcImJhdHRsZVNoaXBcIiAmJiBsZW5ndGggPT09IDQgJiYgbnVtYmVyT2ZIaXRzID09PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmF0dGxlc2hpcCBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBcImRlc3Ryb3llclwiICYmIGxlbmd0aCA9PT0gMyAmJiBudW1iZXJPZkhpdHMgPT09IDMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEZXN0cm95ZXIgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gXCJzdWJNYXJpbmVcIiAmJiBsZW5ndGggPT09IDMgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWFyaW5lIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIGxlbmd0aCA9PT0gMiAmJiBudW1iZXJPZkhpdHMgPT09IDIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXRyb2xCb2F0IGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH0sXG4gICAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIGdldCBudW1iZXJPZkhpdHMoKSB7XG4gICAgICAgIHJldHVybiBudW1iZXJPZkhpdHM7XG4gICAgICB9LFxuICAgICAgc2V0IG51bWJlck9mSGl0cyh2YWx1ZSkge1xuICAgICAgICBudW1iZXJPZkhpdHMgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBnZXQgaXNTaGlwU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIGlzU2hpcFN1bms7XG4gICAgICB9LFxuICAgICAgc2V0IGlzU2hpcFN1bmsodmFsdWUpIHtcbiAgICAgICAgaXNTaGlwU3VuayA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGdldCBpc1BsYWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIGlzUGxhY2VkO1xuICAgICAgfSxcbiAgICAgIHNldCBpc1BsYWNlZCh2YWx1ZSkge1xuICAgICAgICBpc1BsYWNlZCA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfSxcbiAgICAgIGhpdCxcbiAgICAgIGlzU3VuayxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgU2hpcCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGJhdHRsZVNoaXBMb2dpYyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9Db250cm9sbGVyL1BsYXllclwiO1xuXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIoXCJQbGF5ZXJcIik7XG5cbmNvbnNvbGUubG9nKHBsYXllci5nYW1lTG9vcCgxLCAwKSk7XG5cbmNvbnNvbGUubG9nKHBsYXllci5nYW1lTG9vcCg1LCAwKSk7XG4iXSwibmFtZXMiOlsiYmF0dGxlU2hpcExvZ2ljIiwiYmF0dGxlU2hpcEJvYXJkIiwicGxheWVyQm9hcmQiLCJnYW1lQm9hcmQiLCJjb21wdXRlckJvYXJkIiwiY2FycmllciIsIlNoaXAiLCJiYXR0bGVTaGlwIiwiZGVzdHJveWVyIiwic3ViTWFyaW5lIiwicGF0cm9sQm9hdCIsIlBsYXllciIsIm5hbWUiLCJwbGF5ZXIiLCJjb21wdXRlciIsImZpcnN0UGxheWVyIiwic2V0Rmlyc3RQbGF5ZXIiLCJnZXRQbGF5ZXIiLCJnZXRDb21wdXRlciIsInN3aXRjaFBsYXllcnNUdXJucyIsImdldEZpcnN0UGxheWVyIiwicHJpbnRUdXJuIiwiY29uc29sZSIsImxvZyIsImF0dGFja0NvbXB1dGVyQm9hcmQiLCJjb2wiLCJyb3ciLCJyZWNlaXZlQXR0YWNrIiwiYXR0YWNrUGxheWVyQm9hcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnYW1lTG9vcCIsImlzQ2VsbEF2YWlsYWJsZSIsInBsYWNlU2hpcCIsInByaW50Qm9hcmQiLCJjb2xzIiwicm93cyIsImJvYXJkIiwic2F2ZVNoaXBzIiwiaSIsImoiLCJzaGlwIiwiZGlyZWN0aW9uIiwic2hpcEFycmF5IiwibGVuZ3RoIiwicHVzaCIsImV2ZXJ5IiwiY2VsbCIsImlzUGxhY2VkIiwiRXJyb3IiLCJmb3JFYWNoIiwiZ2V0QWxsU2hpcHMiLCJoaXQiLCJtaXNzZWRTaGlwQXR0YWNrcyIsImdldEJvYXJkQ29weSIsImZpbHRlcmVkTWlzc2VkQXR0YWNrcyIsInJldHJpZXZlTWlzc2VkQXR0YWNrcyIsImZpbHRlciIsImF0dGFjayIsImFyZUFsbFNoaXBzU3VuayIsInN1bmtTaGlwcyIsImlzU3VuayIsInJhbmRvbVVVSUQiLCJiIiwiYSIsInRvU3RyaW5nIiwicmVwbGFjZSIsIm51bWJlck9mSGl0cyIsImlzU2hpcFN1bmsiLCJpZCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInNoaXBUYWtpbmdIaXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=