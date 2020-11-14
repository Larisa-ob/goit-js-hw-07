const inputTextRef = document.querySelector("#validation-input");
const name6LabelRef = document.querySelector();
inputTextRef.addEventListener("input", (e) => {
  e.preventDefault();
  const inputLength = e.target.value.length;
});
inputTextRef.addEventListener("blur", (e) => {
  e.preventDefault();
  console.log("Потерял фокус");
});
