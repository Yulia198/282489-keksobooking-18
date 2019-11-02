'use strict';

var getRandomNumber = window.utils.getRandomNumber;
var data = window.data;

var announcements = generateObjects();

function generateObjects() {
  // Create an empty array
  var someName = [];

  // Create var for numbers
  var PIN_COUNT = 8;
  var MIN_PRICE = 500;
  var MAX_PRICE = 10000;
  var MIN_ROOMS = 1;
  var MAX_ROOMS = 4;
  var MIN_GUESTS = 1;
  var MAX_GUESTS = 7;
  // var MIN_PHOTOS = 1;
  // var MAX_PHOTOS = 3;
  var MIN_X = 0;
  var MAX_X = 1150;
  var MIN_Y = 130;
  var MAX_Y = 630;

  // Create 8 itterations
  for (var i = 0; i < PIN_COUNT; i++) {
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
        checkin: data.times[indexCheckin], // doesn't work with i
        checkout: data.times[indexCheckout],
        features: data.features.slice(0, getRandomNumber(0, data.features.length)), // data.features[i]
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
// temp delete class .map--faded from block .map
var map = document.querySelector('.map');
map.classList.remove('map--faded');

// create DOM elements for pins
var renderPins = function (announcements) {
  // Create DOM element based on object pin data
  var template = document.querySelector('#pin');
  var wrapper = document.querySelector('.map__pins');
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
var createCard = function () {
  var card = templateOffer.cloneNode(true);
  // Выведите заголовок объявления offer.title в заголовок.popup__title.
  var offerTitle = card.querySelector('.popup__title');
  // Выведите адрес offer.address в блок.popup__text--address.
  var offerAddress = card.querySelector('.popup__text--address');
  // Выведите цену offer.price в блок.popup__text--price строкой вида { { offer.price } } ₽/ночь.
  var offerPrice = card.querySelector('.popup__text--price');
// HELP! КАК???? Что-то пошло не так
  var priceRangeMin: {
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
  // Выведите количество гостей и комнат offer.rooms и offer.guests в блок.popup__text--capacity строкой вида { { offer.rooms } } комнаты для { { offer.guests } } гостей.Например, 2 комнаты для 3 гостей.
  var offerRooms = card.querySelector('.popup__text--capacity');
  var offerGuests = card.querySelector('.popup__text--capacity');
  // Время заезда и выезда offer.checkin и offer.checkout в блок.popup__text--time строкой вида Заезд после { { offer.checkin } }, выезд до { { offer.checkout } }.Например, заезд после 14: 00, выезд до 12: 00.
  var offerCheckin = card.querySelector('.popup__text--time');
  var offerCheckout = card.querySelector('.popup__text--time');
  // В список.popup__features выведите все доступные удобства в объявлении.
  var offerFeatures = card.querySelector('.popup__features');
  // В блок.popup__description выведите описание объекта недвижимости offer.description.
  var offerDescription = card.querySelector('.popup__description');
  // В блок.popup__photos выведите все фотографии из списка offer.photos.Каждая из строк массива photos должна записываться как src соответствующего изображения.
  var offerPhotos = card.querySelector('.popup__photos');
  // Замените src у аватарки пользователя — изображения, которое записано в.popup__avatar — на значения поля author.avatar отрисовываемого объекта.
};
// Вставьте полученный DOM - элемент в блок.map перед блоком.map__filters - container.

