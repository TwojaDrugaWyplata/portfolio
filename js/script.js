// wysuwane zagraj ze mną
let game = document.querySelector(".game");
let openMenu = document.querySelector(".game__menu");
let closeMenu = document.querySelector(".game__menu--close");

openMenu.addEventListener("click", () => {
  game.classList.remove("game--closed");
});

closeMenu.addEventListener("click", () => {
  game.classList.add("game--closed");
});
// zmiana tła
let changeBackground = document.querySelector(".change__button");
let background = document.querySelector("body");
let table = document.querySelector(".table");
let tableTitle = document.querySelector(".tableTitle");
changeBackground.addEventListener("click", () => {
  background.classList.toggle("background");
  if (background.classList.contains("background")) {
    table.style.color = "black";
    tableTitle.style.color = "white";
  } else {
    tableTitle.style.color = "black";
  }
});