console.log("Exercise 1:")
class Employee {
    constructor(
        private name: string,          // Private property
        private salary: number,        // Private property
        public position: string,       // Public property
        protected department: string   // Protected property
      ) {}

      public getEmployeeInfo(): string {
        return `Name: ${this.name} Position: ${this.position}`;
    }
}
const employee = new Employee("Alice", 5000, "Software Engineer", "IT");
console.log(employee.getEmployeeInfo()); 

console.log("Exercise 2:")
// Create a class Product with the following properties:

// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price. Attempt to modify the id property after creating a new instance of the class and observe the result.

class Product {
    constructor(
        readonly id: number,          // Readonly property
        public name: string,          // Public property
        public price: number          // Public property
      ) {}

      public getProductInfo(): string {
        return `Product Name: ${this.name} Price: ${this.price}`;
    }
}
const product = new Product(1, "Laptop", 999.99);
console.log(product.getProductInfo()); // Output: "Product: Laptop, Price: $999.99"

// product.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

// Modifying other public properties is allowed
product.name = "Gaming Laptop";
product.price = 1299.99;

console.log(product.getProductInfo()); // Output: "Product: Gaming Laptop, Price: $1299.99"

console.log("Exercise 3:")

class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Animal sound";
  }
}
class Dog extends Animal {
 
  makeSound(): string {
    return "bark";
  }
}

const dog = new Dog("Buddy");
console.log(dog.makeSound()); // Output: "bark"

console.log("Exercise 4:")
// Create a class Calculator with the following static methods:

// add(a: number, b: number): number – returns the sum of two numbers.
// subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.
class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}

let x = Calculator.add(5, 3)
console.log(x);
let y= Calculator.subtract(5, 3)
console.log(y);

console.log("Exercise 5:")

interface User {
  readonly id: number; // Readonly property
  name: string;
  email: string;
}

// Extend User to create PremiumUser
interface PremiumUser extends User {
  membershipLevel?: string;
}
function printUserDetails(user: PremiumUser): void {
  console.log(`User Details: ID: ${user.id} Name: ${user.name} Email: ${user.email}`);
}
const regularUser: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
};

const premiumUser: PremiumUser = {
  id: 2,
  name: "Jane Smith",
  email: "jane.smith@example.com",
  membershipLevel: "Gold",
};

printUserDetails(regularUser);
printUserDetails(premiumUser);