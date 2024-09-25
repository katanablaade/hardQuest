'use strict';

const lang = navigator.language;
let dateA;
let dateB;

function declencion(n, text) {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return text[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text[1];
  }
  if (n1 == 1) {
    return text[0];
  }
  return text[2];
}

function fullDate() {
  const search1 = document.getElementById('date_1');
  search1.textContent = '';
  let date = new Date();
  dateA =
    'Cегодня ' +
    date.toLocaleString(lang, { weekday: 'long' }).charAt(0).toUpperCase(0) +
    date.toLocaleString(lang, { weekday: 'long' }).slice(1) +
    ', ' +
    date.getDate() +
    ' ' +
    date.toLocaleString(lang, { month: 'long', day: 'numeric' }).split(' ')[1] +
    ' ' +
    date.getFullYear() +
    ' ' +
    'года, ' +
    date.getHours() +
    ' ' +
    declencion(date.getHours(), ['час', 'часа', 'часов']) +
    ' ' +
    date.getMinutes() +
    ' минут ' +
    date.getSeconds() +
    ' секунды';
  search1.textContent = dateA;
}

function numDate() {
  const search1 = document.getElementById('date_2');
  search1.textContent = '';
  let date = new Date();

  dateB =
    date.getDate().toString().padStart(2, '0') +
    '.' +
    date.getMonth().toString().padStart(2, '0') +
    '.' +
    date.getFullYear() +
    ' - ' +
    date.getHours().toString().padStart(2, '0') +
    ':' +
    date.getMinutes().toString().padStart(2, '0') +
    ':' +
    date.getSeconds().toString().padStart(2, '0');

  search1.textContent = dateB;
}

setInterval(() => fullDate(), 1000);
setInterval(() => numDate(), 1000);
