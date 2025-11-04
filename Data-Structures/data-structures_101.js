// What is Data Structure?

// A Data structure is a specialized format for organizing, processing, retrieving and storing 
// data in a computer system

// Data Structure is a specific way to organize and arrange data for storage such that they can be easily accessible

// It provides a means to efficiently manage and access data, enabling faster and more effective computation.

// Essentially, it defines how data is arranged in memory and the relationships between different pieces of data.

// Key Aspect of  Data Structures:

// 1. Organization:
// Data Structures dictate the logical arrangement of data, such as sequentially (like in an array or linked list)
// or hierarchically (like in a tree).

// 2. Storage:
// They define how data is physically stored in memory, impacting access and midification efficiency.

// 3. Operation: 
// Specific operations, such as searching, sorting, inserting, and deleting, are often associated with particular
// data structures, and their efficiency varies depending on the chosen structure.

// 4. Efficiency:
// The primary goal of using data structures is to optimize performance in terms of time complexity (how 
// quickly operations can be performed) and space complexity (how much memory is consumed).

// Classification of Data Structures
// Data Structures can be broadly classified into 3 major groups
// Linear, Non-Linear, Hash-based Data structures
// 
// Linear DS => are DS whose elements are arranged in a sequential manner. They are Array, Link-list, Stacks, Queues
// Non-Linear DS => Graph, Tree
// Hash based DS => Hash map, Hashset

// Common Examples of Data Structures
// Linear Data Structures

// 1. Array
// Array is a type of data structure that organizes data in a sequential structure (row-like) such that 
// each item can be accessed using it index or
// It is a collection of elements stored at contiguous memory locations, accessed by an index.
// Array is a fixed size linear data structure that organizes data in a sequential structure

// 2. Linked List:
// A sequence  of nodes, where each node contains data and a reference to the next node.

// OR

// Linked List is a dynamic data structure with basically two (2) items; the head  of the link list and
// the tail of a link list or (the last element inside the link list). 
// The head of the link list points to the very first element inside the link list. and it is made
// out of (2) chucks in the memory. first one contains whatever the value this link list persist
// and the remaining portion shows the address of the next element inside the link-list (repeated in 
// that order) and the tail of the link list points to a null value referring to the end of a link list.

// NB:  Stacks and Queues both can be formed using arrays or link list.

// 3. Stacks
// A Last-In, First-Out (LIFO) data structure.
// Like putting plates on top of each other, the last plate is always the top-most and usually the
// first to be taken.

// 4. Queues
// A First-In, First-Out (FIFO) data structure.
// Just like lining up at the cantern. the first on the queue is always the first to be served.

// Non-Linear Data Structure is a data structure where we don't have any sort of sequential or
//  linear property to be followed. They basically follow some sort of hierarchical data structure
// or some kind of networking related data structure.
// (They are dynamic data structures: they can grow and shrink in size)

// 5. Trees
// Hierarchical data structure where elements are organized in a parent-child relationship.
// A tree starts with a parent and has children, and they have their own children, and so on.
//  (There can be different kinds of trees: Binary trees, Trinary trees, Unique trees, black trees etc)
// (all nodes are connected and there is no cyclic)

// 6. Graph - Like a Map of Cities
// Collections of  nodes (vertices) and connections (edges) between them.
// A graph shows connections between things.
// Like cities connected by roads, or friends on social media.


// Hash based DS
// Hash based Ds => have some sort of hash that defines every single element that is currently 
// present within the hashmap or hashset in a very quick manner.
// So we can identify and pick out elements very quickly in basically near constant time.
// 6. Hash Table (or Map)
// A super fast labelled box

// 7. Set - A Bag with No Duplicates
// A Set is like a bag that only allows one of each item.
// We use set when we want a list has no duplicate. 
// and Great for checking "Have I seen this before?".


// 8. Object
// An Object is like a box which contains a dictionary of items where each item in it has a label.
// such that each item can be accessed by it "label" or "key".


// Data Structures is a specific way of organizing, storing and accessing data in a computer system.
// Algorithms are the step-by-step procedures to perform or solve a specific problem using data structures.

// Why Study Data Structures and Algorithms
// 1. Efficient Problem Solver
// 2. Algorithmic Awareness 
// 3. Improved Logical Thinking
// 4. Interview Success
// 5. Coding Confidence
// 6. Efficiency Expert
// 7. Innovation Inspiration
// 8. Future-Proof Your Skills
// 9. Critical Thinking Champion
// 10. Stronger Coding Skills
const allStudents =[ "Phiny","Deli",'Victor','Danny', 'Justice'];

const getStudents = (allStudents, studentName) => {
    // allStudents.filter((studentName)=>console.log(`The student was ${studentName}`));
    allStudents.forEach(element => {
        if(element === studentName) return console.log(`This is ${studentName}`)
    });
};

getStudents(allStudents, 'Victor');
getStudents(allStudents,'Phiny');