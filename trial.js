/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/


console.log("\n>------------------Excercise 11---------------------------<\n");

let listOfCar = { brand: "Toyota", model: "Avalon", licensePlate: "223200112"};


console.log("List of car", listOfCar);

let copyListOfCar1 = Object.assign({}, listOfCar);
console.log("\nNew copy of car 1:", copyListOfCar1);
let copyListOfCar2 = Object.assign({}, listOfCar);
console.log("New copy of car 2:", copyListOfCar1);
let copyListOfCar3 = Object.assign({}, listOfCar);
console.log("New copy of car 3:", copyListOfCar1);
let copyListOfCar4 = Object.assign({}, listOfCar);
console.log("New copy of car 4:", copyListOfCar1);
let copyListOfCar5 = Object.assign({}, listOfCar);
console.log("New copy of car 5:", copyListOfCar1);


copyListOfCar1.licensePlate = "4443323123";
copyListOfCar2.licensePlate = "4326623234";
copyListOfCar3.licensePlate = "5532987272";
copyListOfCar4.licensePlate = "2748234028";
copyListOfCar5.licensePlate = "4662322345";

console.log("\nOriginal list of car: ", listOfCar);
console.log("Change license plate for car 1: ", copyListOfCar1);
console.log("Change license plate for car 2: ", copyListOfCar2);
console.log("Change license plate for car 3: ", copyListOfCar3);
console.log("Change license plate for car 4: ", copyListOfCar4);
console.log("Change license plate for car 5: ", copyListOfCar5);

let carsForRent = [
    listOfCar, copyListOfCar1, copyListOfCar2, copyListOfCar3, copyListOfCar4, copyListOfCar5
]

console.log("\nCars for rent", carsForRent);

carsForRent.splice(0,1);

console.log("\n Car 1 removed from Cars for rent", carsForRent);

carsForRent.splice(4,1);

console.log("\n Car 6 removed from Cars for rent", carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log("carsForRent type:",typeof carsForRent,". Car brand type:", typeof listOfCar.brand,". Car license type:", typeof listOfCar.licensePlate, ". Car model type:",typeof listOfCar.model);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

console.log("\n>------------------Excercise 12---------------------------<\n");

let carsForSale = [];

// 3 new cars in new array
carsForSale.push({brand: "Tesla", model: "Model Y", licensePlate: "123467890"},{brand: "Tesla", model: "Model X", licensePlate: "123443590"},{brand: "Tesla", model: "Model S", licensePlate: "178922340"} )
console.log("Cars for sale:",carsForSale);


//number of cars present in carsForSale & carsForRent
let totalCars = [
    carsForRent.length + carsForSale.length
]
console.log("Total of rent and sale Cars:",totalCars);

