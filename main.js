/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hero */ "./src/js/modules/hero.js");
/* harmony import */ var _modules_customCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/customCursor */ "./src/js/modules/customCursor.js");


const eventBus = new EventTarget();
window.addEventListener('load', () => {
  initializeScrollSmoother();
  createScrollTrigger();
  _modules_hero__WEBPACK_IMPORTED_MODULE_0__["default"].initialize(eventBus);
  _modules_customCursor__WEBPACK_IMPORTED_MODULE_1__["default"].initialize(eventBus);
});
function initializeScrollSmoother() {
  // return
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollSmoother.create({
    markers: false,
    smooth: 1,
    effects: true,
    content: document.querySelector('.scrollingContainer')
  });
}
function createScrollTrigger() {
  var tl = createScrollTL();
  ScrollTrigger.create({
    trigger: document.querySelector('.contentContainer'),
    markers: false,
    start: `top top`,
    end: '400%',
    animation: tl,
    toggleActions: "play none none none",
    scrub: true,
    pin: true
  });
  var tl02 = createScrollTL02();
  ScrollTrigger.create({
    trigger: document.querySelector('.contentContainer02'),
    markers: true,
    start: `top top`,
    end: '+=400%',
    animation: tl02,
    toggleActions: "play none none none",
    scrub: true,
    pin: true
  });
}
function createScrollTL() {
  var tl = gsap.timeline({
    paused: true,
    timeScale: 1
  });
  tl.add('start').to('.contentContainer', {
    xPercent: -75
  }, 'start');
  return tl;
}
function createScrollTL02() {
  var tl02 = gsap.timeline({
    paused: true,
    timeScale: 1
  });
  tl02.add('start').to('.contentContainer02', {
    xPercent: -75
  }, 'start');
  return tl02;
}

/***/ }),

/***/ "./src/js/modules/customCursor.js":
/*!****************************************!*\
  !*** ./src/js/modules/customCursor.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const self = {
  eventBus: null,
  initialize: eventBus => {
    self.eventBus = eventBus;
    self.cursorDelay = 0.05;
    self.scrollAmount = 0;
    self.addEventListeners();
    self.createCustomCursor();
  },
  addEventListeners: () => {
    window.addEventListener('mousemove', function (e) {
      self.updateCustomCursorPos(e);
    });
    window.addEventListener('scroll', self.transformCustomCursor, true);
  },
  createCustomCursor: () => {
    let cursorPopup = document.createElement("div");
    cursorPopup.classList.add("cursorPopupContainer");
    cursorPopup.innerHTML = '<span>Scroll to start<br>experience</span>';
    document.querySelector('.nonScrollingContainer').append(cursorPopup);
  },
  transformCustomCursor: () => {
    self.scrollAmount++;
    if (self.scrollAmount > 15) {
      console.log('scroll');
      self.cursorDelay = 0;
      gsap.to('.cursorPopupContainer', 0.5, {
        borderRadius: '150px'
      });
      gsap.to('.cursorPopupContainer', 0.5, {
        width: 5,
        height: 5,
        backgroundColor: '#fff',
        delay: 0.1
      });
      gsap.to('.cursorPopupContainer span', 0.2, {
        opacity: 0
      });
      window.removeEventListener('scroll', self.transformCustomCursor, true);
    }
  },
  updateCustomCursorPos(e) {
    gsap.to('.cursorPopupContainer', 0.15, {
      opacity: 1,
      x: e.clientX,
      y: e.clientY,
      ease: "none",
      delay: self.cursorDelay
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (self);

/***/ }),

/***/ "./src/js/modules/hero.js":
/*!********************************!*\
  !*** ./src/js/modules/hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const self = {
  eventBus: null,
  initialize: eventBus => {
    console.log('hero init');
    self.eventBus = eventBus;
    self.addEventListeners();
  },
  addEventListeners: () => {
    console.log('adding eventlisteners');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (self);

/***/ }),

/***/ "./src/styling/style.scss":
/*!********************************!*\
  !*** ./src/styling/style.scss ***!
  \********************************/
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/main": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksitecore_generator_2023"] = globalThis["webpackChunksitecore_generator_2023"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/styling/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;