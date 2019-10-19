ADVERTS_QUANTITY = 8;

HOUSING_TYPES = ['palace', 'flat', 'house', 'bungalo'];
HOUSING_CHECK_IN_OUT = ['12: 00', '13: 00', '14: 00'];
HOUSING_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
HOUSING_PHOTOS = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];

var map = document.querySelector('.map');
var templatePin = document.querySelector('#pin');
var fragment = document.createDocumentFragment();
var pinList = document.querySelector('.map__pins');

var getRandomNumber = function (maxValue, minValue) {
  var result = Math.floor(Math.random() * maxValue + 1);
  if (minValue) {
    while (result <= minValue) {
      result = Math.floor(Math.random() * (maxValue + 1));
    }
  }
  return result;
 }

var getMokiData = function () { //what and why?
  //why? [];
  var adverts = [];
  for (var i = 0; i < ADVERTS_QUANTITY; i++) {
    var advert = {
      author: {
        avatar: 'img/avatars/user' + '0' + (i + 1) + '.png'
      },

      offer: {
        title: 'Some title'
        address: getRandomNumber(600, 350) + ',' + getRandomNumber(600, 350),
        price: getRandomNumber(1000, 2000),
        type: housingTypes[getRandomNumber(housingTypes.length - 1)],
        rooms: getRandomNumber(7, 1),
        guests: getRandomNumber(13, 1),
        checkin: housingCheckInOut[getRandomNumber(housingCheckInOut.length - 1)],
        checkout: housingCheckInOut[getRandomNumber(housingCheckInOut.length - 1)],
        features: housingFeatures,
        description: ' ',
        photos: housingPhotos,
  },

  location: {
    // ? Как найти х? Значение ограничено размерами блока, в котором перетаскивается метка.
    x: getRandomNumber(1024, 704),
      y: getRandomNumber(630, 130)
  }
    };

//У блока .map уберите класс .map--faded.
    map.classList.remove('map--faded');
    var renderPin = function (pinData) {
      var pin = templatePin.cloneNode(true);
        pin.style.left = pinData.location.x + 'px',
        pin.style.top = pinData.location.y + 'px',
        pin.querySelector(.img).src = pinData.author.avatar,
        pin.querySelector(.alt).alt = pinData.title;
    }
    var addElement = function () {
      var pins = getMokiData(housingTypes, housingCheckInOut, housingFeatures, housingPhotos);
      for (var j = 0; j < pins.length - 1; j++) {
        DocumentFragment.appendChild(renderPin(pins[j]));
       }
    };
    addElement(housingTypes, housingCheckInOut, housingFeatures, housingPhotos);

    console.log(getMokiData(housingTypes, housingCheckInOut, housingFeatures, housingPhotos));

