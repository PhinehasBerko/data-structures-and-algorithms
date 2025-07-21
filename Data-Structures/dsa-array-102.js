// Arrays
// An Array is a collection of items stored at contiguous memory location.
// Contiguous memory location means that data is stored next to each other
//  in memory, without any gaps between them.

// Each item can be accessed through its index (position) number. 
// Arrays always start at index 0

// A JavaScript array is actually a specialized type of JavaScript object,
// with the indices being property names that can be integers 
// used to represent offsets.

// The Array is one of the recognized JavaScript object types, 
// and as such, there is a set of properties and functions you 
// can use with arrays.

// Using Arrays

// There are several different ways to create arrays, access 
// array elements, and perform tasks such as searching and 
// sorting the elements stored in an array.

// Creating Arrays
// 1. The simplest way to create an array is by declaring an array
//variable using the [] operator:

let number = []; // this array is of lenght 0
console.log(number.length);

// 2. Another way of creating an array is by declare a variable
// with a set of elements inside the [] operator:
let numbers = [0,2,3,4,4]; // has lenght 5
console.log(numbers.length) 

// 3. Another way of creating an array is by calling the Array
// Constructor:
let numbOfArr = new Array(2);
console.log(`Length from Array constructure: ${numbOfArr.length}`)

let numbOfArray = new Array(0,1,2,3,4,5)
console.log(`Length from [${numbOfArray}] is ${numbOfArray.length}`)

// Unlike many other programming languages, JavaScript array 
// elements do not all have to be of the same type:

let objectArr = [1, "Joe",true, null, undefined];
console.log(`objectArr of length ${objectArr.length}`);

// We can verify that an object is an array by calling the Array.isArray() function, 
// like this:
console.log('is this an array: ', Array.isArray(objectArr))

// In Conclusion:

// We’ve covered several techniques for creating arrays. 
// As for which function is best, most JavaScript experts 
// recommend using the [] operator, saying it is more efficient than
// calling the Array constructor.

console.log("\n <<    Accessing and Writing Array Elements   >> \n ")
// Accessing and Writing Array Elements
// Data is assigned to array element using the [] operator in an
// assignment statement 

console.log(' numbOfArray is ', numbOfArray);

let sum = 0 ;

numbOfArray.forEach(element =>{
    numbOfArray[element] = element + 1; // [] operator used
    sum += numbOfArray[element];
});

console.log('Updated numbOfArray is ', numbOfArray);
console.log("Sum of numbOfArray is: ",sum)

// Creating Arrays from Strings
// Arrays can be created as the result of calling the split() function
// on a string. This function breaks up a string at a common delimeter,
// such as  a space for each word, and creates an array consisting
// of the individual parts of the string.

// Examples:
let sentence = "the quick brown fox jumped over the lazy dog";
let words = sentence.split(" ");
console.log(`I have ${words.length} number of words`)

// Aggregate Array Operations
console.log("\n <<    Aggregate Array Operations   >> \n ")
// There are several aggregate operations you can perform on arrays

// 1. You can assign one array to another array:

let nums = [];
for ( let i = 0; i < 10; i++) {
    nums[i] = i + 1;
}
let sameNums = nums;

console.log(`nums Array is:     ${nums}`);
console.log(`sameNums Array is: ${sameNums}`);

// NB:
// However, when you assign one array to another array, 
// you are assigning a reference to the assigned array. 
// When you make a change to the original array, that change is reflected
//  in the other array as well

// This is called a shallow copy;

