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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/data.js":
/*!********************!*\
  !*** ./js/data.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
];
var TITLES = [
  'title1',
  'title2',
  'title3',
  'title4',
  'title5',
  'title6',
  'title7',
  'title8',
];
var TYPES = [
  'palace',
  'flat',
  'house',
  'bungalo',
];
var TIME = ['12:00', '13:00', '14:00'];
var FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
var DESCRIPTIONS = [
  'description1',
  'description2',
  'description3',
  'description4',
  'description5',
  'description6',
  'description7',
  'description8',
];
var PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

module.exports = {
  avatars: AVATARS,
  titles: TITLES,
  types: TYPES,
  time: TIME,
  features: FEATURES,
  descriptions: DESCRIPTIONS,
  photos: PHOTOS,
};


/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./js/utils.js");

var mapSection = document.querySelector('.map--faded');
mapSection.classList.remove('map--faded');
var mapPins = document.querySelector('.map__pins');
var pinTemplate = document.querySelector('#pin').content;
var pin = pinTemplate.querySelector('.map__pin');

var announcements = utils.generateObjects();

announcements.forEach(function (announcement) {
  var clonedPin = pin.cloneNode(true);
  var image = clonedPin.querySelector('img');

  image.src = announcement.author.avatar;
  clonedPin.style.left = announcement.location.x + 'px';
  clonedPin.style.top = announcement.location.y + 'px';
  mapPins.appendChild(clonedPin);
});


/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = __webpack_require__(/*! ./data */ "./js/data.js");

var generateObjects = function () {
  var objects = [];
  for (var i = 0; i < data.titles.length; i++) {
    var addressX = getRandomNumber(100, 1100);
    var addressY = getRandomNumber(130, 630);
    var price = getRandomNumber(500, 1300);
    var indexType = getRandomNumber(0, 3);
    var totalRooms = getRandomNumber(1, 4);
    var totalGuests = getRandomNumber(1, 7);
    var indexCheckin = getRandomNumber(0, 2);
    var indexCheckout = getRandomNumber(0, 2);
    var indexFeatures = getRandomNumber(0, 5);
    var indexPhotos = getRandomNumber(0, 2);
    var x = getRandomNumber(100, 1100);
    var y = getRandomNumber(130, 630);

    var announcement = {
      author: {
        avatar: data.avatars[i],
      },
      offer: {
        title: data.titles[i],
        address: addressX + ', ' + addressY,
        price: price,
        type: data.types[indexType],
        rooms: totalRooms,
        guests: totalGuests,
        checkin: data.time[indexCheckin],
        checkout: data.time[indexCheckout],
        features: data.features[indexFeatures],
        description: data.descriptions[i],
        photos: data.photos[indexPhotos],
      },
      location: {
        x: x,
        y: y
      }
    };
    objects.push(announcement);
  }
  return objects;
};

function getRandomNumber(min, max) {
  var random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}
