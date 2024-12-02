// Instructions
console.log("1. Go Wildcats:")
// Using this array:
const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]
const usernames = gameInfo.map( user => user.username + '!')
console.log(usernames)

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :

// const winners = ["becky", "susy"]
const winners = []
gameInfo.forEach(user => {
    if (user.score > 5){
        winners.push(user.username)
    }
})
console.log(winners)


// 3. Find and display the total score of the users. (Hint: The total score is 71)
const score = gameInfo.reduce((acc, val) => acc + val.score, 0)
console.log(score)


console.log("\n\nCar Inventory:")
// Instructions

// Part I

// Create a function getCarHonda(carInventory) that takes a single parameter. 
// carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
// The function should
// loop through the array of object and return the first car with the name “Honda”.
// then, return a string in the format This is a {car_make} {car_model} from {car_year}.
// Hint : Find an array method that returns the value of the first element in an array that pass a test.
// Use the cars inventory below:
const inventoryOne = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
function getCarHonda(carInventory){
    const hondaCar = carInventory.find(car => car.car_make === "Honda")
    if (hondaCar){
        return `This is a ${hondaCar.car_make} ${hondaCar.car_model} from ${hondaCar.car_year}`
    }
}
const hondaCar = getCarHonda(inventoryOne)
console.log("Part I: ", hondaCar)


// Part II

// Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. 
// carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
// the function should return an inventory that is sorted by car_year, ascending.
// Hint : Check out this tutorial on the sort method

// Use the cars inventory below:

const inventoryTwo = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
function sortCarInventoryByYear(carInventory) {
    //Sort function - A negative value indicates that a should come before b.
// A positive value indicates that a should come after b.
    carInventory.sort((a,b) => a.car_year - b.car_year)
}
const partTwo = sortCarInventoryByYear(inventoryTwo)
console.log("Part II: ", inventoryTwo)
// The output should be

// [
//   { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//   { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
//   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//   { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
// ];
