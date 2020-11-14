const inputRef = document.querySelector("#name-input");
const nameLabelRef = document.querySelector('span[id="name-output"]');
inputRef.addEventListener("input", (e) => {
  e.preventDefault();
  if (e.target.value === "") e.target.value = "незнакомец";
  nameLabelRef.textContent = e.target.value;
});
