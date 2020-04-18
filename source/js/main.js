import activateHeader from './components/header';
import deactivateLinks from './components/links';
import activateMap from './components/map';

(function activate() {
  deactivateLinks();
  activateHeader();
  activateMap();
})();
