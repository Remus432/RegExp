/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// Init variables
const input = document.querySelector("input");
const p = document.querySelector("p");

// Event listener on blur
input.addEventListener("blur", validateInput);


// Validate input
function validateInput() {
    //let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)([a-zA-Z]{2,5})/;
    let re = /^[A-Z]([a-zA-Z]+)[ A-Z]([a-zA-Z]+)$/;

    // Check if value matches RegExp
    if(!re.test(input.value)) {
        console.log("Not working");
        // Transform first letters of the name to uppercase
        convertLetter(input.value);

    } else {
        console.log("Working");
        p.innerHTML = input.value;
    }
}


// Convert to uppercase
function convertLetter(value) {
    let output = ``;
    // Split the name string into an array
    const nameArr = value.split(" ");
    console.log(value.split(" "));
    
    // Check if p has span elements already
    if(!p.hasChildNodes()) {
        // Convert every first letter of the words to uppercase
        nameArr.forEach((name, index) => {
            console.log(name.replace(name.charAt(0), name.charAt(0).toUpperCase()));
            output +=  `<span>${name.replace(name.charAt(0), name.charAt(0).toUpperCase())}</span>`;
      })
    } else {
        // Delete elements from p
        p.innerHTML = "";
        // Convert every first letter of the words to uppercase
        nameArr.forEach((name, index) => {
            console.log(name.replace(name.charAt(0), name.charAt(0).toUpperCase()));
            output +=  `<span>${name.replace(name.charAt(0), name.charAt(0).toUpperCase())}</span>`;
      })
    }
    
    // Append to UI
    p.innerHTML = output;
    // Clear input field
    input.value = "";
}

/***/ })
/******/ ]);