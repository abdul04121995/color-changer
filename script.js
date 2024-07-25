const backGround = document.querySelector(".bg");
const btnEl = document.querySelector(".btn");
const colorChanger = function () {
  const firstColor = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)})`;
  const secondColor = `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)})`;
  backGround.style.background = `linear-gradient(to right,${firstColor},${secondColor})`;
};

btnEl.addEventListener("click", function () {
  colorChanger();
});
