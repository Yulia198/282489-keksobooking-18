'use strict';

// create a module via IIFE
var data = window.data;

(function () {
// create unction getRandomNumber f
  function getRandomNumber(min, max) {
    var random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  }
  window.utils = {
    getRandomNumber: getRandomNumber
  };
})();
// assign the function to window.utils


