
// Assignment 1:
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

checkNumber(5);


// Assignment 2:

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(`factorial of ${num} is ${fact}`)
}

factorial(6);

// Assignment 3:

function largerNumber(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is larger`);
    } else if (num1 < num2) {
        console.log(`${num2} is larger`);
    } else {
        console.log("Both are equal");
    }
}

largerNumber(5, 6);

// Assignment 4:

function palindrome(str){
   for(let i=0;i<str.length/2;i++){
    if(str[i]!==str[str.length-1-i]){
        return("Not a palindrome");
    }
    
   }
   return("Palindrome");
}

let check =palindrome("malayalam");
console.log(check);

// Assignment 5:

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function printPrimesUpToN(n) {
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }

printPrimesUpToN(10);


// Assignment 6:
function simpleCalculator(num1, num2, operator) {
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Division by zero is not allowed.";
      }
    } else {
      return "Invalid operator";
 }
}

let Calculator=simpleCalculator(5, 6, "+");
console.log("simple Calcualtor: "+Calculator);

// Assignment 7:
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
      }
    }
    return count;
  }
  countVowels("hello");
  let vowels = countVowels("hello");
  console.log("Vowels: "+vowels);

  // Assignment 8:
  function getProperDivisors(num) {
    const divisors = [];
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }
  
  function isPerfectNumber(num) {
    const divisors = getProperDivisors(num);
    let sum = 0;
    for (let i = 0; i < divisors.length; i++) {
      sum += divisors[i];
    }
    return sum === num;
}
let perfectNumber=isPerfectNumber(6);
console.log("Perfect Number: "+perfectNumber);

// Assignment 9:
function generateFibonacciSeries(n) {
    const fibonacci = [0, 1];
    for (let i = 2; i <= n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci.slice(0, n + 1);
}
let fibonacci=generateFibonacciSeries(5);
console.log("Fibonacci Series: "+fibonacci);

// Assignment 10:
function printMultiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
      const result = n * i;
      console.log(`${n} x ${i} = ${result}`);
    }
  }
    printMultiplicationTable(5);
  
  
  