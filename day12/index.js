// Activity 1 ans 2
function func1() {
  throw new Error("Error happen in func1");
}
function divide(a, b) {
  if (b == 0) throw new Error("Can not divide by zero");
  return a / b;
}

try {
  console.log("try log 0");
  func1();
  console.log("try log 1");
  divide(2, 0);
  console.log("try log 2");
} catch (error) {
  console.log("catch log 1");
  console.log(error.message);
} finally {
  console.log("finally log");
}

class customError extends Error {
  constructor(message) {
    super("message from custom Error: " + message);
  }
}

function func2() {
  throw new customError("Error from func2");
}

try {
  func2();
} catch (error) {
  console.log(error);
}

// Activity 3
class ValidateInputError extends Error {
  constructor(message) {
    super(message);
    this.name = "123ValidationError";
  }
}

function validateInput(input) {
  if (!input || input.trim() == "")
    throw new ValidateInputError("Input can not be empty");
  return true;
}

try {
  validateInput("");
} catch (error) {
  if (error instanceof ValidateInputError) {
    console.log("validation error: " + error.message);
  } else {
    console.log("An unexpected error occurder: " + error.message);
  }
}

// Activity 4
const promise1 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("promise resolved");
  else reject("promise rejected");
});
promise1.then((val) => console.log(val)).catch((err) => console.log(err));

async function handlePromise() {
  try {
    const result = await new Promise((resolve, reject) => {
      if (Math.random() > 0.5) resolve("promise resolved");
      else reject("promise rejected");
    });
  } catch (error) {
    console.log("error from handlepromise: ", error);
  }
}

handlePromise();

// Activity 5
fetch("AnyUrl")
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

async function fetchUrl() {
  try {
    const res = await fetch("AnyUrl");
    res = await res.json();
  } catch (error) {
    console.log("error from fetchUrl async/await", error.message);
  }
}

fetchUrl();
