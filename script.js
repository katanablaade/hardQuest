"use strict";

let randomString =
  "            Какой то длинный текст, очень длинный, самый длинный текст в мире и во всех мультивселенных";
let num = 12;

const myQuest = function (parameter) {
  if (typeof parameter !== "string") {
    alert("Это не строка");
  } else if (typeof parameter === "string") {
    parameter = parameter.trim().substring(0, 30) + "...";
  } else {
    parameter;
  }
  return parameter;
};
myQuest(randomString);
console.log(myQuest(randomString));