module.exports = {
  generateObjects: generateObjects
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3RGE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLDhCQUFTOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQlk7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLDRCQUFROztBQUUzQjtBQUNBO0FBQ0EsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9tYWluLmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQVZBVEFSUyA9IFtcbiAgJ2ltZy9hdmF0YXJzL3VzZXIwMS5wbmcnLFxuICAnaW1nL2F2YXRhcnMvdXNlcjAyLnBuZycsXG4gICdpbWcvYXZhdGFycy91c2VyMDMucG5nJyxcbiAgJ2ltZy9hdmF0YXJzL3VzZXIwNC5wbmcnLFxuICAnaW1nL2F2YXRhcnMvdXNlcjA1LnBuZycsXG4gICdpbWcvYXZhdGFycy91c2VyMDYucG5nJyxcbiAgJ2ltZy9hdmF0YXJzL3VzZXIwNy5wbmcnLFxuICAnaW1nL2F2YXRhcnMvdXNlcjA4LnBuZycsXG5dO1xudmFyIFRJVExFUyA9IFtcbiAgJ3RpdGxlMScsXG4gICd0aXRsZTInLFxuICAndGl0bGUzJyxcbiAgJ3RpdGxlNCcsXG4gICd0aXRsZTUnLFxuICAndGl0bGU2JyxcbiAgJ3RpdGxlNycsXG4gICd0aXRsZTgnLFxuXTtcbnZhciBUWVBFUyA9IFtcbiAgJ3BhbGFjZScsXG4gICdmbGF0JyxcbiAgJ2hvdXNlJyxcbiAgJ2J1bmdhbG8nLFxuXTtcbnZhciBUSU1FID0gWycxMjowMCcsICcxMzowMCcsICcxNDowMCddO1xudmFyIEZFQVRVUkVTID0gW1xuICAnd2lmaScsXG4gICdkaXNod2FzaGVyJyxcbiAgJ3BhcmtpbmcnLFxuICAnd2FzaGVyJyxcbiAgJ2VsZXZhdG9yJyxcbiAgJ2NvbmRpdGlvbmVyJyxcbl07XG52YXIgREVTQ1JJUFRJT05TID0gW1xuICAnZGVzY3JpcHRpb24xJyxcbiAgJ2Rlc2NyaXB0aW9uMicsXG4gICdkZXNjcmlwdGlvbjMnLFxuICAnZGVzY3JpcHRpb240JyxcbiAgJ2Rlc2NyaXB0aW9uNScsXG4gICdkZXNjcmlwdGlvbjYnLFxuICAnZGVzY3JpcHRpb243JyxcbiAgJ2Rlc2NyaXB0aW9uOCcsXG5dO1xudmFyIFBIT1RPUyA9IFtcbiAgJ2h0dHA6Ly9vMC5naXRodWIuaW8vYXNzZXRzL2ltYWdlcy90b2t5by9ob3RlbDEuanBnJyxcbiAgJ2h0dHA6Ly9vMC5naXRodWIuaW8vYXNzZXRzL2ltYWdlcy90b2t5by9ob3RlbDIuanBnJyxcbiAgJ2h0dHA6Ly9vMC5naXRodWIuaW8vYXNzZXRzL2ltYWdlcy90b2t5by9ob3RlbDMuanBnJyxcbl07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhdmF0YXJzOiBBVkFUQVJTLFxuICB0aXRsZXM6IFRJVExFUyxcbiAgdHlwZXM6IFRZUEVTLFxuICB0aW1lOiBUSU1FLFxuICBmZWF0dXJlczogRkVBVFVSRVMsXG4gIGRlc2NyaXB0aW9uczogREVTQ1JJUFRJT05TLFxuICBwaG90b3M6IFBIT1RPUyxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIG1hcFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwLS1mYWRlZCcpO1xubWFwU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdtYXAtLWZhZGVkJyk7XG52YXIgbWFwUGlucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXBfX3BpbnMnKTtcbnZhciBwaW5UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaW4nKS5jb250ZW50O1xudmFyIHBpbiA9IHBpblRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5tYXBfX3BpbicpO1xuXG52YXIgYW5ub3VuY2VtZW50cyA9IHV0aWxzLmdlbmVyYXRlT2JqZWN0cygpO1xuXG5hbm5vdW5jZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGFubm91bmNlbWVudCkge1xuICB2YXIgY2xvbmVkUGluID0gcGluLmNsb25lTm9kZSh0cnVlKTtcbiAgdmFyIGltYWdlID0gY2xvbmVkUGluLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXG4gIGltYWdlLnNyYyA9IGFubm91bmNlbWVudC5hdXRob3IuYXZhdGFyO1xuICBjbG9uZWRQaW4uc3R5bGUubGVmdCA9IGFubm91bmNlbWVudC5sb2NhdGlvbi54ICsgJ3B4JztcbiAgY2xvbmVkUGluLnN0eWxlLnRvcCA9IGFubm91bmNlbWVudC5sb2NhdGlvbi55ICsgJ3B4JztcbiAgbWFwUGlucy5hcHBlbmRDaGlsZChjbG9uZWRQaW4pO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkYXRhID0gcmVxdWlyZSgnLi9kYXRhJyk7XG5cbnZhciBnZW5lcmF0ZU9iamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvYmplY3RzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS50aXRsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYWRkcmVzc1ggPSBnZXRSYW5kb21OdW1iZXIoMTAwLCAxMTAwKTtcbiAgICB2YXIgYWRkcmVzc1kgPSBnZXRSYW5kb21OdW1iZXIoMTMwLCA2MzApO1xuICAgIHZhciBwcmljZSA9IGdldFJhbmRvbU51bWJlcig1MDAsIDEzMDApO1xuICAgIHZhciBpbmRleFR5cGUgPSBnZXRSYW5kb21OdW1iZXIoMCwgMyk7XG4gICAgdmFyIHRvdGFsUm9vbXMgPSBnZXRSYW5kb21OdW1iZXIoMSwgNCk7XG4gICAgdmFyIHRvdGFsR3Vlc3RzID0gZ2V0UmFuZG9tTnVtYmVyKDEsIDcpO1xuICAgIHZhciBpbmRleENoZWNraW4gPSBnZXRSYW5kb21OdW1iZXIoMCwgMik7XG4gICAgdmFyIGluZGV4Q2hlY2tvdXQgPSBnZXRSYW5kb21OdW1iZXIoMCwgMik7XG4gICAgdmFyIGluZGV4RmVhdHVyZXMgPSBnZXRSYW5kb21OdW1iZXIoMCwgNSk7XG4gICAgdmFyIGluZGV4UGhvdG9zID0gZ2V0UmFuZG9tTnVtYmVyKDAsIDIpO1xuICAgIHZhciB4ID0gZ2V0UmFuZG9tTnVtYmVyKDEwMCwgMTEwMCk7XG4gICAgdmFyIHkgPSBnZXRSYW5kb21OdW1iZXIoMTMwLCA2MzApO1xuXG4gICAgdmFyIGFubm91bmNlbWVudCA9IHtcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBhdmF0YXI6IGRhdGEuYXZhdGFyc1tpXSxcbiAgICAgIH0sXG4gICAgICBvZmZlcjoge1xuICAgICAgICB0aXRsZTogZGF0YS50aXRsZXNbaV0sXG4gICAgICAgIGFkZHJlc3M6IGFkZHJlc3NYICsgJywgJyArIGFkZHJlc3NZLFxuICAgICAgICBwcmljZTogcHJpY2UsXG4gICAgICAgIHR5cGU6IGRhdGEudHlwZXNbaW5kZXhUeXBlXSxcbiAgICAgICAgcm9vbXM6IHRvdGFsUm9vbXMsXG4gICAgICAgIGd1ZXN0czogdG90YWxHdWVzdHMsXG4gICAgICAgIGNoZWNraW46IGRhdGEudGltZVtpbmRleENoZWNraW5dLFxuICAgICAgICBjaGVja291dDogZGF0YS50aW1lW2luZGV4Q2hlY2tvdXRdLFxuICAgICAgICBmZWF0dXJlczogZGF0YS5mZWF0dXJlc1tpbmRleEZlYXR1cmVzXSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb25zW2ldLFxuICAgICAgICBwaG90b3M6IGRhdGEucGhvdG9zW2luZGV4UGhvdG9zXSxcbiAgICAgIH0sXG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9XG4gICAgfTtcbiAgICBvYmplY3RzLnB1c2goYW5ub3VuY2VtZW50KTtcbiAgfVxuICByZXR1cm4gb2JqZWN0cztcbn07XG5cbmZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihtaW4sIG1heCkge1xuICB2YXIgcmFuZG9tID0gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tKTtcbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZW5lcmF0ZU9iamVjdHM6IGdlbmVyYXRlT2JqZWN0c1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=