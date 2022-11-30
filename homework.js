/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

console.log("\n>------------------Excercise 1---------------------------<\n")

let arrayOfPositiveNums = [ 1, 2, 3, 4, 5];
console.log("Array of Positive Numbers:", arrayOfPositiveNums);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

console.log("\n>------------------Excercise 2---------------------------<\n");

let person = {
    name: "John",
    surname: "Doe",
    emailAddress: "johndoe@gmail.com",
    age: 26,
}

console.log("Person is:" , person);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

console.log("\n>------------------Excercise 3---------------------------<\n");

//adding driver license
person.driverLicense = true;

console.log("Person with driver license is:" , person);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/
console.log("\n>------------------Excercise 4---------------------------<\n");

delete person.age;

console.log("Person without age:" , person);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/


console.log("\n>------------------Excercise 5---------------------------<\n");

let person2 = {
    name: "Jane",
    surname: "Farrow",
    emailAddress: "janefarrow@gmail.com",
    driverLicense: false,
}

if (person2.emailAddress != person.emailAddress) {
    console.log("These are two different emails");
} else{
    console.log("There is an error as both emails are the same");
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("\n>------------------Excercise 6---------------------------<\n");

let totalShoppingCart = [
    { productName: "Shirt 1", price: 15},
    { productName: "trouser 1", price: 25},
    { productName: "socks 1", price: 30},
    { productName: "socks 2", price: 12},
    { productName: "trouser 2", price: 6},
    { productName: "Shirt 2", price: 4},
    { productName: "Shirt 4", price: 21},
    { productName: "shoes 1", price: 100},
    { productName: "shoes 2", price: 132},
    { productName: "shoes 3", price: 10},
    { productName: "trouser 3", price: 34},
    { productName: "Shirt 1", price: 15},
    { productName: "trouser 1", price: 25},
    { productName: "socks 1", price: 30},
    { productName: "socks 2", price: 12},
    { productName: "trouser 2", price: 6},
    { productName: "Shirt 2", price: 4},
    { productName: "Shirt 4", price: 21},
    { productName: "shoes 1", price: 100},
    { productName: "shoes 2", price: 132},
    { productName: "shoes 3", price: 10},
    { productName: "trouser 3", price: 34},
    { productName: "Shirt 1", price: 15},
    { productName: "trouser 1", price: 25},
    { productName: "socks 1", price: 30},
    { productName: "socks 2", price: 12},
    { productName: "trouser 2", price: 6},
    { productName: "Shirt 2", price: 4},
    { productName: "Shirt 4", price: 21},
    { productName: "shoes 1", price: 100},
    { productName: "shoes 2", price: 132},
    { productName: "shoes 3", price: 10},
    { productName: "trouser 3", price: 34},
    { productName: "Shirt 1", price: 15},
    { productName: "trouser 1", price: 25},
    { productName: "socks 1", price: 30},
    { productName: "socks 2", price: 12},
    { productName: "trouser 2", price: 6},
    { productName: "Shirt 2", price: 4},
    { productName: "Shirt 4", price: 21},
    { productName: "shoes 1", price: 100},
    { productName: "shoes 2", price: 132},
   
  
    
]

let totalAmount = totalShoppingCart.length;
console.log("Total amount of items in cart:", totalAmount);

if (totalAmount < 50) {
    console.log("\nNot eligible for Free shipping!");
    console.log("Shipping will be extra 10 euros");
    console.log("Price with shipping", totalAmount + 10)
} else {
    console.log("You are eligible for Free shipping!");
    console.log("Congratulation!")
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log("\n>------------------Excercise 7---------------------------<\n");


//adding 20% off each items 
let discount = 0.2;
let totalCost = (totalAmount- (totalAmount * 0.2));

console.log("Total cost after discount:", totalCost );


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

console.log("\n>------------------Excercise 8---------------------------<\n");

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

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
