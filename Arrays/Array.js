// arrays

const myArr = [0,1,2,3,4,5,6]

// direct access of arrays without defining index

console.log(myArr);

// array with index number

console.log(myArr[2]);

// array methods 

myArr.push(10); // add new element at the end of the array
myArr.pop(); // removes the last element form the array *Does not required to pass an paremeter inside pop() method*

myArr.unshift(11) // add new element at the first of array it shifts whole array {BUT IT IS NOT RECOMMENDED}
myArr.shift() // siminlar to pop() method

// IMPORTANT

myArr.slice(2,4) 
// slice is an important method used in array, it takes two parameters (Start,end) does not end with end

myArr.splice(2,4)
// splice is make changes in memory of array and also takes last element.

// array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

