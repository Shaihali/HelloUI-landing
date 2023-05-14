/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/slider-img sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*********************************************************************!*\
  !*** ./assets/slider-img/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./atlassian.png": "./assets/slider-img/atlassian.png",
	"./hubspot.png": "./assets/slider-img/hubspot.png",
	"./jll.png": "./assets/slider-img/jll.png",
	"./juniper.png": "./assets/slider-img/juniper.png",
	"./lacoste.png": "./assets/slider-img/lacoste.png",
	"./netflix.png": "./assets/slider-img/netflix.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/slider-img sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slider": () => (/* binding */ slider)
/* harmony export */ });
const images = __webpack_require__("./assets/slider-img sync \\.(png%7Cjpe?g%7Csvg)$");


const sliderBoxs = document.querySelectorAll('.slider__box');
const sliderBtn = document.querySelector('.switch');
const sliderBlog = document.querySelector('.slider__blog');


function slider() {
	sliderBoxs.forEach((sliderBox) => {
		images.keys().forEach((key) => {
			const image = images(key)
			
			const client = document.createElement('div')
			const icon = document.createElement('img')
			client.className = 'client'
	
			icon.src = image
	
			client.append(icon)
			
			sliderBox.append(client)
		})
			
		
		
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

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/slider-img/atlassian.png":
/*!*****************************************!*\
  !*** ./assets/slider-img/atlassian.png ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./assets/slider-img/hubspot.png":
/*!***************************************!*\
  !*** ./assets/slider-img/hubspot.png ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./assets/slider-img/jll.png":
/*!***********************************!*\
  !*** ./assets/slider-img/jll.png ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./assets/slider-img/juniper.png":
/*!***************************************!*\
  !*** ./assets/slider-img/juniper.png ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAdCAYAAABcz8ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbCSURBVHgB7VpRUttIEO2RLeLd2qpVToBzAvyVGH4iThBuEOcEgROATxA4QcwJQk4Q88PC7seaEyBOsErV1kaUbc2+pxmBjGXJNgRjilclkEczrZ7u6Z6ebil5RKjJxupQBp6Wipe2KRmGffnzXB4RyOdAdF3jMi1O6MggmJXPlE62TRUNWJH1L3hpoy+nr9I2V5oX+NdF2weZElVZf6tEd4ai92M5Oxh96ntViT6K6G0lyptEQ+OdYHdvIH8cT8nnN/yrSwlAN+CFd3fyaI/Oo7kLgbUK6IKWPhrIL22wG+Z3adarojDfuJUz36AqhcxqL+flWBnlE81B3QEDsYwy50r0zdLEBNQ+GA1iUd/THhDAKi6fFzjqQihQyml7Gj7tFUghdAN8+fjfqsqb/YGc7Yz3IZ/qC/viXaESBwtLnytLW2NeWHBrVBaEvI05bfVlAzRPLkfpvF6rYg7o5+XN1wGpqiwQdpJQhoIgTncKurZrEMpQ5BsmsweL65atZosgazWTUJGNd47E+xQmlCK3leLivSmfv0mtHeav/iPyaa0IPMawONkcpeOwD5WBRXXWvk0A86NSFgNXNhpmxQmFu1PWP5JTuAPV4j1WY0vuEUM5+VqB8Lj6JXFJ/rUrqUjzvRgLprvcCSe6IgNrvbQCn646bbf3dVyd2xaexcIUAte1yv8Q7tG0Y2gVVmi+3DOocIijQ79ekehd2g4B7Uni253OtLSwcDgGc4sbaVt6H5fMd2EKSRkE8zNFJvDfgcy3h5UCyk54ccyeJNw77Lu60dh+MBkDeWHnpBo3tJ26oR0X0lmYQuaHDuUnAdZxkbzBRj8VcdbsO3syE7ohLTkb/Cir5Iq4/xSNXEKF/DzcWK2JnhwZ1s1vNfM5CMpFNDa7JS80ynpsgFtBeK0Zal+a3wxnk7tPiJ5mtcy6lIbc43hWiIWbRFN6C7cBoqBu9pk9wHkyGwL9rJBxMD0x6RnTNLFU64h9qIgW2yDEsQwE9hJ/lk39LnjqCsFhMg4mP3YY9aQ/uKI/3LYOYiAxD5fPCrkrzJmF6YnJUEk0pM7zFAEFXSrzf1UeCE9aIYx0+gWn4jLAfno8yilznjiUB8A8YW8waziXxvXzbHKLRF9OesbK4pY8EOZSCK56Nk9TjmTTvA4nlwuKSUfPlTcf5QEwj0I6/APhwjdvlPpWhpOOiWCCPD/92DGQGus3ARUzrVK4WF1Z/7tcPkxi+t7o2ELQ1egg2wKffAght9Duu8jtx9LssrjDyl5FqsnhyYSTTsMWc/yEkjjbspRgdvc1LJypc7WPA+IWXG8H0VmvL79e8nla6RyiroLayhYCBR8DA1eGXn+iV2Bh7mqN7nwo/nFa0CopUMV1MDGWx4FSNtPqmVn9TIcj0XAdQjpZ0+tiAm34464sKViaRT1mE/WKXVOE4iJzYP0RnjbtvB2cV0xkx2wv6iYHxan6yDO5LjXSR03qXjGupoPbTlG5ForxSVhlQkOGkqyCuUmWlGntcXhYIRGYqkktLKsx5I3L0s1rq5lMrUx6/7zgu/6VqMEKoc6UYBkiY0nCav7qTcs3eZxq/sYHNi9w6doU+8Qz7g9V5vxhaknEZOJt3bA+kFrfe6iUwV1A92k2X7PSWJIdysoxXMqntA9Wc4f73mjIrnuxVAL25VgXNW+2pl+PpHTMRxgGg6RQdXLJZ9kCFN/vyn+r3EeNzFiHj3/nPuPIj/dOYk3KQ62k4AMIzAXKwEYkn1O27ek28fvLExUxLL3axQaalIIpqJpEOH0nkV32YJjU4WH5n1M3TG/AzRV9UY10tmy/cyvw76geItPrXC9M9P80EL+t4LZS2nQ9CkLXUukhzfISylBw12+h2ENbrz+mK2O/QYl7clyz6W7ygnJeofj+kpv2coWoSTHo6HZYyk+DuBeaurifm621H0ts3bSYfYFKpQywssOsl4CldbMlXiIy40IzTlarSNczGuVvfq8FRb2jYiJxtJSgajeZwDC3vKBgGWCY2N9EexSmtmEnpTx5aerQHHQ1laPtvXlyq0Jpcl86ubORZp3ttDgzTm1L8inQm499OTuw7u+cvLkIiXFMCIdWWXl4UhVDuhCszuvzjraHUV7FkYzqovee6fviHELfE+veDG4CGyij5cI1pe+jIrIpITzfMR9j0NI4zowl7b7orypTZ8/Dk0gumiSgARRygEPpWiQr2KSvPK5itsMFHd186jlaI6cSsHF3zS8qbv0IQu2aZ9ysr3Z1UjFMDsqHdGErsnFNg7QZEEDglzwM3oz7AVdZgXJ4kE754zdoz1ga/A/C/PCQUgFApAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./assets/slider-img/lacoste.png":
/*!***************************************!*\
  !*** ./assets/slider-img/lacoste.png ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./assets/slider-img/netflix.png":
/*!***************************************!*\
  !*** ./assets/slider-img/netflix.png ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAdCAYAAABG8ynTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASzSURBVHgB7ZrbcdtGFIb/XQITZjyZoAPDFUh5iWm/mKrASgWRKzBTQeAKIlUQqoLQFQR5sZU8URUE6QCeScZweNmcg4sILBYAQUIOaeObIYG94LaLPeffsxA2vj1RGDhIWUIEwJu/oNFcb+xY+HCCFizx9rddj02O/+IW8EPet/DkWVfH5suaefrQgnKzlMAqXOCP26ryuvPr98HnsgB5KaDGWaYNNV0AL1BCzkTuQnRRbwm82qQ/nFC5j+0J6PeIdwaIzgXwM1oyxL9uBIRDjNxVu2vXHmshOqNn87c5j421R5uLTY6cItd+3Dl6u9h4P6E2vipe88mzcvvJqdQvqKDO+Y1GTyewlaA2LYwWBXGu16M6F3reANIrdZCAcOiNfo6eDhGXhRSNgKI5G7myMArjDptF5EKk8XRa5Z79WGJ4Zci+G0UWxMtysbhKygxwDydmbltHaUYBZ1bia4ws0u1XGNLbEvn5shXwK23c3F1dDqAKDxoZxEzGmky1DXFbVV53bPdwO458xO2asb6g5CsuE7FbKRAsccP1zR2UFEQv8yJgFyzIP7dpiDB5EQovg41RoQ7b8Qg3AbaETPW7NvXvG/I7Xl4EsCshsfD9GiN+bler7mU7suacY/R0RpVYMPiekMSBn6UrO6jsyHr2pywWoA0EGlmzvNWR9SdUY/R0hoB83VSHpXU+bdVXVxPs4YeWNEkb4mkp/+M4aPF8gNFDPXeF4et9xc+uLPBmbpfEwgYSVb7eNrUdxI6MzdwmJNMOdoorvqyp6J6ha0+EMX/7KMH9oGZ0F2NTCd3vVM9rMHHxg16gpzMW+PJaFwspwQI313qmKdQz09J96KdT2LzG8Todz1S7ZOLIrHHv+kjt5BGHfgIcKIaJKTsC11TX6IPWwLXMObJdQz9rSJrNr0uz+QXuH3rgF9ls/JBIpi7F5YcEsyAzdhApHVpaeP8Tjx5Os15nuyla+nYbmNNs/iOGVI6CiSmzSpBViASOD4m5fgL07MnINZm3DcrTcypVHMeO0NMpA+DH+hrqVBdklR3Ey7IVcrBnJ4xrPoX2zQKo+byaeVBs5mb4DKGG+xodQ0sfJSVM7TtpWm2tjSRQ5ek+E9UVVhStfUxvgXBEKiM3clKE5BC/wwFC9zuT6XJHKo5Cvt+kMdV8id9/QGuULg7iialFIwu5OVAWpM7EQm0HcSULj8PdBQIvsmk5d3sqwBGQPrsTv67I/ttBMUE2W66W7fMfr7baiDytjEdR3EGNoZ6KWW9PC6QhSrCJWvtZYCBHvNrqpMc2cix+yM//+JsyHADpmpqrZU/zUWtdMeejNw3LDXubuSC3DZKbQUB+LVxjENQdSPb5EbYkXdo+ww6kx8Z2a5j4A/adTvaRpoqfWzmShIOKfamubBX5JtS1T2liSvULQVFTG6fRm+vGDkpgM3fn5AJ2mFKbyLIst/HPNwMMwiGGYfg/rbnsQ903DKuK/EUiGGLR4KRmqfjgap5mudRuDgsNcwgqXm317lLphzuCFpD465lxfKpYscjpAm8LKoUvHCFyDukjjE+PMc2Bol+oD06zkUQjzRPJJ6fLdw/wIDjGt/5ThAfE34hOef8/GmDJn1oDAYkAAAAASUVORK5CYII=";

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkEsZUFBZSx1RUFBcUU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2lCO0FBQ3RDLGtEQUFNLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsb3VpLWxhbmRpbmcvLi9hc3NldHMvc2xpZGVyLWltZy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9oZWxsb3VpLWxhbmRpbmcvLi9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaGVsbG91aS1sYW5kaW5nLy4vc3JjL3N0eWxlLnNjc3M/YmMzYiIsIndlYnBhY2s6Ly9oZWxsb3VpLWxhbmRpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVsbG91aS1sYW5kaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZWxsb3VpLWxhbmRpbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oZWxsb3VpLWxhbmRpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZWxsb3VpLWxhbmRpbmcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2F0bGFzc2lhbi5wbmdcIjogXCIuL2Fzc2V0cy9zbGlkZXItaW1nL2F0bGFzc2lhbi5wbmdcIixcblx0XCIuL2h1YnNwb3QucG5nXCI6IFwiLi9hc3NldHMvc2xpZGVyLWltZy9odWJzcG90LnBuZ1wiLFxuXHRcIi4vamxsLnBuZ1wiOiBcIi4vYXNzZXRzL3NsaWRlci1pbWcvamxsLnBuZ1wiLFxuXHRcIi4vanVuaXBlci5wbmdcIjogXCIuL2Fzc2V0cy9zbGlkZXItaW1nL2p1bmlwZXIucG5nXCIsXG5cdFwiLi9sYWNvc3RlLnBuZ1wiOiBcIi4vYXNzZXRzL3NsaWRlci1pbWcvbGFjb3N0ZS5wbmdcIixcblx0XCIuL25ldGZsaXgucG5nXCI6IFwiLi9hc3NldHMvc2xpZGVyLWltZy9uZXRmbGl4LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9zbGlkZXItaW1nIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsImNvbnN0IGltYWdlcyA9IHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzL3NsaWRlci1pbWcvJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLyk7XHJcblxyXG5cclxuY29uc3Qgc2xpZGVyQm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX2JveCcpO1xyXG5jb25zdCBzbGlkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoJyk7XHJcbmNvbnN0IHNsaWRlckJsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19ibG9nJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gc2xpZGVyKCkge1xyXG5cdHNsaWRlckJveHMuZm9yRWFjaCgoc2xpZGVyQm94KSA9PiB7XHJcblx0XHRpbWFnZXMua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xyXG5cdFx0XHRjb25zdCBpbWFnZSA9IGltYWdlcyhrZXkpXHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBjbGllbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdFx0XHRjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuXHRcdFx0Y2xpZW50LmNsYXNzTmFtZSA9ICdjbGllbnQnXHJcblx0XHJcblx0XHRcdGljb24uc3JjID0gaW1hZ2VcclxuXHRcclxuXHRcdFx0Y2xpZW50LmFwcGVuZChpY29uKVxyXG5cdFx0XHRcclxuXHRcdFx0c2xpZGVyQm94LmFwcGVuZChjbGllbnQpXHJcblx0XHR9KVxyXG5cdFx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0fSlcclxufVxyXG5cclxuc2xpZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRjb25zdCBjdXJyRWxlbWVudCA9IGUudGFyZ2V0O1xyXG5cdGlmIChjdXJyRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaF9faXRlbV9hY3RpdicpKSB7XHJcblx0XHRyZXR1cm5cclxuXHR9IGVsc2Uge1xyXG5cdFx0ZGVsZXRlQ2xhc3MoKVxyXG5cdFx0Y3VyckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3dpdGNoX19pdGVtX2FjdGl2JylcclxuXHRcdGlmKGN1cnJFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3MnKSA9PT0gJ2xlZnQnKSB7XHJcblx0XHRcdHNsaWRlckJsb2cuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KSc7XHJcblx0XHR9IGVsc2UgaWYoY3VyckVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcycpID09PSAnY2VudGVyJykge1xyXG5cdFx0XHRzbGlkZXJCbG9nLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC05NTZweCknO1xyXG5cdFx0fSBlbHNlIGlmKGN1cnJFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3MnKSA9PT0gJ3JpZ2h0Jykge1xyXG5cdFx0XHRzbGlkZXJCbG9nLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xOTEycHgpJztcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxufSlcclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUNsYXNzKCkge1xyXG5cdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXRjaF9faXRlbScpO1xyXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzd2l0Y2hfX2l0ZW1fYWN0aXYnKTtcclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2xpZGVyIH0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5pbXBvcnQgeyBzbGlkZXIgfSBmcm9tICcuLi9qcy9zbGlkZXInO1xyXG5zbGlkZXIoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==