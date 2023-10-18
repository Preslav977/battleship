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
/* harmony export */   battleShipModel: () => (/* binding */ battleShipModel)
/* harmony export */ });
const battleShipModel = (() => {
  const Ship = (length, hits, sunk) => {
    const getShipLength = () => length;
    const getShipHits = () => hits;
    const getShipSunk = () => sunk;
    const hit = () => {
      const shipTakingHit = hits++;
      const shipDecreasingLength = length--;
      if (shipTakingHit < 0 && shipDecreasingLength <= 5) {
        return "The ship, cannot be hit anymore!";
      }
      return {
        length,
        hit,
        sunk
      };
    };
    return {
      getShipLength,
      getShipHits,
      getShipSunk,
      hit
    };
  };
  return {
    Ship
  };
})();

// module.exports = battleShipModel;



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

const carrier = _Model_Ship__WEBPACK_IMPORTED_MODULE_0__.battleShipModel.Ship(5, 0, false);
console.log(carrier.getShipLength());
carrier.hit();
console.log(carrier.getShipLength());
carrier.hit();
console.log(carrier.getShipLength());
carrier.hit();
console.log(carrier.getShipLength());
carrier.hit();
console.log(carrier.getShipLength());
console.log(carrier.hit());
console.log(carrier.getShipLength());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLGVBQWUsR0FBRyxDQUFDLE1BQU07RUFDN0IsTUFBTUMsSUFBSSxHQUFHQSxDQUFDQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxLQUFLO0lBQ25DLE1BQU1DLGFBQWEsR0FBR0EsQ0FBQSxLQUFNSCxNQUFNO0lBRWxDLE1BQU1JLFdBQVcsR0FBR0EsQ0FBQSxLQUFNSCxJQUFJO0lBRTlCLE1BQU1JLFdBQVcsR0FBR0EsQ0FBQSxLQUFNSCxJQUFJO0lBRTlCLE1BQU1JLEdBQUcsR0FBR0EsQ0FBQSxLQUFNO01BQ2hCLE1BQU1DLGFBQWEsR0FBR04sSUFBSSxFQUFFO01BQzVCLE1BQU1PLG9CQUFvQixHQUFHUixNQUFNLEVBQUU7TUFFckMsSUFBSU8sYUFBYSxHQUFHLENBQUMsSUFBSUMsb0JBQW9CLElBQUksQ0FBQyxFQUFFO1FBQ2xELE9BQU8sa0NBQWtDO01BQzNDO01BRUEsT0FBTztRQUFFUixNQUFNO1FBQUVNLEdBQUc7UUFBRUo7TUFBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxPQUFPO01BQUVDLGFBQWE7TUFBRUMsV0FBVztNQUFFQyxXQUFXO01BQUVDO0lBQUksQ0FBQztFQUN6RCxDQUFDO0VBRUQsT0FBTztJQUNMUDtFQUNGLENBQUM7QUFDSCxDQUFDLEVBQUUsQ0FBQzs7QUFFSjs7Ozs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQztBQUUvQyxNQUFNVSxPQUFPLEdBQUdYLHdEQUFlLENBQUNDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQztBQUVqRFcsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ04sYUFBYSxDQUFDLENBQUMsQ0FBQztBQUVwQ00sT0FBTyxDQUFDSCxHQUFHLENBQUMsQ0FBQztBQUViSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDTixhQUFhLENBQUMsQ0FBQyxDQUFDO0FBRXBDTSxPQUFPLENBQUNILEdBQUcsQ0FBQyxDQUFDO0FBRWJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUNOLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFFcENNLE9BQU8sQ0FBQ0gsR0FBRyxDQUFDLENBQUM7QUFFYkksT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ04sYUFBYSxDQUFDLENBQUMsQ0FBQztBQUVwQ00sT0FBTyxDQUFDSCxHQUFHLENBQUMsQ0FBQztBQUViSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDTixhQUFhLENBQUMsQ0FBQyxDQUFDO0FBRXBDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDSCxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRTFCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDTixhQUFhLENBQUMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL01vZGVsL1NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmF0dGxlU2hpcE1vZGVsID0gKCgpID0+IHtcbiAgY29uc3QgU2hpcCA9IChsZW5ndGgsIGhpdHMsIHN1bmspID0+IHtcbiAgICBjb25zdCBnZXRTaGlwTGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG4gICAgY29uc3QgZ2V0U2hpcEhpdHMgPSAoKSA9PiBoaXRzO1xuXG4gICAgY29uc3QgZ2V0U2hpcFN1bmsgPSAoKSA9PiBzdW5rO1xuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcFRha2luZ0hpdCA9IGhpdHMrKztcbiAgICAgIGNvbnN0IHNoaXBEZWNyZWFzaW5nTGVuZ3RoID0gbGVuZ3RoLS07XG5cbiAgICAgIGlmIChzaGlwVGFraW5nSGl0IDwgMCAmJiBzaGlwRGVjcmVhc2luZ0xlbmd0aCA8PSA1KSB7XG4gICAgICAgIHJldHVybiBcIlRoZSBzaGlwLCBjYW5ub3QgYmUgaGl0IGFueW1vcmUhXCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGxlbmd0aCwgaGl0LCBzdW5rIH07XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldFNoaXBMZW5ndGgsIGdldFNoaXBIaXRzLCBnZXRTaGlwU3VuaywgaGl0IH07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBTaGlwLFxuICB9O1xufSkoKTtcblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBiYXR0bGVTaGlwTW9kZWw7XG5cbmV4cG9ydCB7IGJhdHRsZVNoaXBNb2RlbCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBiYXR0bGVTaGlwTW9kZWwgfSBmcm9tIFwiLi9Nb2RlbC9TaGlwXCI7XG5cbmNvbnN0IGNhcnJpZXIgPSBiYXR0bGVTaGlwTW9kZWwuU2hpcCg1LCAwLCBmYWxzZSk7XG5cbmNvbnNvbGUubG9nKGNhcnJpZXIuZ2V0U2hpcExlbmd0aCgpKTtcblxuY2Fycmllci5oaXQoKTtcblxuY29uc29sZS5sb2coY2Fycmllci5nZXRTaGlwTGVuZ3RoKCkpO1xuXG5jYXJyaWVyLmhpdCgpO1xuXG5jb25zb2xlLmxvZyhjYXJyaWVyLmdldFNoaXBMZW5ndGgoKSk7XG5cbmNhcnJpZXIuaGl0KCk7XG5cbmNvbnNvbGUubG9nKGNhcnJpZXIuZ2V0U2hpcExlbmd0aCgpKTtcblxuY2Fycmllci5oaXQoKTtcblxuY29uc29sZS5sb2coY2Fycmllci5nZXRTaGlwTGVuZ3RoKCkpO1xuXG5jb25zb2xlLmxvZyhjYXJyaWVyLmhpdCgpKTtcblxuY29uc29sZS5sb2coY2Fycmllci5nZXRTaGlwTGVuZ3RoKCkpO1xuIl0sIm5hbWVzIjpbImJhdHRsZVNoaXBNb2RlbCIsIlNoaXAiLCJsZW5ndGgiLCJoaXRzIiwic3VuayIsImdldFNoaXBMZW5ndGgiLCJnZXRTaGlwSGl0cyIsImdldFNoaXBTdW5rIiwiaGl0Iiwic2hpcFRha2luZ0hpdCIsInNoaXBEZWNyZWFzaW5nTGVuZ3RoIiwiY2FycmllciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9