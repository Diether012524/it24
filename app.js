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