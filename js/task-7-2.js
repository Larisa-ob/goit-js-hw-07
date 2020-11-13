const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ulConteiner = document.querySelector("#ingredients");
const array = [...ingredients];
const elementRef = (array) =>
  array.forEach((element) => {
    const list = document.createElement("li");
    list.textContent = element;
    ulConteiner.append(list);
  });
elementRef(array);
