const divcontrolRef = document.querySelector("#controls");
const inputRef = document.querySelector("js-input");
const buttonRender = document.querySelector('button[data-action="render"]');
const buttonDestroy = document.querySelector('button[data-action="destroy"]');
const inputNumber = inputRef.addEventListener("input", createBoxes);

function createBoxes(amount) {
  console.log(event);
  amount = inputNumber.textContant.value;
  console.log(amount);
}
createBoxes();
