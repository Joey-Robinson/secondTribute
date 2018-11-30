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

/***/ "./src/js/catFacts.js":
/*!****************************!*\
  !*** ./src/js/catFacts.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar catFacts = exports.catFacts = function catFacts() {\n  fetch(\"https://catfact.ninja/facts?limit=25\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    console.log(data);\n    var catData = data.data.map(function (text) {\n      return '<li>' + text.fact + '</li>';\n    });\n    catData.sort(function () {\n      return 0.25 - Math.random();\n    });\n    var facts = document.getElementById('catfacts');\n    var factsSection = document.createElement('section');\n    var factsList = document.createElement('ul');\n    factsList.innerHTML = '<h1>Cat Facts:</h1> ' + catData.join(\" \");\n    factsSection.appendChild(factsList);\n    facts.appendChild(factsSection);\n  });\n};\n\ncatFacts();\n\n//# sourceURL=webpack:///./src/js/catFacts.js?");

/***/ }),

/***/ "./src/js/favCat.js":
/*!**************************!*\
  !*** ./src/js/favCat.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.favCat = undefined;\n\nvar _favoriteCat = __webpack_require__(/*! ./favoriteCat */ \"./src/js/favoriteCat.js\");\n\nvar favCat = exports.favCat = function favCat() {\n  var favorite = document.getElementById('favoritecat');\n  var numberOne = _favoriteCat.favoriteCat.map(function (info) {\n    var amazing = info.pictures.map(function (picture) {\n      return '<img src=' + picture + ' />';\n    });\n    return '\\n      <section>\\n        <h1>Information About My Favorite Cat:</h1>\\n        <h4>Favorite Cat:</h4> ' + info.name + ' <br />\\n        <h4>Favorite Cat Color:</h4> ' + info.favoriteColor + ' <br />\\n        <h4>Weight:</h4> ' + info.description.weight + ' <br />\\n        <h4>Eye Color:</h4> ' + info.description.eyeColor + ' <br />\\n        <h4>Life Span:</h4> ' + info.description.lifeSpan + ' <br ?>\\n        <h4>Social & Attention Needs:</h4> ' + info.description.socialNeeds + ' <br />\\n        <h1>Information About Their Fur:</h1>\\n        <h4>Type of fur:</h4> ' + info.coat.length + ' & ' + info.coat.type + ' <br />\\n        <h4>Color of fur:</h4> ' + info.coat.colors + ' <br />\\n        <h4>Possible patterns:</h4> ' + info.coat.pattern + ' <br />\\n        <h4>Grooming Needs:</h4> ' + info.coat.groomingNeeds + ' <br />\\n      </section>\\n      <div class=\"favoritecat-images\">\\n        ' + amazing.join(\" \") + '\\n        // Add a button or slider\\n      </div>\\n      ';\n  });\n  favorite.innerHTML = numberOne;\n};\n\nfavCat();\n\n//# sourceURL=webpack:///./src/js/favCat.js?");

/***/ }),

/***/ "./src/js/favoriteAffixes.js":
/*!***********************************!*\
  !*** ./src/js/favoriteAffixes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar favoriteAffixes = exports.favoriteAffixes = ['Grievous', 'Bursting', 'Quaking', 'Teeming'];\n\n//# sourceURL=webpack:///./src/js/favoriteAffixes.js?");

/***/ }),

/***/ "./src/js/favoriteCat.js":
/*!*******************************!*\
  !*** ./src/js/favoriteCat.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar favoriteCat = exports.favoriteCat = [{\n  name: \"Maine Coon\",\n  favoriteColor: \"Cream\",\n  description: {\n    weight: \"8-10lbs for females. More than 12lbs for males.\",\n    eyeColor: \"Copper, Green, Gold, Odd-Eyed\",\n    lifeSpan: \"9-13 Years\",\n    socialNeeds: \"Moderate to High\"\n  },\n  coat: {\n    length: \"Long\",\n    type: \"Straight\",\n    colors: \"White, Black, Blue, Red, Cream, Brown, Silver, Tortoiseshell, Bluecream, Golden\",\n    pattern: \"Solid Color, Tortoiseshell, Bicolor, Tricolor/Calico, Tabby, Smoke, Shaded\",\n    groomingNeeds: \"High\"\n  },\n  pictures: ['../../images/mainecoontabby.jpg', '../../images/meowmeow.jpg']\n}];\n\n//# sourceURL=webpack:///./src/js/favoriteCat.js?");

/***/ }),

