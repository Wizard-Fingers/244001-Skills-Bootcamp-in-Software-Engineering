const print = (x) => {
  return console.log(x);
};
const space = () => {
  return console.log("\n");
};

class MyMath {
  static add(x, y) {
    return x + y;
  }
  static subtract(x, y) {
    return x - y;
  }
  static multiply(x, y) {
    return x * y;
  }
  static divide(x, y) {
    return x / y;
  }
}
// I've made a class and grouped functionality together never substantiating anything
print(MyMath.add(1, 2));
space();
print(MyMath.subtract(1, 2));
space();
print(MyMath.multiply(1, 2));
space();
print(MyMath.divide(1, 2));
// here we've utilized static methods to group functionality together and never instantiate anything.
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static registerStrayCat() {
    const names = ["Fluffy", "Scratchy", "Paws", "Tiger", "Satan"];
    const randomName = Cat.choice(names);
    return new Cat(randomName, "unknown");
  }

  static choice(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }

  meow() {
    return `Cat ${this.name} says meow. They are a ${this.breed} breed.`;
  }
}

const NewCat = new Cat("Satan", "Sphinx");
print(NewCat);
space();
print(NewCat.meow());
space();
const Stray = Cat.registerStrayCat();
print(Stray);
print(Stray.meow());
