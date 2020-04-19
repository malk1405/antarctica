function activateMap() {
  const mapContainer = document.querySelector('.contacts__map-container');

  if (!mapContainer) return;

  const yandexMap = mapContainer.querySelector('#yandex-map');
  if (!yandexMap) return;

  mapContainer.classList.remove('contacts__map-container--no-js');
  const button = mapContainer.querySelector('.contacts__map-button');

  if (!button) return;
  let yandexMaps;
  button.addEventListener('click', function () {
    addYandex();
    activateYandex();
  });

  function addYandex() {
    if (yandexMaps) return;

    const body = document.querySelector('body');
    yandexMaps = document.createElement('script');
    yandexMaps.src =
      'https://api-maps.yandex.ru/2.1/?apikey=31ed6d40-6f66-49bb-8924-f9f7c195d51e&lang=ru_RU';

    body.appendChild(yandexMaps);
  }

  function activateYandex() {
    let count = 0;

    const timer = setInterval(() => {
      count++;

      if (count > 10 || window.ymaps) clearInterval(timer);

      if (window.ymaps) window.ymaps.ready(init);
    }, 100);

    if (!window.ymaps) return;

    function init() {
      console.log('init');

      mapContainer.classList.add('contacts__map-container--interactive');

      const position = [59.938635, 30.323118];
      const map = new window.ymaps.Map('yandex-map', {
        center: position,
        zoom: 16,
      });

      const myPlacemark = new window.ymaps.Placemark(
        position,
        {
          hintContent: yandexMap.dataset.hint,
          balloonContent: yandexMap.dataset.balloon,
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
  }
}

export default activateMap;
