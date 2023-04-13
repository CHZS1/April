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

//sent to calc data
let sentToCalc = document.getElementById('sent-to-calc');
let boxSelect = document.getElementById('box-select').value;
let typeOfBox = document.getElementById('type-of-box');

let distanceSelect = document.getElementById('dist-select').value;
let distance = document.getElementById('distance');

let timeOfRent = document.getElementById('time-of-rent');
let quantity = document.getElementById('quantity-of-boxes');

function sentAll() {
    let form = document.querySelector('.sent-to-serv__wrap');
    form.classList.add('active');

    typeOfBox.value = boxSelect;
    distance.value = distanceSelect;
    timeOfRent.value = rangeDataOne.value;
    quantity.value = rangeDataTwo.value;
};


function closeForm() {
    let active = document.querySelector('.active');
    active.classList.remove('active');
}
