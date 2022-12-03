import './index.css';
import {toLocalStorage} from './src/app';

toLocalStorage()
const button = document.querySelector('.cookie-consent__button')
button.addEventListener('click', () => {
  localStorage.setItem('click', true)
  const div = document.querySelector('.cookie-consent')
  div.classList.add('hide')
})