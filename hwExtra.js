// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

console.log("\n>------------------Excercise 1---------------------------<\n");

let arrayOfNumber = [1, 3, 5,21, 33]
arrayOfNumber.reverse();
console.log("Reversed", arrayOfNumber);


/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log("\n>------------------Excercise 2---------------------------<\n");

let maxNumArray = [21, 33, 10, 2, 87, 19, 22, 46, 31, 104]

console.log("Max Value: ", Math.max(...maxNumArray));

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log("Min Value: ", Math.min(...maxNumArray)); 

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let even = [];

for (let i = 0; i < maxNumArray.length; i++) {
    if((maxNumArray[i] % 2) == 0){
        even.push(maxNumArray[i]);
     
    }   

};
console.log("Even numbers: ", even);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

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