/***/ "./src/js/ffCall.js":
/*!**************************!*\
  !*** ./src/js/ffCall.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ffCall = undefined;\n\nvar _ffLikes = __webpack_require__(/*! ./ffLikes */ \"./src/js/ffLikes.js\");\n\nvar _ffResources = __webpack_require__(/*! ./ffResources */ \"./src/js/ffResources.js\");\n\nvar _ffSprites = __webpack_require__(/*! ./ffSprites */ \"./src/js/ffSprites.js\");\n\nvar ffCall = exports.ffCall = function ffCall() {\n  fetch(\"https://xivapi.com/character/10803092\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var lodestoneLink = \"https://na.finalfantasyxiv.com/lodestone/character/10803092/\";\n    var ffName = data.Character.Name;\n    var ffBirthday = data.Character.Nameday;\n    var ffServer = data.Character.Server;\n    var hoh = \"https://na.finalfantasyxiv.com/lodestone/ranking/deepdungeon2/\";\n    var finalFantasy = document.getElementById('finalfantasy');\n    var hohRank = \"../../images/hohff14.jpg\";\n    var freeCompany = \"https://na.finalfantasyxiv.com/lodestone/freecompany/9234490298434948752/\";\n\n    var nameDiv = document.createElement('div');\n    nameDiv.innerHTML = '\\n      <h1>\\n        Name:\\n          <a \\n            href=\"' + lodestoneLink + '\"\\n            target=\"_blank\"\\n            rel=\"noopener noreferrer\"\\n          >\\n            ' + ffName + '\\n          </a>\\n      </h1>\\n    ';\n    nameDiv.classList.add('finalfantasy-name');\n    finalFantasy.appendChild(nameDiv);\n\n    var birthdayDiv = document.createElement('div');\n    birthdayDiv.classList.add('finalfantasy-birthday');\n    birthdayDiv.innerHTML = '\\n      <h3>Birthday: ' + ffBirthday + '</h3>\\n    ';\n    finalFantasy.appendChild(birthdayDiv);\n\n    var serverNameDiv = document.createElement('div');\n    serverNameDiv.innerHTML = '<h3>Server: ' + ffServer + '</h3>';\n    serverNameDiv.classList.add('finalfantasy-server');\n    finalFantasy.appendChild(serverNameDiv);\n\n    var freeCompanyDiv = document.createElement('div');\n    freeCompanyDiv.classList.add('finalfantasy-freecompany');\n    freeCompanyDiv.innerHTML = '\\n    <h3>\\n    Free Company: \\n      <a \\n        href=\"' + freeCompany + '\" \\n        target=\"_blank\" \\n        rel=\"noopener noreferrer\"\\n      >\\n        Last Homely House\\n      </a>\\n    </h3>\\n    ';\n    finalFantasy.appendChild(freeCompanyDiv);\n\n    var hohDiv = document.createElement('div');\n    hohDiv.innerHTML = '\\n    <a\\n      href=\"' + hoh + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      <img\\n        src=\"' + hohRank + '\"\\n        alt=\"Image For Heaven On High Ranking\"\\n      >\\n    </a>\\n    ';\n    hohDiv.classList.add('finalfantasy-hohrank');\n    finalFantasy.appendChild(hohDiv);\n\n    var ffActivities = document.createElement('div');\n    var ffActivitiesList = document.createElement('ul');\n    var ffActivitiesHeading = document.createElement('h3');\n    ffActivitiesHeading.innerHTML = 'Activities & Interests';\n    ffActivities.appendChild(ffActivitiesHeading);\n    ffActivitiesList.innerHTML = _ffLikes.ffLikes.reduce(function (accumulator, like) {\n      accumulator += '<li>' + like + '</li>';\n      return accumulator;\n    });\n    ffActivities.classList.add('finalfantasy-activities');\n    ffActivities.appendChild(ffActivitiesList);\n    finalFantasy.appendChild(ffActivities);\n\n    var ffInformation = document.createElement('div');\n    var ffInformationList = document.createElement('ul');\n    var ffInformationHeading = document.createElement('h3');\n    ffInformation.appendChild(ffInformationHeading);\n    ffInformationHeading.innerHTML = 'Favorite Resources';\n    ffInformationList.innerHTML = _ffResources.ffResources.reduce(function (accumulator, resource) {\n      accumulator += '<li>' + resource + '<li>';\n      return accumulator;\n    });\n    ffInformation.classList.add('finalfantasy-resources');\n    ffInformation.appendChild(ffInformationList);\n    finalFantasy.appendChild(ffInformation);\n\n    var ffSprite = document.createElement('div');\n    var ffSpriteList = document.createElement('ul');\n    var somethingstupid = _ffSprites.ffSprites.map(function (sprite, index) {\n      return '<li><img src=' + sprite + ' alt=\"Sprite Image Number ' + (index + 1) + '\"></li>';\n    });\n    ffSpriteList.innerHTML = somethingstupid.join(\" \");\n    ffSprite.classList.add('finalfantasy-sprites');\n    ffSprite.appendChild(ffSpriteList);\n    finalFantasy.appendChild(ffSprite);\n\n    var catVideo = '../../images/fatcat.mp4';\n    var fatCatDiv = document.createElement('div');\n    fatCatDiv.classList.add('finalfantasy-fatCat');\n    fatCatDiv.innerHTML = '\\n      <video \\n        autoplay \\n        loop \\n        controls\\n      >\\n        <source src=\"' + catVideo + '\" type=\"video/mp4\">\\n      </video>\\n    ';\n    finalFantasy.appendChild(fatCatDiv);\n\n    var fatChoco = '../../images/fatchoco.gif';\n    var fatChocoDiv = document.createElement('div');\n    fatChocoDiv.classList.add('finalfantasy-fatChoco');\n    fatChocoDiv.innerHTML = '\\n      <img \\n        src=\"' + fatChoco + '\" \\n        alt=\"Fat Chocobo Gif Number One\" \\n      />\\n    ';\n    finalFantasy.appendChild(fatChocoDiv);\n\n    var fatChocoTwo = '../../images/fatchocotwo.gif';\n    var fatChocoTwoDiv = document.createElement('div');\n    fatChocoTwoDiv.classList.add('finalfantasy-fatChocoTwo');\n    fatChocoTwoDiv.innerHTML = '\\n      <img \\n        src=\"' + fatChocoTwo + '\" \\n        alt=\"Fat Chocobo Gif Number Two\" \\n      />\\n    ';\n    finalFantasy.appendChild(fatChocoTwoDiv);\n  });\n};\n\nffCall();\n\n//# sourceURL=webpack:///./src/js/ffCall.js?");

