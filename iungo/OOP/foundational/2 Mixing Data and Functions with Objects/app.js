const print = (x) => {
  return console.log(x);
};
const space = () => {
  return console.log("\n");
};

// 1. imagine you have a function that calculates a triangle
function getTriangleArea(a, b) {
  return (a * b) / 2;
}

// and another function that calculates the Hypotenuse
function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

// test the functions work

print(getTriangleArea(3, 4));
print(getTriangleHypotenuse(3, 4));
space();

// 2. now if I wanted to calculate 10000 values of different triangles I would have to call the functions 10000 times.
// this is where objects come in handy and OOP starts to make sense.

let myTri = {
  a: 3,
  b: 4,
  getArea: function () {
    return (this.a * this.b) / 2;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};
// the keyword .this refers to this particular object so this.a = 3 this.b = 4 ect.
// so within these methods (a function within an object is called a method) we can access the values of the keys and even change them to run other calculations
print(myTri.getArea());
print(myTri.getHypotenuse());
space();
myTri.a = 7;
myTri.b = 6;
// now if I print getArea() it will return 21 instead of 6
print(myTri.getArea());
space();
// it my work better making your functions into objects but its not really repeatable which is why your now going to look at the next lesson on classes so we can combine functionality with data.
