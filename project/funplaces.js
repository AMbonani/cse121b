const placeList = document.getElementById("placeList");

function renderPlaces(places) {
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

async function fetchPlaces() {
    try {
        const response = await fetch('fun.json'); ile
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        renderPlaces(data.places);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchPlaces();
