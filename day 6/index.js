const arr1 = [1, 2, 3, 4, 5];
console.log(arr1, arr1[0], arr1[arr1.length - 1]);

arr1.push(6);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift(1);
console.log(arr1);

const arr2 = arr1.map((item) => item * 2);
console.log(arr2);

const arr3 = arr1.filter((item) => !(item % 2));
console.log(arr3);

const sum = arr1.reduce((acc, cur) => cur + acc, 0);
console.log(sum);

for (let index = 0; index < arr1.length; index++) {
  const element = arr1[index];
  console.log(element);
}

arr1.forEach((item) => {
  console.log(item);
});

const arr4 = [
  ["a", "b", "c", "d"],
  [1, 2, 3, 4],
  ["q", "w", "e", "r", "t", "y"],
];
console.log(arr4);
console.log(arr4[0][1]);
