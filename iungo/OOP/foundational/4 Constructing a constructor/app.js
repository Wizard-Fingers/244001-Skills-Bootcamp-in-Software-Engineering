const print = (x) => {
  return console.log(x);
};
const space = () => {
  return console.log("\n");
};
// 1 adding a constructor method will enable us to write reuseable code.
class Triangle {
  constructor(a, b) {
    // validations
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must be numbers");
    }
    if (a <= 0 || b <= 0) {
      throw new Error("Both arguments must be greater than 0");
    }

    this.a = a;
    this.b = b;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}
// now when I create a new instance of the class I can pass in the values of a and b.
const FirstTri = new Triangle(5, 12);
print(FirstTri);
print(FirstTri.getArea());
// this is much nicer than the object we created in the last exercise and is much faster to create new instances of the class.
space();
// 2. this class and constructor isn't ready to be used yet, because there is no validation. (which is now added)

const SecondTri = new Triangle(1, 2);
print(SecondTri);
// so if I add something thats not a number like a boolean or a string.
// const ThirdTri = new Triangle(true, "Hi mum");
// print(ThirdTri); // this will throw an error.

// get into the habit of writing code with validation in mind.
