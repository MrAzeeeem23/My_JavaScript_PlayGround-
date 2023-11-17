const my_promise = new Promise(function(resolve, reject){
    // we can use here async methods like Database, fetch, cryptography, networking etc
    

    //stimulating the async method with set-time out method
    setTimeout(() => {
        console.log("promise is done at this stage after 2 seconds")
        resolve()
    }, 2000);
})

// this .then method referce to the resolve parameter
// we are consuming the promise here 
my_promise.then(function(){
    console.log("promise is consumed");
})

// second type of promise 
// in this promise i have taking value from server into the resolve method in the form of object it could be array as well.
// and caling it in .then method with function as user parameter 
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('hello this is my second async method')
        resolve({name: "Pathan azeem" , Email:"xyz@a.Email.com" , loginCount: 3 })
    }, 1500);
}).then(function(user){
    console.log(user)
})



