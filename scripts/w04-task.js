
const myProfile = {};

myProfile.name = "Abigail Maimela";
myProfile.photo = "images/myphoto.jpg"; 
myProfile.favoriteFoods = ["chicken", "beef", "cake"]; 
myProfile.hobbies = ["Reading", "outdoor activities", "watching movies"]; 
myProfile.placesLived = []; 


myProfile.placesLived.push({ place: "Erasmuskloof 1 year", length: "Elarduspark 3 yrs" });
myProfile.placesLived.push({ place: "Atteridgeville 25 yrs", length: "pretoria north 5 yrs" });


document.getElementById("name").textContent = myProfile.name;
const photoImage = document.getElementById("photo");
photoImage.setAttribute("src", myProfile.photo);
photoImage.setAttribute("alt", myProfile.name);


const favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach((food) => {
  const listItem = document.createElement("li");
  listItem.textContent = food;
  favoriteFoodsList.appendChild(listItem);
});


const hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach((hobby) => {
  const listItem = document.createElement("li");
  listItem.textContent = hobby;
  hobbiesList.appendChild(listItem);
});


const placesLivedDL = document.getElementById("places-lived");
myProfile.placesLived.forEach((place) => {
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = place.place;
  dd.textContent = place.length;
  placesLivedDL.appendChild(dt);
  placesLivedDL.appendChild(dd);
});
