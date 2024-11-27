// In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
const solarSystemSection = document.querySelector('.listPlanets');

const planets = [
    { name: "Mercury", color: "gray", moons: [] },
    { name: "Venus", color: "yellow", moons: [] },
    { name: "Earth", color: "blue", moons: ["Moon"] },
    { name: "Mars", color: "red", moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", color: "orange", moons: ["Io", "Europa", "Ganymede", "Callisto"] },
    { name: "Saturn", color: "gold", moons: ["Titan", "Rhea", "Enceladus", "Mimas"] },
    { name: "Uranus", color: "lightblue", moons: ["Titania", "Oberon", "Umbriel", "Ariel"] },
    { name: "Neptune", color: "darkblue", moons: ["Triton", "Proteus"] },
    { name: "Pluto", color: "darkgray", moons: ["Charon"] }  // Added Pluto
];
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
for (const planet of planets) {
    // Create a div for the planet
    const planetDiv = document.createElement("div");
    planetDiv.classList.add('planet')
    planetDiv.textContent = planet.name;
    planetDiv.style.backgroundColor = planet.color;
    solarSystemSection.appendChild(planetDiv)
    for (let moon of planet.moons){
        const moonDiv = document.createElement('div')
        moonDiv.classList.add('moon')
        planetDiv.appendChild(moonDiv)
    }
}
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).

// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
