document
  .getElementById("registerForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const serverMessage = document.getElementById("server-message")

    //Get form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //Go to the register endpoint
    try {
      // Send the register request using fetch
      const response = await fetch("/register", {
        method: "POST", // Send a POST request
        headers: {
          "Content-Type": "application/json", // Sending JSON data
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          username,
          password,
        }), // Send the form data as JSON
      });
      const data = await response.text(); // Parse JSON response

      // Display server message (success or error)
      serverMessage.textContent = data;
    } catch (error) {
        console.log(error)
    }
  });
