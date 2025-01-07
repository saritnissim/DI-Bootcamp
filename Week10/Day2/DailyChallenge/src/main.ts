interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  private books: Book[] = []

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): string {
    const book = this.books.find(book => book.isbn === isbn);
    if (book) {
      return `Book Details:
      Title: ${book.title}
      Author: ${book.author}
      ISBN: ${book.isbn}`;
    } else {
      return `Book with ISBN ${isbn} not found in the library.`;
    }
  }

  public getBooks(): string {
    return this.books.map(book => book.title).join(', ');
  }

}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string {
    console.log(this.getBooks())
  }
}

const digitalLibrary = new DigitalLibrary('www.digital-library.com');
digitalLibrary.addBook({
  //The Hobbit
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  isbn: '9780261102217',
  publishedYear: 1937
});
  //The great gatsby
digitalLibrary.addBook({
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  isbn: '9780743273565',
  publishedYear: 1925,
  genre: 'Novel'
});

digitalLibrary.listBooks(); // Output: "The Hobbit, The Great Gatsby"