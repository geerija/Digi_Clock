"use strict";
let clock = document.querySelector(".clock");
let greeting = document.querySelector(".greeting");
let showTime = "2:13:03 PM";
let greet = "Hello, Good Afternoon😀";

let display = function () {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  showTime = `${hour <= 12 ? hour : hour - 12}:${min}:${sec} ${
    hour <= 11 ? "AM" : "PM"
  }`;
  clock.innerHTML = showTime;
  if (hour <= 11) {
    greet = "Hello, Good Morning 😊";
  } else if (hour > 11 && hour < 16) {
    greet = "Hello, Good Afternoon 😀";
  } else if (hour >= 16 && hour < 20) {
    greet = "Hello, Good Evening ✨";
  } else {
    greet = "Hello, Good Night 😴 ";
  }
  greeting.innerHTML = greet;
};
display();
setInterval(display, 1000);
