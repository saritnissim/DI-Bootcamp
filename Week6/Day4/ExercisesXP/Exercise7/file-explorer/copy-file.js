import fs from 'fs'

const content = fs.readFileSync("./source.txt")
fs.writeFileSync("destination.txt",content)