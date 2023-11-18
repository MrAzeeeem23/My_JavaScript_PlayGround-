const list = [1,2,3,4,5,6,7,8,9,10]

let result = list.filter(function(num){
    return num >= 3 && num <= 9
})

console.log(result)