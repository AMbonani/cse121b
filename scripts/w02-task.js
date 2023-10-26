
const fullName = "Abigail Maimela"; 


const currentYear = new Date().getFullYear();


const profilePicture = "images/myphoto.jpg"; 

.
const nameElement = document.getElementById("name");


const foodElement = document.getElementById("food");


const yearElement = document.querySelector("#year");


const imageElement = document.getElementById("profileImage");


nameElement.innerHTML = `<strong>${fullName}</strong>`;


yearElement.textContent = currentYear;


imageElement.setAttribute("src", profilePicture);


imageElement.setAttribute("alt", `Profile image of ${fullName}`);


const favoriteFoods = ["chicken", "pasta", "beef"];


const newFavoriteFood1 = "sushi";
const newFavoriteFood2 = "pizza";


favoriteFoods.push(newFavoriteFood1);
favoriteFoods.push(newFavoriteFood2);


foodElement.innerHTML = favoriteFoods.join("<br>");


favoriteFoods.shift();


foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");


favoriteFoods.pop();


foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");


