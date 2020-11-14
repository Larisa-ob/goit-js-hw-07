const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ulConteiner = document.querySelector("#ingredients");
const headIn = document.createElement("h1");
headIn.textContent = "Домашнее задание 7-2";
ulConteiner.append(headIn);
const array2 = [...ingredients];
const elementRef = (array2) =>
  array2.forEach((element) => {
    const list = document.createElement("li");
    list.textContent = element;
    ulConteiner.append(list);
  });
elementRef(array2);
