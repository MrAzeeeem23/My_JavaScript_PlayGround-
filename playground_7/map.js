const numbers = [1,2,3,4,5,6,7,8,10]

let result = numbers.map( (nums) => nums * 10 ).map( (num2) => num2 + 10 )

console.log(result);