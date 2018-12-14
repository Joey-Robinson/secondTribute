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

/***/ "./src/js/api/catFacts.js":
/*!********************************!*\
  !*** ./src/js/api/catFacts.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// export const catFacts = () => {\n//   fetch(\"https://catfact.ninja/facts?limit=25\")\n//     .then((response) => {\n//       return response.json();\n//     })\n//     .then((data) => {\n//       console.log(data);\n//     })\n// }\n\n// catFacts();\n\nvar catFacts = exports.catFacts = function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response, data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://catfact.ninja/facts?limit=25\");\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context.sent;\n\n            console.log(data);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function catFacts() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\ncatFacts();\n\n//# sourceURL=webpack:///./src/js/api/catFacts.js?");

/***/ }),

/***/ "./src/js/api/finalFantasy.js":
/*!************************************!*\
  !*** ./src/js/api/finalFantasy.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// export const ffCall = () => {\n//   fetch(\"https://xivapi.com/character/10803092\")\n//     .then((response) => {\n//       return response.json();\n//     })\n//     .then((data) => {\n//       const lodestoneLink = \"https://na.finalfantasyxiv.com/lodestone/character/10803092/\";\n//       const ffName = data.Character.Name;\n//       const ffBirthday = data.Character.Nameday;\n//       const ffServer = data.Character.Server;\n//       const hoh = \"https://na.finalfantasyxiv.com/lodestone/ranking/deepdungeon2/\";\n//       const finalFantasy = document.getElementById('finalfantasy');\n//       const freeCompany = \"https://na.finalfantasyxiv.com/lodestone/freecompany/9234490298434948752/\";\n//     });\n// };\n\n// ffCall();\n\nvar ffCall = exports.ffCall = function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response, data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://xivapi.com/character/10803092\");\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context.sent;\n\n            console.log(data);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function ffCall() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nffCall();\n\n//# sourceURL=webpack:///./src/js/api/finalFantasy.js?");

/***/ }),

/***/ "./src/js/api/weeklyAffixes.js":
/*!*************************************!*\
  !*** ./src/js/api/weeklyAffixes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// export const weeklyAffixes = fetch(\"https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en\")\n//   .then((response) => {\n//     return response.json();\n//   })\n//   .then((data) => {\n//     const weeklyAffixes = data.affix_details;\n//     const output = document.getElementById('wow');\n//   })\n\nvar weeklyAffixes = exports.weeklyAffixes = function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response, data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en\");\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context.sent;\n\n            console.log(data);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function weeklyAffixes() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nweeklyAffixes();\n\n//# sourceURL=webpack:///./src/js/api/weeklyAffixes.js?");

/***/ }),

/***/ "./src/js/api/wowCharacter.js":
/*!************************************!*\
  !*** ./src/js/api/wowCharacter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar wowCharacter = exports.wowCharacter = function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response, data, name, spec, druid, druidInformation, plusRankRegion, bestOverall, plusRankRealm, recentPlus, recentPlusChest, recentPlusOne, recentPlusChestOne, recentPlusTwo, recentPlusChestTwo, changeFavIcon, favImage;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://raider.io/api/v1/characters/profile?region=us&realm=Zul'jin&name=Meerkatz&fields=gear,mythic_plus_scores,mythic_plus_ranks,mythic_plus_recent_runs,mythic_plus_best_runs\");\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context.sent;\n\n            console.log(data);\n            name = data.name;\n            spec = data.active_spec_name;\n            druid = data.class;\n            druidInformation = 'https://wow.gamepedia.com/Druid';\n            plusRankRegion = data.mythic_plus_ranks.class.region;\n            bestOverall = data.mythic_plus_best_runs;\n            plusRankRealm = data.mythic_plus_ranks.class.realm;\n            recentPlus = data.mythic_plus_recent_runs[0];\n            recentPlusChest = data.mythic_plus_recent_runs[0].num_keystone_upgrades;\n            recentPlusOne = data.mythic_plus_recent_runs[1];\n            recentPlusChestOne = data.mythic_plus_recent_runs[1].num_keystone_upgrades;\n            recentPlusTwo = data.mythic_plus_recent_runs[2];\n            recentPlusChestTwo = data.mythic_plus_recent_runs[2].num_keystone_upgrade;\n\n            changeFavIcon = function changeFavIcon(img) {\n              var favIcon = document.querySelector('link[rel=\"shortcut icon\"]');\n              if (!favIcon) {\n                favIcon = document.createElement(\"link\");\n                favIcon.setAttribute(\"rel\", \"shortcut icon\");\n                var head = document.querySelector(\"head\");\n                head.appendChild(favIcon);\n              }\n              favIcon.setAttribute(\"type\", \"image/jpg\");\n              favIcon.setAttribute(\"href\", img);\n            };\n\n            favImage = data.thumbnail_url;\n\n            changeFavIcon(favImage);\n\n          case 23:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function wowCharacter() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nwowCharacter();\n\n//# sourceURL=webpack:///./src/js/api/wowCharacter.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _catFacts = __webpack_require__(/*! ./api/catFacts */ \"./src/js/api/catFacts.js\");\n\nvar _catFacts2 = _interopRequireDefault(_catFacts);\n\nvar _finalFantasy = __webpack_require__(/*! ./api/finalFantasy */ \"./src/js/api/finalFantasy.js\");\n\nvar _finalFantasy2 = _interopRequireDefault(_finalFantasy);\n\nvar _weeklyAffixes = __webpack_require__(/*! ./api/weeklyAffixes */ \"./src/js/api/weeklyAffixes.js\");\n\nvar _weeklyAffixes2 = _interopRequireDefault(_weeklyAffixes);\n\nvar _wowCharacter = __webpack_require__(/*! ./api/wowCharacter */ \"./src/js/api/wowCharacter.js\");\n\nvar _wowCharacter2 = _interopRequireDefault(_wowCharacter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });