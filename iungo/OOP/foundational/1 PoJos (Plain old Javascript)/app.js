const print = (x) => {
  return console.log(x);
};
const space = () => {
  return console.log("\n");
};

// 1. object
const pet = {};
// this returns an object if you run typeOf
print(typeof pet);
space();
// now I've added key value pairs to the object
const myPet = { species: "Dog", name: "Buddy", age: 2 };
// these keys don't need quotes but will be turned into strings when stored.
print(myPet);
space();
// I can access the values of the keys using the dot notation.
print(myPet.species);
print(myPet.name);
print(myPet.age);
space();
// I can also use the square bracket notation to access the values of the keys.
print(myPet["species"]);
print(myPet["name"]);
print(myPet["age"]);
space();
// using the square bracket notation allows you to add expressions to the key.
const key = "species";
print(myPet[key]);
// if I try to do this with a dot notation it will look for a property that literally doesn't exist
print(myPet.key);
space();
// Properties that don't exist always evaluate to undefined.
// unlike other programming languages like Python it will always throw an error if you try to access a property that doesn't exist.
// However in JavaScript it throws undefined.

// 2. All Key names get Stringified
myPet[true] = "woof";
print(myPet);
// if I do the same thing but make true a string instead of a boolean it will still work.
myPet["true"] = "woof";
print(myPet);

// 3. Objects are mutable
// I can change the values of the keys in an object and make new objects
myPet.age = 3;
print(myPet.age);
myPet.friends = ["I have no friends :( "];
print(myPet);
// I can even put functions in objects
myPet.bark = function () {
  return "meow!!!";
};
// look at the function in the object
print(myPet);
space();
// it has an anonymized function called bark and if we run the function in the object it will return meow.
print(myPet.bark());
