export class Person {
  static personCount = 0;
  constructor(name, age) {
    Person.personCount += 1;
    this.name = name;
    this.age = age;
  }

  static genericGreetings() {
    console.log("this is a static greeting ");
  }

  greetings() {
    return `Hello ${this.name} of age ${this.age}`;
  }

  setAge = function (age) {
    this.age = age;
    console.log("updated age is: ", this.age);
  };
}

const shubham = new Person("shubham", 26);
console.log(shubham.greetings());
shubham.setAge(20);
console.log(Person.personCount);
