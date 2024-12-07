function is_anagrams(string1, string2){
    const characterString1 = string1.replaceAll(" ", "").toLowerCase()
    const characterString2 = string2.replaceAll(" ", "").toLowerCase()
    
   if (characterString1.split('').sort().join('') === characterString2.split('').sort().join('')){
    console.log(`"${string1}" is an anagram of "${string2}"`)
   } else {
    console.log(`"${string1}" is not an anagram of "${string2}"`)
   }
}

is_anagrams("Astronomer", "Moon starer")