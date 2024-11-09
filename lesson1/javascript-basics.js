//alert('hi'); only works in the browser as a popup 
//TO  RUN IN BROWSER- create an html file and open it in a browser, inspect it and open console 
//and use browser-specific features like alert, document, etc.
//the html file will contain-
/*<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Basics</title>
</head>
<body>
    <script src="javascript-basics.js"></script>
</body>
</html>
*/
console.log("hi");//to display output in the terminal using node.js
console.log(Math.round(2.2));
console.log(Math.round(2.8));
// JavaScript Basics - Key Concepts to Remember

// 1. Variables
// Use `let` and `const` for declaring variables. `let` allows reassigning values, but `const` creates constants.
// Example: 
let name = "John";   // Can be reassigned
const age1 = 25;      // Cannot be reassigned

// 2. Data Types
// JavaScript has primitive data types: string, number, boolean, undefined, null, and symbol.
// Example: 
let message1 = "Hello World";  // String
let number = 100;            // Number
let isActive = true;         // Boolean

// 3. Math Operations
// Basic math operations: +, -, *, /, %, and more complex operations using Math methods like Math.round(), Math.max(), etc.
// Example:
let result = Math.round(2.2); // Rounds a number
console.log(result);          // Outputs 2

// 4. Functions
// Functions allow you to create reusable blocks of code. You can define a function using `function` keyword or arrow functions.
// Example:
 function greet1(name) {
     return "Hello, " + name;
}
 let message = greet1("Sneha");  // Calling the function
 console.log(message);

// Arrow functions:
const greet = (name) => "Hello, " + name;
console.log(greet);

// 5. Loops
// Use loops like `for`, `while`, and `do...while` to repeat code multiple times.
// Example:
 for (let i = 0; i < 5; i++) {
    console.log(i);  // Will print numbers from 0 to 4
 }

// 6. Conditionals
// Use `if`, `else if`, `else`, and `switch` to execute code based on conditions.
// Example:
let age = 18;
  if (age >= 18) {
    console.log("Adult");
 } else {
     console.log("Minor");
}

// 7. Arrays and Objects
// Arrays are ordered collections, while objects are unordered collections of key-value pairs.
// Example:
let fruits = ["apple", "banana", "cherry"];  // Array
console.log(fruits);
let person = { name: "Sneha", age: 20 };      // Object
console.log(person);

// 8. Error Handling
// Use `try...catch` blocks to handle errors and exceptions in JavaScript.
// Example:
try {
    let result = someNonExistentFunction();  // Error will occur
     } catch (error) {
     console.log("Error: " + error.message);  // Catch and log the error
 }

// 9. Commenting Code
// Use comments to explain code, which is helpful for others and for yourself in the future.
// Single-line comment: // This is a comment
// Multi-line comment: /* This is a multi-line comment */

// 10. Node.js
// When using Node.js, you can run JavaScript files outside the browser using the command: `node filename.js`
// Example:
// node javascript-basics.js  // Run your JavaScript code in the terminal

