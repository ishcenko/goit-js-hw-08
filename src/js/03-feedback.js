import throttle from 'lodash.throttle'

const feedbackForms = document.querySelector('.feedback-form');
const emailInputForm = document.querySelector('input');
const messageTextArea = document.querySelector('textarea');

const KEY_LOCALSTORAGE = "feedback-form-state";

function inputText(e) {
    const formDataValue = {
        email: emailInputForm.value,
        message: messageTextArea.value
    };
    localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(formDataValue));
};

const onThrottleInput = throttle(inputText, 500);

emailInputForm.addEventListener('input', onThrottleInput);
messageTextArea.addEventListener('input', onThrottleInput);
feedbackForms.addEventListener('submit', sendCompletedForm);

enterTextInBox();

function enterTextInBox() {
    const saveValue = JSON.parse(localStorage.setItem(KEY_LOCALSTORAGE));
    if (saveValue) {
        emailInputForm.value = saveValue.email;
        messageTextArea.value = saveValue.message;
    };
};

function sendCompletedForm(e) {
    e.preventDefault();
    const emailText = emailInputForm.value;
    const messageText = messageTextArea.value;
    
    if (emailText !== '' && messageText !== '') {
        const formDataValue = {
            email: emailText,
            message: messageText
        };
        console.log(formDataValue);
        feedbackForms.reset();
    } else {
        alert('Будь ласка, заповніть всі поля форми')
    };
    localStorage.removeItem(KEY_LOCALSTORAGE);
};
