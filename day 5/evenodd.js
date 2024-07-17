function evenOdd(n) {
  n % 2 ? console.log("odd") : console.log("even");
}

evenOdd(17);

function square(n) {
  return n * n;
}
const temp = square(3);
console.log(temp);

function max(a, b) {
  return a > b ? a : b;
}
console.log(max(3, 5));

function concatStr(a, b) {
  return a + b;
}
console.log(concatStr("hello ", "shubham"));

const sum = (a, b) => a + b;
console.log(sum(3, 5));

const strHas = (str, char) => {
  return str.includes(char);
};
console.log(strHas("shubham", "x"));

function product(a, b = 1) {
  return a * b;
}
console.log(product(3, 5), product(5));

function greet(name, age = 1) {
  return `Hello ${name} of age ${age}`;
}
console.log(greet("shubham", 26), greet("addie"));

function HOC(callback, n) {
  for (let i = 0; i < n; i++) {
    callback();
  }
}
function callback() {
  console.log("callback called");
}
HOC(callback, 3);

function HOC2(cb1, cb2, n) {
  let res = cb1(n);
  return cb2(res);
}

function cb1(n) {
  console.log("cb1 called: ", n);
  return n * n;
}
function cb2(n) {
  console.log("cb2 called", n);
  return n + 3;
}
console.log(HOC2(cb1, cb2, 3));
