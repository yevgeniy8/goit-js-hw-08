import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let data = JSON.parse(localStorage.getItem(STORAGE_KEY));

formEl.addEventListener('input', throttle(onInputForm, 500));
formEl.addEventListener('submit', onSubmitButton);

const { email, message } = formEl.elements;

if (data) {
  email.value = data.email;
  message.value = data.message;
}

function onInputForm(evt) {
  data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function onSubmitButton(evt) {
  evt.preventDefault();
	
  if (!email.value || !message.value) {
    return alert('Всі поля повинні бути заповнені');
  }

  console.log(data);

  evt.currentTarget.reset();
  localStorage.clear();
}