/***/ }),

/***/ "./src/js/ffLikes.js":
/*!***************************!*\
  !*** ./src/js/ffLikes.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ffLikes = exports.ffLikes = ['Crafting', '<strike>Fishing</strike> The Fish Got Away!', 'Decorating House', 'Admiring Other Peoples Houses', 'Playing the Market Board', 'Feeding The Chocobo\\'s', 'Heaven On High', 'Namazu - Yes Yes'];\n\n//# sourceURL=webpack:///./src/js/ffLikes.js?");

/***/ }),

/***/ "./src/js/ffResources.js":
/*!*******************************!*\
  !*** ./src/js/ffResources.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ffResources = exports.ffResources = [\"\\n  <a\\n    href=\\\"http://garlandtools.org/\\\"\\n    target=\\\"_blank\\\"\\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    Garland Tools\\n  </a>\\n  \", \"\\n  <a\\n    href=\\\"http://ff14angler.com/\\\"\\n    target=\\\"_blank\\\"\\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    FF14 Angler\\n  </a>\\n  \", \"\\n  <a\\n    href=\\\"http://en.ff14housing.com/\\\"\\n    target=\\\"_blank\\\"\\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    FF14 Housing DB\\n  </a>\\n  \", \"\\n  <a\\n    href=\\\"http://www.ffxivgardening.com/\\\"\\n    target=\\\"_blank\\\"\\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    FF14 Gardening\\n  </a>\\n  \", \"\\n  <a\\n    href=\\\"https://ffxivcrafting.com/crafting\\\"\\n    target=\\\"_blank\\\"\\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    Crafting as a Service\\n  </a>\\n  \", \"\\n  <a\\n    href=\\\"http://ffxiv.ariyala.com/\\\"\\n    target=\\\"_blank\\\"\\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    FF14 Materia Optimizer\\n  </a>\\n  \", \"\\n  <a\\n    href=\\\"https://nf.reddit.com/r/ffxiv/\\\"\\n    target=\\\"_blank\\\"\\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    FF14 Subreddit\\n  </a>\\n  \", \"\\n  <a\\n    href=\\\"https://ffxivteamcraft.com/\\\"\\n    target=\\\"_blank\\\"\\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    Teamcraft\\n  </a>\\n  \"];\n\n//# sourceURL=webpack:///./src/js/ffResources.js?");

/***/ }),

