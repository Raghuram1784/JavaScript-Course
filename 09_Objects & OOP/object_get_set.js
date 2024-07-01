const user = {
    _email: 'Ram@gmail.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const details = Object.create(user)
console.log(details.email);