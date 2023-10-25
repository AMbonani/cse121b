const templesElement = document.getElementById("temples");
const templeList = [];

const displayTemples = (temples) => {
  templesElement.innerHTML = "";
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

const getTemples = async () => {
  try {
    
    const response = await fetch("https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg");
    const data = await response.json();
    templeList.push(...data);
    displayTemples(templeList);
  } catch (error) {
    console.error("Error fetching temple data:", error);
  }
};

const reset = () => {
  templesElement.innerHTML = "";
};

const sortBy = (temples) => {
  reset();
  const filter = document.getElementById("sortBy").value;
  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "nonutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter((temple) => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      displayTemples(temples);
  }
};

document.getElementById("sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

getTemples();
