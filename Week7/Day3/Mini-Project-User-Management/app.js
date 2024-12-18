const express = require("express");
const bcrypt = require("bcryptjs");

const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static HTML files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Converts the encoded form data into a JavaScript object, which you can then access via req.body

const usersFilePath = path.join(__dirname, "users.json");


// HELPER FUNCTION:
function readUsersFromFile() {
  try {
    if (!fs.existsSync(usersFilePath)) {
        return [];  // Return an empty array if the file doesn't exist
      }
    const data = fs.readFileSync(usersFilePath)
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading or parsing users file:", error);
  }
}

function writeUsersToFile(users){
  try {
    // Convert the tasks array into a JSON string
    const data = JSON.stringify(users);
    // Write the JSON string to the file
    fs.writeFileSync(usersFilePath, data);
    console.log("Users have been updated!");
  } catch (error) {
    console.error("Error writing users to file:", error);
  }
}

// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the JSON file.
app.post("/register", async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    const users = readUsersFromFile();

  // Check if the username already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).send('Username already exists');
  }

  // Hash the password using bcryptjs
  const hashedPassword = await bcrypt.hash(password, 10)

  // Create a new user object
  const newUser = {
    id: users.length + 1, // You can use a unique ID generation method here
    firstName,
    lastName,
    email,
    username,
    password: hashedPassword,
  };

  // Add the new user to the users array
  users.push(newUser);
  writeUsersToFile(users)
  res.send('Your account is now created')
});

// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).send('Both username and password are required.');
    }
  
    const users = readUsersFromFile();
  
    // Find user by username
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(400).send('Username is not registered');
    }
  
    // Compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
  
    if (!isPasswordCorrect) {
      return res.status(400).send('Incorrect password.' );
    }
  
    res.status(200).send(`Hi ${firstName} welcome back!`);
});

// GET /users: Retrieve a list of all registered users from a JSON file (only for demonstration purposes; no authentication required).
app.get("/users", (req, res) => {
    const users = readUsersFromFile()
    res.status(200).json(users)
});

// GET /users/:id: Retrieve a specific user by ID from the JSON file (only for demonstration purposes; no authentication required).
app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const users = readUsersFromFile();
    
    const user = users.find(u => u.id === userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
  
    res.status(200).json(user);
});

// PUT /users/:id: Update a user’s information by ID in the JSON file (only for demonstration purposes; no authentication required)
app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    const { firstName, lastName, email, username, password } = req.body;

    try {
      const users = readUsersFromFile();
      const userIndex = users.findIndex(user => user.id === userId);
      if (userIndex === -1) {
        return res
          .status(404)
          .json({ error: `User with ID ${userId} not found` });
      }
      users[userIndex] = { ...users[userIndex], firstName, lastName, email, username, password };
      writeUsersToFile(users);
      res.json(users[userIndex]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