/***/ "./src/js/ffSprites.js":
/*!*****************************!*\
  !*** ./src/js/ffSprites.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ffSprites = exports.ffSprites = ['../../images/ff14astro.png', '../../images/ff14bard.png', '../../images/ff14dragoon.png', '../../images/ff14paladin.png', '../../images/ff14scholar.png', '../../images/ff14warrior.png', '../../images/ff14whitemage.png'];\n\n//# sourceURL=webpack:///./src/js/ffSprites.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _favoriteAffixes = __webpack_require__(/*! ./favoriteAffixes */ \"./src/js/favoriteAffixes.js\");\n\nvar _ffCall = __webpack_require__(/*! ./ffCall */ \"./src/js/ffCall.js\");\n\nvar _wowLeft = __webpack_require__(/*! ./wowLeft */ \"./src/js/wowLeft.js\");\n\nvar _streamers = __webpack_require__(/*! ./streamers */ \"./src/js/streamers.js\");\n\nvar _weeklyAffixes = __webpack_require__(/*! ./weeklyAffixes */ \"./src/js/weeklyAffixes.js\");\n\nvar _favCat = __webpack_require__(/*! ./favCat */ \"./src/js/favCat.js\");\n\nvar _catFacts = __webpack_require__(/*! ./catFacts */ \"./src/js/catFacts.js\");\n\nfetch(\"https://raider.io/api/v1/characters/profile?region=us&realm=Zul'jin&name=Meerkatz&fields=gear,mythic_plus_scores,mythic_plus_ranks,mythic_plus_recent_runs,mythic_plus_best_runs\").then(function (response) {\n  return response.json();\n}).then(function (data) {\n  var name = data.name;\n  var spec = data.active_spec_name;\n  var druid = data.class;\n  var druidInformation = 'https://wow.gamepedia.com/Druid';\n  var plusRankRegion = data.mythic_plus_ranks.class.region;\n  var bestOverall = data.mythic_plus_best_runs;\n  var plusRankRealm = data.mythic_plus_ranks.class.realm;\n  var recentPlus = data.mythic_plus_recent_runs[0];\n  var recentPlusChest = data.mythic_plus_recent_runs[0].num_keystone_upgrades;\n  var recentPlusOne = data.mythic_plus_recent_runs[1];\n  var recentPlusChestOne = data.mythic_plus_recent_runs[1].num_keystone_upgrades;\n  var recentPlusTwo = data.mythic_plus_recent_runs[2];\n  var recentPlusChestTwo = data.mythic_plus_recent_runs[2].num_keystone_upgrades;\n  var output = document.getElementById('wow');\n\n  // Container Div for Name\n  var nameDiv = document.createElement('div');\n  // h1 for name\n  var nameHeader = document.createElement('h1');\n  // contents of the h1\n  nameHeader.innerHTML = '\\n    <a \\n      href=\"' + data.profile_url + '\" \\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n    \\n        ' + name + '\\n    \\n    </a>\\n  ';\n  // Appeding nameHeader to nameDiv\n  nameDiv.appendChild(nameHeader);\n  // Adding 'output-name' to the div (for positioning and styling)\n  nameDiv.classList.add('output-name');\n  // Appending nameDiv to output\n  output.appendChild(nameDiv);\n\n  var activeSpecDiv = document.createElement('div');\n  var talents = \"https://www.wowhead.com/talent-calc/druid/restoration/cSKz\";\n  var activeSpecHeader = document.createElement('h2');\n  activeSpecHeader.innerHTML = '\\n    <a \\n      href=\"' + talents + '\" \\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      ' + spec + '\\n    </a>\\n    &nbsp;|\\n    <a \\n      href=\"' + druidInformation + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      ' + druid + '\\n    </a>\\n  \\n  ';\n  activeSpecDiv.classList.add('output-spec');\n  activeSpecDiv.appendChild(activeSpecHeader);\n  output.appendChild(activeSpecDiv);\n\n  var plusScoreDiv = document.createElement('div');\n  var plusScoreHeader = document.createElement('h3');\n  plusScoreHeader.innerHTML = '\\n    ' + plusRankRegion + '<br />\\n    ' + plusRankRealm + '\\n  \\n  ';\n  plusScoreDiv.classList.add('output-score');\n  plusScoreDiv.appendChild(plusScoreHeader);\n  output.appendChild(plusScoreDiv);\n\n  var recentPlusRuns = document.createElement('div');\n  var recentPlusRunsHeader = document.createElement('h3');\n  recentPlusRunsHeader.innerHTML = '\\n    <a\\n      href=\"' + recentPlus.url + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      +' + recentPlusChest + ' &hybull;\\n      ' + recentPlus.dungeon + '\\n      ' + recentPlus.mythic_level + '\\n    </a>\\n    <br />\\n    <a \\n      href=\"' + recentPlusOne.url + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      +' + recentPlusChestOne + ' &hybull;\\n      ' + recentPlusOne.dungeon + '\\n      ' + recentPlusOne.mythic_level + '\\n    </a>\\n    <br />\\n    <a \\n      href=\"' + recentPlusTwo.url + '\"\\n      target=\"_blank\"\\n      rel=\"noopener noreferrer\"\\n    >\\n      +' + recentPlusChestTwo + ' &hybull;\\n      ' + recentPlusTwo.dungeon + '\\n      ' + recentPlusTwo.mythic_level + ' \\n    </a>\\n  \\n  ';\n  recentPlusRuns.classList.add('output-recent');\n  recentPlusRuns.appendChild(recentPlusRunsHeader);\n  output.appendChild(recentPlusRuns);\n\n  var likesDiv = document.createElement('div');\n  var openButton = document.createElement('button');\n  var closeButton = document.createElement('button');\n  var modalBackdrop = document.createElement('div');\n  var modal = document.createElement('div');\n\n  modal.classList.add('modal');\n  modal.innerHTML = '\\n    <div class=\"modal-one\">\\n      <p>Mythic Plus</p>\\n      <p>Researching Mythic Plus</p>\\n    </div>\\n    <div class=\"modal-two\">\\n      <p>\\n        <a\\n          href=\"https://questionablyepic.com/restodruid-catweaving/\"\\n          target=\"_blank\"\\n          rel=\"noopener noreferrer\"\\n        >\\n          Catweaving\\n        </a>\\n      </p>\\n      <p>Tinkering With My UI</p>\\n    </div>\\n    <div class=\"modal-three\">\\n      <p>\\n        <a\\n          href=\"https://dreamgrove.gg/\"\\n          target=\"_blank\"\\n          rel=\"noopener noreferrer\"\\n        >\\n          Reading Dreamgrove\\n        </a>\\n      </p>\\n    </div>\\n  ';\n  modalBackdrop.classList.add('backdrop');\n\n  var closeModal = function closeModal() {\n    modal.style.display = 'none';\n    modalBackdrop.style.display = 'none';\n  };\n  openButton.classList.add('openButton');\n  openButton.innerText = 'My Likes';\n  openButton.addEventListener('click', function () {\n    modal.style.display = 'grid';\n    modalBackdrop.style.display = 'block';\n  });\n\n  closeButton.classList.add('close');\n  closeButton.innerText = 'Close';\n  closeButton.addEventListener('click', function () {\n    closeModal();\n  });\n  modalBackdrop.addEventListener('click', closeModal);\n\n  likesDiv.classList.add('output-likes');\n  modal.appendChild(closeButton);\n  likesDiv.appendChild(modal);\n  likesDiv.appendChild(openButton);\n  output.appendChild(likesDiv);\n  likesDiv.appendChild(modalBackdrop);\n\n  var streamersDiv = document.createElement('div');\n  var streamersList = document.createElement('ul');\n  streamersList.innerHTML = _streamers.streamers.reduce(function (accumulator, streamer) {\n    accumulator += '<li>' + streamer + '</li>';\n    return accumulator;\n  });\n  streamersDiv.classList.add('output-streamers');\n  streamersDiv.appendChild(streamersList);\n  output.appendChild(streamersDiv);\n\n  var bestOverallDiv = document.createElement('div');\n  bestOverallDiv.innerHTML = \"<h1>Best Runs</h1>\";\n  var bestOverallList = document.createElement('ul');\n  var bestTest = bestOverall.map(function (best) {\n    return '\\n      <li>\\n        <a \\n          href=\"' + best.url + '\"\\n          target=\"_blank\"\\n          rel=\"noopener noreferrer\"\\n        >\\n          ' + best.mythic_level + ' &hybull;\\n          ' + best.dungeon + '\\n        </a>\\n     </li>\\n    ';\n  });\n  bestOverallDiv.classList.add('output-bestOverall');\n  bestOverallDiv.appendChild(bestOverallList);\n  output.appendChild(bestOverallDiv);\n  bestOverallList.innerHTML = bestTest.join(\" \");\n\n  var favorite = document.createElement('div');\n  var favoriteHeading = document.createElement('h3');\n  var favoriteList = document.createElement('ul');\n  favoriteHeading.innerHTML = \"<h1>Favorite Affixes</h1>\";\n  favoriteList.innerHTML = _favoriteAffixes.favoriteAffixes.reduce(function (accumulator, favs) {\n    accumulator += '<li>' + favs + '</li>';\n    return accumulator;\n  });\n  favorite.classList.add('output-favorites');\n  favorite.appendChild(favoriteHeading);\n  favorite.appendChild(favoriteList);\n  output.appendChild(favorite);\n\n  // FavIcon that has to be scoped\n  var changeFavIcon = function changeFavIcon(img) {\n    var favIcon = document.querySelector('link[rel=\"shortcut icon\"]');\n    if (!favIcon) {\n      favIcon = document.createElement(\"link\");\n      favIcon.setAttribute(\"rel\", \"shortcut icon\");\n      var head = document.querySelector(\"head\");\n      head.appendChild(favIcon);\n    }\n    favIcon.setAttribute(\"type\", \"image/jpg\");\n    favIcon.setAttribute(\"href\", img);\n  };\n  var favImage = data.thumbnail_url;\n  changeFavIcon(favImage);\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/streamers.js":
