function globleUser(username, Active){
    // DB calls
    this.username = username
    this.Active = Active
    console.log('called')
}

function getUser(username, Active, Email ,Pass){
    globleUser.call(this, username, Active)
    this.Email = Email
    this.Pass = Pass

}

const userOne = new getUser('AzeemKhan', true , 'Azeem@ChatGPT.com', 12345)

console.log(userOne)