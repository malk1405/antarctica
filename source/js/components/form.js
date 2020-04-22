const activateForm = () => {
  const form = document.querySelector(`.booking__form form`);
  if (!form) {
    return;
  }

  const initialPhoneText = ``;

  let phoneText = initialPhoneText;

  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    // window.alert(`Данные отправлены`);
    form.reset();
    phoneText = initialPhoneText;
  });

  (function validatePhone() {
    const phoneField = form.querySelector(`#booking__phone`);
    if (!phoneField) {
      return;
    }

    phoneField.addEventListener(`focus`, ()=> {
      if (!phoneText) {
        phoneText = `8`;
      }

      phoneField.value = phoneText;
    });

    phoneField.addEventListener(`blur`, ()=> {
      if (phoneText.length <= 1) {
        phoneText = ``;
      }

      phoneField.value = phoneText;
    });

    phoneField.addEventListener(`input`, (event) => {
      const value = event.target.value;
      let cursorPosition = event.target.selectionEnd;
      if (/^8[0-9]*$/.test(value)) {
        phoneText = value.substring(0, 11);
      } else {
        cursorPosition = cursorPosition - 1;
      }

      if (cursorPosition < 1) {
        cursorPosition = 1;
      }

      phoneField.value = phoneText;
      phoneField.setSelectionRange(cursorPosition, cursorPosition);
    });
  })();
};

export default activateForm;
