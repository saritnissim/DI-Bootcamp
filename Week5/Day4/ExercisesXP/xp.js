// 🌟 Exercise 1 : HTML Form
// Instructions
console.log("\nExercise 1:")
// Hint : Read about sending form data using the HTTP protocol

// form

// Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

// When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
// Where will the sent data appear?
const xp1 = 'A: The data is appended to the URL as query parameters'
console.log(xp1)

// 🌟 Exercise 2 : HTML Form #2
// Instructions
console.log("\nExercise 2:")
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab

const xp2 = `A: Unlike the GET method, the data does not appear in the URL. 
 Instead, it is sent as part of the HTTP request body. (View in 'Network' tab of browser's developer tools)`
console.log(xp2)

// 🌟 Exercise 3 : JSON Mario
// Instructions
console.log("\nExercise 3:")
// Using this code:

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
// Convert this JS object into a JSON object. What happens to the nested objects ?
console.log(JSON.stringify(marioGame)) // They are not nested/indented
// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
console.log(JSON.stringify(marioGame, null, 2))
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.