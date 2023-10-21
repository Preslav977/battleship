/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Model/Ship.js":
/*!***************************!*\
  !*** ./src/Model/Ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   battleShipCreation: () => (/* binding */ battleShipCreation)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'crypto'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

const battleShipCreation = (() => {
  const Ship = function (length, numberOfHits, isShipSunk) {
    let id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Object(function webpackMissingModule() { var e = new Error("Cannot find module 'crypto'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
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
      if (length === 5 && numberOfHits === 5) {
        console.log("Carrier got sunk");
        return true;
      }
      if (length === 4 && numberOfHits === 4) {
        console.log("Battleship got sunk");
        return true;
      }
      if (length === 3 && numberOfHits === 3) {
        console.log("Destroyer got sunk");
        return true;
      }
      if (length === 3 && numberOfHits === 3) {
        console.log("Submarine got sunk");
        return true;
      }
      if (length === 2 && numberOfHits === 2) {
        console.log("Patrol boat got sunk");
        return true;
      }
      return false;
    };
    return {
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

// module.exports = battleShipCreation;



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

const ship = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipCreation.Ship(5, 0, false);
console.log(ship);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFFNUIsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxNQUFNO0VBQ2hDLE1BQU1DLElBQUksR0FBRyxTQUFBQSxDQUFDQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUErQjtJQUFBLElBQTdCQyxFQUFFLEdBQUFDLFNBQUEsQ0FBQUosTUFBQSxRQUFBSSxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHUCxxSUFBaUIsQ0FBQyxDQUFDO0lBQ3RFLE1BQU1VLFdBQVcsR0FBR0EsQ0FBQSxLQUFNTixZQUFZO0lBRXRDLE1BQU1PLEdBQUcsR0FBR0EsQ0FBQSxLQUFNO01BQ2hCLE1BQU1DLGFBQWEsR0FBR1IsWUFBWSxFQUFFO01BRXBDLElBQUlRLGFBQWEsSUFBSSxDQUFDLEVBQUU7UUFDdEIsT0FBTyxrQ0FBa0M7TUFDM0M7TUFFQSxPQUFPO1FBQUVSO01BQWEsQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTVMsTUFBTSxHQUFHQSxDQUFBLEtBQU07TUFDbkIsSUFBSVYsTUFBTSxLQUFLLENBQUMsSUFBSUMsWUFBWSxLQUFLLENBQUMsRUFBRTtRQUN0Q1UsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7UUFDL0IsT0FBTyxJQUFJO01BQ2I7TUFFQSxJQUFJWixNQUFNLEtBQUssQ0FBQyxJQUFJQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1FBQ3RDVSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsQyxPQUFPLElBQUk7TUFDYjtNQUVBLElBQUlaLE1BQU0sS0FBSyxDQUFDLElBQUlDLFlBQVksS0FBSyxDQUFDLEVBQUU7UUFDdENVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO1FBQ2pDLE9BQU8sSUFBSTtNQUNiO01BRUEsSUFBSVosTUFBTSxLQUFLLENBQUMsSUFBSUMsWUFBWSxLQUFLLENBQUMsRUFBRTtRQUN0Q1UsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7UUFDakMsT0FBTyxJQUFJO01BQ2I7TUFFQSxJQUFJWixNQUFNLEtBQUssQ0FBQyxJQUFJQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1FBQ3RDVSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztRQUNuQyxPQUFPLElBQUk7TUFDYjtNQUVBLE9BQU8sS0FBSztJQUNkLENBQUM7SUFFRCxPQUFPO01BQUVaLE1BQU07TUFBRU8sV0FBVztNQUFFTCxVQUFVO01BQUVDLEVBQUU7TUFBRUssR0FBRztNQUFFRTtJQUFPLENBQUM7RUFDN0QsQ0FBQztFQUVELE9BQU87SUFDTFg7RUFDRixDQUFDO0FBQ0gsQ0FBQyxFQUFFLENBQUM7O0FBRUo7Ozs7Ozs7O1VDckRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0Q7QUFFbEQsTUFBTWMsSUFBSSxHQUFHZiwyREFBa0IsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBRWpEWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL01vZGVsL1NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyeXB0byBmcm9tIFwiY3J5cHRvXCI7XG5cbmNvbnN0IGJhdHRsZVNoaXBDcmVhdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IFNoaXAgPSAobGVuZ3RoLCBudW1iZXJPZkhpdHMsIGlzU2hpcFN1bmssIGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKSkgPT4ge1xuICAgIGNvbnN0IGdldFNoaXBIaXRzID0gKCkgPT4gbnVtYmVyT2ZIaXRzO1xuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcFRha2luZ0hpdCA9IG51bWJlck9mSGl0cysrO1xuXG4gICAgICBpZiAoc2hpcFRha2luZ0hpdCA8PSA1KSB7XG4gICAgICAgIHJldHVybiBcIlRoZSBzaGlwLCBjYW5ub3QgYmUgaGl0IGFueW1vcmUhXCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IG51bWJlck9mSGl0cyB9O1xuICAgIH07XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICBpZiAobGVuZ3RoID09PSA1ICYmIG51bWJlck9mSGl0cyA9PT0gNSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhcnJpZXIgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobGVuZ3RoID09PSA0ICYmIG51bWJlck9mSGl0cyA9PT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJhdHRsZXNoaXAgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobGVuZ3RoID09PSAzICYmIG51bWJlck9mSGl0cyA9PT0gMykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRlc3Ryb3llciBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChsZW5ndGggPT09IDMgJiYgbnVtYmVyT2ZIaXRzID09PSAzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWFyaW5lIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlbmd0aCA9PT0gMiAmJiBudW1iZXJPZkhpdHMgPT09IDIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXRyb2wgYm9hdCBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBnZXRTaGlwSGl0cywgaXNTaGlwU3VuaywgaWQsIGhpdCwgaXNTdW5rIH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBTaGlwLFxuICB9O1xufSkoKTtcblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBiYXR0bGVTaGlwQ3JlYXRpb247XG5cbmV4cG9ydCB7IGJhdHRsZVNoaXBDcmVhdGlvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBiYXR0bGVTaGlwQ3JlYXRpb24gfSBmcm9tIFwiLi9Nb2RlbC9TaGlwXCI7XG5cbmNvbnN0IHNoaXAgPSBiYXR0bGVTaGlwQ3JlYXRpb24uU2hpcCg1LCAwLCBmYWxzZSk7XG5cbmNvbnNvbGUubG9nKHNoaXApO1xuIl0sIm5hbWVzIjpbImNyeXB0byIsImJhdHRsZVNoaXBDcmVhdGlvbiIsIlNoaXAiLCJsZW5ndGgiLCJudW1iZXJPZkhpdHMiLCJpc1NoaXBTdW5rIiwiaWQiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJyYW5kb21VVUlEIiwiZ2V0U2hpcEhpdHMiLCJoaXQiLCJzaGlwVGFraW5nSGl0IiwiaXNTdW5rIiwiY29uc29sZSIsImxvZyIsInNoaXAiXSwic291cmNlUm9vdCI6IiJ9