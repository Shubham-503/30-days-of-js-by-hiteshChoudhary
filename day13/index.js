// import add from "./basicmodule";
// const { add, person } = require("./basicmodule");
// let { addNamed, subNamed } = require("./namedDefaultExports.js");
import { add as addNamed, sub as subNamed } from "./namedDefaultExports.js";
import multiply from "./namedDefaultExports.js";

// console.log(person.details());

// console.log(add(2, 4));
console.log(addNamed(1, 3), subNamed(26, 3), multiply(2, 3));
