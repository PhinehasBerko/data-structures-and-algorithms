## What is an Algorithm?

Algorithm is a set of well-defined steps to solve a particular problem or
A systematic approach to solve a particular problem.

## What are the characteristics of Algorithm

An algorithm should have:

1. A well-defined input and output
2. language independent
3. clear and unambiguous steps

## Why study Algorithm

Algorithm help to improve systematic problem solving skills

## How to analyse the most efficient algorithm

Since the absolute running time of an algorithm cannot be predicted, becos it depends on a number of factors
such as the:

- programming language used to implement the algorithm
- computer the program runs on
- other programs running at the same time
- quality of the OS
- etc.

> > We evaluate the performance of an algorithm in terms of its input size -

    the evaluate is of 2 types:
    1. Time Complexity: amount of time taken by an algorithm to run, as a function of input size
    2. Space Complexity: amount of memory taken by an algorithm to  run as a function of input size

## How to represent Complexity?

- Asymptotic notations- its a mathematical tools to represent time and space Complexity
  there are 3 notations and they are:

* Big-O Notation => Worst case complexity
* Omega Notation => Best case complexity
* Theta Notation => Average case complexity

## Big-O Notation

Big-O notations describes the complexity of an algorithm using algebraic terms
it has 2 important characteristics

- It is expressed in terms of the input
- It focuses on the bigger picture without getting caught up in the minute details

> Big-O Time Complexity

- O(1) -> Constant
- O(n) -> Linear
- O(n2) -> Quadratic

> Big-O Space Complexity

- O(1) -> Constant
- O(n) -> Linear
- O(n2) -> Quadratic

<> Multiple algorithm exist for the same problem and there is no one right solution.
<> Its important to understand the problem at hand be4 choosing methods the work best.
<> Always luk to the picture and write simple to read and maintian code.

### OBJECTS - Big-O

An object is a collection of key value pairs
const person = {
firstName : "frstname"
LastName : "lastname"
}

Insert - O(1)
Remove - O(1)
Access - O(1)
<> all the operation above has constant time complexity notation

Search - O(n)
object.key() - O(n)
object.value() - O(n)
object.entries() - O(n)
<> all the methods above has Linear time complexity notation

### ARRAYS - Big-O

An Array is a collection of items in order, it starts with index 0 and increment by 1.
const fruit = ["mango", "pawpaw", "orange"]

insert/remove at the end of the array - O(1)
insert/remove at the beginning of the array - O(n)

Access - O(1)
Search - O(n)

push/ pop - O(1)
shift/ unshift/ concat/ slice/ splice - O(n)
forEach/ map/ filter/ reduce - O(n)
