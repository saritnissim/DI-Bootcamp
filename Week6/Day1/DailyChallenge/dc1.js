// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
function makeAllCaps(words) {
    return new Promise( (resolve, reject) => {
    //     If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
    // else, reject the promise with a reason.
        if (words.every(word => typeof word === 'string')){
            resolve(words.map( word => word.toUpperCase()))
        }
        else {
            reject('Not all elements are strings')
        }
    })
}

// The second function called sortWords(), takes an array of words uppercased as an argument
function sortWords(uppercaseWords) {
    // If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
    // else, reject the promise with a reason.
    return new Promise( (resolve, reject) => {
        if (uppercaseWords.length > 4){
            resolve(uppercaseWords.sort())
        } else {
            reject('Too few words')
        }
    } )
}


//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))