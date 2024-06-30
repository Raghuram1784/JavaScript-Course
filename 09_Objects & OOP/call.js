function setUserName (userName){
    this.userName = userName
}

function createUser(userName, email, password){
    setUserName.call(this, userName)

   this.email = email
   this.password= password
}

const ram = new createUser("Ram", "Ram@gmail.com","12345")
console.log(ram);