/*!*****************************!*\
  !*** ./src/js/streamers.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar streamers = exports.streamers = [\"\\n  <a \\n    href=\\\"https://www.twitch.tv/lepan\\\" \\n    target=\\\"_blank\\\" \\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    Lepan - Blood Deathknight\\n  </a>\\n  \", \"\\n  <a \\n    href=\\\"https://www.twitch.tv/jdotb\\\" \\n    target=\\\"_blank\\\" \\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    Jdotb - Restoration Druid\\n  </a>\\n  \", \"\\n  <a \\n    href=\\\"https://www.twitch.tv/naowh\\\" \\n    target=\\\"_blank\\\" \\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    Naowh - Havoc Demon Hunter\\n  </a>\\n  \", \"\\n  <a \\n    href=\\\"https://www.twitch.tv/gotya97\\\" \\n    target=\\\"_blank\\\" \\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    Gotya - Mistweaver Monk\\n  </a>\\n  \", \"\\n  <a \\n    href=\\\"https://www.twitch.tv/CallMeKyleep\\\" \\n    target=\\\"_blank\\\" \\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    Kyleep - Restoration Druid\\n  </a>\\n  \", \"\\n  <a \\n    href=\\\"https://www.twitch.tv/shakibdh\\\" \\n    target=\\\"_blank\\\" \\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    Shakib - Vengeance Demon Hunter\\n  </a>\\n  \", \"\\n  <a \\n    href=\\\"https://www.twitch.tv/trellsky\\\" \\n    target=\\\"_blank\\\" \\n    rel=\\\"noopener noreferrer\\\"\\n  >\\n    Trell - Brewmaster Monk\\n  </a>\\n  \"];\n\n//# sourceURL=webpack:///./src/js/streamers.js?");

/***/ }),

