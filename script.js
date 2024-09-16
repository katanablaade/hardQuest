"use strict";
//Задание 1

// через if
let lang = prompt("Выберите язык:", "ru/en");

if (lang == "ru" || lang == "Ru" || lang == "RU") {
  console.log("пн, вт, ср, чт, пт, суб, вскр");
} else if (lang == "en" || lang == "En" || lang == "EN") {
  console.log("mn, ts, wd, th, fr, st, sn");
} else if (lang == "ru/en") {
  console.log("Выберите один язык");
} else {
  console.log("Упс, эти язык(-и) не поддерживается(-ются)");
}

// через switch-case
switch (true) {
  case lang == "ru" || lang == "Ru" || lang == "RU":
    console.log("пн, вт, ср, чт, пт, суб, вскр");
    break;
  case lang == "en" || lang == "En" || lang == "EN":
    console.log("mn, ts, wd, th, fr, st, sn");
    break;
  case lang == "ru/en":
    console.log("Выберите один язык");
    break;
  default:
    console.log("Упс, эти язык(-и) не поддерживается(-ются)");
    break;
}

//через многомерный массив
let array = [];

array.ru = ["пн", "вт", "ср", "чт", "пт", "суб", "вскр"];
array.en = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
console.log(array[lang]);

//Задание 2

let namePerson = prompt("Введите имя:", "Артем, Александр или др.");

console.log(
  namePerson == "Артем"
    ? "Директор"
    : namePerson == "Александр"
    ? "Преподаватель"
    : "Студент"
);
