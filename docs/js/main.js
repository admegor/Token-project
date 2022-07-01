/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const menu = __webpack_require__(/*! ./module/menu.js */ \"./src/js/module/menu.js\");\r\nconst popups = __webpack_require__(/*! ./module/popups.js */ \"./src/js/module/popups.js\");\n\n//# sourceURL=webpack://token-project/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/menu.js":
/*!*******************************!*\
  !*** ./src/js/module/menu.js ***!
  \*******************************/
/***/ (function() {

eval("const $burgerBtn = document.querySelector('.header__menu-burger');\r\nconst $nav = document.querySelector('.nav');\r\nconst $headerContainer = document.querySelector('.header__container');\r\n\r\n$burgerBtn.addEventListener('click', function() {\r\n    $burgerBtn.classList.toggle('active');\r\n    $nav.classList.toggle('mobile-active');\r\n    $headerContainer.classList.toggle('header__mobile-active');\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://token-project/./src/js/module/menu.js?");

/***/ }),

/***/ "./src/js/module/popups.js":
/*!*********************************!*\
  !*** ./src/js/module/popups.js ***!
  \*********************************/
/***/ (function() {

eval("const popupLinks = document.querySelectorAll('.popup-link');\r\nconst body = document.querySelector('body');\r\nconst lockPadding = document.querySelectorAll('.lock-padding')\r\n\r\nlet unlock = true;\r\n\r\nconst timeout = 800;\r\n\r\nfor (let i = 0; i < popupLinks.length; i++) {\r\n    const popupLink = popupLinks[i];\r\n    popupLink.addEventListener('click', function(e) {\r\n        const popupName = popupLink.getAttribute('href').replace('#', '');\r\n        const currentPopup = document.getElementById(popupName);\r\n\r\n        popupOpen(currentPopup);\r\n        e.preventDefault();\r\n    })\r\n}\r\n\r\nconst popupCloseIcon = document.querySelectorAll('.close-popup');\r\n\r\nif (popupCloseIcon.length > 0) {\r\n    for (let i = 0; i < popupCloseIcon.length; i++) {\r\n        const el = popupCloseIcon[i];\r\n        el.addEventListener('click', function(e) {\r\n            popupClose(el.closest('.popup'));\r\n            e.preventDefault();\r\n        })\r\n    }\r\n}\r\n\r\nfunction popupOpen(currentPopup) {\r\n    if (currentPopup && unlock) {\r\n        const popupActive = document.querySelector('.popup.open');\r\n        if (popupActive) {\r\n            popupClose(popupActive, false)\r\n        }\r\n\r\n        currentPopup.classList.add('open');\r\n        currentPopup.addEventListener('click', function(e) {\r\n            if (!e.target.closest('.popup__content')) {\r\n                popupClose(e.target.closest('.popup'));\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\nfunction popupClose(popupActive, doUnlock = true) {\r\n    if (unlock) {\r\n        popupActive.classList.remove('open');\r\n    }\r\n}\r\n\r\ndocument.addEventListener('keydown', function(e) {\r\n    if (e.which === 27) {\r\n        const popupActive = document.querySelector('.popup.open');\r\n        popupClose(popupActive);\r\n    }\r\n})\r\n\r\ndocument.addEventListener( 'wpcf7mailsent', function() {\r\n    ym(73948678,'reachGoal','real-estate');\r\n}, false);\n\n//# sourceURL=webpack://token-project/./src/js/module/popups.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;