// 🌟 Exercise 2 : Move The Box

// Instructions
function myMove() {
    const animateDiv = document.getElementById("animate");
    let position = 0; // Start position of the box
    const container = document.getElementById("container");
    const containerWidth = container.clientWidth;
    
    // Set an interval to move the box
    const interval = setInterval(function() {
        // Move the box by 1px to the right
        position += 1;
        animateDiv.style.left = position + "px";
    
        // Stop the interval when the box reaches the container's right side
        if (position >= containerWidth - animateDiv.offsetWidth) {
            clearInterval(interval);
            console.log("Animation stopped.");
        }
    }, 1);
}





// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

// Exercise2