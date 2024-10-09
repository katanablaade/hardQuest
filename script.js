'use strict';
const car = document.querySelector('.car');
const btnStart = document.querySelector('.btn-start');
const btnReset = document.querySelector('.btn-reset');

let active = false;
let count = 0;
let idInterval;

const carAnmation = () => {
  count++;
  idInterval = requestAnimationFrame(carAnmation);

  if (count < 400) {
    car.style.left = count * 3 + 'px';
  } else {
    cancelAnimationFrame(idInterval);
  }
};

btnStart.addEventListener('click', () => {
  if (active) {
    cancelAnimationFrame(idInterval);
    active = false;
  } else {
    idInterval = requestAnimationFrame(carAnmation);
    active = true;
  }
});

btnReset.addEventListener('click', () => {
  cancelAnimationFrame(idInterval);
  count = 0;
  car.style.left = 0;
});
