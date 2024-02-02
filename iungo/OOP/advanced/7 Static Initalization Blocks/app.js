const print = function (x) {
  return console.log(x);
};
const space = function () {
  return print("\n");
};
class MyClass {
  // I'm going to initialize a static initialization block.
  static {
    print("static initialization block"); // this runs when the class is loaded
  }
}

class Database {
  static connection;

  static init() {
    this.connection = print("Your private data is now uploaded, you freak!!!");
  }

  static loading() {
    return print("Loading...");
  }

  static loaded() {
    return this.connection;
  }
}

Database.init(); // Call initialization method

Database.loading(); // Call loading method
Database.loaded(); // Call loaded method

space();
