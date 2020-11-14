const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgConteiner = document.querySelector("#gallery");
const heading = document.createElement("h1");
heading.textContent = "Домашнее задание 7-3";
imgConteiner.append(heading);
console.log(heading); // <h1>This is a heading</h1>
const array3 = [...images];
const imgRef = (array3) =>
  array3.forEach((element) => {
    console.log(element);
    const list = document.createElement("img");
    console.log(list);
    list.src = element.url;
    list.alt = element.alt;
    list.classList.add("js_picture");
    imgConteiner.append(list);
  });
imgRef(array3);
