const print = (x) => {
  return console.log(x);
};
const space = () => {
  return console.log("\n");
};

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  static species() {
    return "Felis catus";
  }
  static meow() {
    return `this ${this.breed}, says Meow hiss and then ${this.name} pisses on your couch...`;
  }
}
// there are Static methods which are methods that are tied to the class itself and not the instance of the class.
const NewCat = new Cat("Satan", "Sphinx");
print(NewCat);
space();
// now if I call a method on the instance of the class it will not return the method and throw an error.
// print(NewCat.species());
// space();
const instance = new Cat("Angela", "Tabby");
print(instance);
space();
// however if I call the method on the class itself it will return the method.
print(Cat.species());
print(Cat.meow(instance)); // this will return undefined because the method is not tied to the instance of the class.
