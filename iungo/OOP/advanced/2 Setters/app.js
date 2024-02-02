const print = function (x) {
  return console.log(x);
};
const space = function () {
  return print("\n");
};
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // Setter for the diameter
  set radius(value) {
    if (value <= 0) {
      throw new Error("Negative radius is not allowed.");
    } else {
      this._radius = value; // the _radius is a private property meaning that it is not accessible outside of the class
    }
  }
  // Getter for the radius
  get radius() {
    return this._radius;
  }
  // another getter exercise
  get color() {
    return this._color;
  }
  // another setter exercise
  set color(newColor) {
    const allowedColors = ["red", "blue", "green"];
    if (!allowedColors.includes(newColor)) {
      throw new Error("Invalid color.");
    } else {
      this._color = newColor;
    }
  }
}
//  the setter here ensures that the radius is never negative
// Setters can be very useful for validating data before it is set as a property.

const circle = new Circle(5);
circle.color = "red";
print(circle.radius); // 10
print(circle.color); // red
// space();
// circle.radius = -10;
// print(circle.radius);
// circle.color = "black";
// print(circle.color);
space();
print(Circle.radius); // this is a private property and will return undefined however it has been updated to reflect this change
space();
