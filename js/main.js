'use strict';

var utils = require('./utils');

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
