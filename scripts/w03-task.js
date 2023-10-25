
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    const num1 = parseFloat(document.getElementById("add1").value);
    const num2 = parseFloat(document.getElementById("add2").value);
    const result = add(num1, num2);
    document.getElementById("sum").textContent = `Result: ${result}`;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);


const subtract = function (number1, number2) {
    return number1 - number2;
};

function subtractNumbers() {
    const num1 = parseFloat(document.getElementById("subtract1").value);
    const num2 = parseFloat(document.getElementById("subtract2").value);
    const result = subtract(num1, num2);
    document.getElementById("difference").textContent = `Result: ${result}`;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


const multiply = (number1, number2) => number1 * number2;

function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById("factor1").value);
    const num2 = parseFloat(document.getElementById("factor2").value);
    const result = multiply(num1, num2);
    document.getElementById("product").textContent = `Result: ${result}`;
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


function divide(number1, number2) {
    return number1 / number2;
}

const divideNumbers = function () {
    const num1 = parseFloat(document.getElementById("dividend").value);
    const num2 = parseFloat(document.getElementById("divisor").value);
    const result = divide(num1, num2);
    document.getElementById("quotient").textContent = `Result: ${result}`;
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

