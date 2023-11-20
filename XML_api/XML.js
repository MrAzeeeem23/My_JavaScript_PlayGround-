const request = 'https://dog.ceo/api/breeds/image/random'

const XHR = new XMLHttpRequest(); // important method == XMLHttpRequest method with new keyword beacuse it is object

// Getting requerst form the API with ('GET Method')
XHR.open('GET', request)

// onreadystate shows all the states of the requests
XHR.onreadystatechange = function(){
    console.log(XHR.readyState)

    if(XHR.readyState === 4){
        const data = JSON.parse(this.responseText) // converting the String data into JSON format with JSON.parse
        console.log(data)
        console.log(this.responseText)
    }
}

XHR.send()

// Most of the time when we get Data Form the API its type will pe String, so we have to convert it into JSON format. 