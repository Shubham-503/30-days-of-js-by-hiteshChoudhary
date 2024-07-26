class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }

  get getFullName() {
    return `Fullname: ${this.firstName} ${this.lastName}`;
  }

  set setFirstName(fname) {
    this.firstName = fname;
  }
  set setLastName(lname) {
    this.lastName = lname;
  }
}

const shubham = new Person("Kumar", "shubham");
console.log(shubham.getFullName);
console.log((shubham.setFirstName = "Rakesh"));
console.log((shubham.setLastName = "sharma"));
console.log(shubham.getFullName);
