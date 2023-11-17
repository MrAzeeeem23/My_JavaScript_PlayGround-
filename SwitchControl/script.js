const month = 5;

switch (month) {
    case 1:
        console.log('jan')
        break;
    case 2:
        console.log('feb')
        break;
    case 3:
        console.log('march')
        break;
    case 4:
        console.log('april')
        break;
    case 5:
        console.log('may')
        break;

    default:
        console.log('default');
        break;
}

// falsy values in javascript
// false, "",bigint = 0n , 0 , null, undefined, NaN = not a number

// truthy values in javascript
// ture, 'false', 1 , "0"," ",[],{} ,function(){} empty functuons are assumed as ture values
// space or intendation in string is also consider as ture value

const char = ' '
if (char) {
    console.log('ture');
} else {
    console.log('false');
}

// nullish Coalescing operator (??): null undefined
// mostly used for handle database querys

let value1;
value1 = 4 ?? 10;  //prints first value
// value1 = null ?? 10; prints 10 
// value1 = undefined ?? 20; prints 20
console.log(value1)

