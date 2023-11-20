function multipleby5(num){
    return num*5
}

multipleby5.power = 4

console.log(multipleby5(5))
console.log(multipleby5.power)
console.log(multipleby5.prototype)

function createUser(username, activeTime){
    this.username = username
    this.activeTime = activeTime
}

createUser.prototype.increment = function(){
    this.activeTime+1
}

createUser.prototype.type = function(){
    console.log(`The user ${this.username} active time is ${this.activeTime}`)
}

const userOne = new createUser("aashirHaris", 55)
const userTwo = new createUser("AzeemKhan", 78)
const userThree = new createUser("AnkitPasi", 59)

userOne.type();