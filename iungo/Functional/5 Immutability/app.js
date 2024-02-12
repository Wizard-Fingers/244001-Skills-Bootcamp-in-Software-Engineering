// Immutability is a core principle in functional programming. With the spread operator, we can create a new array or object without modifying the original one. In this example, we have an array of numbers and we want to add a new number to it. We can use the spread operator to create a new array with the new number added to it.

// JS is always going be mutable even with const
const nums = [1, 2, 3, 4, 5];
nums.push(6);
console.log(nums); // [1, 2, 3, 4, 5, 6]
nums.pop(6);
console.log(nums); // [1, 2, 3, 4, 5]
console.log("\n");
// there are ways of freezing the state of objects in JS

const person = { name: "Art", age: 36 };
Object.freeze(person);
person.age = 37;
person.name = "Arthur";
console.log(person); // { name: 'Art', age: 36 } therefore the object is frozen and cannot be changed

// but working in functional programming we can do this:

const numbers = [1, 2, 3, 4, 5];

function push(arr, val) {
  return [...arr, val];
}

console.log(push(numbers, 6)); // [1, 2, 3, 4, 5, 6]
console.log(numbers); // [1, 2, 3, 4, 5] therefore the original array has not been changed
console.log("\n");
