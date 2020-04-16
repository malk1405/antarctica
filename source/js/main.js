import activateHeader from './components/header';
import deactivateLinks from './components/links';

(function activate() {
  deactivateLinks();
  activateHeader();
})();
