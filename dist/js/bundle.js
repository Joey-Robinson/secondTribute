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

/***/ "./src/js/ffCall.js":
/*!**************************!*\
  !*** ./src/js/ffCall.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ffCall = exports.ffCall = function ffCall() {\n  fetch(\"https://xivapi.com/character/10803092\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    console.log(data);\n    var lodestoneLink = \"https://na.finalfantasyxiv.com/lodestone/character/10803092/\";\n    var ffName = data.Character.Name;\n    var ffBirthday = data.Character.Nameday;\n    var ffServer = data.Character.Server;\n    var finalFantasy = document.getElementById('finalfantasy');\n\n    var nameDiv = document.createElement('div');\n    var nameHeading = document.createElement('h1');\n    nameDiv.classList.add('finalfantasy-name');\n    nameHeading.innerHTML = \"\\n      <a \\n        href=\\\"\" + lodestoneLink + \"\\\"\\n        target=\\\"_blank\\\"\\n        rel=\\\"noopener noreferrer\\\"\\n      >\\n        \" + ffName + \"\\n      </a>\\n      <br />\\n\\n      \";\n    nameDiv.appendChild(nameHeading);\n    finalFantasy.appendChild(nameDiv);\n\n    var birthdayDiv = document.createElement('div');\n    var birthdayHeading = document.createElement('h3');\n    birthdayDiv.classList.add('finalfantasy-birthday');\n    birthdayHeading.innerHTML = \"\" + ffBirthday;\n    birthdayDiv.appendChild(birthdayHeading);\n    finalFantasy.appendChild(birthdayDiv);\n\n    var serverNameDiv = document.createElement('div');\n    var serverNameHeading = document.createElement('h3');\n    serverNameDiv.classList.add('finalfantasy-server');\n    serverNameHeading.innerHTML = \"\" + ffServer;\n    serverNameDiv.appendChild(serverNameHeading);\n    finalFantasy.appendChild(serverNameDiv);\n  });\n};\n\nffCall();\n\n//# sourceURL=webpack:///./src/js/ffCall.js?");

/***/ }),

