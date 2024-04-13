const poems = [
    "Roses are red, violets are blue, sugar is sweet, and so are you.",
    "I wandered lonely as a cloud...",
    // Add more poems here
];

// Select the poem container element
const poemContainer = document.getElementById("poem-container");

// Select a random poem from the array
const randomPoem = poems[Math.floor(Math.random() * poems.length)];

// Insert the poem into the container
poemContainer.innerHTML = randomPoem;