// Importing the functions from math.js
import { addition, multiplication } from './math.js';

// Importing utility functions from lodash
import _ from 'lodash';

const num1 = 5;
const num2 = 3;

// Using math.js functions
const sum = addition(num1, num2);
const product = multiplication(num1, num2);


// Using Lodash to calculate the sum and product
const lodashSum = _.sum([num1, num2]); // Using _.sum to add num1 and num2
const lodashProduct = _.multiply(num1, num2); // Using _.multiply to multiply num1 and num2


// Log the results
console.log('Sum using Lodash:', lodashSum);  
console.log('Product using Lodash:', lodashProduct); 

console.log('Sum using math.js:', sum);  
console.log('Product using math.js:', product); 