/***/ "./src/js/ffLeft.js":
/*!**************************!*\
  !*** ./src/js/ffLeft.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ffLeft = exports.ffLeft = function ffLeft() {\n  var finalFantasy = document.getElementById('finalfantasy');\n\n  var nameLeft = document.createElement('div');\n  var nameLeftHeading = document.createElement('h1');\n  nameLeftHeading.innerHTML = 'Name:';\n  nameLeft.classList.add('finalfantasy-nameLeft');\n  nameLeft.appendChild(nameLeftHeading);\n  finalFantasy.appendChild(nameLeft);\n\n  var birthdayLeft = document.createElement('div');\n  var birthdayLeftHeading = document.createElement('h3');\n  birthdayLeftHeading.innerHTML = 'Birthday:';\n  birthdayLeft.classList.add('finalfantasy-birthdayLeft');\n  birthdayLeft.appendChild(birthdayLeftHeading);\n  finalFantasy.appendChild(birthdayLeft);\n\n  var serverLeft = document.createElement('div');\n  var serverLeftHeading = document.createElement('h3');\n  serverLeftHeading.innerHTML = 'Server:';\n  serverLeft.classList.add('finalfantasy-serverLeft');\n  serverLeft.appendChild(serverLeftHeading);\n  finalFantasy.appendChild(serverLeft);\n};\n\nffLeft();\n\n//# sourceURL=webpack:///./src/js/ffLeft.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _likes = __webpack_require__(/*! ./likes */ \"./src/js/likes.js\");\n\nvar _ffCall = __webpack_require__(/*! ./ffCall */ \"./src/js/ffCall.js\");\n\nvar _ffLeft = __webpack_require__(/*! ./ffLeft */ \"./src/js/ffLeft.js\");\n\nvar _wowLeft = __webpack_require__(/*! ./wowLeft */ \"./src/js/wowLeft.js\");\n\nvar _streamers = __webpack_require__(/*! ./streamers */ \"./src/js/streamers.js\");\n\nfetch(\"https://raider.io/api/v1/characters/profile?region=us&realm=Zul'jin&name=Meerkatz&fields=gear,mythic_plus_scores,mythic_plus_ranks,mythic_plus_recent_runs\").then(function (response) {\n  return response.json();\n}).then(function (data) {\n  console.log(data);\n  var name = data.name;\n  var spec = data.active_spec_name;\n  var druid = data.class;\n  var druidInformation = 'https://wow.gamepedia.com/Druid';\n  var plusRankRegion = data.mythic_plus_ranks.class.region;\n  var plusRankRealm = data.mythic_plus_ranks.class.realm;\n  var recentPlus = data.mythic_plus_recent_runs[0];\n  var recentPlusChest = data.mythic_plus_recent_runs[0].num_keystone_upgrades;\n  var recentPlusOne = data.mythic_plus_recent_runs[1];\n  var recentPlusChestOne = data.mythic_plus_recent_runs[1].num_keystone_upgrades;\n  var recentPlusTwo = data.mythic_plus_recent_runs[2];\n  var recentPlusChestTwo = data.mythic_plus_recent_runs[2].num_keystone_upgrades;\n  var output = document.getElementById('wow');\n\n  // Container Div for Name\n  var nameDiv = document.createElement('div');\n  // h1 for name\n  var nameHeader = document.createElement('h1');\n  // contents of the h1\n  nameHeader.innerHTML = '\\n    <a \\n      href=\"' + data.profile_url + '\" \\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n    \\n        ' + name + '\\n    \\n    </a>\\n  ';\n  // Appeding nameHeader to nameDiv\n  nameDiv.appendChild(nameHeader);\n  // Adding 'output-name' to the div (for positioning and styling)\n  nameDiv.classList.add('output-name');\n  // Appending nameDiv to output\n  output.appendChild(nameDiv);\n\n  var activeSpecDiv = document.createElement('div');\n  var talents = \"https://www.wowhead.com/talent-calc/druid/restoration/cSKz\";\n  var activeSpecHeader = document.createElement('h2');\n  activeSpecHeader.innerHTML = '\\n    <a \\n      href=\"' + talents + '\" \\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      ' + spec + '\\n    </a>\\n    |\\n    <a \\n      href=\"' + druidInformation + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      ' + druid + '\\n    </a>\\n  \\n  ';\n  activeSpecDiv.classList.add('output-spec');\n  activeSpecDiv.appendChild(activeSpecHeader);\n  output.appendChild(activeSpecDiv);\n\n  var plusScoreDiv = document.createElement('div');\n  var plusScoreHeader = document.createElement('h3');\n  plusScoreHeader.innerHTML = '\\n    ' + plusRankRegion + '<br />\\n    &nbsp;&nbsp;' + plusRankRealm + '\\n  \\n  ';\n  plusScoreDiv.classList.add('output-score');\n  plusScoreDiv.appendChild(plusScoreHeader);\n  output.appendChild(plusScoreDiv);\n\n  var recentPlusRuns = document.createElement('div');\n  var recentPlusRunsHeader = document.createElement('h3');\n  recentPlusRunsHeader.innerHTML = '\\n    <a\\n      href=\"' + recentPlus.url + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      +' + recentPlusChest + ' &hybull;\\n      ' + recentPlus.dungeon + '\\n      ' + recentPlus.mythic_level + '\\n    </a>\\n    <br />\\n    <a \\n      href=\"' + recentPlusOne.url + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      +' + recentPlusChestOne + ' &hybull;\\n      ' + recentPlusOne.dungeon + '\\n      ' + recentPlusOne.mythic_level + '\\n    </a>\\n    <br />\\n    <a \\n      href=\"' + recentPlusTwo.url + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      +' + recentPlusChestTwo + ' &hybull;\\n      ' + recentPlusTwo.dungeon + '\\n      ' + recentPlusTwo.mythic_level + ' \\n    </a>\\n  \\n  ';\n  recentPlusRuns.classList.add('output-recent');\n  recentPlusRuns.appendChild(recentPlusRunsHeader);\n  output.appendChild(recentPlusRuns);\n\n  var likesDiv = document.createElement('div');\n  var likesList = document.createElement('ul');\n  likesList.innerHTML = _likes.likes.reduce(function (accumulator, like) {\n    accumulator += '<li>' + like + '</li>';\n    return accumulator;\n  });\n  likesDiv.classList.add('output-likes');\n  likesDiv.appendChild(likesList);\n  output.appendChild(likesDiv);\n\n  var streamersDiv = document.createElement('div');\n  var streamersList = document.createElement('ul');\n  streamersList.innerHTML = _streamers.streamers.reduce(function (accumulator, streamer) {\n    accumulator += '<li>' + streamer + '</li>';\n    return accumulator;\n  });\n  streamersDiv.classList.add('output-streamers');\n  streamersDiv.appendChild(streamersList);\n  output.appendChild(streamersDiv);\n\n  // FavIcon that has to be scoped\n  var changeFavIcon = function changeFavIcon(img) {\n    var favIcon = document.querySelector('link[rel=\"shortcut icon\"]');\n    if (!favIcon) {\n      favIcon = document.createElement(\"link\");\n      favIcon.setAttribute(\"rel\", \"shortcut icon\");\n      var head = document.querySelector(\"head\");\n      head.appendChild(favIcon);\n    }\n    favIcon.setAttribute(\"type\", \"image/jpg\");\n    favIcon.setAttribute(\"href\", img);\n  };\n  var favImage = data.thumbnail_url;\n  changeFavIcon(favImage);\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/likes.js":
