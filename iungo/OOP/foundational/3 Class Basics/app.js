const print = (x) => {
  return console.log(x);
};
const space = () => {
  return console.log("\n");
};
// this is the object we did in the last exercise.
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
// 1 Classes allow us to extract a pattern and generate instances of that pattern.
class Triangle {
  getArea() {
    return (this.a * this.b) / 2;
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
  //   the segment below was added just here
  sayHi() {
    return "Hi from a triangle!!!";
  }
}
// We can then create a new instance of the class using the new keyword.
// wen you use the keyword new I get an object as you can see but its not useful it doesn't have an a a b or any sort of values.
new Triangle();
print(new Triangle());
space();
// so below I can do something like this.
const FirstTri = new Triangle();
// and now I can try to run the function
print(FirstTri.getArea());
space();
// but it will return NaN because we haven't given it any values.
// We can see how this will work when we use constructors.
// However I can now add new values to the new class.
FirstTri.a = 3;
print(FirstTri.a);
FirstTri.b = 4;
print(FirstTri.b);
FirstTri.getArea();
print(FirstTri.getArea()); // 6
space();

// N.B always UpperCamelCase your classes or else you get confused between a function or a class!!!

// a note about checking if something is an instance of and determine whether its a instance of a class or a class that inherits from another class.

print(FirstTri instanceof Triangle); // true
print(FirstTri instanceof Object); // true
space();

// every new instance of the Triangle still has access to all the properties and methods of the class.
const Example = new Triangle();
print(Example.sayHi());
