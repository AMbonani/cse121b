
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    const addnumber1 = parseFloat(document.querySelector('#add1').value);
    const addnumber2 = parseFloat(document.querySelector('#add2').value);
    const sum = add(addnumber1, addnumber2);
    document.querySelector('#sum').value = sum;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


const subtract = function (number1, number2) {
    return number1 - number2;
};

document.querySelector('#subtractNumbers').addEventListener('click', function () {
    const subtract1 = parseFloat(document.querySelector('#subtract1').value);
    const subtract2 = parseFloat(document.querySelector('#subtract2').value);
    const difference = subtract(subtract1, subtract2);
    document.querySelector('#difference').value = difference;
});


const multiply = (number1, number2) => number1 * number2;

document.querySelector('#multiplyNumbers').addEventListener('click', function () {
    const factor1 = parseFloat(document.querySelector('#factor1').value);
    const factor2 = parseFloat(document.querySelector('#factor2').value);
    const product = multiply(factor1, factor2);
    document.querySelector('#product').value = product;
});


function divide(number1, number2) {
    return number1 / number2;
}

document.querySelector('#divideNumbers').addEventListener('click', function () {
    const dividend = parseFloat(document.querySelector('#dividend').value);
    const divisor = parseFloat(document.querySelector('#divisor').value);
    const quotient = divide(dividend, divisor);
    document.querySelector('#quotient').value = quotient;
});


document.getElementById('getTotal').addEventListener('click', function () {
    const subtotal = parseFloat(document.getElementById('subtotal').value);

    const membershipCheckbox = document.getElementById('member');
    const discount = membershipCheckbox.checked ? 0.15 : 0;

    const total = subtotal - subtotal * discount;

    document.getElementById('total').textContent = `Total Due: $${total.toFixed(2)}`;
});


const numberArray = Array.from({ length: 13 }, (_, i) => i + 1);

document.getElementById('array').textContent = JSON.stringify(numberArray);

const oddNumbers = numberArray.filter((num) => num % 2 === 1);
document.getElementById('odds').textContent = JSON.stringify(oddNumbers);

const evenNumbers = numberArray.filter((num) => num % 2 === 0);
document.getElementById('evens').textContent = JSON.stringify(evenNumbers);

const sumOfArray = numberArray.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfArray').textContent = `Sum of Array: ${sumOfArray}`;

const multipliedArray = numberArray.map((num) => num * 2);
document.getElementById('multiplied').textContent = JSON.stringify(multipliedArray);

const sumOfMultiplied = multipliedArray.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfMultiplied').textContent = `Sum of Multiplied Array: $${sumOfMultiplied.toFixed(2)}`;


