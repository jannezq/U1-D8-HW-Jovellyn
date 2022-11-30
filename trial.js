/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("\n>------------------Excercise 10---------------------------<\n");

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