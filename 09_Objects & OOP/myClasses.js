// class User {
//     constructor(userName, email, password){
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const ram = new User("Ram", "Ram@gmail.com","12345")
// console.log(ram.encryptPassword());
// console.log(ram.changeUsername());



//Behind the scene


function user(userName, email, password){
    this.userName = userName
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`   
}

user.prototype.changeUsername = function(){
    return `${this.userName.toUpperCase()}`   
}

const raghu = new user("raghu","raghu@gmail.com","12345")
console.log(raghu.encryptPassword());
console.log(raghu.changeUsername());