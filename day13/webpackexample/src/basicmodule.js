export function add(a, b) {
  return a + b;
}
export const person = {
  name: "Kumar Shubham",
  age: 26,
  details: function () {
    return `name: ${this.name} and age: ${this.age}`;
  },
};
export const PI = 3.14;
// module.exports = { add, person, PI };
