// Import the fs module
const fs = require('fs');

// Specify the directory to read
const directoryPath = './'; // Replace 'your-directory-name' with the desired directory

// Read the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        // Handle any errors
        console.error('Error reading the directory:', err.message);
        return;
    }

    // Display the list of files
    console.log('Files in directory:', directoryPath);
    files.forEach(file => {
        console.log(file);
    });
});
