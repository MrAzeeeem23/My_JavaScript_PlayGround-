// constructor function in javaScript

const user = function(username , logedIn , Email){
    this.username = username
    this.logedIn = logedIn
    this.Email = Email

    // we can also create methods here

    this.greatings = function hi (){
        console.log(`Wellcome ${this.username} plaese write your first program with Hello world`)
    }

    return this
}

const user1 = new user("AzeemKhan", true , "Azeem@Email.com")
const user2 = new user("ankitPasi", true , "Ankit@Email.com") // new keyword for new object creation.
const user3 = user("AashirHaris", false, "Aashir@Email.com")

// here if we directy execute user1 it will allways override thing 
// Ex. here i printed user1 but on the output it will override the object
// To avoid this bug we have to use NEW (new) key-word when ever of we create a new object

console.log(user1)

// it will print user2 
console.log(user2)

// console.log(user1.contructor)

// to check if the new object weather is the instence of any function constructor we use (Instence of )

console.log(user1 instanceof user) // will print true if it is otherwise false