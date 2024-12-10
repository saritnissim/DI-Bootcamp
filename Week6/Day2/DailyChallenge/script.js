// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. 
//This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

const form = document.getElementById("search-form")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById("search-input").value.trim()
    if (query) {
        fetchRandomGif(query);
    }
});

document.getElementById("delete-all").addEventListener('click', () => {
    document.getElementById("gif-container").replaceChildren()
})

const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
async function fetchRandomGif(query){
     // Construct the URL with query parameters
     const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
     const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}`;
     try {
        const response = await fetch(apiUrl)
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json()

        //Create img element
        const img = document.createElement('img')
        img.src = data.data.images.downsized_still.url
        img.alt = data.data.alt_text
        

        //Create DELETE button
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'DELETE'
        img.append(deleteButton)
        
        const gifContainer = document.getElementById("gif-container")
        
        const gifWrapper = document.createElement('div')
        gifContainer.appendChild(gifWrapper)
        
        // Append the image and button to the wrapper
        gifWrapper.appendChild(img);
        gifWrapper.appendChild(deleteButton);

        deleteButton.addEventListener('click', (event) => {
            event.currentTarget.parentNode.remove()
        });


     } 

     //Error handling
     catch (error) {
        console.error("Error fetching data from API:", error);
     }

}
