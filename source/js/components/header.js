export default function activateHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  header.classList.remove('header--no-js');
  header.classList.remove('header--menu-visible');

  const buttons = header.querySelectorAll('.header__button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      header.classList.toggle('header--menu-visible');
    });
  });
}
