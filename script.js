"use strict";

let screenPrice;
let arr = ["251", "542", "367", "429", "891", "211", "777"];
let numbers = 100;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (element[0] === "2" || element[0] === "4") {
    console.log(element);
  }
}

for (let i = 0; i < numbers; i++) {
  let kolichestvo = 0;
  for (let j = 0; j <= i; j++) {
    if (i % j === 0) {
      kolichestvo++;
    }
  }
  if (kolichestvo === 2) {
    console.log(i + " делители этого числа: " + 1 + " и " + i);
  }
}
