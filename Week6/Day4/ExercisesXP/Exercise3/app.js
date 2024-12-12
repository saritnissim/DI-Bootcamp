const { readFile, writeFile } = require('./fileManager');  // Using require instead of import

readFile('./HelloWorld.txt')
writeFile('./ByeWorld.txt', "Writing to the file")