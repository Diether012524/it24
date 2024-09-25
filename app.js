//Data Types
let num = 10; 
let str = "Hello, World!"; 
let isEven = false;
let array = [1, 2, 3, 4, 5]; 
let obj = { name: "Alice", age: 30 }; 

//Arithmetic and Logical Operators
let sum = num + 5; 
let isGreater = num > 5; 

//Conditional Statements
//if else
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

//switch
function describeNumber(number) {
    switch (true) {
        case (number < 0):
            return "Negative";
        case (number === 0):
            return "Zero";
        case (number > 0):
            return "Positive";
        default:
            return "Unknown";
    }
}

//Loops
console.log("Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}



//Functional Programming
//Determine if a number is odd or even
function isOddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

//Determine if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//Determine if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

//Testing the functions
console.log(`The number ${num} is: ${checkEvenOdd(num)}`);
console.log(`The number ${num} is: ${describeNumber(num)}`);
console.log(`The number ${num} is: ${isOddOrEven(num)}`);
console.log(`Is ${num} a prime number? ${isPrime(num)}`);
console.log(`Is "racecar" a palindrome? ${isPalindrome("racecar")}`);
console.log(`Is "hello" a palindrome? ${isPalindrome("hello")}`); 