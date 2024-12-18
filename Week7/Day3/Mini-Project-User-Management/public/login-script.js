// Handle form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Get form data
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Clear previous messages
    const messageDiv = document.getElementById("server-message");
    messageDiv.textContent = "Hello";

    try {
      // Send the login request using fetch
      const response = await fetch("/login", {
        method: "POST", // Send a POST request
        headers: {
          "Content-Type": "application/json", // Sending JSON data
        },
        body: JSON.stringify({ username, password }), // Send the form data as JSON
      });

      const data = await response.text(); // Parse JSON response

      // Display server message (success or error)
      messageDiv.textContent = data;
    } catch (error) {
      console.error("Error:", error);
      messageDiv.textContent = "An error occurred. Please try again later.";
    }
  });

