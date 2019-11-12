'use strict';

var PIN_COUNT = 8;
var MIN_PRICE = 500;
var MAX_PRICE = 10000;
// price: {
//  MIN: 500,
//  MAX: 10000
// },
var MIN_ROOMS = 1;
var MAX_ROOMS = 4;
// rooms: {
//  MIN: 1,
//  MAX: 4
// },
var MIN_GUESTS = 1;
var MAX_GUESTS = 7;
// guests: {
//  MIN: 1,
//  MAX: 7
// },
// var MIN_PHOTOS = 1;
// var MAX_PHOTOS = 3;
// coordinates: {
//  X: {
//    MIN: 0,
//    MAX: 1150
//  }
//  Y: {
//    MIN: 130,
//    MAX: 630
//  }
// }
var MIN_X = 0;
var MAX_X = 1150;
var MIN_Y = 130;
var MAX_Y = 630;

var getRandomNumber = window.utils.getRandomNumber;
var data = window.data;

var announcements = generateOffers();
var map = document.querySelector('.map'); // temp delete class .map--faded from block .map
map.classList.remove('map--faded');


function createOffer(i) {
  return {
    author: {
      avatar: 'img/avatars/user0' + (i + 1) + '.png',
    },
    offer: {
      title: data.titles[i],
      address: data.addresses[i],
      price: getRandomNumber(MIN_PRICE, MAX_PRICE),
      type: data.types[getRandomNumber(0, 3)],
      rooms: getRandomNumber(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomNumber(MIN_GUESTS, MAX_GUESTS),
      checkin: data.times[getRandomNumber(0, 2)],
      checkout: data.times[getRandomNumber(0, 2)],
      features: data.features.slice(0, getRandomNumber(0, data.features.length)),
      description: data.descriptions[i],
      photos: data.photos,
    },
    location: {
      x: getRandomNumber(MIN_X, MAX_X),
      y: getRandomNumber(MIN_Y, MAX_Y),
    }
  };
}
// Function creating objects with a function creating object inside
function generateOffers() {
  var someName = []; // Create an empty array
  for (var i = 0; i < PIN_COUNT; i++) {
    someName.push(createOffer(i));
  }
  return someName;
}
var template = document.querySelector('#pin'); // Create DOM element based on object pin data
var wrapper = document.querySelector('.map__pins');

var renderPins = function (announcements) { // create DOM elements for pins
  for (var i = 0; i < announcements.length; i++) {
    var pin = announcements[i];
    var button = template.cloneNode(true).content.querySelector('.map__pin');
    var img = button.querySelector('img');
    button.style.left = pin.location.x + 'px';
    button.style.top = pin.location.y + 'px';
    img.src = pin.author.avatar;
    img.alt = pin.offer.title;
    wrapper.append(button);
  }
};
renderPins(announcements);

var templateOffer = document.querySelector('#card').content.querySelector('.popup');
var createCard = function (cardData) {
  console.log(createCard);
  var card = templateOffer.cloneNode(true);
  // Выведите заголовок объявления offer.title в заголовок.popup__title.
  var offerTitle = card.querySelector('.popup__title');
  // Выведите адрес offer.address в блок.popup__text--address.
  var offerAddress = card.querySelector('.popup__text--address');
  // Выведите цену offer.price в блок.popup__text--price строкой вида { { offer.price } } ₽/ночь.
  var offerPrice = card.querySelector('.popup__text--price');
  var priceRangeMin = {
    flat: 1000 + '₽/ночь.',
    bungalo: 1500 + '₽/ночь.',
    house: 8000 + '₽/ночь.',
    palace: 10000 + '₽/ночь.'
  };
  // В блок.popup__type выведите тип жилья offer.type: Квартира для flat, Бунгало для bungalo, Дом для house, Дворец для palace.
  var offerType = card.querySelector('.popup__type');
  var typesOnMap = {
    flat: 'Квартира',
    bungalo: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец'
  };
  var offerRooms = card.querySelector('.popup__text--capacity');
  var offerCheckin = card.querySelector('.popup__text--time');
  var offerCheckout = card.querySelector('.popup__text--time');
  var offerFeatures = card.querySelector('.popup__features');
  var offerDescription = card.querySelector('.popup__description');
  var offerPhotos = card.querySelector('.popup__photos');
  offerRooms.textContent = cardData.offer.rooms + ' комнаты для ' + cardData.offer.guests + ' гостей';
  offerCheckin.textContent = 'Заезд после ' + cardData.offer.checkin + ', выезд до ' + cardData.offer.checkout;

  renderOfferPhotos(cardData.offer.photos, offerPhotos, offerPhotos);
  document.body.append(card);
//photos
function renderOfferPhotos(photos, container, offerPhotos) {
  offerPhotos.innerHTML = '';
  for (var i = 0; i < photos.length; i++) {
    var img = document.createElement('img');
    img.src = photos[i];
    container.append(img);
    img.classList.add('popup__photo');
    img.width = '45px';
    img.height = '45px';
    img.alt = 'Фотография жилья';
  }
}
console.log(renderOfferPhotos);
  createCard(announcements[0]);
/*
(function(){
  var newAdForm = document.quesrySelector('.ad-form');
  var newResetButton = newAdForm.querySelector('.ad-form__reset');
  var newRoomsSelect = document.querySelector('#room_number');
  var newGuestsSelect = document.querySelector('#capacity');
  var newPriceSelect = document.querySelector('#price');
  var newTypeSelect = document.querySelector('#type');
  var newCheckinSelect = document.querySelector('#timein');
  var newCheckoutSelect = document.querySelector('#timeout');
})

*/
