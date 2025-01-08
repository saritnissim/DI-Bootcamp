interface EmployeeI {
  name: string;
  age: number;
  role: string;
}

let employeeJohn: EmployeeI = {
  name: "John",
  age: 30,
  role: "developer"
}

employeeJohn.name;
employeeJohn["name"];
