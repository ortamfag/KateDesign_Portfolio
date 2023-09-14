/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/fullpageScroll.js":
/*!*********************************************!*\
  !*** ./src/js/components/fullpageScroll.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// https://codesandbox.io/s/vanilla-js-full-page-smooth-scroll-m78lw?file=/src/index.js:1152-1836

const smoothScroll = () => {
  let check = false;
  // eslint-disable-next-line
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  if (check === false) {
    const {
      body
    } = document;
    const main = document.querySelector('.scroll');
    let sx = 0;
    let sy = 0;
    let dx = sx;
    let dy = sy;
    body.style.height = `${main.clientHeight}px`;
    main.style.position = 'fixed';
    main.style.top = 0;
    main.style.left = 0;
    const scroll = () => {
      sx = window.pageXOffset;
      sy = window.pageYOffset;
    };
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const render = () => {
      dx = lerp(dx, sx, 0.07);
      dy = lerp(dy, sy, 0.07);
      dx = Math.floor(dx * 100) / 100;
      dy = Math.floor(dy * 100) / 100;
      main.style.transform = `translate(-${dx}px, -${dy}px)`;
      window.requestAnimationFrame(render);
    };
    window.addEventListener('scroll', scroll);
    window.requestAnimationFrame(render);
  }
};
smoothScroll();

/***/ }),

/***/ "./src/js/components/scroll-animation.js":
/*!***********************************************!*\
  !*** ./src/js/components/scroll-animation.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// scroll

const options = {
  threshold: 0.4
};
const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('title-parent')) {
        const {
          children
        } = entry.target;
        for (let i = 0; i < children.length; i += 1) {
          children[i].classList.add('title-animation--isIntersecting');
        }
      }
      entry.target.classList.add('hidden-show');
    }
  });
};
const observer = new IntersectionObserver(onEntry, options);
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el, options));

/***/ }),

/***/ "./src/js/modules.js":
/*!***************************!*\
  !*** ./src/js/modules.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_preloader_preloader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/preloader/preloader.js */ "./src/modules/preloader/preloader.js");
/* harmony import */ var _modules_nav_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/nav/nav.js */ "./src/modules/nav/nav.js");
/* harmony import */ var _modules_about_tabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/about/tabs.js */ "./src/modules/about/tabs.js");
/* harmony import */ var _modules_about_chat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/about/chat.js */ "./src/modules/about/chat.js");





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

// freelancer vars
const freelancerTypingBlock = document.querySelector('.js-freelancerChatPoints');
const freelancerTypingPoints = document.querySelectorAll('.js-freelancerChatPoints div');
const freelancerMessage = document.querySelector('.js-freelancerMessage');
const freelancerAvatar = document.querySelector('.js-freelancer-avatar');
const freelancerName = document.querySelector('.js-freelancer-name');
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
      freelancerAvatar.classList.add('freelancer-startTyping');
      freelancerName.classList.add('freelancer-startTyping');
    }, 500);
  }, typingTime);
};
document.querySelector('.js-chat').addEventListener('transitionstart', () => {
  typingPointsRotation(clientTypingBlock, clientTypingPoints, clientMessage, 1500);
}, {
  once: true
});

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

// dropdown

const tabsDropdowns = document.querySelectorAll('.js-tabs__dropdown');
tabsDropdowns.forEach(item => {
  item.addEventListener('click', e => {
    const dataset = e.currentTarget.dataset.customer;
    for (let i = 0; i < tabsDropdowns.length; i += 1) {
      if (dataset === tabsDropdowns[i].dataset.customer) {
        const contentPart = tabsDropdowns[i].children[1];
        const plus = tabsDropdowns[i].children[0].children[1];
        contentPart.classList.toggle('tabs__description-isVisible');
        plus.classList.toggle('tabs__plus-isActive');
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
const nav = document.querySelector('.js-nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 4) {
    nav.classList.add('nav__active');
  } else {
    nav.classList.remove('nav__active');
  }
});

/***/ }),

/***/ "./src/modules/preloader/preloader.js":
/*!********************************************!*\
  !*** ./src/modules/preloader/preloader.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// const preloader = document.querySelector('#preloader');
// const svgAnimation = document.querySelector('#svg-animation');

// let isLoad = false;
// console.log(isLoad);
// window.addEventListener('load', () => {
//     isLoad = true;
// });

// setTimeout(() => {
//     svgAnimation.classList.add('preloader-hidden');

//     if (isLoad) {
//         preloader.classList.add('preloader-after-hidden');
//         setTimeout(() => {
//             preloader.classList.add('is-hidden');
//         }, 200);
//     }
// }, 3100);

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
/* harmony import */ var _components_scroll_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/scroll-animation.js */ "./src/js/components/scroll-animation.js");
/* harmony import */ var _components_fullpageScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/fullpageScroll.js */ "./src/js/components/fullpageScroll.js");
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules.js */ "./src/js/modules.js");
// //Отдельные компоненты



// Модули

})();

/******/ })()
;