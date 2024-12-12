const fs = require('fs');

// Implement the readFile function to read the content of a specified file using the fs module.
function readFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
        } else {
            console.log('File content:', data);
        }
    });
}
function writeFile(filename, content) {
    fs.writeFile(filename, content, (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
        } else {
            console.log('File written successfully!');
        }
    });
}

module.exports = { readFile, writeFile };