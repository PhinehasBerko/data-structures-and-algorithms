// Array
// An array is an orded collection of stored element that can be
// accessed by numerical index.

// Creating my own custom Array

class MyArray {
    constructor () {
        this.length = 0;
        this.data = {}
    }
    push (item) {
        this.data[this.length] = item; 
        this.length ++;
        return this.length;
    };

    get (index) {
        return this.data[index]
    }

    pop () {
        delete this.data[this.length -1];
        this.length--
        return;
    }
    shift () {
        // the 1st in the list is deleted 
        // the length of the list is reduced
        // the list index is re-arranged
        delete this.data[0];
        this.length--
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i+1] 
        }
        delete this.data[this.length -1]
    }
    // [0,1,2,3,4]
    // [1,2,3,4,5]
    // delete the 
    deleteByIndex (index) {
        const item = this.data[index]
        
        for (let j = index; j < this.length; j++) {
            this.data[j] = this.data[j + 1];
        }
        
        delete this.data[index];
        this.length--
        return item;
    }
};

const myCustomArray = new MyArray();

myCustomArray.push("item 1");
myCustomArray.push("item 2");
myCustomArray.push("item 3");
myCustomArray.push("item 4");
myCustomArray.push("item 5");
myCustomArray.push("item 6");
myCustomArray.push("item 7");
myCustomArray.push("item 8");

const getItem = myCustomArray.get(0);

myCustomArray.pop()
myCustomArray.pop()
console.log(myCustomArray)
myCustomArray.shift()
console.log(myCustomArray)
myCustomArray.deleteByIndex(4)
console.log(myCustomArray)
// console.log(`Found: ${getItem}`)
// console.log(myCustomArray)


const reverseString = str => str.split("").reverse().join();

console.log(reverseString("Victor"))

const palindromes = str => {
    strArray
}