// Higher order Functions are functions that operate on other functions, either by taking them as arguments or by returning them, or both.

function doTwice(func) {
  func();
  func();
}
doTwice(function () {
  console.log("Hello World");
});
console.log("\n");

// Returning a function from a function

function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // 10
