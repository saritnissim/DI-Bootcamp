import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Book from "../types/Book";
import List from "./List";

const BookApp = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
    {
      id: "2",
      title: "The Da Vinci Code",
      author: "Dan Brown",
    },
  ]);
  // Function to add a new book
  const addBook = (title: string, author: string) => {
    const newBook: Book = {
      id: uuidv4(), // Generate a unique id for the new book
      title,
      author,
    };
    setBooks((prevBooks) => [...prevBooks, newBook]); // Add the new book to the list
  };

  return (
    <div>
      <h2>Book List</h2>
      <List<Book>
        items={books}
        renderItem={(book: Book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        )}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = (e.target as any).elements.title.value;
          const author = (e.target as any).elements.author.value;
          addBook(title, author); // Add the new book
          (e.target as HTMLFormElement).reset(); // Clear the form fields
        }}
      >
        <input type="text" name="title" placeholder="Book Title" required />
        <input type="text" name="author" placeholder="Book Author" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default BookApp;
