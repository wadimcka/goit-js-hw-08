var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onTargetElInput, 500));
formEl.addEventListener('submit', onFormSubmit);

const formValue = {};

function onTargetElInput(event) {
  formValue[event.target.name] = event.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formValue));
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
function refillInputsValue() {
  const formVulues = localStorage.getItem(FORM_KEY);
  console.log(formVulues);
  const parsedFormData = JSON.parse(formVulues);

  const formData = new FormData(formEl);
  formData.forEach((value, name) => {
    if (parsedFormData.hasOwnProperty(name)) {
      formEl.elements[name].value = parsedFormData[name];
    }
  });
}
