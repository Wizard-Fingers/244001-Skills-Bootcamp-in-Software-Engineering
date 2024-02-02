const print = function (x) {
  return console.log(x);
};
const space = function () {
  return print("\n");
};

class MyClassyClass {
  #privateMethod() {
    return "aah get out of the bathroom!!!";
  }
  naughtyPublicMethod() {
    return this.#privateMethod();
  }
}

const myClass = new MyClassyClass();
//print(myClass.#privateMethod()); // error - this is a private method not accessible outside of the class
print(myClass.naughtyPublicMethod());
space();
