'use strict';
const input = document.querySelector('input[type=text]');
const paragraph = document.querySelector('.p');
paragraph.textContent = input.value;

const debounce = (callback, interval = 0) => {
  let prevTimeoutId;

  return (...args) => {
    clearTimeout(prevTimeoutId);
    prevTimeoutId = setTimeout(() => callback(...args), interval);
  };
};

input.addEventListener(
  'input',
  debounce(() => (paragraph.textContent = input.value), 300)
);
