var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');

// console.log(formEl);
const FORM_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onTargetElInput, 500));
formEl.addEventListener('submit', onFormSubmit);

// refillInputsValue();

let formValue = {};

function onTargetElInput(event) {
  formValue[event.target.name] = event.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formValue));
  //   console.log(localStorage);
}

function onFormSubmit(event) {
  event.preventDefault();
  if (formEl.email.value === '' || formEl.message.value === '') {
    return alert('Fill in the required fields');
  } else {
    localStorage.removeItem(FORM_KEY);
    event.currentTarget.reset();
  }
}

refillInputsValue();
function refillInputsValue(event) {
  const formVulues = localStorage.getItem(FORM_KEY);
  console.log(formVulues);
  parsedFormData = JSON.parse(formVulues);

  formData = new FormData(formEl);
  formData.forEach((value, name) => {
    if (parsedFormData.hasOwnProperty(name)) {
      formEl.elements[name].value = parsedFormData[name];
    }
  });
}
