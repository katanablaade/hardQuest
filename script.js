"use strict";
//Задание 1

// через if
let lang = prompt("Выберите язык:", "ru/en");

if (lang.toLowerCase() === "ru") {
  console.log("пн, вт, ср, чт, пт, суб, вскр");
} else if (lang.toLowerCase() === "en") {
  console.log("mn, ts, wd, th, fr, st, sn");
} else if (lang === "ru/en") {
  console.log("Выберите один язык");
} else {
  console.log("Упс, эти язык(-и) не поддерживается(-ются)");
}

// через switch-case
switch (lang.toLowerCase()) {
  case "ru":
    console.log("пн, вт, ср, чт, пт, суб, вскр");
    break;
  case "en":
    console.log("mn, ts, wd, th, fr, st, sn");
    break;
  case "ru/en":
    console.log("Выберите один язык");
    break;
  default:
    console.log("Упс, эти язык(-и) не поддерживается(-ются)");
    break;
}

//через многомерный массив
const array = {
  ru: ["пн", "вт", "ср", "чт", "пт", "суб", "вскр"],
  en: ["mn", "ts", "wd", "th", "fr", "st", "sn"],
};
console.log(array[lang.toLowerCase()]);

//Задание 2

const namePerson = prompt("Введите имя:", "Артем, Александр или др.");

console.log(
  namePerson === "Артем"
    ? "Директор"
    : namePerson === "Александр"
    ? "Преподаватель"
    : "Студент"
);