/***/ "./src/js/weeklyAffixes.js":
/*!*********************************!*\
  !*** ./src/js/weeklyAffixes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar weeklyAffixes = exports.weeklyAffixes = fetch(\"https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en\").then(function (response) {\n  return response.json();\n}).then(function (data) {\n  var weeklyAffixes = data.affix_details;\n  var output = document.getElementById('wow');\n  var weeklyAffixDiv = document.createElement('div');\n  weeklyAffixDiv.innerHTML = \"<h1>This Week's Affixes</h1>\";\n  var affixList = document.createElement('ul');\n  var affixListNew = weeklyAffixes.map(function (affix) {\n    return '\\n    <li>\\n      <a \\n        href=\"' + affix.wowhead_url + '#comments\"\\n        target=\"_blank\"\\n        rel=\"noopener noreferrer\"\\n      >\\n        ' + affix.name + '\\n      </a> \\n    </li>\\n    ';\n  });\n  affixList.innerHTML = affixListNew.join(\" \");\n  weeklyAffixDiv.classList.add('output-weeklyAffixes');\n  weeklyAffixDiv.appendChild(affixList);\n  output.appendChild(weeklyAffixDiv);\n});\n\n//# sourceURL=webpack:///./src/js/weeklyAffixes.js?");

/***/ }),

