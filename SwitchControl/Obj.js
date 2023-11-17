const myObj = [
    { language: 'javaScript', filename: 'js' },
    { language: 'python', filename: 'py' },
    { language: 'java', filename: 'java' },
    { language: 'c++', filename: 'cpp' },
]

myObj.forEach( (value) => {
    console.log(value.filename,);
})