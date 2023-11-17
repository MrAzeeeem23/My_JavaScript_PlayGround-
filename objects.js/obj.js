//Objects in js

// Objects are the sequence of key and value pairs, they are added in side {} curly brackets

const Person = {
    "name" : "Azeem", // we can add keys inside "" qoutes or without 
    'last_name' : "Khan",
    Phone_no : 124242,
    Location : "pune",
    Email : 'azeemKhan@spaceX.com',
}

// Access of objects values 

// console.log(Person.last_name);
//or
// console.log(Person["name"]);
// or
// console.log(Person['last_name']);

// thir is another data type called symbol

// Ex

const mysym = Symbol('key');

const Person2 = {
    [mysym]:"hello",
    name:"ankit",
    last:"Pasi"
}

// we can also freze the objects to dont done may changes to it

console.log(Person2[mysym]);
console.log(typeof Person2[mysym]);

// functions in objects


