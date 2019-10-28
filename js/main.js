'use strict';

var getRandomNumber = window.utils.getRandomNumber;
var data = window.data;

var announcements = generateObjects();
console.log(announcements);

function generateObjects() {
  // Create an empty array
  var someName = [];
  // Create var for numbers
  var MIN_PRICE = 500;
  var MAX_PRICE = 10000;
  var MIN_ROOMS = 1;
  var MAX_ROOMS = 4;
  var MIN_GUESTS = 1;
  var MAX_GUESTS = 7;
  // var MIN_PHOTOS = 1;
  // var MAX_PHOTOS = 3;
  var MIN_X = 400; // Approximate
  var MAX_X = 800; // Approximate
  var MIN_Y = 130;
  var MAX_Y = 630;


  // Create 8 itterations
  for (var i = 0; i < 8; i++) {
    var indexPrice = getRandomNumber(MIN_PRICE, MAX_PRICE);
    var indexType = getRandomNumber(0, 3);
    var totalRooms = getRandomNumber(MIN_ROOMS, MAX_ROOMS);
    var totalGuests = getRandomNumber(MIN_GUESTS, MAX_GUESTS);
    var indexCheckin = getRandomNumber(0, 2);
    var indexCheckout = getRandomNumber(0, 2);
    var indexPhotos = getRandomNumber(0, 2);
    var locationX = getRandomNumber(MIN_X, MAX_X);
    var locationY = getRandomNumber(MIN_Y, MAX_Y);

    // Create an object
    var announcement = {
      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png',
      },
      offer: {
        title: data.titles[i],
        address: data.addresses[i],
        price: indexPrice,
        type: data.types[indexType], // if I add 'i' instead of indexType it will always show the same number
        rooms: totalRooms,
        guests: totalGuests,
        checkin: data.times[indexCheckin], // it doesn't work
        checkout: data.times[indexCheckout],
        features: data.features[i],
        description: data.descriptions[i],
        photos: data.photos[indexPhotos]
      },
      location: {
        x: locationX,
        y: locationY,
      }
    };
    // Put this object into array
    someName.push(announcement);
  }
  // Return the array
  return someName;
}
// Fix all function objects!

