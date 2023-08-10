// Original array of ice cream flavors
const iceCreamFlavors = ["chocolate", "vanilla", "strawberry", "mango", "coffee"];

// Add "root beer" to the array without modifying the original array
const updatedFlavors = iceCreamFlavors.concat("root beer");

// Console.log the value of the entire array
console.log(updatedFlavors);

// Console.log the first flavor in the array
console.log(updatedFlavors[0]);

// Console.log the last flavor in the array
console.log(updatedFlavors[updatedFlavors.length - 1]);

// Console.log the total number of flavors in the array
console.log(updatedFlavors.length);
