/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/


let maxNumArray = [21, 33, 10, 2, 87, 19, 22, 46, 31, 104]
let even = [];

for (let i = 0; i < maxNumArray.length; i++) {
    if((maxNumArray[i] % 2) == 0){
        even.push(maxNumArray[i]);
     
    }   

};
console.log("Even numbers: ", even);
