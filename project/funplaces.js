const places = [
    {
        name: "Goldreef City Theme Park",
        location: "Cnr Northern parkway and Data Crescent, Ormonde",
        image: "gcity.png",
        category: "Amusement Park"
    },
    {
        name: "Pretoria Zoo",
        location: "232 Boom St, Daspoort 319-Jr, Pretoria",
        image: "zoo.png",
        category: "Zoo"
    },
    {
        name: "Sunny Park Playground",
        location: "789 Sunny Rd, Village",
        image: "zitapark.png",
        category: "Playground"
    }
];

const placeList = document.getElementById("placeList");

function renderPlaces() {
    placeList.innerHTML = ""; 

    places.forEach(place => {
        const item = document.createElement("li");
        item.innerHTML = `
            <h2>${place.name}</h2>
            <p>Location: ${place.location}</p>
            <p>Category: ${place.category}</p>
            <img src="${place.image}" alt="${place.name}">
        `;
        placeList.appendChild(item);
    });
}

renderPlaces();
