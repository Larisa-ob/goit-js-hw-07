const inputRef = document.querySelector("#font-size-control");
const nameLabelRef = document.querySelector('span[id="text"]');

inputRef.addEventListener("input", (e) => {
  console.log(e);
});
inputRef.addEventListener("mouseenter", (e) => {
  e.target.maxRange = 100;
  console.log(e.target);
});
