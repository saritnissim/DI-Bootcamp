// 🌟 Exercise 3 : Transform The Sentence

// Instructions

// In the JS file:

// Declare a global variable named allBoldItems.
let allBoldItems

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems(){
    allBoldItems = document.getElementsByTagName('strong')
}
// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    for (let item of allBoldItems){
        item.style.color = 'blue'
    }
}
// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault(){
    for (let item of allBoldItems){
        item.style.color = 'black'
    }
}
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
getBoldItems()
const paragraph = document.querySelector('p'); // Assuming the paragraph is the first <p> element
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);