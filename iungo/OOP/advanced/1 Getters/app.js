const print = function (x) {
  return console.log(x);
};
const space = function () {
  return print("\n");
};
// Getters are methods that get and return the internal properties of an object.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // Getter for the diameter
  get diameter() {
    return this.radius * 2;
  }
}

const circle = new Circle(5);
print(circle.diameter); // 10
// notice that we aren't using .this because we are calling a method, not a property
space();
