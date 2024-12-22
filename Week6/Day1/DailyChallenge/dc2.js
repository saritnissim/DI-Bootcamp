const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

//   Create three functions. The two first functions should return a promise..

// The first function is named toJs():
function toJs() {
  // this function converts the morse json string provided above to a morse javascript object.
  // if the morse javascript object is empty, throw an error (use reject)
  // else return the morse javascript object (use resolve)

  const morseObject = JSON.parse(morse);
  return new Promise((resolve, reject) => {
    if (morseObject.length === 0) {
      reject("Morse object is empty!");
    } else {
      resolve(morseObject);
    }
  });
}

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
function toMorse(morseObject) {
  // This function asks the user for a word or a sentence.
  let userInput = prompt("Please enter a word or sentence:");
  // if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
  // else return an array with the morse translation of the user’s word.
  return new Promise((resolve, reject) => {
    if (!userInput in morseObject) {
      reject(`Error: ${userInput} not in morse`);
    } else {
      resolve(morseObject.get(userInput));
    }
  });
}

// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
function joinWords(morseTranslation) {
  // this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
  const morseString = morseTranslation.join("\n");

  // Display it on the page (DOM)
  document.body.innerHTML = `<p>${morseString}</p>`;
}

// Chain the three functions.
