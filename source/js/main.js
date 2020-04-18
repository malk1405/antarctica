import activateHeader from './components/header';
import deactivateLinks from './components/links';
import activateForm from './components/form';

(function activate() {
  deactivateLinks();
  activateHeader();
  activateForm();
})();
