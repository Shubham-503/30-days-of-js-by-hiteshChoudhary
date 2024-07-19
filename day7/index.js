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
let year = 2;
console.log(book, book.title, book.author);
console.log(book.details());
book.setYear(2021);

console.log(year);
function displayBook() {
  console.log("displayBook from window");
}

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
};

console.log(
  library.name,
  library.books.reduce((a, c) => a + c.title + " ", "")
);

for (const key in book) {
  const element = book[key];
  console.log(key + ":" + element);
}

console.log(Object.keys(book), Object.values(book));
