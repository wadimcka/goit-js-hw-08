var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onTargetElInput, 500));
formEl.addEventListener('submit', onFormSubmit);

let formValue = {};
console.dir(formEl);

function onTargetElInput(event) {
  formValue[event.target.name] = event.target.value;

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
  const formVulues = localStorage.getItem(FORM_KEY);
  try {
    const parsedFormData = JSON.parse(formVulues);
    const formData = new FormData(formEl);
    formData.forEach((value, name) => {
      if (parsedFormData.hasOwnProperty(name)) {
        formEl.elements[name].value = parsedFormData[name];
        formValue[name] = parsedFormData[name];
        console.dir(formValue);
      }
    });
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
