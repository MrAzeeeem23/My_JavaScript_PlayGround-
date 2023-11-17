// forth type of promise

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(() => {
        let err = true
        if (!err) {
            resolve({username: "Aashir" , Email: "somthing@Email.com" , active: true})
        }
        else{
            reject("ERROR: something went wrong here")
        }
        console.log('This is fourth Promise')
    }, 2000)
})

promiseFour
.then(function(myuser){
    console.log(myuser)
    console.log(myuser.Email)
})
.then((username) => {
    console.log(username.active)
})  // this is known as chaining
.catch(function(error){
    console.log(error)
})
.finally(() => console.log("your promise either resolved or rejected ")) // finally will always return some thing 