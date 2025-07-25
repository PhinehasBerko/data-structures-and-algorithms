let scope = "global";

function showScope() {
    scope = "local"
    return scope
}

console.log("Outside function, scope is: ",scope)

console.log("scope variable from function: ",showScope())

// Recursive functions

// Recursive functions are functions that calls itself until it reaches a condition (
// base case) that stops the recursion.

// the factorial function


// Here:
// Recursive step: factorial(n - 1)

// Base case: when n is 0 or 1

function factorial(number) {
    if (number === 0 || number === 1) return number
    
    return number * factorial(number-1);    

}


let number = 5;
factorial(number);
console.log(`Factorial of ${number} is ${factorial(number)}`);

// Steps to Create a Recursive Function
// 1. Identify the problem’s recursive nature

// Ask yourself: “Can this problem be defined in terms of smaller versions of itself?”

//  Example:

// Factorial: n! = n × (n-1)!

// Fibonacci: fib(n) = fib(n-1) + fib(n-2)

// Traversing folders: "look inside folder → repeat for subfolders".

// 2. Define the base case (stopping condition)

// The base case tells the recursion when to stop.

// Without it → infinite recursion → stack overflow.

// Example:

// Factorial: when n === 1 (or n === 0), return 1.

// 3. Define the recursive case

// Express the solution in terms of a smaller input to the same function.

// Example:

// Factorial: n * factorial(n - 1)

// Fibonacci: fib(n - 1) + fib(n - 2)

// 4. Make progress toward the base case

// Ensure the input shrinks on every recursive call.

// Example: factorial uses n - 1, so eventually it reaches 1.

// 5. Test with small inputs

// Always test with small values to verify:

// The base case works.

// The recursion actually reduces toward it.

// Example: test factorial(1), factorial(2), factorial(3).

// ===================================================================================

//            Objects and Object-Oriented Programming => OOP

// --------------------------------------------------------------------------------------

// JavaScript provides many different ways for creating and using objects. 

//  Objects are created by defining a constructor function that includes declarations for an
//  object’s properties and functions, followed by definitions for the functions.

// Here is the constructor function for a checking account object:

function Checking (amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}

// The this keyword is used to tie each function and property to an object instance.  

function deposit (amount) {
    this.balance += amount
    return balance
}

function withdraw(amount) {
    if (amount >= this.balance) return "Insufficient balance";

    this.balance -= amount
    return balance
}

function toString() {
 return "Balance: " + this.balance;
 }


let account = new Checking(1000)

console.log(account.toString())
