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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ \"./src/newProject.js\");\n/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ \"./src/toDo.js\");\n\n\n\n\n\n\nObject(_newProject__WEBPACK_IMPORTED_MODULE_0__[\"newProj\"])();\nObject(_toDo__WEBPACK_IMPORTED_MODULE_1__[\"toDo\"])();\nObject(_toDo__WEBPACK_IMPORTED_MODULE_1__[\"prioritySelect\"])();\nObject(_toDo__WEBPACK_IMPORTED_MODULE_1__[\"deleteToDo\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/*! exports provided: newProj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newProj\", function() { return newProj; });\nconst newProj = function () {\n  let storedProjects = [];\n\n\n  const newProjectButton = document.getElementById(\"newProjectButton\");\n  const projNameField = document.getElementById(\"projNameField\");\n  const projects = document.getElementById('projects');\n  const noNewProj = document.getElementById('noNewProj');\n\n  noNewProj.innerText = 'No new projects. Create one above!';\n\n  \n\n  \n\n  newProjectButton.addEventListener(\"click\", function (e) {\n      if (projNameField.value == '') {\n          return;\n      }\n      \n    e.preventDefault();\n    projects.innerHTML += `<li><a href=\"#\">${projNameField.value}</a></li>`;\n    storedProjects.push(projNameField.value);\n    projNameField.value = '';\n    console.log(storedProjects);\n    if (storedProjects !== []) {\n      noNewProj.innerText = '';\n    } else {\n      noNewProj.innerText = 'No new projects. Create one above!';\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/newProject.js?");

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/*! exports provided: toDo, renderToDo, prioritySelect, deleteToDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDo\", function() { return toDo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderToDo\", function() { return renderToDo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prioritySelect\", function() { return prioritySelect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteToDo\", function() { return deleteToDo; });\nconst toDo = function () {\n  let toDos = [];\n\n  const titleInput = document.querySelector('#title');\n  const descInput = document.querySelector('#description');\n  const dueDateInput = document.querySelector('#dueDate');\n  const newToDoButton = document.querySelector('#newToDo');\n\n  const toDoFactory = function (title, desc, dueDate, priority) {\n    return {\n      title,\n      desc,\n      dueDate,\n      priority\n    };\n\n  }\n\n  const newToDo = function (e) {\n    const createToDo = toDoFactory(titleInput.value, descInput.value, dueDateInput.value, '');\n    const blankMessage = document.querySelector('#blankMessage');\n    e.preventDefault();\n    blankMessage.remove();\n    renderToDo(createToDo);\n    toDos.push(createToDo);\n    console.log(toDos);\n  }\n\n  newToDoButton.addEventListener('click', newToDo);\n}\n\nconst prioritySelect = function () {\n  $('.dropdown').on('click', \"#high\", function (event) {\n    const selectButton = event.target.parentElement.parentElement.firstElementChild;\n    selectButton.innerText = 'High';\n    selectButton.setAttribute('class', 'btn btn-warning');\n  })\n  $('.dropdown').on('click', \"#low\", function (event) {\n    const selectButton = event.target.parentElement.parentElement.firstElementChild;\n    selectButton.innerText = 'Low';\n    selectButton.setAttribute('class', 'btn btn-success');\n  })\n}\n\nconst deleteToDo = function () {\n  $(\".table\").on(\"click\", \"#deleteButton\", function (event) {\n    event.target.parentElement.parentElement.remove();\n  });\n};\n\nconst renderToDo = function (createToDo) {\n  const toDoTable = document.querySelector('.table');\n  const addToDoHTML = `<tr>\n    <td>${createToDo.title}</td>\n    <td>${createToDo.desc}</td>\n    <td>${createToDo.dueDate}</td>\n    <td><div class=\"dropdown\">\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        Select\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a id='high' class=\"dropdown-item\" href=\"#\">High</a>\n        <a id='low' class=\"dropdown-item\" href=\"#\">Low</a>\n      </div>\n    </div></td>\n    <td><button type=\"button\" class=\"btn btn-danger\" id='deleteButton'>Delete</button></td>\n  </tr>`;\n\n  toDoTable.innerHTML += addToDoHTML;\n  prioritySelect();\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/toDo.js?");

/***/ })

/******/ });