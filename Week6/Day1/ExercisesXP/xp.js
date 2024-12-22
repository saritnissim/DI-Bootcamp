// 🌟 Exercise 1 : Comparison
// Instructions
console.log("\nExercise 1:")
// Create a function called compareToTen(num) that takes a number as an argument.
function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve(`${num} is less than or equal to 10`);
      } else {
        reject(`${num} is greater than 10`);
      }
    });
  }
//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

  //In the example, the promise should resolve
compareToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error))


// 🌟 Exercise 2 : Promises
// Instructions
console.log("\nExercise 2:")

// Create a promise that resolves itself in 4 seconds and returns a “success” string.
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('success');
    }, 4000); // 4 seconds
  });
  myPromise
  .then((result) => console.log(result))  // This will log 'success' after 4 seconds
  .catch((error) => console.log(error));

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
console.log("\n Exercise 3")
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3
const resolvedPromise = Promise.resolve(3)
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const rejectedPromise = Promise.reject('Boo')

resolvedPromise
  .then((result) => console.log('Resolved:', result)) 
  .catch((error) => console.log('Rejected:', error));  

rejectedPromise
  .then((result) => console.log('Resolved:', result)) 
  .catch((error) => console.log('Rejected:', error));  