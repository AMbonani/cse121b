
document.getElementById("getTotalDue").addEventListener("click", function() {
  
    const subtotal = parseFloat(document.getElementById("subtotal").value);

   
    const membershipCheckbox = document.getElementById("membership");
    const discount = membershipCheckbox.checked ? 0.15 : 0;

   
    const total = subtotal - (subtotal * discount);

  
    document.getElementById("total").textContent = `Total Due: $${total.toFixed(2)}`;
});


const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


document.getElementById("array").textContent = JSON.stringify(numberArray);


const oddNumbers = numberArray.filter(num => num % 2 === 1);
document.getElementById("odds").textContent = JSON.stringify(oddNumbers);


const evenNumbers = numberArray.filter(num => num % 2 === 0);
document.getElementById("evens").textContent = JSON.stringify(evenNumbers);


const sumOfArray = numberArray.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfArray").textContent = `Sum of Array: ${sumOfArray}`;


const multipliedArray = numberArray.map(num => num * 2);
document.getElementById("multiplied").textContent = JSON.stringify(multipliedArray);


const sumOfMultiplied = numberArray.map(num => num * 2).reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfMultiplied").textContent = `Sum of Multiplied Array: ${sumOfMultiplied}`;
