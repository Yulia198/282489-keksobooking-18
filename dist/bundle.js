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
  'img/avatar/user01.png',
  'img/avatar/user02.png',
  'img/avatar/user03.png',
  'img/avatar/user04.png',
  'img/avatar/user05.png',
  'img/avatar/user06.png',
  'img/avatar/user07.png',
  'img/avatar/user08.png',
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
console.log(generateObjects());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3RGE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLDRCQUFROztBQUUzQjtBQUNBO0FBQ0EsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFWQVRBUlMgPSBbXG4gICdpbWcvYXZhdGFyL3VzZXIwMS5wbmcnLFxuICAnaW1nL2F2YXRhci91c2VyMDIucG5nJyxcbiAgJ2ltZy9hdmF0YXIvdXNlcjAzLnBuZycsXG4gICdpbWcvYXZhdGFyL3VzZXIwNC5wbmcnLFxuICAnaW1nL2F2YXRhci91c2VyMDUucG5nJyxcbiAgJ2ltZy9hdmF0YXIvdXNlcjA2LnBuZycsXG4gICdpbWcvYXZhdGFyL3VzZXIwNy5wbmcnLFxuICAnaW1nL2F2YXRhci91c2VyMDgucG5nJyxcbl07XG52YXIgVElUTEVTID0gW1xuICAndGl0bGUxJyxcbiAgJ3RpdGxlMicsXG4gICd0aXRsZTMnLFxuICAndGl0bGU0JyxcbiAgJ3RpdGxlNScsXG4gICd0aXRsZTYnLFxuICAndGl0bGU3JyxcbiAgJ3RpdGxlOCcsXG5dO1xudmFyIFRZUEVTID0gW1xuICAncGFsYWNlJyxcbiAgJ2ZsYXQnLFxuICAnaG91c2UnLFxuICAnYnVuZ2FsbycsXG5dO1xudmFyIFRJTUUgPSBbJzEyOjAwJywgJzEzOjAwJywgJzE0OjAwJ107XG52YXIgRkVBVFVSRVMgPSBbXG4gICd3aWZpJyxcbiAgJ2Rpc2h3YXNoZXInLFxuICAncGFya2luZycsXG4gICd3YXNoZXInLFxuICAnZWxldmF0b3InLFxuICAnY29uZGl0aW9uZXInLFxuXTtcbnZhciBERVNDUklQVElPTlMgPSBbXG4gICdkZXNjcmlwdGlvbjEnLFxuICAnZGVzY3JpcHRpb24yJyxcbiAgJ2Rlc2NyaXB0aW9uMycsXG4gICdkZXNjcmlwdGlvbjQnLFxuICAnZGVzY3JpcHRpb241JyxcbiAgJ2Rlc2NyaXB0aW9uNicsXG4gICdkZXNjcmlwdGlvbjcnLFxuICAnZGVzY3JpcHRpb244Jyxcbl07XG52YXIgUEhPVE9TID0gW1xuICAnaHR0cDovL28wLmdpdGh1Yi5pby9hc3NldHMvaW1hZ2VzL3Rva3lvL2hvdGVsMS5qcGcnLFxuICAnaHR0cDovL28wLmdpdGh1Yi5pby9hc3NldHMvaW1hZ2VzL3Rva3lvL2hvdGVsMi5qcGcnLFxuICAnaHR0cDovL28wLmdpdGh1Yi5pby9hc3NldHMvaW1hZ2VzL3Rva3lvL2hvdGVsMy5qcGcnLFxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGF2YXRhcnM6IEFWQVRBUlMsXG4gIHRpdGxlczogVElUTEVTLFxuICB0eXBlczogVFlQRVMsXG4gIHRpbWU6IFRJTUUsXG4gIGZlYXR1cmVzOiBGRUFUVVJFUyxcbiAgZGVzY3JpcHRpb25zOiBERVNDUklQVElPTlMsXG4gIHBob3RvczogUEhPVE9TLFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRhdGEgPSByZXF1aXJlKCcuL2RhdGEnKTtcblxudmFyIGdlbmVyYXRlT2JqZWN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9iamVjdHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLnRpdGxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBhZGRyZXNzWCA9IGdldFJhbmRvbU51bWJlcigxMDAsIDExMDApO1xuICAgIHZhciBhZGRyZXNzWSA9IGdldFJhbmRvbU51bWJlcigxMzAsIDYzMCk7XG4gICAgdmFyIHByaWNlID0gZ2V0UmFuZG9tTnVtYmVyKDUwMCwgMTMwMCk7XG4gICAgdmFyIGluZGV4VHlwZSA9IGdldFJhbmRvbU51bWJlcigwLCAzKTtcbiAgICB2YXIgdG90YWxSb29tcyA9IGdldFJhbmRvbU51bWJlcigxLCA0KTtcbiAgICB2YXIgdG90YWxHdWVzdHMgPSBnZXRSYW5kb21OdW1iZXIoMSwgNyk7XG4gICAgdmFyIGluZGV4Q2hlY2tpbiA9IGdldFJhbmRvbU51bWJlcigwLCAyKTtcbiAgICB2YXIgaW5kZXhDaGVja291dCA9IGdldFJhbmRvbU51bWJlcigwLCAyKTtcbiAgICB2YXIgaW5kZXhGZWF0dXJlcyA9IGdldFJhbmRvbU51bWJlcigwLCA1KTtcbiAgICB2YXIgaW5kZXhQaG90b3MgPSBnZXRSYW5kb21OdW1iZXIoMCwgMik7XG4gICAgdmFyIHggPSBnZXRSYW5kb21OdW1iZXIoMTAwLCAxMTAwKTtcbiAgICB2YXIgeSA9IGdldFJhbmRvbU51bWJlcigxMzAsIDYzMCk7XG5cbiAgICB2YXIgYW5ub3VuY2VtZW50ID0ge1xuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIGF2YXRhcjogZGF0YS5hdmF0YXJzW2ldLFxuICAgICAgfSxcbiAgICAgIG9mZmVyOiB7XG4gICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlc1tpXSxcbiAgICAgICAgYWRkcmVzczogYWRkcmVzc1ggKyAnLCAnICsgYWRkcmVzc1ksXG4gICAgICAgIHByaWNlOiBwcmljZSxcbiAgICAgICAgdHlwZTogZGF0YS50eXBlc1tpbmRleFR5cGVdLFxuICAgICAgICByb29tczogdG90YWxSb29tcyxcbiAgICAgICAgZ3Vlc3RzOiB0b3RhbEd1ZXN0cyxcbiAgICAgICAgY2hlY2tpbjogZGF0YS50aW1lW2luZGV4Q2hlY2tpbl0sXG4gICAgICAgIGNoZWNrb3V0OiBkYXRhLnRpbWVbaW5kZXhDaGVja291dF0sXG4gICAgICAgIGZlYXR1cmVzOiBkYXRhLmZlYXR1cmVzW2luZGV4RmVhdHVyZXNdLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbnNbaV0sXG4gICAgICAgIHBob3RvczogZGF0YS5waG90b3NbaW5kZXhQaG90b3NdLFxuICAgICAgfSxcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHlcbiAgICAgIH1cbiAgICB9O1xuICAgIG9iamVjdHMucHVzaChhbm5vdW5jZW1lbnQpO1xuICB9XG4gIHJldHVybiBvYmplY3RzO1xufTtcbmZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihtaW4sIG1heCkge1xuICB2YXIgcmFuZG9tID0gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tKTtcbn1cbmNvbnNvbGUubG9nKGdlbmVyYXRlT2JqZWN0cygpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=