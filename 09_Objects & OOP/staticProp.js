class user{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`UserName is ${this.userName}`);
    }

    static createId(){
        return `123`
    }
}

// const ram = new user("Ram")
// console.log(ram.createId());


class Teacher extends user{
    constructor(userName, email){
        super(userName)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone", "i@phone.com")
console.log(iPhone.createId());
