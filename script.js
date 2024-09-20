'use strict';

const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'суб', 'вскр'];
const myArr = document.getElementById('myArr');
const today = new Date();

week.forEach(function (item) {
  const li = document.createElement('li');
  myArr.append(li);
  li.innerHTML = item;
  li.style.listStyle = 'none';
  li.style.fontSize = '32px';
  if (item === 'суб' || item === 'вскр') {
    li.style.fontStyle = 'italic';
  }
  if (item === week[today.getDay() - 1]) {
    li.style.fontWeight = '700';
  }
});

console.log(myArr);
