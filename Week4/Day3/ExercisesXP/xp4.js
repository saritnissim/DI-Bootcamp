
// # Exercise 7 : My Book List

// # Instructions

// # Take a look at this link for help.

// # The point of this challenge is to display a list of two books on your browser.

// # In the body of the HTML page, create an empty section:
// # <section class="listBooks"></section>

// # In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// # title,
// # author,
// # image : a url,
// # alreadyRead : which is a boolean (true or false).

// # Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
const allBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://cdn2.penguin.com.au/covers/original/9781784870799.jpg", // Replace with a valid image URL
        alreadyRead: true
    },
    {
        title: "1984",
        author: "George Orwell",
        image: "https://ph-test-11.slatic.net/p/24c4aab1b0651de231e0f40c3c97fb3a.jpg", // Replace with a valid image URL
        alreadyRead: false
    }
];
// # Requirements : All the instructions below need to be coded in the js file:
// # Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
const bookDiv = document.createElement('div');

for (let book of allBooks ){
      // Create a paragraph for the book's title and author
    const bookDetails = document.createElement('p');
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) {
        bookDetails.style.color = "red"; // Set text color to red if already read
    }
    const image = document.createElement('img');
    image.src = book.image;
    image.alt = `${book.title} cover`;
    image.style.width = "100px"; // Set the width of the image
    image.style.height = "auto";

    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(image);
   
}
document.getElementsByClassName('listBooks')[0].appendChild(bookDiv)
// # For each book :
// # You have to display the book’s title and the book’s author.
// # Example: HarryPotter written by JKRolling.
// # The width of the image has to be set to 100px.
// # If the book is already read. Set the color of the book’s details to red.
