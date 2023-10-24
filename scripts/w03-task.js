
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers(num1, num2) {
    const result = add(num1, num2);
    return `Result: ${result}`;
}


const currentDate = new Date();

const currentYear = currentDate.getFullYear();


const yearElement = document.getElementById("year");
yearElement.textContent = `Current Year: ${currentYear}`;


const num1 = 5;
const num2 = 10;
const resultMessage = addNumbers(num1, num2);
console.log(resultMessage);


const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const arrayElement = document.getElementById("array");
arrayElement.textContent = `Array: ${numbersArray.join(", ")}`;


const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
const oddElement = document.getElementById("odds");
oddElement.textContent = `Odds: ${oddNumbers.join(", ")}`;


const evenNumbers = numbersArray.filter(number => number % 2 === 0);
const evenElement = document.getElementById("evens");
evenElement.textContent = `Evens: ${evenNumbers.join(", ")}`;


const sumOfArray = numbersArray.reduce((total, number) => total + number, 0);
const sumOfArrayElement = document.getElementById("sumOfArray");
sumOfArrayElement.textContent = `Sum of Array: ${sumOfArray}`;


const multipliedArray = numbersArray.map(number => number * 2);
const multipliedElement = document.getElementById("multiplied");
multipliedElement.textContent = `Multiplied: ${multipliedArray.join(", ")}`;


const sumOfMultiplied = multipliedArray.reduce((total, number) => total + number, 0);
const sumOfMultipliedElement = document.getElementById("sumOfMultiplied");
sumOfMultipliedElement.textContent = `Sum of Multiplied: ${sumOfMultiplied}`;

