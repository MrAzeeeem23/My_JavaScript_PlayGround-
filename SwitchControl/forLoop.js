// normal for loop

for (let i = 0; i <= 10; i++) {
    // console.log(`Loop number is ${i}`);    
}

//for loop with array

let myArray = ['apple','mango','banana','guava']

for (let index = 0; index < myArray.length; index++) {
    // const element = array[index];
    // console.log(`Print items in array ${myArray[index]}`)
    
}

// nested for loops
for (let x = 1; x <= 10; x++) {
    // console.log(`\n`)
    for (let y = 1; y <= 10; y++) {
        // console.log(`Table of ${x} x ${y} = ${x*y}`)
        
    }
    
}

// break and continue in loops

for (let num = 0; num < 10; num++) {
    if(num == 5){
        console.log('five is tarminated');
        break // it will stop executing the expression
    }
    console.log(num)
}

//countinue

for (let num2 = 0; num2 < 10; num2++) {
    if (num2 == 5) {
        console.log('five is detected');
        continue // it will not execute 5 number and executes the furthar loop as it is 
    }
    console.log(num2);
}