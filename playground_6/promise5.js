// this is fifth type of Promise we use here acync and await methods 

const promiseFive = new Promise(function (resolve, reject){
    setTimeout(() => {
        let err = (Math.floor(Math.random() * 2))
        console.log(err)
        if(!err){
            resolve({user:"AzeemKhan",Password: "123qwe", active: true})
        }
        else{
            reject("this is an Err")
        }
    },2000)
})


// this is acync funtion that consumes promiseFive
// we have to use try and catch method here if we are handeling Errors as well 
async function consumePromiseFive(){
    try {
        // this is await function which consumes promiseFive stored inside the data variable
        const data = await promiseFive
        console.log(data)
    }
    // we have to pass as paremeter inside the catch method
    catch (Err){
        console.log(Err)
    }
}

// calling the consume method
consumePromiseFive()

// we can use both methods (.then.catch.finally) and async methods as well there is nothing wrong 
// promises are more like exception handeling is mostly use when dealing with DBs or Web Scraping methods like 