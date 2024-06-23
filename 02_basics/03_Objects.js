const sym = Symbol("key")

const user = {
    name : "Ram",
    age : 19,
    location : "Hyd",
    email : "Ram@email.com",
    [sym] : "key123",     //symbol notation
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user[sym]);

user.email = "Raghu@gmail.com"
// Object.freeze(user)
user.email = "Raghu@google.com"

// console.log(user);


user.greeting = function(){
    console.log("Hello...hi!..");
}


user.greeting2 = function(){
    console.log(`Hello...hi!.., ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());