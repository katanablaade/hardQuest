"use strict";

let screenPrice;
let arr = ["251", "542", "367", "429", "891", "211", "777"];
let numbers = 100;

const isNumber = function (num) {
  return String(parseFloat(num)) === String(num) && isFinite(num);
};

do {
  screenPrice = prompt("Сколько будет стоить данная работа?");
} while (!isNumber(screenPrice));

const results = arr.filter(function (digit) {
  return digit.startsWith("2") || digit.startsWith("4");
});

primeNumbers: for (let i = 2; i < numbers; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue primeNumbers;
  }
  console.log(i + " Делители этого числа " + 1 + " и " + i);
}

console.log(screenPrice);
console.log(results);
