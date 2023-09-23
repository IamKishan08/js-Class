// Part 1: User Data Array Manipulation

// 1. Create a new JavaScript file (e.g., `data_operations.js`) to complete the following tasks.



// 2. Define an array `users` containing at least 15 objects, where each object represents a user with the following properties: `name`, `age`, `gender`, and `location`.

let users = [
    { name: "Kishan", age: 21, gender: "Male", location: "Bangalore" },
    { name: "Alice", age: 32, gender: "Female", location: "New York" },
    { name: "Bob", age: 25, gender: "Male", location: "Los Angeles" },
    { name: "Sarah", age: 43, gender: "Female", location: "Chicago" },
    { name: "David", age: 27, gender: "Male", location: "San Francisco" },
    { name: "Ella", age: 59, gender: "Female", location: "London" },
    { name: "John", age: 24, gender: "Male", location: "Toronto" },
    { name: "Linda", age: 16, gender: "Female", location: "Sydney" },
    { name: "Michael", age: 30, gender: "Male", location: "Paris" },
    { name: "Olivia", age: 18, gender: "Female", location: "Tokyo" },
    { name: "William", age: 22, gender: "Male", location: "Berlin" },
    { name: "Sophia", age: 23, gender: "Female", location: "Mumbai" },
    { name: "James", age: 75, gender: "Male", location: "Shanghai" },
    { name: "Emily", age: 26, gender: "Female", location: "Rio de Janeiro" },
    { name: "Benjamin", age: 17, gender: "Male", location: "Cape Town" },
    { name: "Ava", age: 19, gender: "Female", location: "Moscow" },
    { name: "Daniel", age: 31, gender: "Male", location: "Seoul" },
    { name: "Mia", age: 14, gender: "Female", location: "Buenos Aires" },
    { name: "Joseph", age: 58, gender: "Male", location: "Dubai" },
    { name: "Sofia", age: 30, gender: "Female", location: "Istanbul" }
  ];

  

// 3. Implement a function `isAdult` that takes a user object as input and returns `true` if the user is 18 years or older, otherwise `false`.
  

function isAdult(user){
    return user.age >= 18;
}

// 4. Use the `filter` function to create a new array `adultUsers` by selecting only the users who are adults using the `isAdult` function.

let adultUsers = users.filter(isAdult);
//console.log(adultUsers);

// 5. Implement a function `getFullName` that takes a user object as input and returns the user's full name (combine `name` and `location` properties).

function getFullName(user){
    return user.name + " " + user.location;
}

// 6. Use the `map` function to create a new array `userNames` containing the full names of all users.

let fullName = users.map(getFullName);

//console.log(fullName);


// Part 2: Chaining User Data Operations
//1. Implement a function `filterByGender` that takes a user object as input and a gender string (e.g., "male" or "female") and returns `true` if the user's gender matches the input gender, otherwise `false`.

function filterByGender(gender) {
    return function (user) {
      return user.gender.toLowerCase() === gender.toLowerCase();
    };
  }
  
  // Chaining operations
  const femaleUsers = users.filter(filterByGender("female")).map(getFullName);
  
 console.log("Female Users:", femaleUsers);


// Part 3: Movie Data Array Manipulation


const movies = [
    { title: "The Matrix", genre: "action", year: 1999, rating: 8.7 },
    { title: "Inception", genre: "action", year: 2010, rating: 8.8 },
    { title: "The Shawshank Redemption", genre: "drama", year: 1994, rating: 9.3 },
    { title: "Pulp Fiction", genre: "crime", year: 1994, rating: 8.9 },
    { title: "The Dark Knight", genre: "action", year: 2008, rating: 9.0 },
    { title: "Forrest Gump", genre: "drama", year: 1994, rating: 8.8 },
    { title: "The Godfather", genre: "crime", year: 1972, rating: 9.2 },
    { title: "Fight Club", genre: "drama", year: 1999, rating: 8.8 },
    { title: "Jurassic Park", genre: "action", year: 1993, rating: 8.1 },
    { title: "Avatar", genre: "sci-fi", year: 2009, rating: 7.8 },
    { title: "Titanic", genre: "romance", year: 1997, rating: 7.8 }
  ];

 
function filterByGenre(genre) {
    return function (movie) {
      return movie.genre.toLowerCase() === genre.toLowerCase();
    };
  }
  
  
  const actionMovies = movies
    .filter(filterByGenre("action")) 
    .map(movie => movie.title); 
  
  console.log("Part 4: Action Movie Titles", actionMovies);

const combinedResults = {
    part1: {
      adultUsers,
      users,
    },
    part2: {
      femaleUsers,
    },
    part4: {
      actionMovieTitles: actionMovies,
    },
  };
  
 
  console.log("Part 5: Combined Results", combinedResults);
  
  
  













