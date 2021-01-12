const inputNumber = document.querySelector('input[type="number"]');
const buttonRender = document.querySelector('button[data-action="render"]');
const buttonDestroy = document.querySelector('button[data-action="destroy"]');
const boxesDiv = document.querySelector('div#boxes');
const boxesArray = [];
const startWidth = 30;
const startHeight = 30;
let amount = 0;
function genColor() {
    const r = function () {
        return Math.floor(Math.random() * 256);
    };
    return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}
const createBoxes = amount => {
    amount = Number(inputNumber.value);
    for (let i = 0; i < amount; i += 1) {
        const newdiv = document.createElement('div');
        newdiv.style.width = `${startWidth + 10 * i}px`;
        newdiv.style.height = `${startHeight + 10 * i}px`;
        newdiv.style.backgroundColor = genColor();
        boxesArray.push(newdiv);
    }

    boxesDiv.append(...boxesArray);
};

const destroyBoxes = () => {
    const boxesCurrent = boxesDiv.querySelectorAll('div');
    for (const boxesCurrentItem of boxesCurrent) {
        boxesDiv.removeChild(boxesCurrentItem);
    }
    inputNumber.value = null;
    clearArray(boxesArray);
};
function clearArray(array) {
    while (array.length) {
        array.pop();
    }
}
buttonRender.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);
