const user = {
    username: "AzeemPathan",
    password: "12323124@#@",
    Email: "Azeem@Email.com",
    SignIn: true,
    getUserData: function(){
        console.log(`Username: ${this.username} and he is SignIn ${this.SignIn}`)
        //dot this (.this) refers to the current context.
        // if we dont put (.this) it will throw an error called element is not definded in a function scope.

        console.log(this)
        // if we just print this in console it will print whole current context of the scope.

    }
}

console.log(user.getUserData())

//if we try to print this in globle context it will print an empty object.(node environment)

console.log(this)