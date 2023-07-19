var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onTargetElInput, 500));
formEl.addEventListener('submit', onFormSubmit);

let formValue = {};
console.dir(formEl);

function onTargetElInput(event) {
  if (event.target.value !== '') {
    formValue[event.target.name] = event.target.value;
  }

  try {
    localStorage.setItem(FORM_KEY, JSON.stringify(formValue));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  if (formEl.email.value === '' || formEl.message.value === '') {
    return alert('Fill in the required fields');
  } else {
    console.log(formValue);
    localStorage.removeItem(FORM_KEY);
    event.currentTarget.reset();
    formValue = {};
  }
}

refillInputsValue();
function refillInputsValue() {
  const refillVulues = localStorage.getItem(FORM_KEY);

  try {
    if (refillVulues) {
      const parsedFormData = JSON.parse(refillVulues);
      formValue = { refillVulues, ...parsedFormData };
      delete formValue.refillVulues;
      for (const name in parsedFormData) {
        if (formEl.elements[name]) {
          formEl.elements[name].value = parsedFormData[name];
        }
      }
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
