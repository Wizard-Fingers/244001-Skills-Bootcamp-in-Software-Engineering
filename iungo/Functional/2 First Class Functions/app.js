function greet(person) {
  console.log("Hi " + person);
}

function hate(person) {
  console.log("I hate you " + person);
}

greet("Dork");
hate("Dork");
console.log("\n");

function myName(func) {
  func("Art");
}

myName(greet);
myName(hate);
