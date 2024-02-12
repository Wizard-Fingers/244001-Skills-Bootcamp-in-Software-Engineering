// impure function:
let value = 2;
function square(num) {
  value = num * num;
  return value;
}
console.log(square(4)); // 16
console.log(value); // 16 therefore square has changed the value of value and made it impure
console.log("\n");
// pure function:

function pureSquare(num) {
  return num * num;
}
console.log(pureSquare(4)); // 16
console.log("\n");
// another example with an array

const colors = ["red", "green", "blue"];

function addToArray(arr, value) {
  return arr.push(value);
}

console.log(addToArray(colors, "purple"));
console.log(colors); // ["red", "green", "blue", "purple"] therefore addToArray has changed the value of colors and made it impure
console.log("\n");

// pure function:

function pureAddToArray(arr, value) {
  return [...arr, value];
}

console.log(pureAddToArray(colors, "orange"));
console.log(colors); // ["red", "green", "blue"] therefore pureAddToArray has not changed the value of colors and made it pure
console.log("\n");
