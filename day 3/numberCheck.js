const num1 = 10;
if (num1 === 0) console.log("zero ");
else if (num1 > 0) console.log("positive number");
else console.log("negative number");

const a = 10,
  b = 20,
  c = 40;

if (a > b) {
  if (a > c) console.log("a is greatest: ", a);
  else console.log("c is greatest: ", c);
} else {
  if (b > c) console.log("b is greatest: ", b);
  else console.log("c is greatest: ", c);
}

// Alternate soln
if (a > b && a > c) {
  console.log("a is greatest: ", a);
} else if (b > c) {
  console.log("b is greatest: ", b);
} else {
  console.log("c is greatest: ", c);
}
