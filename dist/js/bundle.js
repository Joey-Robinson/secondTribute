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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _likes = __webpack_require__(/*! ./likes */ \"./src/js/likes.js\");\n\nfetch(\"https://raider.io/api/v1/characters/profile?region=us&realm=Zul'jin&name=Meerkatz&fields=gear,mythic_plus_scores,mythic_plus_ranks,mythic_plus_recent_runs\").then(function (response) {\n  return response.json();\n}).then(function (data) {\n\n  var name = data.name;\n  var spec = data.active_spec_name;\n  var druid = data.class;\n  var druidInformation = 'https://wow.gamepedia.com/Druid';\n  var plusRankRegion = data.mythic_plus_ranks.class.region;\n  var plusRankRealm = data.mythic_plus_ranks.class.realm;\n  var recentPlus = data.mythic_plus_recent_runs[0];\n  var recentPlusOne = data.mythic_plus_recent_runs[1];\n  var recentPlusTwo = data.mythic_plus_recent_runs[2];\n  var output = document.getElementById('output');\n  var nameLeft = document.createElement('div');\n  nameLeft.classList.add('output-left');\n  nameLeft.innerHTML = '\\n    <h3>Hello</h3>\\n  ';\n  output.appendChild(nameLeft);\n  // Container Div for Name\n  var nameDiv = document.createElement('div');\n  // h1 for name\n  var nameHeader = document.createElement('h1');\n  // contents of the h1\n  nameHeader.innerHTML = '\\n    <a \\n      href=\"' + data.profile_url + '\" \\n      target=\"_blank\"\\n    >\\n      ' + name + '\\n    </a>\\n  ';\n  // Appeding nameHeader to nameDiv\n  nameDiv.appendChild(nameHeader);\n  // Adding 'output-name' to the div (for positioning and styling)\n  nameDiv.classList.add('output-name');\n  // Appending nameDiv to output\n  output.appendChild(nameDiv);\n\n  var activeSpecDiv = document.createElement('div');\n  var talents = \"https://www.wowhead.com/talent-calc/druid/restoration/cSKz\";\n  var activeSpecHeader = document.createElement('h2');\n  activeSpecHeader.innerHTML = '\\n    <a \\n      href=\"' + talents + '\" \\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      ' + spec + '\\n    </a>\\n    |\\n    <a \\n      href=\"' + druidInformation + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      ' + druid + '\\n    </a>\\n  ';\n  activeSpecDiv.classList.add('output-spec');\n  activeSpecDiv.appendChild(activeSpecHeader);\n  output.appendChild(activeSpecDiv);\n\n  var plusScoreDiv = document.createElement('div');\n  var plusScoreHeader = document.createElement('h3');\n  plusScoreHeader.innerHTML = '\\n    Region: ' + plusRankRegion + ' <br />\\n    &nbsp;Realm: &nbsp; ' + plusRankRealm + '\\n  ';\n  plusScoreDiv.classList.add('output-score');\n  plusScoreDiv.appendChild(plusScoreHeader);\n  output.appendChild(plusScoreDiv);\n\n  var recentPlusRuns = document.createElement('div');\n  var recentPlusRunsHeader = document.createElement('h3');\n  recentPlusRunsHeader.innerHTML = '\\n    <a\\n      href=\"' + recentPlus.url + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      ' + recentPlus.mythic_level + ' -\\n      ' + recentPlus.dungeon + '\\n    </a>\\n    <br />\\n    <a \\n      href=\"' + recentPlusOne.url + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      ' + recentPlusOne.mythic_level + ' -\\n      ' + recentPlusOne.dungeon + '\\n    </a>\\n    <br />\\n    <a \\n      href=\"' + recentPlus.url + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      ' + recentPlusTwo.mythic_level + ' -\\n      ' + recentPlusTwo.dungeon + '\\n    </a>\\n  ';\n  recentPlusRuns.classList.add('output-recent');\n  recentPlusRuns.appendChild(recentPlusRunsHeader);\n  output.appendChild(recentPlusRuns);\n\n  var likesDiv = document.createElement('div');\n  var likesList = document.createElement('ul');\n  // likesList.innerHTML = likes.join(\" <br />\");\n  likesList.innerHTML = _likes.likes.reduce(function (accumulator, like) {\n    accumulator += '<li>' + like + '</li>';\n    return accumulator;\n  });\n  // likesList.innerHTML = likes.map((like) => {\n  //   return `<li>${like.join(\" \")}</li>`\n  // })\n  // likesList.innerHTML = likes.forEach((like) => {\n  //   return `<li>${like}</li>`\n  // })\n  // likesList.innerHTML = `\n  //   <li>${likes[0]}</li>\n  //   <li>${likes[1]}</li>\n  //   <li>${likes[2]}</li>\n  //   <li>${likes[3]}</li>\n  // `\n  likesDiv.classList.add('output-likes');\n  likesDiv.appendChild(likesList);\n  output.appendChild(likesDiv);\n\n  // FavIcon that has to be scoped\n  var changeFavIcon = function changeFavIcon(img) {\n    var favIcon = document.querySelector('link[rel=\"shortcut icon\"]');\n    if (!favIcon) {\n      favIcon = document.createElement(\"link\");\n      favIcon.setAttribute(\"rel\", \"shortcut icon\");\n      var head = document.querySelector(\"head\");\n      head.appendChild(favIcon);\n    }\n    favIcon.setAttribute(\"type\", \"image/jpg\");\n    favIcon.setAttribute(\"href\", img);\n  };\n  var favImage = data.thumbnail_url;\n  changeFavIcon(favImage);\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/likes.js":
/*!*************************!*\
  !*** ./src/js/likes.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar likes = exports.likes = ['Catweaving - Meow', 'Doing big heals', 'Doing mythic+', 'Fluffy Cats', 'Griefing', 'Test'];\n\n//# sourceURL=webpack:///./src/js/likes.js?");

/***/ })

/******/ });