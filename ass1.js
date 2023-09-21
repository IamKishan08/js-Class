//Create an empty array called "fruits".
var fruits = [];

//Add the following fruits to the "fruits" array: "apple", "banana", "orange"
fruits.push("apple","banana","orange");
console.log(fruits);

//Remove the first fruit from the array.
fruits.splice(0,1);
console.log(fruits);

//Add "grape" to the end of the array.
fruits.push("grape");
console.log(fruits);

// Update the second fruit in the array to "pear"
fruits.splice(1,1,"pear");
console.log(fruits);
