// Imperative Programming
let sum = 0;
for (let i = 0; i <= 5; i++) {
  sum += i;
}
console.log(sum);
// Functional programming
const x = [1, 2, 3, 4, 5].reduce((acc, val) => acc + val, 0);
console.log(x);
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Imperative Programming to get evens and odds
const evens = [];
const odds = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 == 0) {
    evens.push(nums[i]);
  } else {
    odds.push(nums[i]);
  }
}
console.log(evens);
console.log(odds);
// Functional programming to get odds and evens
const odds1 = nums.filter((n) => n % 2 == 1);
const evens1 = nums.filter((n) => n % 2 == 0);
console.log(odds1);
console.log(evens1);
// Imperative Programming to get the maximum number of arrays in a given array
let numbers = [1, 2, 3, 4, 5];
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);
// Functional programming approach
console.log(Math.max(...numbers));
