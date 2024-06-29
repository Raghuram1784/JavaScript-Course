// const user = {
//     userName : "Raghu",
//     loginCount : 0,
//     signedIn : true,

//     getUserDetails : function () {
//         // console.log("got user details form database");
//          console.log(`UserName: ${this.userName}`);
//         // console.log(this);
//     }
// }
// console.log(user.userName);
// console.log(user.getUserDetails());
// //console.log(this);

function user(userName, loginCount, signedIn){
    this.userName = userName,
    this.loginCount = loginCount,
    this.signedIn = signedIn

    return this   //---->Implicitly present no need to write the logic 
}
const userOne = new user("Raghu", 6, true)
const userTwo = new user("Ram", 5, false)
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);