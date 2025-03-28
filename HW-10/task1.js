const Book = require('./Book.js');
const EBook = require('./EBook.js');

const Book1 = new Book("Peter Pan","J.M.Barrie", 1998);
const Book2 = new Book("Harry Potter","J.M. Rowling", 1990);

console.log(Book1.printInfo());
console.log(Book2.printInfo())

const eBook1 = new EBook("Peter Pan","J.M.Barrie", 2000,"epub");
const eBook2 = new EBook("Harry Potter","J.M. Rowling", 2000,"txt");

console.log(eBook1.printInfo());
console.log(eBook2.printInfo())

try {
  Book1.name = "New Peter Pan"; 
  console.log(Book1.printInfo());
  
  eBook1.formatFile = "mobi"; 
  console.log(eBook1.printInfo());
} catch (error) {
  console.error(error.message);
}

const books = [Book1, Book2, eBook1, eBook2];
const oldestBook = Book.getOldestBook(books);
console.log(`The oldest book is: ${oldestBook.printInfo()}`);


const newEBook = EBook.createEBook(Book1, "mobi");
console.log(newEBook.printInfo());