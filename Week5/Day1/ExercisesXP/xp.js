// 🌟 Exercise 1 : Scope
// console.log("\nExercise 1:")

// Instructions

// // Analyse the code below, and predict what will be the value of a in all the following functions.
// // Write your prediction as comments in a js file. Explain your predictions.
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     console.log(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne() // a=3
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ? //Error

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     console.log(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() //a=0
// funcTwo() //a=5
// funcThree()//a=5
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ? // Error


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     console.log(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour() 
// funcFive() //a = "hello" (a was defined as a global variable via the window object in funcFour)

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     console.log(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix() // a = "test"
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ? // The same thing

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     console.log(`in the if block ${a}`);
// }
// console.log(`outside of the if block ${a}`);

// // #5.1 - run the code in the console //a = 5, a = 2
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ? //Error


// // 🌟 Exercise 2 : Ternary Operator
// console.log("\nExercise 2:")
// // Instructions

// // Using the code below:

// // function winBattle(){
// //     return true;
// // }
// // Transform the winBattle() function to an arrow function.
// const winBattle = () => true;

// // Create a variable called experiencePoints.
// // Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// const experiencePoints = winBattle() ? 10 : 1

// // Console.log the experiencePoints variable.
// console.log(experiencePoints)


// // 🌟 Exercise 3 : Is It A String ?
// console.log("\nExercise 3:")
// // Instructions

// // Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// const isString = (value) => {
//     typeof value === 'string'
// }
// // Check out the example below to see the expected output
// // Example:

// console.log(isString('hello')); 
// // //true
// console.log(isString([1, 2, 4, 0]));
// // //false


// // 🌟 Exercise 4 : Find The Sum
// // Instructions
// console.log("\nExercise 4:")

// // Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
// const sum = (x,y) => {
//     x + y
// }

// // 🌟 Exercise 5 : Kg And Grams
// // Instructions
// console.log("\nExercise 5:")

// // Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// // First, use function declaration and invoke it.
// function convertToGramsFunc(kg) {
//     return kg * 1000;
// }
// convertToGramsFunc(10)

// // Then, use function expression and invoke it.
// const convertToGramsExpr = function(kg) {
//     return kg * 1000;
// };
// convertToGramsExpr(10)

// // Write in a one line comment, the difference between function declaration and function expression.
// // --> Function Expression is not hoisted and can only be invoked after it is defined.

// // Finally, use a one line arrow function and invoke it.
// const convertToGramsArrow = (kg) => {
//     kg * 1000
// }
// convertToGramsArrow(10)

// // 🌟 Exercise 6 : Fortune Teller
// // Instructions
// console.log("\nExercise 6:")
// // Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// // The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
// // Self-invoking function
// (function(numChildren, partnerName, location, jobTitle) {
//     const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    
//     // Displaying the sentence in the DOM
//     document.body.innerHTML = sentence;
// })(3, "Emanuel", "Israel", "Software Engineer");

// // 🌟 Exercise 7 : Welcome
// // Instructions
// // console.log("\nExercise 7:")

// // John has just signed in to your website and you want to welcome him.

// // Create a Navbar in your HTML file.
// // In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// // The function should add a div in the nabvar, displaying the name of the user and his profile picture.
// (function (username) {
//     const navbar = document.getElementById('navbar')
//     const userDiv = document.createElement('div')
//     userDiv.textContent = username

//     const profilePic = document.createElement('img')
//     profilePic.src = "https://cdn-icons-png.flaticon.com/512/219/219970.png"  

//     navbar.appendChild(profilePic)
//     navbar.appendChild(userDiv)
// })('saritnissim')

// // 🌟 Exercise 8 : Juice Bar
// // Instructions
// console.log("\nExercise 8:")
// // You will use nested functions, to open a new juice bar.

// // Part I:

// // The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// // The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// // Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
// function makeJuice(size) {
//     let ingredients = []
    
//     function addIngredients(ingredient1, ingredient2, ingredient3){
//         ingredients.push([ingredient1, ingredient2, ingredient3])
//     }
    
//     function displayJuice() {
//         const message = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`
//         const juiceOrderParagraph = document.createElement('p')
//         juiceOrderParagraph.textContent = message
//         document.body.appendChild(juiceOrderParagraph)
//     }
        
//     addIngredients('apple', 'banana', 'strawberry')
//     addIngredients('orange', 'mango', 'pineapple')
//     displayJuice()
// }
// makeJuice('large'); //Part I - The client wants a large juice, containing apple, banana, and strawberry.
// makeJuice('small'); //Part II - The client wants a small juice, containing apple, banana, strawberry, orange, mango, pineapple.

// // Part II:

// // In the makeJuice function, create an empty array named ingredients.

// // The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// // Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// // The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.


// Submit Your Exercises :

// Don’t forget to push to Github