import throttle from 'lodash.throttle'

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageArea = document.querySelector('textarea');

const LOCALSTORAGE_KEY = "feedback-form-state";

function onInput(e) {
  const formData = {
    email: emailInput.value,
    message: messageArea.value
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

const onThrottleInput = throttle(onInput, 500);

emailInput.addEventListener('input', onThrottleInput);
messageArea.addEventListener('input', onThrottleInput);
feedbackForm.addEventListener("submit", onFormSubmit)

populateInputs();

function populateInputs() {
  const savedValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedValue) {
    emailInput.value = savedValue.email;
    messageArea.value = savedValue.message;
  }
}

function onFormSubmit(event)  {
  event.preventDefault();
  const mail = emailInput.value;
  const message = messageArea.value;

  if (mail !== '' && message !== '') {
    const formData = {
      email: mail,
      message: message
    };
    console.log(formData);

    feedbackForm.reset();
}
else {
    alert('Всі поля форми повинні бути заповнені.')
}
  localStorage.removeItem(LOCALSTORAGE_KEY);
};
