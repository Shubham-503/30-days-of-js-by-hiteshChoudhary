function memoize(fn) {
  const cache = {};

  return function (temp) {
    if (cache[temp] !== undefined) {
      return cache[temp];
    }

    const result = fn(temp);
    cache[temp] = result;
    return result;
  };
}

function square(n) {
  return n * n;
}

const memoizedSquare = memoize(square);
console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
console.log(memoizedSquare(10));

function memoizedFactorial() {
  const cache = {};
  return function (arg) {
    if (cache[arg !== undefined]) return cache[arg];

    let fact = 1,
      i = 1;

    while (arg >= i) {
      fact *= i;
      i++;
    }
    cache[arg] = fact;
    return fact;
  };
}

const factorial = memoizedFactorial();
console.log(factorial(5));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(10));
