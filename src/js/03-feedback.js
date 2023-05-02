import throttle from 'lodash.throttle'

const feedbackForm = document.querySelector('.feedback-form');
const emailInputForm = document.querySelector('input');
const messageTextArea = document.querySelector('textarea');

const KEY_LOCALSTORAGE = "feedback-form-state";

function onInput(e) {
  const formDataValue = {
    email: emailInputForm.value,
    message: messageTextArea.value
  };
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(formDataValue));
}

const onThrottleInput = throttle(onInput, 500);

emailInputForm.addEventListener('input', onThrottleInput);
messageTextArea.addEventListener('input', onThrottleInput);
feedbackForms.addEventListener("submit", sendCompletedForm)

enterTextInBox();

function enterTextInBox() {
  const savedValue = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
  if (saveValue) {
    emailInputForm.value = saveValue.email;
    messageTextArea.value = saveValue.message;
  }
}

function sendCompletedForm(event)  {
  event.preventDefault();
  const emailText = emailInputForm.value;
  const messageText = messageTextArea.value;

  if (emailText !== '' && messmessageTextage !== '') {
    const formDataValue = {
      email: emailText,
      message: messageText
    };
    console.log(formDataValue);

    feedbackForm.reset();
}
else {
    alert('Будь ласка, заповніть всі поля форми')
}
  localStorage.removeItem(KEY_LOCALSTORAGE);
};
