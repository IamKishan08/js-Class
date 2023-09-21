//Create an empty array called "cars".
var cars = [];

//Add three car objects to the "cars" array. Each car object should have the following properties:

cars.push({make:"Toyota", model:"Camry", year:2018});

//Remove the first car object from the "cars" array.
delete cars[0];

//Add a new car object to the "cars" array with the following properties:
cars.push({make:"Honda", model:"Civic", year:2020});

//Update the "model" property of the second car object in the array to "Accord".
cars[1].model = "Accord";

console.log(cars);