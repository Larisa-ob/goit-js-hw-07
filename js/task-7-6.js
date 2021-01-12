const inputTextRef = document.querySelector('#validation-input');

inputTextRef.addEventListener('input', e => {
    e.preventDefault();
});
/* При потере фокуса меняем цвет бордюра по условию*/
inputTextRef.addEventListener('blur', event => {
    event.preventDefault();
    const inputLength = event.target.value.length;
    console.log(inputLength);
    const inputdataLength = event.target.attributes['data-length'].nodeValue;
    if (inputLength == inputdataLength) {
        inputTextRef.classList.remove('invalid');
        inputTextRef.classList.add('valid');
    } else {
        inputTextRef.classList.remove('valid');
        inputTextRef.classList.add('invalid');
    }
});
