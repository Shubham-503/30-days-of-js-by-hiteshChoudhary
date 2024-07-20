const name = "shubham",
  age = 26;
console.log(`the person name is ${name}  and age is ${age}`);

console.log(`This is a multiline string
  It will be rpinted
  just like this
  in multiline
  `);
const arr1 = [10, 20, 30, 40];
const [a, b] = arr1;
console.log(a, b);

const book = {
  title: "The Silent Patient",
  author: "Alex Michaelides",
  year: "2024",
  displayBook: function () {
    console.log(this.title + " by " + this.author + " on " + this.year);
  },
  details: function () {
    return this.title + " by " + this.author;
  },
  setYear: function (y) {
    this.year = y;
    this.displayBook();
  },
};

const { title, author } = book;
console.log("Title: ", title, ", Author: ", author);

const arr2 = [...arr1, 50, 60];
console.log(arr2);

function sum(...elements) {
  console.log(elements);
  total = elements.reduce((a, c) => a + c, 0);
  console.log(total);
}

sum(10, 20, 30, 40);

function prod(a, b = 1) {
  return a * b;
}
console.log(prod(10, 2), prod(10));

const library = {
  name: "Library Hyderabad",
  books: [
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      year: "2024",
    },
    {
      title: "Catalyst",
      author: "Chandramouli Venkatesan",
      year: "2024",
    },
  ],
  displayLibrary() {
    console.log(`Library Name: ${this.name}`);
    console.log("Books:");
    this.books.forEach((book, index) => {
      console.log(
        `${index + 1}. ${book.title} by ${book.author}, published in ${
          book.year
        }`
      );
    });
  },
  addBook(title, author, year) {
    this.books.push({ title, author, year });
  },
  getBookTitles() {
    return this.books.map((book) => book.title);
  },
};

console.log(library);

library.displayLibrary();

library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
library.displayLibrary();

const key1 = "key1";
const key2 = "key2";
const key3 = "key3";

const obj1 = {
  [key1]: "value1",
  [key2]: "value2",
  [key3]: "value3",
};
console.log(obj1);
