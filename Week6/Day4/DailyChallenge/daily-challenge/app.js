import greet from './greeting.js';
import { message as colorfulMessage } from './colorful-message.js'; // Rename to avoid conflict


const greeting = greet('Alice');
console.log(greeting);
console.log(colorfulMessage)