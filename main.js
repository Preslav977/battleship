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
const randomUUID = function b(a) {
  return a ?
  // eslint-disable-next-line no-bitwise
  (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};
const battleShipCreation = (() => {
  const Ship = function (length, numberOfHits, isShipSunk) {
    let id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : randomUUID();
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

const object = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipCreation.Ship(5, 0, false);
console.log(object);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdkLDJEQUFrQixDQUFDQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7QUFFbkRXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvTW9kZWwvU2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByYW5kb21VVUlEID0gZnVuY3Rpb24gYihhKSB7XG4gIHJldHVybiBhXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgKGEgXiAoKE1hdGgucmFuZG9tKCkgKiAxNikgPj4gKGEgLyA0KSkpLnRvU3RyaW5nKDE2KVxuICAgIDogKFsxZTddICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIGIpO1xufTtcblxuY29uc3QgYmF0dGxlU2hpcENyZWF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgU2hpcCA9IChsZW5ndGgsIG51bWJlck9mSGl0cywgaXNTaGlwU3VuaywgaWQgPSByYW5kb21VVUlEKCkpID0+IHtcbiAgICBjb25zdCBnZXRTaGlwSGl0cyA9ICgpID0+IG51bWJlck9mSGl0cztcblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBUYWtpbmdIaXQgPSBudW1iZXJPZkhpdHMrKztcblxuICAgICAgaWYgKHNoaXBUYWtpbmdIaXQgPD0gNSkge1xuICAgICAgICByZXR1cm4gXCJUaGUgc2hpcCwgY2Fubm90IGJlIGhpdCBhbnltb3JlIVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBudW1iZXJPZkhpdHMgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgaWYgKGxlbmd0aCA9PT0gNSAmJiBudW1iZXJPZkhpdHMgPT09IDUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYXJyaWVyIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlbmd0aCA9PT0gNCAmJiBudW1iZXJPZkhpdHMgPT09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCYXR0bGVzaGlwIGdvdCBzdW5rXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlbmd0aCA9PT0gMyAmJiBudW1iZXJPZkhpdHMgPT09IDMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEZXN0cm95ZXIgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobGVuZ3RoID09PSAzICYmIG51bWJlck9mSGl0cyA9PT0gMykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Ym1hcmluZSBnb3Qgc3Vua1wiKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChsZW5ndGggPT09IDIgJiYgbnVtYmVyT2ZIaXRzID09PSAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGF0cm9sIGJvYXQgZ290IHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGxlbmd0aCwgZ2V0U2hpcEhpdHMsIGlzU2hpcFN1bmssIGlkLCBoaXQsIGlzU3VuayB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgU2hpcCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGJhdHRsZVNoaXBDcmVhdGlvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBiYXR0bGVTaGlwQ3JlYXRpb24gfSBmcm9tIFwiLi9Nb2RlbC9TaGlwXCI7XG5cbmNvbnN0IG9iamVjdCA9IGJhdHRsZVNoaXBDcmVhdGlvbi5TaGlwKDUsIDAsIGZhbHNlKTtcblxuY29uc29sZS5sb2cob2JqZWN0KTtcbiJdLCJuYW1lcyI6WyJyYW5kb21VVUlEIiwiYiIsImEiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiYmF0dGxlU2hpcENyZWF0aW9uIiwiU2hpcCIsImxlbmd0aCIsIm51bWJlck9mSGl0cyIsImlzU2hpcFN1bmsiLCJpZCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImdldFNoaXBIaXRzIiwiaGl0Iiwic2hpcFRha2luZ0hpdCIsImlzU3VuayIsImNvbnNvbGUiLCJsb2ciLCJvYmplY3QiXSwic291cmNlUm9vdCI6IiJ9