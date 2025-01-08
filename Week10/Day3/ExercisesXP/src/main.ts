console.log("Exercise 1:")
type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;
const person: Person = { name: "Alice", age: 30 };
const address: Address = { street: "123 Main Street", city: "Tel Aviv" };
const personWithAddress: PersonWithAddress = { ...person, ...address };
console.log(personWithAddress);

console.log("Exercise 2:")
// What You Will Learn

function describeValue(value: number | string): string {
  if (typeof value === "number") {
    return "This is a number";
  } else {
    return "This is a string";
  }
}
console.log(describeValue(5))
console.log(describeValue("Hello"))

console.log("Exercise 3:")

const someValue: any = 5;
const strAssertion = someValue as string;
console.log(typeof strAssertion); //number
const str = String(someValue);
console.log(typeof str); //string

console.log("Exercise 4:")

function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

console.log(getFirstElement(["hello", 42])); // Output: "hello"

console.log("Exercise 5:")

function logLength<T extends { length: number }>(input: T): void {
  console.log(input.length);
}
logLength("Hello")
logLength([1, 2, 3, 4, 5])

console.log("Exercise 6:")

type Job = {
  position: string;
  department: string;
};

type Employee = Person & Job

// Type Guard function to check if an object is a Person
function isPerson(obj: any): obj is Person {
  return 'name' in obj && 'age' in obj;
}

// Type Guard function to check if an object is a Job
function isJob(obj: any): obj is Job {
  return 'position' in obj && 'department' in obj;
}

function describeEmployee(employee: Employee): string {
  if (isPerson(employee) && isJob(employee)) {
    return `Name: ${employee.name} Age: ${employee.age} Position: ${employee.position}`;
  } else {
    return "Invalid employee";
  }
}
const employee: Employee = { name: "Alice", age: 30, position: "Software Engineer", department: "IT" };
console.log(describeEmployee(employee)); // Output: "Name: Alice Age: 30 Position: Software Engineer"

console.log("Exercise 7:")
function formatInput<T extends { toString(): string }>(input: T): string {
  // Use type assertion to ensure `input` is treated as a string for formatting
  return `Formatted: ${(input.toString())}`;
}
console.log(formatInput(5)); // Output: "Formatted: 5"
console.log(formatInput("Hello")); // Output: "Formatted: Hello"
console.log(formatInput([1, 2, 3])); // Output: "Formatted: 1,2,3"