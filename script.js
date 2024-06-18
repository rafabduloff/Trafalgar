// Получаем элементы header-bars и nav по их id
var headerBars = document.getElementById("header-bars");
var nav = document.getElementById("nav");
var button = document.getElementById("header-bars");
button.addEventListener("click", function (e) {
  // e is the event object
  // e.target is the button element
  // do stuff with them
});

// Добавляем обработчик события click к элементу header-bars
headerBars.addEventListener("click", function () {
  // Проверяем, какое значение имеет свойство display элемента nav
  if (nav.style.display == "none") {
    // Если оно равно none, то меняем его на block или flex
    nav.style.display = "block"; // или flex
    // Добавляем класс menu к элементу nav
    nav.classList.add("menu");
  } else {
    // Если оно не равно none, то меняем его на none
    nav.style.display = "none";
    // Удаляем класс menu у элемента nav
    nav.classList.remove("menu");
  }
});
