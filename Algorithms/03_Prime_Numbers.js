// Problem - Give a natural number "n", determine if the number
// is prime or not.

// A Prime Number is a natural number greater than 1 that is not
//  a product of two smaller natural numbers.

const PrimeNumbers = (n) => {
    if(n<2){
        return `${n} is not a prime number`
    }
    for(let i = 2; i <n; i++){
        if(n%i ===0 ){
            return  `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`
}

// The Big-O Notation is O(n)
console.log(PrimeNumbers(1)) // not a prime number
console.log(PrimeNumbers(2)) // is a prime number
console.log(PrimeNumbers(3)) // is a prime number
console.log(PrimeNumbers(5)) // is a prime number
console.log(PrimeNumbers(6)) // not a prime number
 