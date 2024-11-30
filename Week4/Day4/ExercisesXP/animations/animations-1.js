// 🌟 Exercise 1: Timer

// Part I

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part II

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
setTimeout(function() {
    const container = document.getElementById('container')
    const helloWorld = document.createElement('p')
    helloWorld.textContent = 'Hello World'
    container.appendChild(helloWorld)
}, 2000);

// Part III

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
// Add an event listener to the button to stop the interval
let paragraphCount = 0;

const stopButton = document.getElementById("stopButton");

const intervalFunc = setInterval(function(){
    const container = document.getElementById('container')
    
    const paragraph = document.createElement('p')
    paragraph.textContent = 'Hello World'
    
    container.appendChild(paragraph)
    paragraphCount++

    if (paragraphCount >= 5){
        clearInterval(intervalFunc)
    }
}, 2000)


stopButton.addEventListener("click", function() {
    clearInterval(intervalFunc);  
    console.log("Interval stopped.");
});
