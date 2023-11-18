const list = [1,2,3,4,5,6,7,8,9,10]

let x = 5
let result = list.reduce((initial, value) => initial + value , x)

console.log(result)