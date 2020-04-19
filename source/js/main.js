import activateHeader from './components/header';
import deactivateLinks from './components/links';
import activateForm from './components/form';
import activateMap from './components/map';

(function activate() {
  deactivateLinks();
  activateHeader();
  activateForm();
  activateMap();
})();
