// Problem - Give an integer "n", find the factorial of that number
// In mathematics, the factorial of a non-negative integer "n",
// denoted by n! is the product of all positive integers <= "n"
//  Factorial of zero is 1
//  Factorial(n) = (n-1)(n-2)...(n-n)
const Factorial =(n)=>{
    let fact = 1
    for(let i = 1; i <= n; i++ ){
        fact *= i
    }
    return fact
}

console.log(Factorial(0))
console.log(Factorial(1))
console.log(Factorial(2))
console.log(Factorial(3))
console.log(Factorial(4))