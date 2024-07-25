function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

// exports.addNamed = add;
// exports.subNamed = sub;
export {add, sub}

export default mult;
