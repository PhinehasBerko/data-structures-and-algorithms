// Problem - Give a number "n", find the first "n" element of the Fibonacci sequence.
// In Mathematics, the Fibonacci sequence is a sequence in which each number is the sum
// of the two preceeding ones and the 1st two numbers in the sequence is 0 and 1.

const fibonacci =(n) =>{

   for (let i = 2; i < n ; i++){
    fibArray[i] = fibArray[i-1] + fibArray[i-2]
   }
   return fibArray
   
}
console.log(fibonacci(5))
console.log(fibonacci(10))
console.log(fibonacci(3))

// Big-O for the fibonacci is  O(n) time complexity

