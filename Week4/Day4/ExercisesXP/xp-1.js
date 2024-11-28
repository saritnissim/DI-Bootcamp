// Use DOM property to retrieve h1 and console.log it
const h1 = document.getElementsByTagName('h1')[0]
console.log(h1)

// Remove last paragraph in the article tag
const lastParagraph = document.querySelector('article').lastElementChild
lastParagraph.remove()

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.querySelector('h2')
h2.addEventListener('click', ()=> {
    h2.style.backgroundColor = 'red'
})

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.querySelector('h3')
h3.addEventListener('click', () => {
    h3.style.display = 'none'
})

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button = document.createElement('button');
document.body.appendChild(button)
button.textContent = 'Make Paragraphs Bold'; // Set button text
button.addEventListener('click', () => {
    const paragraphs = document.getElementsByTagName('p')
        // Use forEach to apply the bold style to each paragraph
    for (let paragraph of paragraphs) {
        paragraph.style.fontWeight = 'bold';

    }
    });