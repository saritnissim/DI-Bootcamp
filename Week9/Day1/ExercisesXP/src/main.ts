// To run: tsc && node build/main.js
console.log("Exercise 1:")
console.log("Hello World")

console.log("Exercise 2:")
let age: number= 34
let my_name: string= "Sarit"
console.log(`My name is ${my_name} and I am ${age} years old.`)

console.log("Exercise 3:")
let id: string | number;
id = 'ABC'
console.log(`id is ${id}`)
id = 123
console.log(`id is ${id}`)


console.log("Exercise 4:")
function isPositive(num: number): string {
    if (num > 0) {
        return "positive"
    }   else if (num < 0) {
        return "negative" 
    } else {
        return "zero"
    }
}
console.log(isPositive(3))
 
console.log("Exercise 5:")
function getDetails(name: string, age: number): [string, number, string] {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
}
const details = getDetails("Alice", 25);
console.log(details)

console.log("Exercise 6:")
type Person = {
    name: string;
    age: number;
  };

function createPerson(name: string, age: number): Person {
    return {name, age};
  }
console.log(createPerson("Alice", 25));

console.log("Exercise 7:")
const inputElement = document.getElementById("myInput") as HTMLInputElement
if (inputElement ) {
    inputElement.value = "Hello, TypeScript!";

    }


console.log("Exercise 8:")
function getAction(userRole: string): string {
    switch (userRole) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";          
        default:
            return "Invalid role";
    }
}
// Test the function with different roles
console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role

console.log("Exercise 9:")
function greet(name?: string): string {
    if (name) {
      return `Hello, ${name}!`;
    } else {
      return "Hello, Guest!";
    }
  }