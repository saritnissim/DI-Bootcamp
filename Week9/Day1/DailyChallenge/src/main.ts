function validateUnionType(value: any, allowedTypes: string []): boolean {
//Create a function called validateUnionType that accepts a value and an array of allowed types (as strings). The function should check if the value is of one of the allowed types and return true if it is; otherwise, it should return false. Use this function to validate the type of variables in a program.
    return allowedTypes.includes(typeof value)
}
//Example:
console.log(validateUnionType(1, ["string", "number"])) // false