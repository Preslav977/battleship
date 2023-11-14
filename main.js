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

  // create two factory objects
  // to test the game loop

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
    console.log(`${getFirstPlayer().name} turn`);
  };
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
  const placeAllShipsOnPredeterminedCoordinates = () => {
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
  };
  const gameLoop = (col, row) => {
    console.log(`${getFirstPlayer().name} attacks first`);
    attackComputerBoard(col, row, computerBoard);
    computerBoard.printBoard();
    console.log(playerBoard.missedShipAttacks());
    console.log(computerBoard.areAllShipsSunk());
    switchPlayersTurns();
    printTurn();
    attackPlayerBoard(playerBoard);
    console.log(computerBoard.missedShipAttacks());
    console.log(playerBoard.areAllShipsSunk());
    playerBoard.printBoard();
  };
  printTurn();
  return {
    Player,
    // setPlayer,
    setFirstPlayer,
    getPlayer,
    getComputer,
    switchPlayersTurns,
    getFirstPlayer,
    printTurn,
    attackComputerBoard,
    attackPlayerBoard,
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

_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.placeAllShipsOnPredeterminedCoordinates();
_Controller_Player__WEBPACK_IMPORTED_MODULE_0__.battleShipGame.gameLoop(1, 0);

// console.log(player.gameLoop(5, 0));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUQ7QUFFckRLLDhEQUFjLENBQUNzQix1Q0FBdUMsQ0FBQyxDQUFDO0FBRXhEdEIsOERBQWMsQ0FBQ3lCLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUU3QixzQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvQ29udHJvbGxlci9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Nb2RlbC9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Nb2RlbC9TaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhdHRsZVNoaXBMb2dpYyB9IGZyb20gXCIuLi9Nb2RlbC9TaGlwXCI7XG5cbmltcG9ydCB7IGJhdHRsZVNoaXBCb2FyZCB9IGZyb20gXCIuLi9Nb2RlbC9HYW1lYm9hcmRcIjtcblxuY29uc3QgcGxheWVyQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbmNvbnN0IGNhcnJpZXIgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcImNhcnJpZXJcIiwgNSwgMCwgZmFsc2UsIGZhbHNlKTtcblxuY29uc3QgYmF0dGxlU2hpcCA9IGJhdHRsZVNoaXBMb2dpYy5TaGlwKFwiYmF0dGxlU2hpcFwiLCA0LCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBkZXN0cm95ZXIgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcImRlc3Ryb3llclwiLCAzLCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBzdWJNYXJpbmUgPSBiYXR0bGVTaGlwTG9naWMuU2hpcChcInN1Yk1hcmluZVwiLCAzLCAwLCBmYWxzZSwgZmFsc2UpO1xuXG5jb25zdCBwYXRyb2xCb2F0ID0gYmF0dGxlU2hpcExvZ2ljLlNoaXAoXCJwYXRyb2xCb2F0XCIsIDIsIDAsIGZhbHNlLCBmYWxzZSk7XG5cbmNvbnN0IGJhdHRsZVNoaXBHYW1lID0gKCgpID0+IHtcbiAgY29uc3QgUGxheWVyID0gKG5hbWUpID0+IG5hbWU7XG5cbiAgLy8gY3JlYXRlIHR3byBmYWN0b3J5IG9iamVjdHNcbiAgLy8gdG8gdGVzdCB0aGUgZ2FtZSBsb29wXG5cbiAgY29uc3QgcGxheWVyID0geyBuYW1lOiBcIlBsYXllclwiIH07XG5cbiAgY29uc3QgY29tcHV0ZXIgPSB7IG5hbWU6IFwiQ29tcHV0ZXJcIiB9O1xuXG4gIC8vIGNvbnN0IHNldFBsYXllciA9IChuYW1lKSA9PiB7XG4gIC8vICAgcGxheWVyID0gUGxheWVyKG5hbWUpO1xuICAvLyB9O1xuXG4gIGxldCBmaXJzdFBsYXllciA9IHBsYXllcjtcblxuICBjb25zdCBzZXRGaXJzdFBsYXllciA9ICgpID0+IHtcbiAgICBmaXJzdFBsYXllciA9IHBsYXllcjtcbiAgfTtcblxuICBjb25zdCBnZXRQbGF5ZXIgPSAoKSA9PiBwbGF5ZXI7XG5cbiAgY29uc3QgZ2V0Q29tcHV0ZXIgPSAoKSA9PiBjb21wdXRlcjtcblxuICBjb25zdCBzd2l0Y2hQbGF5ZXJzVHVybnMgPSAoKSA9PiB7XG4gICAgZmlyc3RQbGF5ZXIgPSBmaXJzdFBsYXllciA9PT0gcGxheWVyID8gY29tcHV0ZXIgOiBwbGF5ZXI7XG4gIH07XG5cbiAgY29uc3QgZ2V0Rmlyc3RQbGF5ZXIgPSAoKSA9PiBmaXJzdFBsYXllcjtcblxuICBjb25zdCBwcmludFR1cm4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYCR7Z2V0Rmlyc3RQbGF5ZXIoKS5uYW1lfSB0dXJuYCk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrQ29tcHV0ZXJCb2FyZCA9IChjb2wsIHJvdywgY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb2wsIHJvdykpO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1BsYXllckJvYXJkID0gKHBsYXllckJvYXJkKSA9PiB7XG4gICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuXG4gICAgd2hpbGUgKFxuICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb2wsIHJvdykgPT09IFwiWW91IGNhbnQgYXR0YWNrIHRoZSBzYW1lIHNwb3RcIlxuICAgICkge1xuICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZUFsbFNoaXBzT25QcmVkZXRlcm1pbmVkQ29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDAsIGNhcnJpZXIsIFwidmVydGljYWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMSwgMCwgY2FycmllciwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLmlzQ2VsbEF2YWlsYWJsZSgxLCAzLCBiYXR0bGVTaGlwLCBcImhvcml6b250YWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMSwgMywgYmF0dGxlU2hpcCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDMsIDUsIGRlc3Ryb3llciwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKDMsIDUsIGRlc3Ryb3llciwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDIsIDQsIHN1Yk1hcmluZSwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgyLCAyLCBzdWJNYXJpbmUsIFwidmVydGljYWxcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoNiwgNiwgcGF0cm9sQm9hdCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKDYsIDYsIHBhdHJvbEJvYXQsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDEsIDAsIGNhcnJpZXIsIFwidmVydGljYWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgxLCAwLCBjYXJyaWVyLCBcInZlcnRpY2FsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMSwgMywgYmF0dGxlU2hpcCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoMSwgMywgYmF0dGxlU2hpcCwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5pc0NlbGxBdmFpbGFibGUoMywgNSwgZGVzdHJveWVyLCBcImhvcml6b250YWxcIik7XG5cbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgzLCA1LCBkZXN0cm95ZXIsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDIsIDQsIHN1Yk1hcmluZSwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDIsIDIsIHN1Yk1hcmluZSwgXCJ2ZXJ0aWNhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQuaXNDZWxsQXZhaWxhYmxlKDYsIDYsIHBhdHJvbEJvYXQsIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDYsIDYsIHBhdHJvbEJvYXQsIFwiaG9yaXpvbnRhbFwiKTtcbiAgfTtcblxuICBjb25zdCBnYW1lTG9vcCA9IChjb2wsIHJvdykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGAke2dldEZpcnN0UGxheWVyKCkubmFtZX0gYXR0YWNrcyBmaXJzdGApO1xuICAgIGF0dGFja0NvbXB1dGVyQm9hcmQoY29sLCByb3csIGNvbXB1dGVyQm9hcmQpO1xuXG4gICAgY29tcHV0ZXJCb2FyZC5wcmludEJvYXJkKCk7XG5cbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZC5taXNzZWRTaGlwQXR0YWNrcygpKTtcblxuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpO1xuXG4gICAgc3dpdGNoUGxheWVyc1R1cm5zKCk7XG5cbiAgICBwcmludFR1cm4oKTtcblxuICAgIGF0dGFja1BsYXllckJvYXJkKHBsYXllckJvYXJkKTtcblxuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQubWlzc2VkU2hpcEF0dGFja3MoKSk7XG5cbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSk7XG5cbiAgICBwbGF5ZXJCb2FyZC5wcmludEJvYXJkKCk7XG4gIH07XG5cbiAgcHJpbnRUdXJuKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBQbGF5ZXIsXG4gICAgLy8gc2V0UGxheWVyLFxuICAgIHNldEZpcnN0UGxheWVyLFxuICAgIGdldFBsYXllcixcbiAgICBnZXRDb21wdXRlcixcbiAgICBzd2l0Y2hQbGF5ZXJzVHVybnMsXG4gICAgZ2V0Rmlyc3RQbGF5ZXIsXG4gICAgcHJpbnRUdXJuLFxuICAgIGF0dGFja0NvbXB1dGVyQm9hcmQsXG4gICAgYXR0YWNrUGxheWVyQm9hcmQsXG4gICAgcGxhY2VBbGxTaGlwc09uUHJlZGV0ZXJtaW5lZENvb3JkaW5hdGVzLFxuICAgIGdhbWVMb29wLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgYmF0dGxlU2hpcEdhbWUgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbmNvbnN0IGJhdHRsZVNoaXBCb2FyZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb2xzID0gMTA7XG4gICAgY29uc3Qgcm93cyA9IDEwO1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgY29uc3Qgc2F2ZVNoaXBzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHM7IGkgKz0gMSkge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaiArPSAxKSB7XG4gICAgICAgIGJvYXJkW2ldW2pdID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc0NlbGxBdmFpbGFibGUgPSAoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgc2hpcEFycmF5LnB1c2goYm9hcmRbY29sICsgaV1bcm93XSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBzaGlwQXJyYXkucHVzaChib2FyZFtjb2xdW3JvdyArIGldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNoaXBBcnJheS5ldmVyeSgoY2VsbCkgPT4gY2VsbCA9PT0gXCJcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGlzQ2VsbEF2YWlsYWJsZShjb2wsIHJvdywgc2hpcCwgZGlyZWN0aW9uKSA9PT0gdHJ1ZSAmJlxuICAgICAgICBkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIlxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2NvbCArIGldW3Jvd10gPSBzaGlwO1xuICAgICAgICAgIHNoaXAuaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBpc0NlbGxBdmFpbGFibGUoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT09IHRydWUgJiZcbiAgICAgICAgZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIlxuICAgICAgKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2NvbF1bcm93ICsgaV0gPSBzaGlwO1xuICAgICAgICAgIHNoaXAuaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFpc0NlbGxBdmFpbGFibGUoY29sLCByb3csIHNoaXAsIGRpcmVjdGlvbikgPT09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcbiAgICAgIH1cbiAgICAgIHNhdmVTaGlwcy5wdXNoKHNoaXApO1xuICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfTtcblxuICAgIGNvbnN0IHByaW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgICBib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGwpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29sLCByb3cpID0+IHtcbiAgICAgIGNvbnN0IGdldEFsbFNoaXBzID0gYm9hcmRbY29sXVtyb3ddO1xuXG4gICAgICBpZiAoYm9hcmRbY29sXVtyb3ddID09PSBcIlwiKSB7XG4gICAgICAgIGJvYXJkW2NvbF1bcm93XSA9IFwiTVwiO1xuICAgICAgICByZXR1cm4gXCJNaXNzXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgYm9hcmRbY29sXVtyb3ddID09PSBnZXRBbGxTaGlwcyAmJlxuICAgICAgICBib2FyZFtjb2xdW3Jvd10gIT09IFwiSFwiICYmXG4gICAgICAgIGJvYXJkW2NvbF1bcm93XSA9PT0gZ2V0QWxsU2hpcHMgJiZcbiAgICAgICAgYm9hcmRbY29sXVtyb3ddICE9PSBcIk1cIlxuICAgICAgKSB7XG4gICAgICAgIGJvYXJkW2NvbF1bcm93XSA9IFwiSFwiO1xuICAgICAgICByZXR1cm4gZ2V0QWxsU2hpcHMuaGl0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJZb3UgY2FudCBoaXQgdGhlIHNhbWUgc3BvdFwiO1xuICAgIH07XG5cbiAgICBjb25zdCBtaXNzZWRTaGlwQXR0YWNrcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGdldEJvYXJkQ29weSA9IFsuLi5ib2FyZF07XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkTWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdldEJvYXJkQ29weS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCByZXRyaWV2ZU1pc3NlZEF0dGFja3MgPSBnZXRCb2FyZENvcHlbaV0uZmlsdGVyKFxuICAgICAgICAgIChhdHRhY2spID0+IGF0dGFjayA9PT0gXCJNXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJldHJpZXZlTWlzc2VkQXR0YWNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBmaWx0ZXJlZE1pc3NlZEF0dGFja3MucHVzaChyZXRyaWV2ZU1pc3NlZEF0dGFja3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyZWRNaXNzZWRBdHRhY2tzO1xuICAgIH07XG5cbiAgICBjb25zdCBhcmVBbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgICBsZXQgc3Vua1NoaXBzID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNhdmVTaGlwc1tpXS5uYW1lID09PSBcImNhcnJpZXJcIiAmJiBzYXZlU2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBzYXZlU2hpcHNbaV0ubmFtZSA9PT0gXCJiYXR0bGVTaGlwXCIgJiZcbiAgICAgICAgICBzYXZlU2hpcHNbaV0uaXNTdW5rKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgc2F2ZVNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwic3ViTWFyaW5lXCIgJiYgc2F2ZVNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc2F2ZVNoaXBzW2ldLm5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmXG4gICAgICAgICAgc2F2ZVNoaXBzW2ldLmlzU3VuaygpXG4gICAgICAgICkge1xuICAgICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3Vua1NoaXBzID09PSA1KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNDZWxsQXZhaWxhYmxlLFxuICAgICAgcGxhY2VTaGlwLFxuICAgICAgcHJpbnRCb2FyZCxcbiAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICBtaXNzZWRTaGlwQXR0YWNrcyxcbiAgICAgIGFyZUFsbFNoaXBzU3VuayxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2FtZUJvYXJkLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgYmF0dGxlU2hpcEJvYXJkIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuY29uc3QgcmFuZG9tVVVJRCA9IGZ1bmN0aW9uIGIoYSkge1xuICByZXR1cm4gYVxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgIChhIF4gKChNYXRoLnJhbmRvbSgpICogMTYpID4+IChhIC8gNCkpKS50b1N0cmluZygxNilcbiAgICA6IChbMWU3XSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBiKTtcbn07XG5cbmNvbnN0IGJhdHRsZVNoaXBMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IFNoaXAgPSAoXG4gICAgbmFtZSxcbiAgICBsZW5ndGgsXG4gICAgbnVtYmVyT2ZIaXRzLFxuICAgIGlzU2hpcFN1bmssXG4gICAgaXNQbGFjZWQsXG4gICAgaWQgPSByYW5kb21VVUlEKClcbiAgKSA9PiB7XG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcFRha2luZ0hpdCA9IG51bWJlck9mSGl0cysrO1xuXG4gICAgICBpZiAoc2hpcFRha2luZ0hpdCA+PSBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFwiVGhlIHNoaXAsIGNhbm5vdCBiZSBoaXQgYW55bW9yZSFcIjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGBTaGlwICR7bmFtZX0gZ290IGhpdGApO1xuXG4gICAgICByZXR1cm4geyBudW1iZXJPZkhpdHMgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgaWYgKG5hbWUgPT09IFwiY2FycmllclwiICYmIGxlbmd0aCA9PT0gNSAmJiBudW1iZXJPZkhpdHMgPT09IDUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXJyaWVyIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lID09PSBcImJhdHRsZVNoaXBcIiAmJiBsZW5ndGggPT09IDQgJiYgbnVtYmVyT2ZIaXRzID09PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmF0dGxlc2hpcCBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBcImRlc3Ryb3llclwiICYmIGxlbmd0aCA9PT0gMyAmJiBudW1iZXJPZkhpdHMgPT09IDMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEZXN0cm95ZXIgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gXCJzdWJNYXJpbmVcIiAmJiBsZW5ndGggPT09IDMgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWFyaW5lIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFwicGF0cm9sQm9hdFwiICYmIGxlbmd0aCA9PT0gMiAmJiBudW1iZXJPZkhpdHMgPT09IDIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXRyb2xCb2F0IGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH0sXG4gICAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIGdldCBudW1iZXJPZkhpdHMoKSB7XG4gICAgICAgIHJldHVybiBudW1iZXJPZkhpdHM7XG4gICAgICB9LFxuICAgICAgc2V0IG51bWJlck9mSGl0cyh2YWx1ZSkge1xuICAgICAgICBudW1iZXJPZkhpdHMgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBnZXQgaXNTaGlwU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIGlzU2hpcFN1bms7XG4gICAgICB9LFxuICAgICAgc2V0IGlzU2hpcFN1bmsodmFsdWUpIHtcbiAgICAgICAgaXNTaGlwU3VuayA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGdldCBpc1BsYWNlZCgpIHtcbiAgICAgICAgcmV0dXJuIGlzUGxhY2VkO1xuICAgICAgfSxcbiAgICAgIHNldCBpc1BsYWNlZCh2YWx1ZSkge1xuICAgICAgICBpc1BsYWNlZCA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfSxcbiAgICAgIGhpdCxcbiAgICAgIGlzU3VuayxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgU2hpcCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGJhdHRsZVNoaXBMb2dpYyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBiYXR0bGVTaGlwR2FtZSB9IGZyb20gXCIuL0NvbnRyb2xsZXIvUGxheWVyXCI7XG5cbmJhdHRsZVNoaXBHYW1lLnBsYWNlQWxsU2hpcHNPblByZWRldGVybWluZWRDb29yZGluYXRlcygpO1xuXG5iYXR0bGVTaGlwR2FtZS5nYW1lTG9vcCgxLCAwKTtcblxuLy8gY29uc29sZS5sb2cocGxheWVyLmdhbWVMb29wKDUsIDApKTtcbiJdLCJuYW1lcyI6WyJiYXR0bGVTaGlwTG9naWMiLCJiYXR0bGVTaGlwQm9hcmQiLCJwbGF5ZXJCb2FyZCIsImdhbWVCb2FyZCIsImNvbXB1dGVyQm9hcmQiLCJjYXJyaWVyIiwiU2hpcCIsImJhdHRsZVNoaXAiLCJkZXN0cm95ZXIiLCJzdWJNYXJpbmUiLCJwYXRyb2xCb2F0IiwiYmF0dGxlU2hpcEdhbWUiLCJQbGF5ZXIiLCJuYW1lIiwicGxheWVyIiwiY29tcHV0ZXIiLCJmaXJzdFBsYXllciIsInNldEZpcnN0UGxheWVyIiwiZ2V0UGxheWVyIiwiZ2V0Q29tcHV0ZXIiLCJzd2l0Y2hQbGF5ZXJzVHVybnMiLCJnZXRGaXJzdFBsYXllciIsInByaW50VHVybiIsImNvbnNvbGUiLCJsb2ciLCJhdHRhY2tDb21wdXRlckJvYXJkIiwiY29sIiwicm93IiwicmVjZWl2ZUF0dGFjayIsImF0dGFja1BsYXllckJvYXJkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxhY2VBbGxTaGlwc09uUHJlZGV0ZXJtaW5lZENvb3JkaW5hdGVzIiwiaXNDZWxsQXZhaWxhYmxlIiwicGxhY2VTaGlwIiwiZ2FtZUxvb3AiLCJwcmludEJvYXJkIiwibWlzc2VkU2hpcEF0dGFja3MiLCJhcmVBbGxTaGlwc1N1bmsiLCJjb2xzIiwicm93cyIsImJvYXJkIiwic2F2ZVNoaXBzIiwiaSIsImoiLCJzaGlwIiwiZGlyZWN0aW9uIiwic2hpcEFycmF5IiwibGVuZ3RoIiwicHVzaCIsImV2ZXJ5IiwiY2VsbCIsImlzUGxhY2VkIiwiRXJyb3IiLCJmb3JFYWNoIiwiZ2V0QWxsU2hpcHMiLCJoaXQiLCJnZXRCb2FyZENvcHkiLCJmaWx0ZXJlZE1pc3NlZEF0dGFja3MiLCJyZXRyaWV2ZU1pc3NlZEF0dGFja3MiLCJmaWx0ZXIiLCJhdHRhY2siLCJzdW5rU2hpcHMiLCJpc1N1bmsiLCJyYW5kb21VVUlEIiwiYiIsImEiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJudW1iZXJPZkhpdHMiLCJpc1NoaXBTdW5rIiwiaWQiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJzaGlwVGFraW5nSGl0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9