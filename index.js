module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./typings/index.d.ts" />
	'use strict';
	const Soundplayer_ts_1 = __webpack_require__(1);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Soundplayer_ts_1.default;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	const isHeadless = __webpack_require__(2);
	class RealSoundplayer {
	    constructor(file) {
	        this.file = file;
	    }
	    /**
	     * Play for real.
	     */
	    play() {
	        new Audio(this.file).play();
	    }
	}
	class DummySoundplayer {
	    /**
	     * Don't play sound because unavailable.
	     */
	    play() {
	    }
	}
	class Soundplayer {
	    constructor(file) {
	        this.player = isHeadless() ? new DummySoundplayer() : new RealSoundplayer(file);
	    }
	    /**
	     * Play sound if available.
	     */
	    play() {
	        this.player.play();
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Soundplayer;


/***/ },
/* 2 */
/***/ function(module, exports) {

	/// <reference path="./typings/index.d.ts" />
	'use strict';
	function isHeadlessElectron() {
	    if (process.platform === 'win32' || process.platform === 'darwin') {
	        return false;
	    }
	    else if (process.env.DISPLAY) {
	        const displayNumber = process.env.DISPLAY.slice(1);
	        console.log(displayNumber);
	        return parseInt(displayNumber) >= 99;
	    }
	    else {
	        return true;
	    }
	}
	module.exports = isHeadlessElectron;


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map