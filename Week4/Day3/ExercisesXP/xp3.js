// # Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const div = document.getElementById('navBar');
div.setAttribute("id", 'socialNetworkNavigation')
// # We are going to add a new <li> to the <ul>.
let ul = document.querySelector('ul')

// # First, create a new <li> tag (use the createElement method).
const newListItem = document.createElement('li')
// # Create a new text node with “Logout” as its specified text.
const textNode = document.createTextNode('Logout')
// # Append the text node to the newly created list node (<li>).
newListItem.appendChild(textNode);

// # Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
ul.appendChild(newListItem)

// # Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>).
// Display the text of each link. (Hint: use the textContent property).
console.log(ul.firstElementChild.textContent)
console.log(ul.lastElementChild.textContent)