// Problem -Give a positive integer "n", determine if the 
// number is a power of 2 or not 
// An integer is a power of two if there exists an integer "x"
//  such that  "n" === 2*

//  METHOD 1

// const isPowerOfTwo =(n)=>{

//     for( let i = 0; i <n ; i++){
//         let power = Math.pow(2,i)
//         if(n===power){
//             console.log(`${n} is a power of power(2,${i})`)
//             return true
//         }
//     }
//     return false
// }

// Big-O is  Linear O(n)

// METHOD 2

// const isPowerOfTwo=(n) =>{
//     if(n <1) return false
    
//     while(n > 1){
        
//         if(n % 2 !==0) return false
//         n /=2
//     }
//     return true 

// }

// Big-O is Log since the input size is halved as it grows O(logn)

const isPowerOfTwo=(n) =>{
    if(n <1) return false
    return (n & (n-1)) ===0
}

//  Big-O is constant  O(1)
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(6))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(9))

