const print = (x) => {
  return console.log(x);
};

const space = () => {
  return console.log("\n");
};

// Practice making a bank account class

class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    // Constructor to initialize the BankAccount object
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    // Method to deposit money into the account
    if (typeof amount !== "number") {
      throw new Error("Amount must be a number");
    } else if (amount > 0) {
      this.balance += amount;
      return this.balance;
    }
    throw new Error("Amount must be greater than 0");
  }

  withdraw(amount) {
    // Method to withdraw money from the account, but cannot withdraw more than the amount in the account
    if (typeof amount !== "number") {
      throw new Error("Amount must be a number");
    } else if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    }
    throw new Error("Invalid withdrawal amount");
  }
}

const myAccount = new BankAccount(123456789, "Johnny Adept", 1000000);

print(myAccount);
myAccount.deposit(1000000);
print(myAccount);

// Example withdrawal
try {
  myAccount.withdraw(500000);
  print(myAccount);
} catch (error) {
  // Handle errors during withdrawal
  console.error(error.message);
}

// Example of a withdraw of more than the amount in the account
try {
  myAccount.withdraw(5000000);
  print(myAccount);
} catch (error) {
  // Handle errors during withdrawal
  console.error(error.message);
}
// This was practice with methods and constructors
