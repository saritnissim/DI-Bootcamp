"use strict";
// To run: tsc && node build/main.js
console.log("Exercise 1:");
console.log("Hello World");
console.log("Exercise 2:");
let age = 34;
let my_name = "Sarit";
console.log(`My name is ${my_name} and I am ${age} years old.`);
console.log("Exercise 3:");
let id;
id = 'ABC';
console.log(`id is ${id}`);
id = 123;
console.log(`id is ${id}`);
console.log("Exercise 4:");
function isPositive(num) {
    if (num > 0) {
        return "positive";
    }
    else if (num < 0) {
        return "negative";
    }
    else {
        return "zero";
    }
}
console.log(isPositive(3));
console.log("Exercise 5:");
function getDetails(name, age) {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
}
const details = getDetails("Alice", 25);
console.log(details);
console.log("Exercise 6:");
function createPerson(name, age) {
    return { name, age };
}
console.log(createPerson("Alice", 25));
console.log("Exercise 7:");
const inputElement = document.getElementById("myInput");
if (inputElement) {
    inputElement.value = "Hello, TypeScript!";
}
console.log("Exercise 8:");
function getAction(userRole) {
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
console.log("Exercise 9:");
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    else {
        return "Hello, Guest!";
    }
}
