const titleItemsRef = document.querySelectorAll("#categories .item");
console.log(`В списке ${titleItemsRef.length} категории`);
const textItemsRef = document.querySelectorAll("h2");
const array = [...textItemsRef];
const textItems = (array) =>
  array.forEach((element) => {
    return (
      console.log(`.Категория ${element.textContent}`),
      console.log(
        `.Количество элементов ${element.nextSibling.nextSibling.childElementCount}`
      )
    );
  });
textItems(array);
