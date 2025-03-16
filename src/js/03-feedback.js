// var throttle = require('lodash.throttle');

// const formEl = document.querySelector('.feedback-form');
// const FORM_KEY = 'feedback-form-state';

// formEl.addEventListener('input', throttle(onTargetElInput, 500));
// formEl.addEventListener('submit', onFormSubmit);

// let formValue = {};
// console.dir(formEl);

// function onTargetElInput(event) {
//   if (event.target.value !== '') {
//     formValue[event.target.name] = event.target.value;
//   }

//   try {
//     localStorage.setItem(FORM_KEY, JSON.stringify(formValue));
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//   }
// }

// function onFormSubmit(event) {
//   event.preventDefault();
//   if (formEl.email.value === '' || formEl.message.value === '') {
//     return alert('Fill in the required fields');
//   } else {
//     console.log(formValue);
//     localStorage.removeItem(FORM_KEY);
//     event.currentTarget.reset();
//     formValue = {};
//   }
// }

// refillInputsValue();
// function refillInputsValue() {
//   const refillVulues = localStorage.getItem(FORM_KEY);

//   try {
//     if (refillVulues) {
//       const parsedFormData = JSON.parse(refillVulues);
//       formValue = { refillVulues, ...parsedFormData };
//       delete formValue.refillVulues;
//       for (const name in parsedFormData) {
//         if (formEl.elements[name]) {
//           formEl.elements[name].value = parsedFormData[name];
//         }
//       }
//     }
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//   }
// }

// 05.03.25
var throttle = require('lodash.throttle');

const formEl = document.querySelector('.js-form');

let FORM_KEY = 'feedback-form-state';

// document.addEventListener('DOMContentLoaded', setFormValue);
formEl.addEventListener('input', throttle(onFormElInput, 500));
formEl.addEventListener('submit', onFormSubmitBtn);

let formValue = {};

function setFormValue() {
  formValue = getLsData(FORM_KEY);
  if (!formValue) {
    return;
  }
  Object.entries(formValue).forEach(([key, value]) => {
    if (formEl.elements[key]) {
      formEl.elements[key].value = value || '';
    }
  });
}

function onFormElInput(e) {
  formValue[e.target.name] = e.target.value.trim();
  setLsData(FORM_KEY, formValue);
}

function setLsData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.message);
  }
}

function getLsData(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.log(error.message);
  }
}
function onFormSubmitBtn(event) {
  event.preventDefault();
  if (formValue) {
    console.log('formValue', formValue);
    localStorage.removeItem(FORM_KEY);
    event.currentTarget.reset();
    formValue = {};
  }
  alert('fill the form');
}
