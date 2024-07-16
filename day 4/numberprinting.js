for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("-----------------");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("-----------------");
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}
console.log("-----------------");
let m = 1;
do {
  console.log(m);
  m++;
} while (m <= 5);

console.log("-----------------");
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}
console.log("-----------------");
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}
