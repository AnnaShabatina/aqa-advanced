
const Book = require('./Book.js');
class EBook extends Book {
  constructor(name, author, yearOfPublication,formatFile) {
    super(name, author, yearOfPublication);
    this._formatFile = formatFile;
  }

  get formatFile() {
    return this._formatFile;
  }

  set formatFile(value) {
    if (typeof value === 'string' && value.trim() !== '') {
      this._formatFile = value;
    } else {
      throw new Error('Invalid format file');
    }
  }
 printInfo() {
    return super.printInfo()+","+this.formatFile;
  }
  static createEBook(book, formatFile) {
    return new EBook(book.name, book.author, book.yearOfPublication, formatFile);
  }
};

module.exports = EBook;