class user{
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value.toUpperCase()
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const raghu = new user("ram@email.com","12345abc")
// console.log(raghu.password);
console.log(raghu.email);