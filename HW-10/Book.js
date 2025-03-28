
class Book {
  constructor(name, author, yearOfPublication) {
    this._name = name;
    this._author= author;
    this._yearOfPublication= yearOfPublication;
  }
get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new Error('Invalid name');
    }
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value === 'string') {
      this._author = value;
    } else {
      throw new Error('Invalid author');
    }
  }

  get yearOfPublication() {
    return this._yearOfPublication;
  }
   set yearOfPublication(value) {
    if (typeof value === 'number' && value > 0) {
      this._yearOfPublication = value;
    } else {
      throw new Error('Invalid year of publication');
    }
  }

  printInfo() {
    return this.name + "," +this.author + "," + this.yearOfPublication;
  }
  static getOldestBook(books) {
    return books.reduce((oldest, book) => {
      return (book.yearOfPublication < oldest.yearOfPublication) ? book : oldest;
    });
  }
}


module.exports = Book;
