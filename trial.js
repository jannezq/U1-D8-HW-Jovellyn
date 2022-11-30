/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/
let maxNumArray = [21, 33, 10, 2, 87, 19, 22, 46, 31, 104, 43, 67, 94, 88, 124,906]
let length = maxNumArray.length;

for (let i = 0; i < length; i++) {
    for(let j = 0; j < maxNumArray.length; j++){
        if (maxNumArray[j] % 2 !== 1 ) {
            maxNumArray.splice(j,1)
            
        }
    } 
};
console.log("Odd numbers only: ", maxNumArray);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let alphabet = "abcdefghijklmnopqrstuvwxyz"
let noVowels = alphabet.replace(/[aeiou]/gi, "");

console.log("no vowels: ",noVowels);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let numArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

for (let i = 0; i < numArray.length; i++) {
    numArray[i] = numArray[i] + 1;
}

console.log("numArray added by 1 each: ", numArray);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let lyrics = [ "hello", "from", "the", "other", "side", "I", "am", "Adele"]

for (let i = 0; i < lyrics.length; i++) {
    lyrics[i] = lyrics[i].length;
}
console.log("Letters per words: ", lyrics);