/*!*************************!*\
  !*** ./src/js/likes.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar likes = exports.likes = ['Mythic Plus', 'Catweaving - Meow', ' <a \\n      href=\"https://www.dreamgrove.gg/\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n     Checking Dreamgrove\\n    </a>'];\n\n//# sourceURL=webpack:///./src/js/likes.js?");

/***/ }),

/***/ "./src/js/streamers.js":
/*!*****************************!*\
  !*** ./src/js/streamers.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar streamers = exports.streamers = [\"<a href=\\\"https://www.twitch.tv/lepan\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Lepan - Blood Deathknight</a>\", \"<a href=\\\"https://www.twitch.tv/jdotb\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Jdotb - Restoration Druid</a>\", \"<a href=\\\"https://www.twitch.tv/naowh\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Naowh - Havoc Demon Hunter</a>\", \"<a href=\\\"https://www.twitch.tv/gotya97\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Gotya - Mistweaver Monk</a>\", \"<a href=\\\"https://www.twitch.tv/Zmokamok\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Zmunk - Mistweaver Monk</a>\", \"<a href=\\\"https://www.twitch.tv/shakibdh\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Shakib - Vengeance Demon Hunter</a>\", \"<a href=\\\"https://www.twitch.tv/trellsky\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Trell - Brewmaster Monk</a>\"];\n\n//# sourceURL=webpack:///./src/js/streamers.js?");

/***/ }),

/***/ "./src/js/wowLeft.js":
/*!***************************!*\
  !*** ./src/js/wowLeft.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar wowLeft = exports.wowLeft = function wowLeft() {\n  var wow = document.getElementById('wow');\n\n  var nameLeft = document.createElement('div');\n  var nameLeftHeading = document.createElement('h1');\n  nameLeftHeading.innerHTML = 'Name:';\n  nameLeft.classList.add('output-nameLeft');\n  nameLeft.appendChild(nameLeftHeading);\n  wow.appendChild(nameLeft);\n\n  var specClass = document.createElement('div');\n  var specClassHeading = document.createElement('h2');\n  specClassHeading.innerHTML = 'Spec | Class:';\n  specClass.classList.add('output-specLeft');\n  specClass.appendChild(specClassHeading);\n  wow.appendChild(specClass);\n\n  var ranks = document.createElement('div');\n  var ranksHeading = document.createElement('h3');\n  ranksHeading.innerHTML = '\\n    Region Rank: <br />\\n    &nbsp;Realm Rank:\\n  ';\n  ranks.classList.add('output-ranksLeft');\n  ranks.appendChild(ranksHeading);\n  wow.appendChild(ranks);\n\n  var recent = document.createElement('div');\n  var recentHeading = document.createElement('h3');\n  recentHeading.innerHTML = 'Recent Dungeons:';\n  recent.classList.add('output-recentLeft');\n  recent.appendChild(recentHeading);\n  wow.appendChild(recent);\n\n  var likesLeft = document.createElement('div');\n  var likesLeftHeading = document.createElement('h3');\n  likesLeftHeading.innerHTML = 'Likes:';\n  likesLeft.classList.add('output-likesLeft');\n  likesLeft.appendChild(likesLeftHeading);\n  wow.appendChild(likesLeft);\n\n  var streamersLeft = document.createElement('div');\n  var streamersLeftHeading = document.createElement('h3');\n  streamersLeftHeading.innerHTML = 'Favorite Streamers:';\n  streamersLeft.classList.add('output-streamersLeft');\n  streamersLeft.appendChild(streamersLeftHeading);\n  wow.appendChild(streamersLeft);\n};\n\nwowLeft();\n\n//# sourceURL=webpack:///./src/js/wowLeft.js?");

/***/ })

/******/ });