const activateForm = () => {
  const form = document.querySelector('.booking__form form');
  if (!form) return;

  let phoneText = '';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.alert('Данные отправлены');
    form.reset();
    phoneText = '';
  });

  (function validatePhone() {
    const phoneField = form.querySelector('#booking__phone');
    if (!phoneField) return;

    phoneField.addEventListener('input', (event) => {
      const value = event.target.value;
      phoneText = /^[0-9]*$/.test(value) ? value : phoneText;
      phoneField.value = phoneText;
    });
  })();
};

export default activateForm;
