const print = function (x) {
  return console.log(x);
};
const space = function () {
  return print("\n");
};

class Cat {
  static numOfCats = 0; // number of cats
  numLegs = 4; // number of
  // added some additional properties to the class
  name; // name of the cat
  breed; // this is a public field
  hasTail = true; // all cats have tails
  constructor(name) {
    this.name = name;
    Cat.numOfCats += 1;
  }
}

const cat1 = new Cat("cat1");
const cat2 = new Cat("cat2");
const cat3 = new Cat("cat3");
print(Cat.numOfCats); // 3
// it is only updated within the class, not the instances:
print(cat1.numOfCats); // undefined
const cat4 = new Cat("cat4");
print(cat4.numLegs); // this has been updated within the new instance and can be decremented even
cat4.numLegs -= 1;
print(cat4.numLegs); // 3
// it is a public field, so it can be updated outside of the class.
space();
const cat5 = new Cat("cat5");
cat5.numLegs = 3;
cat5.name = "Bobby";
cat5.breed = "Bengal";
cat5.hasTail = false;
print(cat5.numLegs); // 3
print(cat5.name); // Bobby
print(cat5.breed); // Bengal
print(cat5.hasTail); // false
space();
