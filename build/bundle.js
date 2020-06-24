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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/filters/filters.js":
/*!********************************!*\
  !*** ./src/filters/filters.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* 

export const zacherkivanie = () => {
    const exclamations = document.querySelectorAll('.fa-exclamation');
    for(let exclamation of exclamations){
        exclamation.addEventListener('click', function(){
            exclamation.parentElement.parentElement.style.setProperty("text-decoration", "line-through");;
            event.preventDefault();
        })
    }

}; */

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters/filters */ "./src/filters/filters.js");
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_filters_filters__WEBPACK_IMPORTED_MODULE_1__);


document.getElementById('add').addEventListener('click', _utils_utils__WEBPACK_IMPORTED_MODULE_0__["getMessage"]);
document.querySelector('.all').addEventListener('.click', () => {
  console.log(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["maps"]);
});
/* Filters */

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: maps, getMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maps", function() { return maps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessage", function() { return getMessage; });
const newTask = document.getElementById('ourTasks');
const valueOfAddTask = document.getElementById('newTask');
let cross = true;
const maps = new Map();

const deleteTask = () => {
  let trash = document.querySelectorAll('.fa-trash-alt');

  for (let task of trash) {
    task.addEventListener('click', function () {
      task.parentElement.parentElement.remove();
      event.preventDefault();
    });
  }
};

const zacherkivanie = () => {
  const exclamations = document.querySelectorAll('.fa-exclamation');

  for (let exclamation of exclamations) {
    exclamation.addEventListener('click', function () {
      if (cross) {
        cross = false;
        exclamation.parentElement.parentElement.style.setProperty("text-decoration", "line-through");
      } else {
        cross = true;
        exclamation.parentElement.parentElement.style.setProperty("text-decoration", "none");
      }

      event.preventDefault();
    });
  }
};
/* const SborMap = (value) => {
    
    const task  = document.querySelector(`.task`);
    maps.set(`${value}`, task);
}
 */


class Filter {
  constructor(value) {
    this.value = value;
    this.task = document.querySelector(`.task`);
    console.log(this.value);
  }

  mapSet() {
    maps.set(`${this.value}`, this.task);
    console.log(maps);
  }

  filterAll() {
    console.log('All');
  }

  filterActive() {
    console.log('Active');
  }

  filterDone() {
    console.log('Done');
  }

}

const getMessage = () => {
  newTask.innerHTML += `<div class="task">
        <p>${valueOfAddTask.value}</p>
        <button>
            <i class="far fa-trash-alt"></i>
        </button>
        <button>    
            <i class="fas fa-exclamation"></i>
        </button>
        </div>`;
  const filterAll = new Filter(valueOfAddTask.value);
  document.querySelector('.all').addEventListener('click', filterAll.mapSet);
  valueOfAddTask.value = '';
  deleteTask();
  zacherkivanie();
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map