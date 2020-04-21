function activateMap() {
  const mapContainer = document.querySelector(`.contacts__map-container`);

  if (!mapContainer) {
    return;
  }

  const yandexMap = mapContainer.querySelector(`#yandex-map`);
  if (!yandexMap) {
    return;
  }

  mapContainer.classList.remove(`contacts__map-container--no-js`);
  const button = mapContainer.querySelector(`.contacts__map-button`);

  if (!button) {
    return;
  }
  let yandexMaps;
  button.addEventListener(`click`, function () {
    addYandex();
  });

  function addYandex() {
    if (yandexMaps) {
      return;
    }

    const body = document.querySelector(`body`);
    yandexMaps = document.createElement(`script`);
    yandexMaps.src = `https://api-maps.yandex.ru/2.1/?apikey=31ed6d40-6f66-49bb-8924-f9f7c195d51e&lang=ru_RU&onload=initYandexMap&ns`;

    body.appendChild(yandexMaps);
  }

  window.initYandexMap = init;

  function init(ymaps) {
    mapContainer.classList.add(`contacts__map-container--interactive`);

    const position = [59.938635, 30.323118];
    const map = new ymaps.Map(`yandex-map`, {
      center: position,
      zoom: 16,
    });

    const myPlacemark = new ymaps.Placemark(
        position,
        {
          hintContent: yandexMap.dataset.hint,
          balloonContent: yandexMap.dataset.balloon,
        },
        {
          iconLayout: `default#image`,
          iconImageHref: `img/svg/location.svg`,
          iconImageSize: [18, 22],
          iconImageOffset: [-9, -22],
        }
    );

    map.geoObjects.add(myPlacemark);
  }
}

export default activateMap;
