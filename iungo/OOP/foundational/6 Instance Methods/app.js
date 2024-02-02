const print = (x) => {
  return console.log(x);
};

const space = () => {
  return console.log("\n");
};

//  Triangle exercise

class Triangle {
  constructor(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      throw new Error("Sides must be integers");
    }
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      throw new Error("Sides must be finite");
    }
    if (a <= 0 || b <= 0) {
      throw new Error("Sides must be positive");
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

  sayHi() {
    return `The Triangle with sides ${this.a} and ${
      this.b
    } has an area of ${this.getArea()} and a hypotenuse of ${this.getHypotenuse()}`;
  }
}

const myTri = new Triangle(3, 4);
print(myTri);
space();
print(myTri.getArea());
space();
print(myTri.getHypotenuse());
space();
print(myTri.sayHi());
space();
