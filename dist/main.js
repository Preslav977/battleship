/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Controller/Gameboard.js":
/*!*************************************!*\
  !*** ./src/Controller/Gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   battleShipBoard: () => (/* binding */ battleShipBoard)
/* harmony export */ });
/* harmony import */ var _Model_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/Ship */ "./src/Model/Ship.js");

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
    const placeShip = (col, row, ship) => {
      const shipLength = ship.length;
      for (let i = 0; i < board.length; i++) {
        if (board[col + shipLength][row] === "") {
          board[col + shipLength][row] = ship;
          return true;
        }
        // if (board[col][row + shipLength] === "") {
        //   board[col][row + shipLength] = ship;
        //   return true;
        // }
      }

      return false;
    };
    const printBoard = () => {
      board.forEach(cell => {
        console.log(cell);
      });
    };
    return {
      placeShip,
      printBoard
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
/* harmony export */   battleShipCreation: () => (/* binding */ battleShipCreation)
/* harmony export */ });
const randomUUID = function b(a) {
  return a ?
  // eslint-disable-next-line no-bitwise
  (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};
const battleShipCreation = (() => {
  const Ship = function (name, length, numberOfHits, isShipSunk) {
    let id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : randomUUID();
    const getShipHits = () => numberOfHits;
    const hit = () => {
      const shipTakingHit = numberOfHits++;
      if (shipTakingHit <= 5) {
        return "The ship, cannot be hit anymore!";
      }
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
        console.log("Patrol boat got sunk");
        return true;
      }
      return false;
    };
    return {
      name,
      length,
      getShipHits,
      isShipSunk,
      id,
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
/* harmony import */ var _Model_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model/Ship */ "./src/Model/Ship.js");
/* harmony import */ var _Controller_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller/Gameboard */ "./src/Controller/Gameboard.js");


const carrier = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipCreation.Ship("carrier", 5, 0, false);
const battleShip = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipCreation.Ship("battleShip", 4, 0, false);
const playersBoard = _Controller_Gameboard__WEBPACK_IMPORTED_MODULE_1__.battleShipBoard.gameBoard();
console.log(playersBoard.placeShip(0, 0, carrier));
console.log(playersBoard.placeShip(1, 0, battleShip));
playersBoard.printBoard();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDOzs7Ozs7O1VDeERKO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ087QUFFekQsTUFBTVcsT0FBTyxHQUFHckMsMkRBQWtCLENBQUMwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBRS9ELE1BQU1ZLFVBQVUsR0FBR3RDLDJEQUFrQixDQUFDMEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQztBQUVyRSxNQUFNYSxZQUFZLEdBQUd0QyxrRUFBZSxDQUFDQyxTQUFTLENBQUMsQ0FBQztBQUVoRGUsT0FBTyxDQUFDQyxHQUFHLENBQUNxQixZQUFZLENBQUMvQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTZCLE9BQU8sQ0FBQyxDQUFDO0FBRWxEcEIsT0FBTyxDQUFDQyxHQUFHLENBQUNxQixZQUFZLENBQUMvQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRThCLFVBQVUsQ0FBQyxDQUFDO0FBRXJEQyxZQUFZLENBQUN6QixVQUFVLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Db250cm9sbGVyL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL01vZGVsL1NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmF0dGxlU2hpcENyZWF0aW9uIH0gZnJvbSBcIi4uL01vZGVsL1NoaXBcIjtcblxuY29uc3QgYmF0dGxlU2hpcEJvYXJkID0gKCgpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbHMgPSA4O1xuICAgIGNvbnN0IHJvd3MgPSA4O1xuICAgIGNvbnN0IGJvYXJkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHM7IGkgKz0gMSkge1xuICAgICAgYm9hcmRbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93czsgaiArPSAxKSB7XG4gICAgICAgIGJvYXJkW2ldW2pdID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoY29sLCByb3csIHNoaXApID0+IHtcbiAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2NvbCArIHNoaXBMZW5ndGhdW3Jvd10gPT09IFwiXCIpIHtcbiAgICAgICAgICBib2FyZFtjb2wgKyBzaGlwTGVuZ3RoXVtyb3ddID0gc2hpcDtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAoYm9hcmRbY29sXVtyb3cgKyBzaGlwTGVuZ3RoXSA9PT0gXCJcIikge1xuICAgICAgICAvLyAgIGJvYXJkW2NvbF1bcm93ICsgc2hpcExlbmd0aF0gPSBzaGlwO1xuICAgICAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IHByaW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgICBib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGwpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHBsYWNlU2hpcCwgcHJpbnRCb2FyZCB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2FtZUJvYXJkLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgYmF0dGxlU2hpcEJvYXJkIH07XG4iLCJjb25zdCByYW5kb21VVUlEID0gZnVuY3Rpb24gYihhKSB7XG4gIHJldHVybiBhXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgKGEgXiAoKE1hdGgucmFuZG9tKCkgKiAxNikgPj4gKGEgLyA0KSkpLnRvU3RyaW5nKDE2KVxuICAgIDogKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIGIpO1xufTtcblxuY29uc3QgYmF0dGxlU2hpcENyZWF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgU2hpcCA9IChuYW1lLCBsZW5ndGgsIG51bWJlck9mSGl0cywgaXNTaGlwU3VuaywgaWQgPSByYW5kb21VVUlEKCkpID0+IHtcbiAgICBjb25zdCBnZXRTaGlwSGl0cyA9ICgpID0+IG51bWJlck9mSGl0cztcblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBUYWtpbmdIaXQgPSBudW1iZXJPZkhpdHMrKztcblxuICAgICAgaWYgKHNoaXBUYWtpbmdIaXQgPD0gNSkge1xuICAgICAgICByZXR1cm4gXCJUaGUgc2hpcCwgY2Fubm90IGJlIGhpdCBhbnltb3JlIVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBudW1iZXJPZkhpdHMgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgaWYgKG5hbWUgPT09IFwiY2FycmllclwiICYmIGxlbmd0aCA9PT0gNSAmJiBudW1iZXJPZkhpdHMgPT09IDUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXJyaWVyIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFwiYmF0dGxlU2hpcFwiICYmIGxlbmd0aCA9PT0gNCAmJiBudW1iZXJPZkhpdHMgPT09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCYXR0bGVzaGlwIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IFwiZGVzdHJveWVyXCIgJiYgbGVuZ3RoID09PSAzICYmIG51bWJlck9mSGl0cyA9PT0gMykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRlc3Ryb3llciBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBcInN1Yk1hcmluZVwiICYmIGxlbmd0aCA9PT0gMyAmJiBudW1iZXJPZkhpdHMgPT09IDMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWJtYXJpbmUgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gXCJwYXRyb2xCb2F0XCIgJiYgbGVuZ3RoID09PSAyICYmIG51bWJlck9mSGl0cyA9PT0gMikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBhdHJvbCBib2F0IGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBuYW1lLCBsZW5ndGgsIGdldFNoaXBIaXRzLCBpc1NoaXBTdW5rLCBpZCwgaGl0LCBpc1N1bmsgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIFNoaXAsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBiYXR0bGVTaGlwQ3JlYXRpb24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYmF0dGxlU2hpcENyZWF0aW9uIH0gZnJvbSBcIi4vTW9kZWwvU2hpcFwiO1xuaW1wb3J0IHsgYmF0dGxlU2hpcEJvYXJkIH0gZnJvbSBcIi4vQ29udHJvbGxlci9HYW1lYm9hcmRcIjtcblxuY29uc3QgY2FycmllciA9IGJhdHRsZVNoaXBDcmVhdGlvbi5TaGlwKFwiY2FycmllclwiLCA1LCAwLCBmYWxzZSk7XG5cbmNvbnN0IGJhdHRsZVNoaXAgPSBiYXR0bGVTaGlwQ3JlYXRpb24uU2hpcChcImJhdHRsZVNoaXBcIiwgNCwgMCwgZmFsc2UpO1xuXG5jb25zdCBwbGF5ZXJzQm9hcmQgPSBiYXR0bGVTaGlwQm9hcmQuZ2FtZUJvYXJkKCk7XG5cbmNvbnNvbGUubG9nKHBsYXllcnNCb2FyZC5wbGFjZVNoaXAoMCwgMCwgY2FycmllcikpO1xuXG5jb25zb2xlLmxvZyhwbGF5ZXJzQm9hcmQucGxhY2VTaGlwKDEsIDAsIGJhdHRsZVNoaXApKTtcblxucGxheWVyc0JvYXJkLnByaW50Qm9hcmQoKTtcbiJdLCJuYW1lcyI6WyJiYXR0bGVTaGlwQ3JlYXRpb24iLCJiYXR0bGVTaGlwQm9hcmQiLCJnYW1lQm9hcmQiLCJjb2xzIiwicm93cyIsImJvYXJkIiwiaSIsImoiLCJwbGFjZVNoaXAiLCJjb2wiLCJyb3ciLCJzaGlwIiwic2hpcExlbmd0aCIsImxlbmd0aCIsInByaW50Qm9hcmQiLCJmb3JFYWNoIiwiY2VsbCIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb21VVUlEIiwiYiIsImEiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiU2hpcCIsIm5hbWUiLCJudW1iZXJPZkhpdHMiLCJpc1NoaXBTdW5rIiwiaWQiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJnZXRTaGlwSGl0cyIsImhpdCIsInNoaXBUYWtpbmdIaXQiLCJpc1N1bmsiLCJjYXJyaWVyIiwiYmF0dGxlU2hpcCIsInBsYXllcnNCb2FyZCJdLCJzb3VyY2VSb290IjoiIn0=