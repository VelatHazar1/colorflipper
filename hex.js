const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const btn = document.querySelector("button");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRamdomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  console.log(getRamdomNumber());
});

function getRamdomNumber() {
  return Math.floor(Math.random() * hex.length);
}
