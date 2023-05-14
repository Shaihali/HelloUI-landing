/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slider": () => (/* binding */ slider)
/* harmony export */ });
const sliderBoxs = document.querySelectorAll('.slider__box');
const sliderBtn = document.querySelector('.switch');
const sliderBlog = document.querySelector('.slider__blog');

const clientArr = ['hubspot.png', 'jll.png', 'juniper.png', 'lacoste.png', 'netflix.png', 'atlassian.png'];

function slider() {
	
	sliderBoxs.forEach((sliderBox) => {
		for (let i = 0; i < 6; i++) {
			const client = document.createElement('div')
			const icon = document.createElement('img')
			client.className = 'client'
	
			icon.setAttribute('src', `../assets/img/${clientArr[i]}`)
	
			client.append(icon)
			
			sliderBox.append(client)
		}
		
	})
}

sliderBtn.addEventListener('click', (e) => {
	const currElement = e.target;
	if (currElement.classList.contains('switch__item_activ')) {
		return
	} else {
		deleteClass()
		currElement.classList.add('switch__item_activ')
		if(currElement.getAttribute('data-pos') === 'left') {
			sliderBlog.style.transform = 'translateX(0px)';
		} else if(currElement.getAttribute('data-pos') === 'center') {
			sliderBlog.style.transform = 'translateX(-956px)';
		} else if(currElement.getAttribute('data-pos') === 'right') {
			sliderBlog.style.transform = 'translateX(-1912px)';
		}
		
	}
})

function deleteClass() {
	const elements = document.querySelectorAll('.switch__item');
		elements.forEach(element => {
    	element.classList.remove('switch__item_activ');
	});
}



/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/slider */ "./js/slider.js");


(0,_js_slider__WEBPACK_IMPORTED_MODULE_1__.slider)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxhQUFhO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7Ozs7Ozs7Ozs7QUNoREE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNpQjtBQUN0QyxrREFBTSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG91aS1sYW5kaW5nLy4vanMvc2xpZGVyLmpzIiwid2VicGFjazovL2hlbGxvdWktbGFuZGluZy8uL3NyYy9zdHlsZS5zY3NzP2JjM2IiLCJ3ZWJwYWNrOi8vaGVsbG91aS1sYW5kaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hlbGxvdWktbGFuZGluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGVsbG91aS1sYW5kaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGVsbG91aS1sYW5kaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGVsbG91aS1sYW5kaW5nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlckJveHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19ib3gnKTtcclxuY29uc3Qgc2xpZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaCcpO1xyXG5jb25zdCBzbGlkZXJCbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fYmxvZycpO1xyXG5cclxuY29uc3QgY2xpZW50QXJyID0gWydodWJzcG90LnBuZycsICdqbGwucG5nJywgJ2p1bmlwZXIucG5nJywgJ2xhY29zdGUucG5nJywgJ25ldGZsaXgucG5nJywgJ2F0bGFzc2lhbi5wbmcnXTtcclxuXHJcbmZ1bmN0aW9uIHNsaWRlcigpIHtcclxuXHRcclxuXHRzbGlkZXJCb3hzLmZvckVhY2goKHNsaWRlckJveCkgPT4ge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuXHRcdFx0Y29uc3QgY2xpZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRcdFx0Y29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcblx0XHRcdGNsaWVudC5jbGFzc05hbWUgPSAnY2xpZW50J1xyXG5cdFxyXG5cdFx0XHRpY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL2Fzc2V0cy9pbWcvJHtjbGllbnRBcnJbaV19YClcclxuXHRcclxuXHRcdFx0Y2xpZW50LmFwcGVuZChpY29uKVxyXG5cdFx0XHRcclxuXHRcdFx0c2xpZGVyQm94LmFwcGVuZChjbGllbnQpXHJcblx0XHR9XHJcblx0XHRcclxuXHR9KVxyXG59XHJcblxyXG5zbGlkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdGNvbnN0IGN1cnJFbGVtZW50ID0gZS50YXJnZXQ7XHJcblx0aWYgKGN1cnJFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoX19pdGVtX2FjdGl2JykpIHtcclxuXHRcdHJldHVyblxyXG5cdH0gZWxzZSB7XHJcblx0XHRkZWxldGVDbGFzcygpXHJcblx0XHRjdXJyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2hfX2l0ZW1fYWN0aXYnKVxyXG5cdFx0aWYoY3VyckVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcycpID09PSAnbGVmdCcpIHtcclxuXHRcdFx0c2xpZGVyQmxvZy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwcHgpJztcclxuXHRcdH0gZWxzZSBpZihjdXJyRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zJykgPT09ICdjZW50ZXInKSB7XHJcblx0XHRcdHNsaWRlckJsb2cuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTk1NnB4KSc7XHJcblx0XHR9IGVsc2UgaWYoY3VyckVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcycpID09PSAncmlnaHQnKSB7XHJcblx0XHRcdHNsaWRlckJsb2cuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTE5MTJweCknO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59KVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlQ2xhc3MoKSB7XHJcblx0Y29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpdGNoX19pdGVtJyk7XHJcblx0XHRlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgXHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXRjaF9faXRlbV9hY3RpdicpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBzbGlkZXIgfSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXHJcbmltcG9ydCB7IHNsaWRlciB9IGZyb20gJy4uL2pzL3NsaWRlcic7XHJcbnNsaWRlcigpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9