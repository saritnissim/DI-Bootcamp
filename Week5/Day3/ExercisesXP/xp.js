// 🌟 Exercise 1 : Location
// Instructions
console.log('\nExercise 1:')
// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// 🌟 Exercise 2: Display Student Info
// Instructions
console.log('\nExercise 2:')
function displayStudentInfo(objUser){
    //destructuring
    const { first, last } = objUser
    return `Your full name is ${first} ${last}`
}

const exerciseTwo = displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(exerciseTwo)

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'


// 🌟 Exercise 3: User & Id
// Instructions
console.log('\nExercise 3:')
// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
const userArray = Object.entries(users)
console.log(userArray)

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const userArrayDouble = userArray.map(([user, id]) => [user, id*2])


// Exercise 4 : Person Class
// Instructions
console.log('\nExercise 4:')
// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member) // object


// 🌟 Exercise 5 : Dog Class
// Instructions
console.log('\nExercise 5:')
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name; 
  }
};
// // Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// } //Error - need to call super before htis


//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// } //Correct


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// } //Error - name does not exist


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// } //Error - needs to call super before using this
console.log('#2 is the correct one')

// 🌟 Exercise 6 : Challenges
console.log('\nExercise 6:')
// Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}
//These are both false, two separate instances in memory

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // 4 
console.log(object3.number) // 4 
console.log(object4.number) // 5 
//object2 and object3 are both pointing to the same object, object1

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …
class Animal {
    constructor(name, type, color) {
        this.name = name
        this.type = type
        this.color = color
    }
}
// Create a class Mammal that extends from the Animal class. 
// Inside the class, add a method called sound(). 
// This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mammal extends Animal {
     sound(animalSound) {
        console.log(`${animalSound}! I'm a ${this.type}, named ${this.name}, and I'm ${this.color}, `)
    }
}
// Create a farmerCow object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white
const farmerCow = new Mammal('Lily', 'cow', 'brown and white')
farmerCow.sound('Moo')
