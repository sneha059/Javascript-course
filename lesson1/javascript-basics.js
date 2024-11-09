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

// 10. Node.js- used to compilr javascript files
// When using Node.js, you can run JavaScript files outside the browser using the command: `node filename.js`
// Example:
// node javascript-basics.js  // Run your JavaScript code in the terminal

// Notes from Today's Learning and Setup

// 1. Setting Up Node.js with npm-----SCRIPTING JABARDASTI NPM START KE LIYE---
// - First, you create a `package.json` file in your project directory by running `npm init -y`.
// - This initializes the project and allows you to add a "start" script in the `package.json`.
// - The `start` script in `package.json` lets you run your JavaScript file using `npm start` instead of `node filename.js`.

/* Example of `package.json` after running `npm init -y`:
 {
   "name": "javascript-course",
   "version": "1.0.0",
   "main": "index.js",
   "scripts": {
        "start": "node lesson1/javascript-basics.js"
   },
      "license": "ISC"
}*/

// 2. Running JavaScript with Node.js
// - You can run JavaScript files in Node.js from the terminal using the command:
//    node filename.js
// - When you run `npm start`, it will run the script you defined in `package.json`, like:
//    npm start -> node lesson1/javascript-basics.js
// - If you encounter the "Cannot find module" error, ensure the file paths are correct.
//    In this case, ensure the path inside `start` script is correct, like:
//    "start": "node javascript-basics.js"  (if the file is in the same folder)


// 3. GitHub & Version Control
// - After making changes to your JavaScript file, use Git to commit and push the changes to your GitHub repository.
// - Steps for Git commit:
//   0. make a repository on your github
//   1. Initialize a repository: `git init`
//   2. Add the changes: `git add .`
//   3. Commit the changes: `git commit -m "Add JavaScript basics with comments"`
//   4. Push to GitHub: `git push origin main`

// 4. Common Mistakes and Things to Remember:
// - Always check file paths, especially when using Node.js. Incorrect paths are the most common error when using `node` or `npm start`.
// - Use `let` and `const` for variables, avoid `var` in modern JavaScript.
// - Functions are essential for reusable code blocks, try to break your code into smaller functions where possible.
// - For larger projects, consider organizing your code into multiple files and using `require` (in Node.js) to import modules.

