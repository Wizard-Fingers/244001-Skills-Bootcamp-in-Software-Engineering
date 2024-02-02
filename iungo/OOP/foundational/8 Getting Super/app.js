const print = (x) => {
  return console.log(x);
};

const space = () => {
  return console.log("\n");
};
// basic triangle class w side a and side b
class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
  describe() {
    return `The Triangle with sides ${this.a} and ${
      this.b
    } has an area of ${this.getArea()} and a hypotenuse of ${this.getHypotenuse()}`;
  }
}
//   in the previous example we learnt that we can inherit functionality from a parent class instead of duplicating code and override the parent class methods.
// but what if you wanted to add another parameter to the parent class?
// in the example below we have added a third parameter to the parent class.
class ColoredTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b); // inherited from parent class
    this.color = color; // inherited from parent class
  }
  describe() {
    return `The ${this.color} Triangle with sides ${this.a} and ${
      this.b
    } has an area of ${this.getArea()} and a hypotenuse of ${this.getHypotenuse()}`;
  }
}

const myTri = new Triangle(3, 4);
print(myTri.describe());
const myTri2 = new ColoredTriangle(3, 4, "red");
print(myTri2.describe());
space();

class ColoredMoodTriangle extends ColoredTriangle {
  constructor(a, b, color, mood) {
    super(a, b, color); // inherited from parent class of the previous parent class.
    this.mood = mood;
  }
  describe() {
    return `The ${this.color} Triangle with sides ${this.a} and ${
      this.b
    } has an area of ${this.getArea()} and a hypotenuse of ${this.getHypotenuse()}. I'm feeling ${
      this.mood
    }`;
  }
}

const myTri3 = new ColoredMoodTriangle(3, 4, "red", "happy");
print(myTri3.describe());
