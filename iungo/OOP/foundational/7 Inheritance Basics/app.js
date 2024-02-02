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
// we are going to inherent functionality from a parent class instead of duplicating code.

class ShyTriangle extends Triangle {
  // this still has access to getArea() and getHypotenuse() but we can overwrite them.
  describe() {
    return `I'm too shy to tell you my dimensions`;
  }
}
// in no way has ShyTriangle overridden Triangles methods.

const myTri = new Triangle(3, 4);
print(myTri.describe());
const myTri2 = new ShyTriangle();
print(myTri2.describe());
space();
