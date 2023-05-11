/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nconst sliderBoxs = document.querySelectorAll('.slider__box');\r\nconst sliderBtn = document.querySelector('.switch');\r\nconst sliderBlog = document.querySelector('.slider__blog');\r\n\r\nconst clientArr = ['hubspot.png', 'jll.png', 'juniper.png', 'lacoste.png', 'netflix.png', 'atlassian.png'];\r\n\r\nfunction slider() {\r\n\t\r\n\tsliderBoxs.forEach((sliderBox) => {\r\n\t\tfor (let i = 0; i < 6; i++) {\r\n\t\t\tconst client = document.createElement('div')\r\n\t\t\tconst icon = document.createElement('img')\r\n\t\t\tclient.className = 'client'\r\n\t\r\n\t\t\ticon.setAttribute('src', `../assets/img/${clientArr[i]}`)\r\n\t\r\n\t\t\tclient.append(icon)\r\n\t\t\t\r\n\t\t\tsliderBox.append(client)\r\n\t\t}\r\n\t\t\r\n\t})\r\n}\r\n\r\nsliderBtn.addEventListener('click', (e) => {\r\n\tconst currElement = e.target;\r\n\tif (currElement.classList.contains('switch__item_activ')) {\r\n\t\treturn\r\n\t} else {\r\n\t\tdeleteClass()\r\n\t\tcurrElement.classList.add('switch__item_activ')\r\n\t\tif(currElement.getAttribute('data-pos') === 'left') {\r\n\t\t\tsliderBlog.style.transform = 'translateX(0px)';\r\n\t\t} else if(currElement.getAttribute('data-pos') === 'center') {\r\n\t\t\tsliderBlog.style.transform = 'translateX(-956px)';\r\n\t\t} else if(currElement.getAttribute('data-pos') === 'right') {\r\n\t\t\tsliderBlog.style.transform = 'translateX(-1912px)';\r\n\t\t}\r\n\t\t\r\n\t}\r\n})\r\n\r\nfunction deleteClass() {\r\n\tconst elements = document.querySelectorAll('.switch__item');\r\n\t\telements.forEach(element => {\r\n    \telement.classList.remove('switch__item_activ');\r\n\t});\r\n}\r\n\r\n\n\n//# sourceURL=webpack://helloui-landing/./js/slider.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://helloui-landing/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/slider */ \"./js/slider.js\");\n\r\n\r\n(0,_js_slider__WEBPACK_IMPORTED_MODULE_1__.slider)()\n\n//# sourceURL=webpack://helloui-landing/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;