/***/ "./src/js/wowLeft.js":
/*!***************************!*\
  !*** ./src/js/wowLeft.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar wowLeft = exports.wowLeft = function wowLeft() {\n  var wow = document.getElementById('wow');\n\n  var nameLeft = document.createElement('div');\n  var nameLeftHeading = document.createElement('h1');\n  nameLeftHeading.innerHTML = 'Name:';\n  nameLeft.classList.add('output-nameLeft');\n  nameLeft.appendChild(nameLeftHeading);\n  wow.appendChild(nameLeft);\n\n  var specClass = document.createElement('div');\n  var specClassHeading = document.createElement('h2');\n  specClassHeading.innerHTML = 'Spec | Class:';\n  specClass.classList.add('output-specLeft');\n  specClass.appendChild(specClassHeading);\n  wow.appendChild(specClass);\n\n  var ranks = document.createElement('div');\n  var ranksHeading = document.createElement('h3');\n  ranksHeading.innerHTML = '\\n    Region Rank: <br />\\n    &nbsp;Realm Rank:\\n  ';\n  ranks.classList.add('output-ranksLeft');\n  ranks.appendChild(ranksHeading);\n  wow.appendChild(ranks);\n\n  var recent = document.createElement('div');\n  var recentHeading = document.createElement('h3');\n  recentHeading.innerHTML = 'Recent:';\n  recent.classList.add('output-recentLeft');\n  recent.appendChild(recentHeading);\n  wow.appendChild(recent);\n\n  var likesLeft = document.createElement('div');\n  var likesLeftHeading = document.createElement('h3');\n  likesLeftHeading.innerHTML = 'Likes:';\n  likesLeft.classList.add('output-likesLeft');\n  likesLeft.appendChild(likesLeftHeading);\n  wow.appendChild(likesLeft);\n\n  var streamersLeft = document.createElement('div');\n  var streamersLeftHeading = document.createElement('h3');\n  streamersLeftHeading.innerHTML = 'Streamers:';\n  streamersLeft.classList.add('output-streamersLeft');\n  streamersLeft.appendChild(streamersLeftHeading);\n  wow.appendChild(streamersLeft);\n};\n\nwowLeft();\n\n//# sourceURL=webpack:///./src/js/wowLeft.js?");

/***/ })

/******/ });