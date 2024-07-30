function outer() {
  let a = 1;
  return function inner() {
    console.log("value of a from inner function: ", a);
  };
}

outer()();

function counter() {
  let count = 0;
  return function increment() {
    count++;
    console.log("count value: ", count);
  };
}

const counter1 = counter();
counter1();
counter1();
counter1();
const counter2 = counter();
counter2();
counter2();
counter2();

const greet = (name) => {
  return () => {
    console.log("hello: ", name);
  };
};

const wish = greet("shubham");
wish();

const array = [];
for (let i = 0; i < 5; i++) {
  array.push(function temp() {
    return () => {
      console.log("index is: ", i);
    };
  });
}

array.forEach((item) => item()());

function createItemManager() {
  const items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    },
    listItems: function () {
      return items.slice(); // Return a copy of the items array
    },
  };
}

const itemManager = createItemManager();

itemManager.addItem("apple");
itemManager.addItem("banana");
console.log(itemManager.listItems()); // Output: ['apple', 'banana']

itemManager.removeItem("apple");
console.log(itemManager.listItems());
