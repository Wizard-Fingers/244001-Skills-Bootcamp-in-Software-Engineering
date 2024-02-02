const print = function (x) {
  return console.log(x);
};
const space = function () {
  return print("\n");
};
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // I want a getter and a setter that gets me first name and last name as a string
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

const user = new User("John", "Snow");
print(user.fullName); // John Snow
space();
