import { Person } from "./basicClass.js";

class Student extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.studentId = id;
  }
  getStudentId = function () {
    return this.studentId;
  };
  greetings = function () {
    return `Hello ${this.name} of age ${this.age} of id ${this.studentId}`;
  };
}

const rakesh = new Student("rakesh", 22, "ra12");
const rak0esh = new Student("rakesh", 22, "ra12");
console.log(rakesh.getStudentId());
console.log(rakesh.greetings());
console.log(Person.personCount);
