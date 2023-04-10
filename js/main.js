let digitOne = document.querySelector('.digit-1');
let rangeDataOne = document.querySelector('.range-1');
let digitTwo = document.querySelector('.digit-2');
let rangeDataTwo = document.querySelector('.range-2');

rangeDataOne.oninput = function getDigitOne() {
    digitOne.innerHTML = this.value;
};

rangeDataTwo.oninput = function getDigitTwo() {
    digitTwo.innerHTML = this.value;
}
