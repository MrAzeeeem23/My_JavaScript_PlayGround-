const my_obj = {
    name: "hello world",
    last_name: "azeem khna",
    age: 24,
    active_user: true
}

for(const user in my_obj){
    console.log(`${user} + ${my_obj[user]}`);
}

Object.keys(my_obj).forEach( element => {
    console.log(element)
})

// https://chat.openai.com/share/6868393d-12dc-457a-b097-09237bdcb85a