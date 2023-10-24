
const fullName = "Abigail Maimela";
const currentYear = new Date().getFullYear();
const profilePicture = "images/myphoto.jpg";


const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");


nameElement.innerHTML = `<strong>${fullName}</strong>`;


yearElement.textContent = currentYear;


const imageElement = document.getElementById("profileImage");
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


const favoriteFoods = ["chicken", "pasta", "beef"];


foodElement.innerHTML = favoriteFoods.join("<br>");


const newFavoriteFood = "sushi";


favoriteFoods.push(newFavoriteFood);


foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");


favoriteFoods.shift();


foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");


favoriteFoods.pop();


foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");



