// #  1 : Find The Numbers Divisible By 23

// # Instructions

// # Create a function call displayNumbersDivisible() that takes no parameter.
// # In the function, loop through numbers 0 to 500.
// # Console.log all the numbers divisible by 23.
// # At the end, console.log the sum of all numbers that are divisible by 23.
// # Bonus: Add a parameter divisor to the function.


function displayNumbersDivisible(divisor=2){
    let sum = 0
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0){
            console.log(i);
            sum += i
        }
      }
      console.log("Sum: " + sum)
}
console.log("Exercise 1:")
displayNumbersDivisible()


// Exercise 2 : Shopping List

// # Instructions

 const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
 }  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"]
function myBill(){
    let totalPrice = 0
    for (let item of shoppingList){
        if (item in stock && stock[item] > 0) {
            totalPrice += prices[item]
            stock[item]--
        }
    }
    console.log("Total price of shopping list: " + totalPrice)
    return totalPrice
}
console.log("Exercise 2:")
myBill()




// # Exercise 3 : What’s In My Wallet ?

// # Instructions

// # Note: Read the illustration (point 4), while reading the instructions

// # Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// # an item price
// # and an array representing the amount of change in your pocket.

// # In the function, determine whether or not you can afford the item.
// # If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// # If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// # Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// # A quarters is 0.25
// # A dimes is 0.10
// # A nickel is 0.05
// # A penny is 0.01
function changeEnough(itemPrice, amountOfChange){
    let totalChange = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.10 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01
    
    if (totalChange >= itemPrice){
        console.log("You can afford")
        return true
    }
    else
    console.log("You can't afford")
        return false
}
console.log("Exercise 3:")
changeEnough(14.11, [2,100,0,0])
changeEnough(0.75, [0,0,20,5]) 



// # Exercise 4 : Vacations Costs

// # Instructions

// # Let’s create functions that calculate your vacation’s costs:

// # Define a function called hotelCost().
// # It should ask the user for the number of nights they would like to stay in the hotel.
// # If the user doesn’t answer or if the answer is not a number, ask again.
// # The hotel costs $140 per night. The function should return the total price of the hotel.
function hotelCost(){
    let totalCost = 0
    while(true){
        let nights = Number(prompt("How many nights would you like to stay at the hotel?"))
        if (nights !== null && ! isNaN(nights) && nights > 0) {
            totalCost = 140 * nights
            break
        } 
        else {
            console.log("Please enter a valid number of nights.");
        }
    }
    return totalCost
}

// # Define a function called planeRideCost().
// # It should ask the user for their destination.
// # If the user doesn’t answer or if the answer is not a string, ask again.
// # The function should return a different price depending on the location.
// # “London”: 183$
// # “Paris” : 220$
// # All other destination : 300$
function planeRideCost(){
    let price
    while (true) {
        let destination = prompt("Enter your destination")
        if (destination) {
            destination = destination.trim().toLowerCase();
            if (destination == 'london'){
                price = 183
                break
            } 
            else if (destination == 'paris') {
                price = 220
                break
            }
            else {
                price = 300
            }
        } else {
            destination = console.log("Please enter a valid destination"); // Ask again if input is empty
        }
    }
    return price

}

// # Define a function called rentalCarCost().
// # It should ask the user for the number of days they would like to rent the car.
// # If the user doesn’t answer or if the answer is not a number, ask again.
// # Calculate the cost to rent the car. The car costs $40 everyday.
// # If the user rents a car for more than 10 days, they get a 5% discount.
// # The function should return the total price of the car rental.
// Function to calculate the rental car cost
function rentalCarCost() {
    let cost = 0;
    while (true) {
        let days = Number(prompt("How many days do you want to rent the car for?"));
        if (!isNaN(days) && days > 0) {
            cost = days * 40; // $40 per day
            if (days > 10) {
                cost *= 0.95; // Apply 5% discount for more than 10 days
            }
            break;
        } else {
            console.log("Please enter a valid number of days.");
        }
    }
    return cost;
}
// # Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// # Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// # Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
function totalVacationCost() {
    let hotel = hotelCost()
    let plane = planeRideCost()
    let car = rentalCarCost()
    console.log(`The car costs: ${car}, the hotel costs: ${hotel}, the plane tickets cost: ${plane}`)
}
// # Call the function totalVacationCost()
console.log("Exercise 4:")
totalVacationCost()

// # Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

