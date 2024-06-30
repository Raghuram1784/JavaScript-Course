class user{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`UserName is ${this.userName}`);
    }
}

class Teacher extends user{
    constructor(userName, email, password){
        super(userName)
        this.email = email
        this.password = password
    } 

    addCourse(){
        console.log(`A new course was added by ${this.userName}`);
    }
}

const sakshi = new Teacher("Sakshi", "sakshi@gmail.com", "12345")
sakshi.addCourse()

const ram = new user("Ram")
ram.logMe()

console.log(sakshi instanceof Teacher);
