

const slider = document.querySelector(".testimoneal")
const testi = document.querySelectorAll(".testimoneal div")

let counter = 1;
const size = testi[0].clientWidth;

slider.style.transform = "translateX(" + -size * counter + "px)";