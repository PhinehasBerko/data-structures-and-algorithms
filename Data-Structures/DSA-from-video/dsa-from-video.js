// Problem Number 1
// Create an array with 5 students names, after that
// create a function which takes 2 parameters (allStudents 
// & studentName) iterate over all students and find that 
// specific user 'studentName'.

const studentDB = ['John','Dav','Joe','Vicky'];

const studentSearch = (allStudents, studentName) => {
    for (let student = 0; student < studentDB.length; ++student) {
        if (studentDB[student] === studentName) {
            console.log(`${studentName} found in DB`)
        };
    };
};

studentSearch(studentDB,'Joe');

// How can we tell if the code is good code?
// Big O Notation?.
// Big O helps us to understand how long our code
// runs (this is called the time complexity) and 
// how much memory it will need as the amount of 
// data it handles grows (this is called the space complexity).

// 1. O(n) Notation
// Signifies that the execution of the algorithm grows linearly
// in proportion to the size of the input data (n).

// Example 
// Write a function to search from a list of grocesories;

const grocesories = ['eggs', 'milk', 'milo', 'cowbell', 'rice'];

const grocesoriesSearch = item => {
    for (let grocesory = 0; grocesory <= grocesories.length; grocesory++) {
        if(grocesories[grocesory] === item) return console.log(`Found: ${item}`)
    }
};

grocesoriesSearch('eggs')


// 2. O(1) Notation (a.k.a Constant time).
// O(1) a.k.a constant time, signifies that the execution time of an
// algorithm remains constant regardless of the input size.

// So, for O(1) we know the indexes of the items we want to look out for
// and hence the time it takes to locate one item from the other is the
// same or constant.

// + This is everyone's favourite.

// Example
// Write a function to look-up an item from a grocessories at a specific
// location. 

const getGrocesory = (item, index) => {
    return console.log(`Found ${item[index]} at location ${index}`)
};

getGrocesory(grocesories,2);
// With the example above we can see that the time to get an item from
// the list of items is the same as the list-items increases this is
// because we know exactly where we are location the item and therefore
// does not need to loop through almost the entire list to get what we want.



// O(n^2) Notation.
// Indicates that the algorithm's execution time grows quadratically
// with the size of the input data (represented by n).

// Example
// Imagine a box of items and want to compare each item with every
// other item to find specific pairs. As the number of items (n)
// increases, the number of comparisons (n^2) grows much faster.

const numbers = [1,2,3,4,5];

const findPairs = items => {
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            console.log(`Pair:(${i} , ${j})`)
        }
    }
};

findPairs(numbers);

// From the above, the Big O is O(n^2) notation. 
// This is because we have 2 nested for loops and hence (quadratic) 
// in it algorithm operation not 2 seperate for loop that will be 
// ( O(n+n) ==>  O(2n)  ==> O(n) which is not O(n^2)).


// O(log n)
// O(log n) time complexity refers to an algorithm's runtime that 
// grows logarithmically with the size of the input (represented by n)
// In simpler terms, as the size increases, the time it takes for 
// the algorithm to run increases slowly.

// Array DS
// Data Structure array is an ordeded collection of elements that
// can be accessed using a numerical index

