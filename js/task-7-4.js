let counterValue = 0;
//Создаем класс
const ref = {
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  htmlValue: document.querySelector("#value"),
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
  increment() {
    counterValue += 1;
  },
  decrement() {
    counterValue -= 1;
  },
  render() {
    this.htmlValue.textContent = counterValue;
  },
};

// обрабатываем событие нажатия на -1
ref.buttonDecrement.addEventListener("click", (e) => {
  e.preventDefault();
  ref.decrement(); // не работает
  ref.render(); //выводим значеие на страницу
});
// обрабатываем событие нажатия на +1
ref.buttonIncrement.addEventListener("click", (e) => {
  e.preventDefault();
  ref.increment(); // работает
  ref.render(); //выводим значеие на страницу
});
