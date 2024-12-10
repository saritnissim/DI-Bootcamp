let button = document.querySelector('#button');
button.addEventListener('click', getData)

async function getData() {
    let dataContainer = document.querySelector('#dataContainer');
    dataContainer.innerHTML = `<i class="fa-solid fa-sync fa-spin"></i><p>Loading...</p>`;
    try {
        const randomId = Math.floor(Math.random() * 83) + 1;
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`); 
        if (!response.ok) {
            throw new Error("Failed to fetch character data")
        }
        const data = await response.json()
        let properties = data.result.properties
        let homeWorldApi = "https://www.swapi.tech/api/planets/60"
        let homeWorldResponse = await fetch(homeWorldApi)
        let homeWorldResult = await homeWorldResponse.json()

        dataContainer.innerHTML = ''
        
        //Set Data
        let name = document.createElement('p')
        name.textContent = `Name: ${properties.name}`
        dataContainer.appendChild(name)
        
        let height = document.createElement('p')
        height.textContent = `Height: ${properties.height}`
        dataContainer.appendChild(height)

        
        let gender = document.createElement('p')
        gender.textContent = `Gender: ${properties.gender}`
        dataContainer.appendChild(gender)

        let homeWorld = document.createElement('p')
        homeWorld.textContent = `Home World: ${homeWorldResult.result.properties.name}`
        dataContainer.appendChild(homeWorld)


    } catch (error) {
        const errorMessage = error
        dataContainer.textContent = errorMessage

    }
}
