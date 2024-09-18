let screenPrice;

const isNumber = function (num) {
  return String(parseFloat(num)) === String(num) && isFinite(num);
};

do {
  screenPrice = prompt("Сколько будет стоить данная работа?");
} while (!isNumber(screenPrice));

console.log(screenPrice, typeof screenPrice);
