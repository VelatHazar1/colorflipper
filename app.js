const btn = document.querySelector("button");
const color = document.querySelector(".color");

const randomColor = function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g}, ${b})`;
};

btn.addEventListener("click", () => {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  color.innerText = newColor;
});
