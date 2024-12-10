// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

async function fetchGiphyData(){
    const apiUrl = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
    try {
        const response = await fetch(apiUrl)
        
        // Ensure the response status is okay
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json()
        console.log("\nExercise 1: ", data.data)
    } catch (error) {
        console.error("Error fetching data from Giphy API:", error);
    }
}

fetchGiphyData()

// 🌟 Exercise 2 : Giphy API

// Instructions

// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.
async function fetchFilteredGiphyData() {
    const query = "sun"
    const limit = 10
    const offset = 2
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${query}&limit=${limit}&offset=${offset}`
    try {
        const response = await fetch(apiUrl)

        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json()
        console.log("\nExercise 2: ",data.data)

    } catch (error) {
        console.error("Error fetching data from Giphy API:", error);
    }
}

fetchFilteredGiphyData()

// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

async function improvedFunction() {
    const swapiApi = "https://www.swapi.tech/api/starships/9/"
    try {
        const response = await fetch(swapiApi)

        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const objectStarWars = await response.json()
        console.log("\nExercise 3: ", objectStarWars.result)
       
    } catch(error) {
        console.error("Error fetching data from Swapi API:", error);
    }
}
improvedFunction()