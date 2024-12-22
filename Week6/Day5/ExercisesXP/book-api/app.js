// Import the Express module
import express from 'express';

// Create an instance of an Express app
const app = express();
app.use(express.json());

const PORT = 3000

// Array of book objects
const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publishedYear: 1813
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    }
];

// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
app.get('/api/books', (req, res) => {
    res.json(books);
});
// Implement the “Read” route by defining a route at GET /api/books/:bookId.
// Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. 
//If the book is found, send a JSON response with the book details and a status code of 200 (OK). 
//If the book is not found, send a 404 status with a “Book not found” message.
app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    return res.status(200).json(book);
})
// Implement the “Create” route at POST /api/books. 
// Use the express.json() middleware to parse JSON body content. 
// Inside the route handler, create a new book object with an incremented ID and the data from the request body. 
// Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).
app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});