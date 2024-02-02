const print = (x) => {
  return console.log(x);
};
const space = () => {
  return console.log("\n");
};

class Hamster {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  static species = "Cricetinae";
}
// static properties are properties that are shared by all instances of a class.

const NewHamster = new Hamster("Nibbler", "Russian Dwarf");
print(NewHamster);
space();
// above there are only two properties that are tied to the instance of the class.
print(NewHamster.species);
space();
// however if I try to access the species property it will return undefined.
print(Hamster.species);
space();
