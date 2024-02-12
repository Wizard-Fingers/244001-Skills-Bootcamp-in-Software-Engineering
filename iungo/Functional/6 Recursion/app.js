// Recursion is a functional programming concept. It is a process of a function calling itself. In functional programming, we can use recursion to perform repetitive tasks. This is a common practice in functional programming. Here is an example of a recursive function that calculates the factorial of a number:

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
console.log("\n");

// how dose this function work?
// this function works in the following way:
// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1
// 120
