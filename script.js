const num = 266219;
const multiplyArray = ("" + num)
  .split("")
  .map(Number)
  .reduce((acc, y) => (acc = acc * y), 1);
console.log(multiplyArray);

const degree = multiplyArray ** 3;
console.log(degree);

console.log(degree.toString().slice(0, 2));
