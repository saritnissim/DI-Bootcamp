const form = document.getElementById('userForm');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Retrieve data from the inputs
  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;

  // Create a JSON object
  const jsonData = {
    name: name,
    lastname: lastname
  };

  // Convert the object to a JSON string
  const jsonString = JSON.stringify(jsonData);

  // Append the JSON string to the DOM
  const jsonOutput = document.createElement('p');
  jsonOutput.textContent = jsonString;

  form.appendChild(jsonOutput)
});