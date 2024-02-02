const print = function (x) {
  return console.log(x);
};
const space = function () {
  return print("\n");
};

class Circle {
  //   radius; // this is still a felid that can be manipulated outside of this function you can do an _ but that is not a true private field.
  #radius; // this is private field
  constructor(radius) {
    this.#radius = radius;
  }
  getRadius() {
    return this.#radius;
  }
}

const circle = new Circle(5);
// print(circle.#radius); // error - this is a private field not accessible outside of the class
// space();
print(circle.getRadius()); // 5 - I cannot directly look that radius because it is private.
