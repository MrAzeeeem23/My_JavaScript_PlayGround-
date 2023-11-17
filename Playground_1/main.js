
// const wb = document.getElementById("demo");

// let header = "This is header";
// let tags = ["azeem","ankit","aashir","puppu"];

// let y = `<h1>${header}</h1><ul>`

// for(const x of tags){
//     y += `<li>${x}</li>`
// }
// y += `</ul>`
// document.getElementById("demo")

// const x = ["azeem","ankit","aashir","rana"]

// console.log(x.slice(1,3))

var inpu = document.getElementById('in').innerText
const  fun = () => {

const fruits = new Map([
['apple',300],
['mango',600],
['banana',20],
['guava',100]
]);
fruits.set(inpu,inpu)
let text = "";
fruits.forEach(function(value, key){
    text += key + " = " + value + '<br>';
})
document.getElementById("demo").innerHTML = text;

// fruits.delete(prompt())
}
// console.log(fruits)