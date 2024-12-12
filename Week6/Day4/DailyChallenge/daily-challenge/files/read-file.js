const fs = require('fs')

// Read the file content
const displayFileContent = () => fs.readFile("./file-data.txt", 'utf8', (err, data) => {
    if (err) {
        // Handle any errors
        console.error('Error reading the file:', err.message);
        return;
    }

    // Display the file content
    console.log('File content:', data);
});

module.exports = displayFileContent