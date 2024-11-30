// Variables to hold the selected color and the drawing state
let selectedColor = null 
let isDrawing = false// To keep track for dragging purposes

// Select color when a color square is clicked
const colorElements = document.querySelectorAll('.color-box');
colorElements.forEach(colorElement => {
    colorElement.addEventListener('click', (event) => {
        selectedColor = event.target.style.backgroundColor;
        console.log(`Selected color: ${selectedColor}`);
    });
});

// Create the grid dynamically
const drawingBoard = document.getElementById('drawingBoard');

const gridSize = 100; // Define the grid size (100 squares)
for (let i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    drawingBoard.appendChild(square);

    // Add event listeners for mouse events
    square.addEventListener('mousedown', () => {
        if (selectedColor) {
            square.style.backgroundColor = selectedColor;
            isDrawing = true;

        }
    });

    square.addEventListener('mouseenter', () => {
        if (isDrawing && selectedColor) {
            square.style.backgroundColor = selectedColor;
        }
    });

}
// Stop drawing when mouse button is released
document.addEventListener('mouseup', () => {
    isDrawing = false;
});

const clearButton = document.querySelector('button');
clearButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});