/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules.js":
/*!***************************!*\
  !*** ./src/js/modules.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/nav/nav.js */ "./src/modules/nav/nav.js");
/* harmony import */ var _modules_about_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/about/tabs.js */ "./src/modules/about/tabs.js");
/* harmony import */ var _modules_about_chat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/about/chat.js */ "./src/modules/about/chat.js");




/***/ }),

/***/ "./src/modules/about/chat.js":
/*!***********************************!*\
  !*** ./src/modules/about/chat.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// client vars
const clientTypingBlock = document.querySelector('.js-clientChatPoints');
const clientTypingPoints = document.querySelectorAll('.js-clientChatPoints div');
const clientMessage = document.querySelector('.js-clientMessage');
const freelancerTypingBlock = document.querySelector('.js-freelancerChatPoints');
const freelancerTypingPoints = document.querySelectorAll('.js-freelancerChatPoints div');
const freelancerMessage = document.querySelector('.js-freelancerMessage');

// freelancer vars

const typingPointsRotation = (typingBlock, typingPoints, message, typingTime) => {
  typingBlock.classList.add('chat__typing-isVisible');
  let pointNumber = 0;
  const pointRotation = () => {
    typingPoints.forEach(point => {
      point.classList.remove('chat__typing-isActivePoint');
    });
    typingPoints[pointNumber].classList.add('chat__typing-isActivePoint');
    if (pointNumber === 2) {
      pointNumber = 0;
    } else {
      pointNumber += 1;
    }
  };
  pointRotation();
  const typingInterval = setInterval(() => {
    pointRotation();
  }, 300);
  setTimeout(() => {
    clearInterval(typingInterval);
    typingBlock.classList.add('chat__typing-isTyped');
    message.classList.add('chat__text-isTyped');
    setTimeout(() => {
      // eslint-disable-next-line max-len
      typingPointsRotation(freelancerTypingBlock, freelancerTypingPoints, freelancerMessage, 2500);
    }, 500);
  }, typingTime);
};
typingPointsRotation(clientTypingBlock, clientTypingPoints, clientMessage, 1500);

/***/ }),

/***/ "./src/modules/about/tabs.js":
/*!***********************************!*\
  !*** ./src/modules/about/tabs.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const tabsHeaders = document.querySelectorAll('.tabs__item');
const tabsContentBlocks = document.querySelectorAll('.tabs__info');
let currentNumber = '0';
tabsHeaders.forEach(header => {
  header.addEventListener('click', event => {
    const headerNumber = event.currentTarget.dataset.header;
    if (currentNumber !== headerNumber) {
      tabsContentBlocks.forEach(block => {
        block.classList.remove('tabs__info-isVisible');
      });
      tabsHeaders.forEach(title => {
        title.classList.remove('tabs__item-isActive');
      });
      for (let i = 0; i < tabsContentBlocks.length; i += 1) {
        if (tabsContentBlocks[i].dataset.tab === headerNumber) {
          currentNumber = tabsContentBlocks[i].dataset.tab;
          tabsContentBlocks[i].classList.add('tabs__info-isVisible');
          tabsHeaders[i].classList.add('tabs__item-isActive');
        }
      }
    }
  });
});

/***/ }),

/***/ "./src/modules/nav/nav.js":
/*!********************************!*\
  !*** ./src/modules/nav/nav.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const languages = document.querySelectorAll('.js-nav__lang');
languages.forEach(lang => {
  lang.addEventListener('click', event => {
    const elem = event.currentTarget;
    const langPosition = elem.dataset.position;
    if (langPosition !== '1') {
      for (let i = 0; i < languages.length; i += 1) {
        if (languages[i].dataset.position === '1') {
          languages[i].dataset.position = langPosition;
          elem.dataset.position = '1';
        }
      }
    }
  });
});

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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules.js */ "./src/js/modules.js");
// //Отдельные компоненты
// import "./components";

// Модули

})();

/******/ })()
;