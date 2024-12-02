let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit)
    });
}

displayGroceries()

// Create another arrow function named cloneGroceries.
const cloneGroceries = () => {
    // In the function, create a variable named user that is a copy of the client variable. 
    //(Tip : make the user variable equal to the client variable)
    const user = client
    // Change the client variable to “Betty”. 
    client = 'Betty'
    //Will we also see this modification in the user variable ? Why ? 
        //No - strings are primitive types and are passed by value,
    console.log(user)
    let shopping = groceries
    // Change the value of the totalPrice key to 35$. 
    //Will we also see this modification in the shopping object ? Why ?
        //Yes, objects are passed by reference, so shopping and groceries point to the same memory location.
    groceries.totalPrice = '$35'
    console.log(shopping)


    // Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
            //Yes, objects are passed by reference, so shopping and groceries point to the same memory location.
    groceries.other.paid = false
    console.log(shopping)

}
cloneGroceries()