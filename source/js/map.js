'use strict';

(function activateMap() {
  const contacts = document.querySelector('.contacts');

  if (!contacts) return;

  const map = contacts.querySelector('#map');
  if (!map) return;

  if (!ymaps) return;

  // setTimeout(() => {
  ymaps.ready(init);
  // }, 5000);

  function init() {
    contacts.classList.remove('contacts--no-js');

    const position = [59.938635, 30.323118];
    const map = new ymaps.Map('map', { center: position, zoom: 16 });

    const myPlacemark = new ymaps.Placemark(
      position,
      {
        hintContent: 'Круизы в Антарктику',
        balloonContent:
          'Только у нас вы можете приобрести круиз в Антарктику по самым дешевым ценам',
      },
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/location.svg',
        iconImageSize: [18, 22],
        iconImageOffset: [-9, -22],
      }
    );

    map.geoObjects.add(myPlacemark);
  }
})();
