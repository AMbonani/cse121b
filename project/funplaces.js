
const fetchData = async () => {
    try {
        const response = await fetch('fun.json'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};


const populatePlaceList = (places) => {
    const placeList = document.getElementById('placeList');
    placeList.innerHTML = '';

    places.forEach(place => {
        const item = document.createElement('li');
        item.innerHTML = `
            <h2>${place.name}</h2>
            <p>Location: ${place.location}</p>
            <p>Category: ${place.category}</p>
            <img src="images/${place.image}" alt="${place.name} Image">
        `;
        placeList.appendChild(item);
    });
};


const populateGlossary = () => {
    const glossaryList = document.getElementById('glossaryList');
    const glossaryItems = [
        {
            term: 'Amusement Park',
            description: 'A place with rides and games for kids.',
            link: 'https://www.goldreefcity.co.za/theme-park/',
            image: 'gcity.png'
        },
        {
            term: 'Zoo',
            description: 'A facility where kids can see and learn about animals.',
            link: 'https://www.pretoriazoo.org/',
            image: 'zoo.png'
        },
        {
            term: 'Playground',
            description: 'An outdoor area with equipment for kids to play on.',
            link: 'https://cedarjunction.co.za/',
            image: 'zitapark.png'
        }
    ];

    glossaryItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${item.term}:</strong> ${item.description}
            <br>
            <a href="${item.link}" target="_blank">Visit ${item.term}</a>
            <br>
            <img src="images/${item.image}" alt="${item.term} Image">
        `;
        glossaryList.appendChild(li);
    });
};

// Main function to fetch data and populate the content
const main = async () => {
    const data = await fetchData();
    if (data.length > 0) {
        populatePlaceList(data);
    }
    populateGlossary();
};

main();
